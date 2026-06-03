---
name: security-check
description: Run before installs, public sharing, client work, GitHub backup, bypass permissions, or risky file edits. Checks for secrets, dangerous commands, private data, public exposure, dependency/install risk, and rollback state. Produces a short approve/fix/stop recommendation before Claude acts.
---

# Security Check

Use this before risky moves.

This is not a full security audit. It is the quick gate that catches the mistakes that hurt: leaked secrets, public client files, destructive commands, unsafe installs, and no way back.

## When to run

Run this before:

- Installing a package or tool.
- Running a shell command copied from docs, a tweet, or an AI answer.
- Publishing or uploading a folder.
- Creating a GitHub backup.
- Turning on bypass permissions.
- Editing client files.
- Adding API keys or `.env` files.
- Sharing a zip, repo, page, screenshot, or prompt library.

## Process

1. Name the action being checked.
2. Identify the files, folders, URLs, or commands involved.
3. Check these gates:
   - **Docs source:** is the install or command from official docs?
   - **Secrets:** could this expose API keys, tokens, `.env`, credentials, cookies, private client data, or billing data?
   - **Public/private:** is anything about to become public that should stay private?
   - **Command risk:** could the command delete, overwrite, move, publish, chmod, install globally, or change system settings?
   - **Permissions:** is normal permission mode enough, or is bypass being considered?
   - **Rollback:** is there a Git commit, copy, or backup to return to?
   - **Scope:** is the action limited to the intended folder?
4. Return one of three results:
   - `APPROVE` if the action is safe enough to proceed.
   - `FIX FIRST` if one or two issues need correction.
   - `STOP` if the action could leak data, destroy work, or run outside the intended scope.
5. If the result is `FIX FIRST` or `STOP`, give the smallest safe next action.

## Output format

```markdown
## Security check: [action]

Result: APPROVE / FIX FIRST / STOP

Checked:
- Docs source:
- Secrets:
- Public/private:
- Command risk:
- Permissions:
- Rollback:
- Scope:

Reason:

Next action:
```

## Rules

- Do not run the risky command as part of the check.
- Do not print secrets. If a secret exists, say the path or variable name only.
- Prefer official docs for install commands.
- If public sharing is involved, assume the link can be forwarded.
- If bypass permissions are involved, require a clean backup or a disposable workspace.
- If the action touches client data, bias toward `FIX FIRST` until the share boundary is explicit.
