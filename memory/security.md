# Security

- 2026-06-12: Workspace secret audit found no exposed API keys outside `.env` after cleanup. Firecrawl and Google PageSpeed keys were removed from checked files and must be rotated manually because they were previously exposed.
- For API-powered scripts and MCP config, use `.env` loading only. Never hardcode live keys in `.codex/config.toml`, shell scripts, Python scripts, or client files.

Related: [[Security]] [[Environment Variables]] [[API Keys]]
