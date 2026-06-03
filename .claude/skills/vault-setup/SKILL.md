---
name: vault-setup
description: Personalize this workspace by interview. Asks a short set of questions about who you are, how you work, and your main client, then fills in the Script (CLAUDE.md), creates your first client file, starts today's note, and confirms the Obsidian link map. Run this once, first, when you set up a new vault.
---

# Vault Setup

Turn a blank template into the operator's workspace, so Claude shows up already knowing who they are. Run once at setup. This owns the full first session: it does steps 1 to 3 of the README, then hands off to the operator's first task.

## What this does
Interviews the operator, then writes their answers into CLAUDE.md (the Script), creates their first client file, starts today's daily note, and points them at memory-map.md for the Obsidian backlink layer.

## Process

### 1. Interview (one question at a time, never dump them all at once)
Ask these in order, conversationally. Keep it short. Accept brief answers. Do not move on until you have a usable answer.
1. What do you do? (role plus niche, one line. e.g. "paid social creative for DTC supplement brands")
2. What are the two or three rules you always want me to follow when I make work for you? (voice, claims, words you ban)
3. Who is your main client right now, and what do they sell?
4. What does good look like in a hook or an ad for you? Give one example you are proud of, or one you admire.
5. What is the one thing you never want me to do?

### 2. Write the Script (CLAUDE.md)
- Replace the "Who I am" line with their role and niche from Q1.
- Fold Q2 and Q5 into "Rules that bite."
- Keep it thin. Do not bloat the Script. Detail goes in the folders, not here.

### 3. Handle the Q4 example correctly
- If Q4 is a PROVEN win (a result they actually got), offer to promote it to winners/ with a one-line note on why it worked.
- If Q4 is just an example they admire (not their own proven result), put it in swipes/ as a reference. Never put an admired-but-unproven example in winners/. winners/ is only for things that won.

### 4. Create the first client file
- Copy clients/_client-template.md to clients/{client-slug}.md using the answer to Q3.
- Fill in who they are and what they sell. Leave "what is working" and "proof" for the operator to fill as they go.

### 5. Start today's note and hand off
- Create daily/YYYY-MM-DD.md with:
  - a title
  - `Related: [[Memory Loop]] [[The Script]]`
  - a one-line entry that the workspace was set up today
- Before the final response, verify `.claude/skills/` exists and list the skill folders you can see.
  - Expected course skills: `advanced-script-interview`, `adversarial-review`, `convince-me`, `create-workflow-diagram`, `dashboard-setup`, `handoff`, `plan-as-page`, `reflect`, `remember-this`, `save-as-skill`, `security-check`, `see-your-setup`, `upskill`, `vault-setup`.
  - If the folder is present, say the skills are already in the workspace. Do not say they were installed into the computer. They came with this folder.
  - If the folder is missing or the expected skills are not present, say exactly what is missing and tell the operator to re-download or re-unzip the workspace. Do not pretend setup succeeded.
- Confirm: show the operator the updated "Who I am" line, the new client file path, the daily note, memory-map.md, skills/Skills.md, and the skill count.
- If they use Obsidian, tell them to open memory-map.md and click one `[[link]]` so they can see the backlink layer working.
- End with a simple overview that connects the dots. Use this shape:
  - "You now have one workspace."
  - `CLAUDE.md` is the Script. Claude reads it first, so it knows who you are and how to work.
  - `clients/`, `brand/`, `swipes/`, `winners/`, `losers/`, and `workflows/` feed the work. They hold examples, proof, and lessons.
  - `copy/` and `creatives/` hold the work you make.
  - `daily/` is the running log. It keeps today from disappearing.
  - `memory-map.md` and `[[links]]` make the workspace visible in Obsidian. Obsidian is another window onto the same files Claude is using.
  - `.claude/skills/` holds the slash-command skills. They are already inside this workspace folder.
  - `skills/Skills.md` is the visible Obsidian map of those skills, because Obsidian hides dot folders.
  - The loop is: save the work, promote the lesson, start the next session smarter.
- Hand off with three next moves:
  1. Open Obsidian, open `memory-map.md`, and click one `[[link]]`.
  2. Open `skills/Skills.md`, then run `/see-your-setup` if they want to confirm the skills and folder map.
  3. Start one real task in `copy/` or `creatives/`, then run `/reflect` at the end to decide what is worth promoting.
- Mention the advanced CLAUDE.md interview only after Obsidian is working: "Once Obsidian is installed and you can see the link map, you can run `/advanced-script-interview`. Do not run it before then."
- The README is the single source for the first-session steps, so there are not two versions to follow.

## Rules
- One question at a time. This is an interview, not a form.
- Write only what they told you. Never invent niche, rules, or client facts.
- Keep the Script thin. If an answer runs long, route the detail into a folder and leave a pointer.
- Keep links useful. Add a short `Related:` line to durable notes, but do not link every noun.
- The final response should teach the system in plain language. Avoid a bare file-change receipt that leaves the operator wondering whether anything meaningful happened.
