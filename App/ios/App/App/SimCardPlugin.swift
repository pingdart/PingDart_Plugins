import Foundation
import Capacitor
import CoreTelephony

@objc(SimCardPlugin)
public class SimCardPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "SimCardPlugin"
    public let jsName = "SimCard"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "getSimInfo", returnType: CAPPluginMethodReturnPromise),
        CAPPluginMethod(name: "getPhoneNumberHint", returnType: CAPPluginMethodReturnPromise),
        CAPPluginMethod(name: "requestSimPermission", returnType: CAPPluginMethodReturnPromise)
    ]

    @objc func getSimInfo(_ call: CAPPluginCall) {
        let networkInfo = CTTelephonyNetworkInfo()
        var simCards: [[String: Any]] = []
        var detectedCountryIso = ""

        if #available(iOS 12.0, *) {
            if let providers = networkInfo.serviceSubscriberCellularProviders {
                var slot = 1
                for (_, carrier) in providers {
                    var card: [String: Any] = [:]
                    card["slot"] = slot
                    card["carrier"] = carrier.carrierName ?? "SIM \(slot)"
                    let iso = carrier.isoCountryCode ?? ""
                    card["countryIso"] = iso.lowercased()
                    card["number"] = ""
                    simCards.append(card)

                    if detectedCountryIso.isEmpty && !iso.isEmpty {
                        detectedCountryIso = iso.uppercased()
                    }
                    slot += 1
                }
            }
        }

        if simCards.isEmpty {
            if let carrier = networkInfo.subscriberCellularProvider {
                var card: [String: Any] = [:]
                card["slot"] = 1
                card["carrier"] = carrier.carrierName ?? "Cellular"
                let iso = carrier.isoCountryCode ?? ""
                card["countryIso"] = iso.lowercased()
                card["number"] = ""
                simCards.append(card)

                if !iso.isEmpty {
                    detectedCountryIso = iso.uppercased()
                }
            }
        }

        if detectedCountryIso.isEmpty {
            if #available(iOS 16, *) {
                if let region = Locale.current.region?.identifier {
                    detectedCountryIso = region.uppercased()
                }
            }
            if detectedCountryIso.isEmpty, let regionCode = Locale.current.regionCode {
                detectedCountryIso = regionCode.uppercased()
            }
        }

        var res: [String: Any] = [:]
        res["hasPermission"] = true
        res["simCards"] = simCards
        res["phoneNumber"] = ""
        res["countryIso"] = detectedCountryIso
        call.resolve(res)
    }

    @objc func getPhoneNumberHint(_ call: CAPPluginCall) {
        // iOS provides native phone number auto-completion via QuickType keyboard above the keyboard
        call.reject("Use QuickType auto-fill on iOS")
    }

    @objc func requestSimPermission(_ call: CAPPluginCall) {
        call.resolve(["granted": true])
    }
}
