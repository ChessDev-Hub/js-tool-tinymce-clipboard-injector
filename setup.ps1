$targetPath = "$HOME\Documents\FirefoxExtensions\tinymce_clipboard_injector"
if (-Not (Test-Path $targetPath)) {
    New-Item -Path $targetPath -ItemType Directory -Force | Out-Null
}

@"
// manifest.json
$(Get-Content -Raw -Path ".\manifest.json")
"@ | Set-Content "$targetPath\manifest.json"

@"
// background.js
$(Get-Content -Raw -Path ".\background.js")
"@ | Set-Content "$targetPath\background.js"

Write-Host "✅ Extension files copied to: $targetPath"
Write-Host "➡️ Load manifest.json in Firefox via about:debugging to activate."