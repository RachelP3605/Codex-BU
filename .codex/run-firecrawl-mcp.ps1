$envFile = Join-Path (Split-Path -Parent $PSScriptRoot) ".env"

if (Test-Path $envFile) {
    Get-Content $envFile | ForEach-Object {
        if ($_ -match '^\s*([^#][^=]+?)\s*=\s*(.*)\s*$') {
            $name = $matches[1].Trim()
            $value = $matches[2].Trim().Trim('"').Trim("'")
            [Environment]::SetEnvironmentVariable($name, $value, "Process")
        }
    }
}

if (-not $env:FIRECRAWL_API_KEY) {
    throw "Set FIRECRAWL_API_KEY in .env before starting firecrawl MCP."
}

npx firecrawl-mcp
