import Foundation
import CoreBluetooth
import Capacitor

// MARK: - Constants
public struct MeshConstants {
    public static let serviceUUID = CBUUID(string: "0000FD68-0000-1000-8000-00805F9B34FB")
    public static let writeCharUUID = CBUUID(string: "0000FD69-0000-1000-8000-00805F9B34FB")
    public static let notifyCharUUID = CBUUID(string: "0000FD6A-0000-1000-8000-00805F9B34FB")
    public static let headerSize = 12
    public static let defaultAttMtu = 23
    public static let desiredMtu = 512
}

// MARK: - CRC32 (IEEE 802.3 compatible with java.util.zip.CRC32)
public struct CRC32 {
    private static let table: [UInt32] = {
        (0...255).map { i -> UInt32 in
            var c = UInt32(i)
            for _ in 0..<8 {
                c = (c & 1 != 0) ? (0xEDB88320 ^ (c >> 1)) : (c >> 1)
            }
            return c
        }
    }()

    public static func checksum(data: Data) -> UInt32 {
        var crc: UInt32 = 0xFFFFFFFF
        for byte in data {
            let index = Int((crc ^ UInt32(byte)) & 0xFF)
            crc = (crc >> 8) ^ table[index]
        }
        return crc ^ 0xFFFFFFFF
    }
}

// MARK: - Mesh Packet
public struct MeshPacket {
    public let messageId: String
    public let senderId: String
    public let receiverId: String
    public let timestamp: Int64
    public let payload: String
    public let ttl: Int
    public let hopCount: Int

    public init(
        messageId: String = UUID().uuidString,
        senderId: String,
        receiverId: String,
        timestamp: Int64 = Int64(Date().timeIntervalSince1970 * 1000),
        payload: String,
        ttl: Int = 10,
        hopCount: Int = 0
    ) {
        self.messageId = messageId
        self.senderId = senderId
        self.receiverId = receiverId
        self.timestamp = timestamp
        self.payload = payload
        self.ttl = ttl
        self.hopCount = hopCount
    }

    public func toJsonString() -> String? {
        let dict: [String: Any] = [
            "messageId": messageId,
            "senderId": senderId,
            "receiverId": receiverId,
            "timestamp": timestamp,
            "payload": payload,
            "ttl": ttl,
            "hopCount": hopCount
        ]
        guard let data = try? JSONSerialization.data(withJSONObject: dict, options: []),
              let str = String(data: data, encoding: .utf8) else {
            return nil
        }
        return str
    }

    public static func fromJson(jsonStr: String) -> MeshPacket? {
        guard let data = jsonStr.data(using: .utf8),
              let dict = (try? JSONSerialization.jsonObject(with: data, options: [])) as? [String: Any] else {
            return nil
        }
        return MeshPacket(
            messageId: dict["messageId"] as? String ?? UUID().uuidString,
            senderId: dict["senderId"] as? String ?? "unknown",
            receiverId: dict["receiverId"] as? String ?? "unknown",
            timestamp: (dict["timestamp"] as? NSNumber)?.int64Value ?? Int64(Date().timeIntervalSince1970 * 1000),
            payload: dict["payload"] as? String ?? "",
            ttl: dict["ttl"] as? Int ?? 10,
            hopCount: dict["hopCount"] as? Int ?? 0
        )
    }
}

// MARK: - Fragmentation & Reassembly Engine
public class MeshFragmenter {
    private struct IncomingSession {
        let transferId: UInt32
        let totalFragments: UInt16
        let expectedCrc32: UInt32
        var fragments: [UInt16: Data] = [:]
        let createdAt: Date = Date()
    }

    private static var incomingSessions: [UInt32: IncomingSession] = [:]
    private static let lock = NSLock()

    public static func fragment(data: Data, negotiatedMtu: Int = 23) -> [Data] {
        let transferId = UInt32.random(in: 1...UInt32.max)
        let effectivePayloadSize = max(10, negotiatedMtu - 3 - MeshConstants.headerSize)
        let crcValue = CRC32.checksum(data: data)

        let totalFragments = UInt16((data.count + effectivePayloadSize - 1) / effectivePayloadSize)
        var result: [Data] = []

        for i in 0..<totalFragments {
            let offset = Int(i) * effectivePayloadSize
            let length = min(data.count - offset, effectivePayloadSize)
            let chunk = data.subdata(in: offset..<(offset + length))

            var packetData = Data()
            var tId = transferId.bigEndian
            var idx = i.bigEndian
            var tot = totalFragments.bigEndian
            var crc = crcValue.bigEndian

            packetData.append(Data(bytes: &tId, count: 4))
            packetData.append(Data(bytes: &idx, count: 2))
            packetData.append(Data(bytes: &tot, count: 2))
            packetData.append(Data(bytes: &crc, count: 4))
            packetData.append(chunk)

            result.append(packetData)
        }

        return result
    }

    public static func processFragment(rawFragment: Data) -> Data? {
        guard rawFragment.count > MeshConstants.headerSize else { return nil }

        let transferId = rawFragment.subdata(in: 0..<4).withUnsafeBytes { $0.load(as: UInt32.self).bigEndian }
        let index = rawFragment.subdata(in: 4..<6).withUnsafeBytes { $0.load(as: UInt16.self).bigEndian }
        let total = rawFragment.subdata(in: 6..<8).withUnsafeBytes { $0.load(as: UInt16.self).bigEndian }
        let expectedCrc = rawFragment.subdata(in: 8..<12).withUnsafeBytes { $0.load(as: UInt32.self).bigEndian }
        let chunk = rawFragment.subdata(in: 12..<rawFragment.count)

        lock.lock()
        defer { lock.unlock() }

        // Clean expired sessions > 60s
        let now = Date()
        incomingSessions = incomingSessions.filter { now.timeIntervalSince($0.value.createdAt) < 60.0 }

        var session = incomingSessions[transferId] ?? IncomingSession(
            transferId: transferId,
            totalFragments: total,
            expectedCrc32: expectedCrc
        )

        session.fragments[index] = chunk
        incomingSessions[transferId] = session

        if session.fragments.count == Int(session.totalFragments) {
            incomingSessions.removeValue(forKey: transferId)

            var fullData = Data()
            for i in 0..<session.totalFragments {
                guard let f = session.fragments[i] else { return nil }
                fullData.append(f)
            }

            let computedCrc = CRC32.checksum(data: fullData)
            guard computedCrc == session.expectedCrc32 else {
                return nil // Corrupt packet
            }

            return fullData
        }

        return nil
    }
}

// MARK: - Peripheral Manager (Advertising + GATT Server)
public class MeshPeripheralManager: NSObject, CBPeripheralManagerDelegate {
    private var peripheralManager: CBPeripheralManager?
    private var isAdvertising = false
    private var localDeviceId: String = ""
    public var onPacketReceived: ((MeshPacket, String) -> Void)?
    public var onStatusChanged: ((Bool) -> Void)?

    override init() {
        super.init()
    }

    public func start(deviceId: String) {
        self.localDeviceId = deviceId
        if peripheralManager == nil {
            peripheralManager = CBPeripheralManager(delegate: self, queue: nil)
        } else if peripheralManager?.state == .poweredOn {
            setupServiceAndAdvertise()
        }
    }

    public func stop() {
        peripheralManager?.stopAdvertising()
        peripheralManager?.removeAllServices()
        isAdvertising = false
        onStatusChanged?(false)
    }

    public func isRunning() -> Bool {
        return isAdvertising
    }

    public func peripheralManagerDidUpdateState(_ peripheral: CBPeripheralManager) {
        if peripheral.state == .poweredOn {
            setupServiceAndAdvertise()
        } else {
            isAdvertising = false
            onStatusChanged?(false)
        }
    }

    private func setupServiceAndAdvertise() {
        guard let pm = peripheralManager, pm.state == .poweredOn else { return }

        pm.removeAllServices()

        let service = CBMutableService(type: MeshConstants.serviceUUID, primary: true)
        let writeChar = CBMutableCharacteristic(
            type: MeshConstants.writeCharUUID,
            properties: [.write, .writeWithoutResponse],
            value: nil,
            permissions: [.writeable]
        )
        let notifyChar = CBMutableCharacteristic(
            type: MeshConstants.notifyCharUUID,
            properties: [.notify, .read],
            value: nil,
            permissions: [.readable]
        )

        service.characteristics = [writeChar, notifyChar]
        pm.add(service)

        let advData: [String: Any] = [
            CBAdvertisementDataServiceUUIDsKey: [MeshConstants.serviceUUID],
            CBAdvertisementDataLocalNameKey: "PingDart_\(localDeviceId.prefix(6))"
        ]
        pm.startAdvertising(advData)
        isAdvertising = true
        onStatusChanged?(true)
    }

    public func peripheralManager(_ peripheral: CBPeripheralManager, didReceiveWrite requests: [CBATTRequest]) {
        for request in requests {
            if request.characteristic.uuid == MeshConstants.writeCharUUID, let value = request.value {
                if let fullPayload = MeshFragmenter.processFragment(rawFragment: value),
                   let jsonStr = String(data: fullPayload, encoding: .utf8),
                   let packet = MeshPacket.fromJson(jsonStr: jsonStr) {
                    let senderAddress = request.central.identifier.uuidString
                    onPacketReceived?(packet, senderAddress)
                }
            }
            peripheral.respond(to: request, withResult: .success)
        }
    }
}

// MARK: - Central Manager (Scanning + GATT Client)
public class MeshCentralManager: NSObject, CBCentralManagerDelegate, CBPeripheralDelegate {
    private var centralManager: CBCentralManager?
    private var isScanning = false
    private var discoveredPeripherals: [String: CBPeripheral] = [:]
    private var peerThrottle: [String: Date] = [:]

    public var onPeerDiscovered: ((CBPeripheral, String, Int) -> Void)?
    public var onStatusChanged: ((Bool) -> Void)?

    // Transmission Queue
    private struct SendTask {
        let peripheral: CBPeripheral
        let packet: MeshPacket
        let callback: (Bool, String?) -> Void
    }

    private var activeTask: SendTask?
    private var activeFragments: [Data] = []
    private var currentFragmentIndex = 0
    private var writeChar: CBCharacteristic?
    private var taskQueue: [SendTask] = []
    private var isBusy = false

    override init() {
        super.init()
    }

    public func start() {
        if centralManager == nil {
            centralManager = CBCentralManager(delegate: self, queue: nil)
        } else if centralManager?.state == .poweredOn {
            startScanning()
        }
    }

    public func stop() {
        centralManager?.stopScan()
        isScanning = false
        discoveredPeripherals.removeAll()
        onStatusChanged?(false)
    }

    public func isRunning() -> Bool {
        return isScanning
    }

    public func getDiscoveredCount() -> Int {
        return discoveredPeripherals.count
    }

    public func getPeripheral(identifier: String) -> CBPeripheral? {
        return discoveredPeripherals[identifier]
    }

    public func centralManagerDidUpdateState(_ central: CBCentralManager) {
        if central.state == .poweredOn {
            startScanning()
        } else {
            isScanning = false
            onStatusChanged?(false)
        }
    }

    private func startScanning() {
        guard let cm = centralManager, cm.state == .poweredOn else { return }
        cm.scanForPeripherals(
            withServices: [MeshConstants.serviceUUID],
            options: [CBCentralManagerScanOptionAllowDuplicatesKey: true]
        )
        isScanning = true
        onStatusChanged?(true)
    }

    public func centralManager(
        _ central: CBCentralManager,
        didDiscover peripheral: CBPeripheral,
        advertisementData: [String: Any],
        rssi RSSI: NSNumber
    ) {
        let address = peripheral.identifier.uuidString
        let now = Date()
        if let last = peerThrottle[address], now.timeIntervalSince(last) < 2.0 {
            return
        }
        peerThrottle[address] = now
        discoveredPeripherals[address] = peripheral

        let localName = advertisementData[CBAdvertisementDataLocalNameKey] as? String ?? peripheral.name ?? address
        onPeerDiscovered?(peripheral, localName, RSSI.intValue)
    }

    // Transmission orchestration
    public func enqueueSend(
        peripheral: CBPeripheral,
        packet: MeshPacket,
        callback: @escaping (Bool, String?) -> Void
    ) {
        let task = SendTask(peripheral: peripheral, packet: packet, callback: callback)
        taskQueue.append(task)
        processQueue()
    }

    private func processQueue() {
        guard !isBusy, !taskQueue.isEmpty else { return }
        isBusy = true
        let task = taskQueue.removeFirst()
        activeTask = task
        currentFragmentIndex = 0

        task.peripheral.delegate = self
        centralManager?.connect(task.peripheral, options: nil)

        // Safety timeout
        DispatchQueue.main.asyncAfter(deadline: .now() + 25.0) { [weak self] in
            guard let self = self, self.activeTask?.packet.messageId == task.packet.messageId else { return }
            self.finishTask(success: false, error: "Transmission timed out after 25s")
        }
    }

    public func centralManager(_ central: CBCentralManager, didConnect peripheral: CBPeripheral) {
        peripheral.discoverServices([MeshConstants.serviceUUID])
    }

    public func centralManager(_ central: CBCentralManager, didFailToConnect peripheral: CBPeripheral, error: Error?) {
        finishTask(success: false, error: error?.localizedDescription ?? "Failed to connect to peripheral")
    }

    public func centralManager(_ central: CBCentralManager, didDisconnectPeripheral peripheral: CBPeripheral, error: Error?) {
        if activeTask != nil {
            finishTask(success: false, error: "Peripheral disconnected prematurely")
        }
    }

    public func peripheral(_ peripheral: CBPeripheral, didDiscoverServices error: Error?) {
        guard error == nil, let services = peripheral.services else {
            finishTask(success: false, error: "Failed to discover mesh services")
            return
        }

        for service in services where service.uuid == MeshConstants.serviceUUID {
            peripheral.discoverCharacteristics([MeshConstants.writeCharUUID], for: service)
            return
        }
        finishTask(success: false, error: "Mesh service not found on peer")
    }

    public func peripheral(_ peripheral: CBPeripheral, didDiscoverCharacteristicsFor service: CBService, error: Error?) {
        guard error == nil, let characteristics = service.characteristics else {
            finishTask(success: false, error: "Failed to discover characteristics")
            return
        }

        for char in characteristics where char.uuid == MeshConstants.writeCharUUID {
            writeChar = char
            guard let task = activeTask,
                  let jsonStr = task.packet.toJsonString(),
                  let data = jsonStr.data(using: .utf8) else {
                finishTask(success: false, error: "Invalid packet payload")
                return
            }

            let maxLen = peripheral.maximumWriteValueLength(for: .withResponse)
            activeFragments = MeshFragmenter.fragment(data: data, negotiatedMtu: maxLen)
            currentFragmentIndex = 0
            sendNextFragment(peripheral: peripheral)
            return
        }
        finishTask(success: false, error: "Write characteristic not found on peer")
    }

    private func sendNextFragment(peripheral: CBPeripheral) {
        guard let char = writeChar, currentFragmentIndex < activeFragments.count else {
            finishTask(success: true, error: nil)
            return
        }

        let chunk = activeFragments[currentFragmentIndex]
        peripheral.writeValue(chunk, for: char, type: .withResponse)
    }

    public func peripheral(_ peripheral: CBPeripheral, didWriteValueFor characteristic: CBCharacteristic, error: Error?) {
        if let err = error {
            finishTask(success: false, error: "Fragment write failed: \(err.localizedDescription)")
            return
        }

        currentFragmentIndex += 1
        if currentFragmentIndex < activeFragments.count {
            sendNextFragment(peripheral: peripheral)
        } else {
            finishTask(success: true, error: nil)
        }
    }

    private func finishTask(success: Bool, error: String?) {
        guard let task = activeTask else { return }
        centralManager?.cancelPeripheralConnection(task.peripheral)
        activeTask = nil
        writeChar = nil
        activeFragments = []
        isBusy = false

        task.callback(success, error)

        DispatchQueue.main.async { [weak self] in
            self?.processQueue()
        }
    }
}

// MARK: - Capacitor Plugin Definition
@objc(PingDartMeshPlugin)
public class PingDartMeshPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "PingDartMeshPlugin"
    public let jsName = "PingDartMesh"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "startMesh", returnType: CAPPluginMethodReturnPromise),
        CAPPluginMethod(name: "stopMesh", returnType: CAPPluginMethodReturnPromise),
        CAPPluginMethod(name: "getMeshStatus", returnType: CAPPluginMethodReturnPromise),
        CAPPluginMethod(name: "getDiscoveredPeers", returnType: CAPPluginMethodReturnPromise),
        CAPPluginMethod(name: "sendTestPacket", returnType: CAPPluginMethodReturnPromise),
        CAPPluginMethod(name: "sendPacket", returnType: CAPPluginMethodReturnPromise)
    ]

    private var peripheralManager = MeshPeripheralManager()
    private var centralManager = MeshCentralManager()
    private var localDeviceId: String = "pd_" + UUID().uuidString.prefix(6)
    private var discoveredPeers: [String: [String: Any]] = [:]

    public override func load() {
        super.load()

        peripheralManager.onPacketReceived = { [weak self] packet, senderAddress in
            self?.notifyPacketReceived(packet: packet, senderAddress: senderAddress)
        }

        peripheralManager.onStatusChanged = { [weak self] _ in
            self?.notifyStatusChange()
        }

        centralManager.onPeerDiscovered = { [weak self] peripheral, name, rssi in
            self?.handlePeerFound(peripheral: peripheral, name: name, rssi: rssi)
        }

        centralManager.onStatusChanged = { [weak self] _ in
            self?.notifyStatusChange()
        }
    }

    @objc func startMesh(_ call: CAPPluginCall) {
        if let customId = call.getString("deviceId"), !customId.isEmpty {
            localDeviceId = customId
        }

        peripheralManager.start(deviceId: localDeviceId)
        centralManager.start()

        call.resolve([
            "success": true,
            "deviceId": localDeviceId,
            "isAdvertising": peripheralManager.isRunning(),
            "isScanning": centralManager.isRunning()
        ])
        notifyStatusChange()
    }

    @objc func stopMesh(_ call: CAPPluginCall) {
        peripheralManager.stop()
        centralManager.stop()
        discoveredPeers.removeAll()

        call.resolve(["success": true])
        notifyStatusChange()
    }

    @objc func getMeshStatus(_ call: CAPPluginCall) {
        call.resolve([
            "deviceId": localDeviceId,
            "isAdvertising": peripheralManager.isRunning(),
            "isScanning": centralManager.isRunning(),
            "isServerRunning": peripheralManager.isRunning(),
            "connectedServerClients": 0,
            "discoveredPeersCount": centralManager.getDiscoveredCount()
        ])
    }

    @objc func getDiscoveredPeers(_ call: CAPPluginCall) {
        let peersList = Array(discoveredPeers.values)
        call.resolve(["peers": peersList])
    }

    @objc func sendTestPacket(_ call: CAPPluginCall) {
        guard let targetAddress = call.getString("targetAddress") else {
            call.reject("targetAddress is required")
            return
        }

        let payload = call.getString("payload") ?? "SYNTHETIC_TEST_PACKET_PINGDART_BLE"
        let receiverId = call.getString("receiverId") ?? "peer_ios"

        let packet = MeshPacket(
            senderId: localDeviceId,
            receiverId: receiverId,
            payload: payload
        )

        dispatchSend(targetAddress: targetAddress, packet: packet, call: call)
    }

    @objc func sendPacket(_ call: CAPPluginCall) {
        guard let targetAddress = call.getString("targetAddress") else {
            call.reject("targetAddress is required")
            return
        }

        guard let payload = call.getString("payload") else {
            call.reject("payload is required")
            return
        }

        let receiverId = call.getString("receiverId") ?? "unknown"
        let messageId = call.getString("messageId") ?? UUID().uuidString
        let ttl = call.getInt("ttl") ?? 10

        let packet = MeshPacket(
            messageId: messageId,
            senderId: localDeviceId,
            receiverId: receiverId,
            payload: payload,
            ttl: ttl
        )

        dispatchSend(targetAddress: targetAddress, packet: packet, call: call)
    }

    private func dispatchSend(targetAddress: String, packet: MeshPacket, call: CAPPluginCall) {
        guard let peripheral = centralManager.getPeripheral(identifier: targetAddress) else {
            call.reject("Target device not found in active discovery cache: \(targetAddress)")
            return
        }

        centralManager.enqueueSend(peripheral: peripheral, packet: packet) { [weak self] success, errorMsg in
            if success {
                call.resolve([
                    "success": true,
                    "messageId": packet.messageId,
                    "targetAddress": targetAddress
                ])
                self?.notifyListeners("packetSent", data: [
                    "messageId": packet.messageId,
                    "targetAddress": targetAddress,
                    "success": true
                ])
            } else {
                call.reject(errorMsg ?? "Failed to transmit packet over BLE")
                self?.notifyListeners("packetSent", data: [
                    "messageId": packet.messageId,
                    "targetAddress": targetAddress,
                    "success": false,
                    "error": errorMsg ?? "Unknown error"
                ])
            }
        }
    }

    private func handlePeerFound(peripheral: CBPeripheral, name: String, rssi: Int) {
        let address = peripheral.identifier.uuidString
        discoveredPeers[address] = [
            "address": address,
            "deviceId": name,
            "rssi": rssi,
            "lastSeen": Int64(Date().timeIntervalSince1970 * 1000)
        ]

        notifyListeners("peerDiscovered", data: [
            "address": address,
            "deviceId": name,
            "rssi": rssi
        ])
    }

    private func notifyPacketReceived(packet: MeshPacket, senderAddress: String) {
        notifyListeners("packetReceived", data: [
            "messageId": packet.messageId,
            "senderId": packet.senderId,
            "receiverId": packet.receiverId,
            "timestamp": packet.timestamp,
            "payload": packet.payload,
            "ttl": packet.ttl,
            "hopCount": packet.hopCount,
            "senderAddress": senderAddress
        ])
    }

    private func notifyStatusChange() {
        notifyListeners("meshStatusChanged", data: [
            "deviceId": localDeviceId,
            "isAdvertising": peripheralManager.isRunning(),
            "isScanning": centralManager.isRunning(),
            "isServerRunning": peripheralManager.isRunning()
        ])
    }
}
