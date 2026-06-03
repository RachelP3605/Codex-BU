---
name: convince-me
description: A verification gate. Before Claude acts on an important step, it restates what it is about to do and why in plain language, so you catch a misunderstanding before it executes. After a big step, it explains what changed. Use on anything where a confident wrong move would cost you.
---

# Convince Me

Catches the most common failure: Claude confidently doing the wrong thing. Cheap insurance on work that matters.

## When to run
Before any step where a wrong move is expensive (a client deliverable, a structural change, a send). Also after a big change, to verify it held.

## Process
1. Before acting: state, in plain language a ten-year-old could follow, what you are about to do and why. No jargon.
2. The operator confirms it matches their intent, or corrects it. Do not act until the restatement is right.
3. After a big step: explain what actually changed and why, briefly. If you cannot explain it cleanly, the change is suspect and should be reviewed or reverted.

## Rules
- The restatement is in the operator's terms, not yours. "I will rewrite the hook to lead with the cost" beats "refactoring the opening."
- If you are unsure what the operator wants, that surfaces here, before the work, not after it ships.
