---
name: advanced-script-interview
description: Run after Obsidian is installed and the link map works. Interviews the operator more deeply, then proposes a careful CLAUDE.md and support-file update plan. Keeps CLAUDE.md thin, routes detail into the right folders, and waits for approval before editing.
---

# Advanced Script Interview

Use this after the first setup is done and Obsidian can open the workspace.

The job is to tune the Script without turning it into a junk drawer.

`CLAUDE.md` should hold only the durable operating rules Claude needs at the start of most sessions. Details, examples, client facts, swipes, proof, and workflows belong in support files.

## Start gate

Before the interview, confirm the operator has done these:

1. Opened the workspace in Obsidian.
2. Opened `memory-map.md`.
3. Clicked one `[[link]]`.
4. Opened `skills/Skills.md`.

If not, stop and tell them to do that first. This command depends on the operator seeing the folder layer, because the whole point is deciding what belongs in the Script and what belongs somewhere else.

## Read first

Read these files if they exist:

- `CLAUDE.md`
- `README.md`
- `memory-map.md`
- `skills/Skills.md`
- `the-data-dictionary.md`
- `brand/voice.md`
- `workflows/`
- `clients/`
- `winners/`
- `losers/`
- `swipes/`

If a file or folder is missing, continue and note it later in the plan.

## Interview

Ask one question at a time. Wait for the answer before asking the next.

Ask no more than 12 questions total.

Prefer concrete examples. If an answer is vague, ask for one real example before moving on.

Use these questions:

1. What do you use Claude Code for most often?
2. What does good work look like in your world?
3. What does generic AI usually get wrong for your work?
4. Which claims, numbers, client results, or quotes require proof?
5. What voice rules matter for public work?
6. When should Claude decide, and when should Claude ask first?
7. Where should different kinds of work be saved?
8. What should become durable memory, what should stay temporary, and what should be ignored?
9. Which concepts, clients, workflows, or principles should become recurring `[[links]]`?
10. Tell me one recent time an AI assistant annoyed you, broke trust, or created cleanup work.
11. Which tools, folders, websites, credentials, or client materials should Claude treat carefully?
12. What should Claude do at the end of a session so the workspace compounds?

## Plan before editing

After the interview, do not edit yet.

Show a proposed change plan with:

1. `CLAUDE.md` edits.
2. Support files to update.
3. What stays out of `CLAUDE.md`.
4. Open questions.

Then ask exactly:

Do you want me to apply these changes?

Only edit files after the operator approves.

## Editing rules

- Keep `CLAUDE.md` readable and short.
- Preserve the operator's original meaning.
- Do not invent client facts, results, quotes, proof, tools, or preferences.
- Add useful Obsidian `Related:` lines to durable notes when helpful.
- Do not replace real prompts, examples, or code with placeholders.
- If a detail is useful but too specific for `CLAUDE.md`, route it into the right support file and leave only a pointer in the Script.

## Closeout

End by showing:

- every file changed
- what changed in `CLAUDE.md`
- what got routed into support files
- what the operator should test in the next Claude Code session
