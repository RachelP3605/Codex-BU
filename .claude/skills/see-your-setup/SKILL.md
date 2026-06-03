---
name: see-your-setup
description: Audit your workspace so you can sharpen it. Reports your Script (CLAUDE.md) length and whether it has drifted into bloat, lists your installed skills and what each does, and shows your folder structure and what is filling up. Run it when the workspace feels slow or messy, or every couple of weeks as a check-up.
---

# See Your Workspace

You cannot sharpen what you cannot see. This shows the workspace's current shape so you can keep it lean.

## When to run
When the workspace feels slow, cluttered, or you have not looked in a while. A periodic check-up.

## Process
1. Read CLAUDE.md (the Script). Flag it only if it has drifted from a thin front desk into a back library: long rules, pasted examples, or content that belongs in a folder. A complete routing map plus short rules is fine even around 40 lines. You are hunting for back-library content, not raw line count. Name the specific lines to move out, if any.
2. List .claude/skills/. For each, one line: name plus what it does. Flag any the operator does not recognize or has never used (candidates to remove).
3. Check the Obsidian link layer. Confirm memory-map.md exists, concepts/ exists, and recent durable notes have a short `Related:` line when links would help. Flag orphaned promoted notes only when a missing link makes them hard to find later.
4. Walk the folders. Report what is filling up and what is empty. Treat `_`-prefixed files (like `_about-copy.md`) as scaffolding, not the operator's work, so a folder holding only those counts as empty. Flag anything misfiled (work sitting in a memory folder, a lesson stuck in copy/).
5. Give a short verdict: is the workspace lean and current, or does it need a prune. Name the top one or two things to fix.

## Rules
- Be specific. "CLAUDE.md is 48 lines and the X section is back-library detail that belongs in a folder" beats "looks a bit long."
- Recommend trims, do not make them. The operator decides what to cut.
- A missing link is a problem only when it hides a useful relationship. Do not turn this into link maintenance for its own sake.
