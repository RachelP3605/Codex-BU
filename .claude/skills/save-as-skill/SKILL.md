---
name: save-as-skill
description: Turn a move you have done two or three times into a reusable skill, with an approval step. Use when you notice you are repeating the same multi-step process (a workflow, a prompt sequence, a check). Creates a new skill in .claude/skills/ so the next run is one command.
---

# Save as Skill

Productize a repeated move so you stop redoing it by hand. The "third time" trigger from the data dictionary.

## When to run
When the operator or you notice the same multi-step move has happened two or three times. Do not skill a one-off.

## Process
1. Name the move and confirm it has really repeated. Ask: how many times have you done this? Once is noise; do not graduate it.
2. Ask what "good" means for this move, so the skill encodes the operator's standard, not the generic average.
3. Draft the skill: a short SKILL.md with name, description, a numbered process, and rules. Keep it thin. Write for the dumb case.
4. Show the draft. The operator approves or edits.
5. Write it to .claude/skills/{skill-name}/SKILL.md.
6. Confirm the skill exists and how to invoke it.

## Rules
- Two or three times is the trigger. Once is noise.
- The skill encodes the operator's judgment, not the model's average. Ask before drafting.
- Keep skills thin and single-purpose. If it is doing three things, it is three skills.
