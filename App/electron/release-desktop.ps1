# ==============================================================================
# PingDart Desktop - Automated Build & Self-Hosted Release Script
# Target: https://pingdart.com/downloads/
# cPanel: /home/chatpingdart/public_html/downloads/
# ==============================================================================

param (
    [string]$Version = "",
    [ValidateSet("patch", "minor", "major", "")]
    [string]$Bump = "",
    [string]$SshHost = "",
    [string]$SshUser = "chatpingdart",
    [string]$RemoteDownloadsDir = "/home/chatpingdart/public_html/downloads"
)

$ErrorActionPreference = "Stop"

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "      PingDart Desktop Self-Hosted Release Pipeline       " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. Resolve & validate version
$packageJsonPath = Join-Path $PSScriptRoot "package.json"
$packageJson = Get-Content -Raw $packageJsonPath | ConvertFrom-Json
$currentVersion = $packageJson.version

Write-Host "`nCurrent Version in package.json: $currentVersion" -ForegroundColor Yellow

$targetVersion = $currentVersion

if ($Bump -ne "") {
    Write-Host "Bumping version ($Bump)..." -ForegroundColor Cyan
    $versionOutput = & npm version $Bump --no-git-tag-version
    $targetVersion = ($versionOutput -replace "^v", "").Trim()
    Write-Host "New Version: $targetVersion" -ForegroundColor Green
} elseif ($Version -ne "") {
    $cleanVersion = ($Version -replace "^v", "").Trim()
    Write-Host "Setting explicit version: $cleanVersion..." -ForegroundColor Cyan
    & npm version $cleanVersion --no-git-tag-version
    $targetVersion = $cleanVersion
    Write-Host "New Version: $targetVersion" -ForegroundColor Green
}

# 2. Build the Electron application with --publish never
Write-Host "`nStep 1/3: Building Electron Production Binaries (NSIS)..." -ForegroundColor Cyan
Push-Location $PSScriptRoot
try {
    & npm run electron:dist
    if ($LASTEXITCODE -ne 0) {
        throw "electron-builder build failed with exit code $LASTEXITCODE"
    }
} finally {
    Pop-Location
}

# 3. Verify dist artifacts
$distDir = Join-Path $PSScriptRoot "dist"
$latestYmlPath = Join-Path $distDir "latest.yml"

if (-not (Test-Path $latestYmlPath)) {
    throw "Critical Error: 'dist/latest.yml' was not generated! Check electron-builder.config.json publish configuration."
}

Write-Host "`nStep 2/3: Validating Release Artifacts..." -ForegroundColor Green
$latestYmlContent = Get-Content -Raw $latestYmlPath
Write-Host "`n----- latest.yml content -----" -ForegroundColor DarkGray
Write-Host $latestYmlContent -ForegroundColor DarkGray
Write-Host "------------------------------`n" -ForegroundColor DarkGray

# Find generated exe and blockmap
$exeFiles = Get-ChildItem -Path $distDir -Filter "*.exe" | Where-Object { $_.Name -like "*Setup*" -or $_.Name -like "*$targetVersion*" }
$blockmapFiles = Get-ChildItem -Path $distDir -Filter "*.blockmap"

if ($exeFiles.Count -eq 0) {
    throw "Critical Error: No setup installer .exe was found in $distDir!"
}

$mainExe = $exeFiles[0]
Write-Host "  Installer EXE: $($mainExe.Name) ($([Math]::Round($mainExe.Length / 1MB, 2)) MB)" -ForegroundColor Green
Write-Host "  latest.yml:    Found" -ForegroundColor Green
if ($blockmapFiles.Count -gt 0) {
    Write-Host "  Blockmap:      $($blockmapFiles[0].Name)" -ForegroundColor Green
}

# 4. Deployment to cPanel /downloads/
Write-Host "`nStep 3/3: Deploying to Website Downloads Directory..." -ForegroundColor Cyan
Write-Host "Target URL: https://pingdart.com/downloads/" -ForegroundColor Yellow
Write-Host "Remote Server Path: $RemoteDownloadsDir" -ForegroundColor Yellow

$uploadFiles = @($latestYmlPath, $mainExe.FullName)
if ($blockmapFiles.Count -gt 0) {
    $uploadFiles += $blockmapFiles[0].FullName
}

if ($SshHost -ne "") {
    Write-Host "`nUploading release files via SCP to $SshUser@${SshHost}:${RemoteDownloadsDir}/ ..." -ForegroundColor Cyan
    foreach ($file in $uploadFiles) {
        $fileName = Split-Path $file -Leaf
        Write-Host "  Uploading $fileName..." -NoNewline
        & scp $file "${SshUser}@${SshHost}:${RemoteDownloadsDir}/"
        Write-Host " [OK]" -ForegroundColor Green
    }
    Write-Host "`nUpload successfully completed!" -ForegroundColor Green
} else {
    Write-Host "`nNote: SshHost was not specified. Run with -SshHost <server_ip_or_domain> to auto-upload." -ForegroundColor Yellow
    Write-Host "Manual Upload Instructions:" -ForegroundColor Cyan
    Write-Host "Upload the following 3 files to /home/chatpingdart/public_html/downloads/ :"
    foreach ($file in $uploadFiles) {
        Write-Host "  - $file" -ForegroundColor White
    }
    Write-Host "`nOr run this SCP command directly from PowerShell:" -ForegroundColor Cyan
    $fileListStr = ($uploadFiles | ForEach-Object { "`"$_`"" }) -join " "
    Write-Host "scp $fileListStr ${SshUser}@server.pingdart.com:${RemoteDownloadsDir}/" -ForegroundColor White
}

Write-Host "`nVerification Command after upload:" -ForegroundColor Cyan
Write-Host "curl -I https://pingdart.com/downloads/latest.yml" -ForegroundColor White

Write-Host "`n==========================================================" -ForegroundColor Green
Write-Host "Release $targetVersion packaging complete!" -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Green
