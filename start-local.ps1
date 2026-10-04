$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot
$nodeCommand = Get-Command node -ErrorAction SilentlyContinue
if ($nodeCommand) {
  $nodePath = $nodeCommand.Source
} else {
  $nodePath = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
}
if (-not (Test-Path $nodePath)) { throw 'Install Node.js LTS, reopen PowerShell, and run npm ci.' }
if (-not (Test-Path 'node_modules/vite/bin/vite.js')) { throw 'Dependencies are missing. Run npm ci after installing Node.js LTS.' }
& $nodePath 'node_modules/vite/bin/vite.js' --strictPort
