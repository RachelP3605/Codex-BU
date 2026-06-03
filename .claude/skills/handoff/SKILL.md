---
name: handoff
description: Restart tomorrow without re-explaining everything. Use before switching sessions, before compaction, when the thread is getting too long, or when you need another Claude/Codex session to continue the same work. Writes the current state, decisions, changed files, exact next step, and resume prompt into today's daily note or a handoff file.
---

# Handoff

Use this before a session gets too long, before switching to another session, before compaction, or when stopping for the day.

The job is simple: make the next session start cold and still know what to do.

## When to run

Run this when the operator says:

- "handoff"
- "wrap this for tomorrow"
- "we need to switch sessions"
- "this thread is getting long"
- "before it compacts"
- "make a resume prompt"

Also suggest it when the session has a lot of decisions, changed files, or unfinished work.

## Process

1. Identify the current project or task.
2. List what has been decided.
3. List what changed, with exact file paths when files changed.
4. List what is still open.
5. Write the exact next action.
6. Write a resume prompt the operator can paste into a fresh session.
7. Save it in one of these places:
   - `daily/YYYY-MM-DD.md` if it is a general session handoff.
   - `{project-or-task}-handoff.md` inside the project folder if the work is project-specific.
8. Confirm the save path.

## Handoff shape

Use this structure:

```markdown
# Handoff: [project or task]

Date: YYYY-MM-DD
Related: [[Memory Loop]]

## Current state

## Decisions made

## Files changed

## Open loops

## Exact next step

## Resume prompt

Paste this into a fresh Claude Code session:

```text
[one clear prompt that names the project, files to read, current state, and next action]
```
```

## Rules

- Keep the handoff short enough to read in under two minutes.
- The next step must be concrete. "Continue the site" is not enough. "Open `site/skills.html`, add the security-check row, rebuild the downloads, then verify the live page" is enough.
- Do not turn the handoff into a transcript.
- Do not invent decisions. If something is unclear, mark it as an open loop.
- If files changed, include exact paths.
- If the next session needs to read specific files first, name them in the resume prompt.
