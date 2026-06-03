# Workspace Cheatsheet

Related: [[The Script]] [[Memory Loop]] [[Skills]]

---

## The Big Picture

You have one workspace folder. Claude Code reads it. Obsidian displays it. They are looking at the same files — no sync required.

**Claude Code** = where you talk to Claude and get work done.
**Obsidian** = where you browse, read, and see how notes connect.

---

## Where Things Live

| What | Where |
|---|---|
| Claude's instructions (who you are, your rules) | `CLAUDE.md` |
| Client context and rules | `clients/{name}.md` |
| Your voice rules | `brand/voice.md` |
| Swipes (ads you model from) | `swipes/` |
| What worked and why | `winners/` |
| What died and why | `losers/` |
| Repeatable plays | `workflows/` |
| Written work (hooks, copy, long-form) | `copy/` |
| Visual work (statics, video briefs) | `creatives/` |
| Drop zone for unsorted stuff | `inbox/` |
| Daily notes | `daily/YYYY-MM-DD.md` |
| Finished/retired work | `archive/` |
| Skill map (human-readable) | `skills/Skills.md` |

---

## Your Working Rules (the ones that bite)

- **Truth mode always.** Signal confidence level. If uncertain, show what it's based on and what's still unknown.
- **Wellness claims need citations.** Peer-reviewed, .gov, or academic only. Never consumer or manufacturer sites. If no support exists, say so.
- **Copywriting: real data only.** No invented stats, fake urgency, or manufactured social proof. If it's not in the client file or a cited source, ask.
- **Never assume.** If unclear, ask before acting.
- **Never lie.** Never commit to something and not follow through.
- **Never invent client results, numbers, or quotes.** If it's not in the client file, ask.

---

## The Session Loop

1. **Start** — Claude reads `CLAUDE.md` automatically. Open the relevant client file if doing client work.
2. **Work** — Save output to `copy/` or `creatives/`. Name files `YYYY-MM-DD-slug.md`.
3. **End** — Ask Claude: *"What from this session is worth promoting into memory, and where does it go?"* Approve, and it files the lessons.

---

## Slash Commands (Skills)

Type these in Claude Code to trigger a skill:

| Command | What it does |
|---|---|
| `/vault-setup` | First-session setup (already done) |
| `/see-your-setup` | Confirms your folder map and skills are working |
| `/reflect` | End-of-session: what's worth promoting and where |
| `/remember-this` | Save something specific to memory right now |
| `/adversarial-review` | Find what's weak before you ship it |
| `/convince-me` | Claude explains what it's about to do — you catch mistakes before they happen |
| `/handoff` | Summarize the session for a clean handoff |
| `/advanced-script-interview` | Deeper interview to improve your CLAUDE.md (run after Obsidian is working) |
| `/security-check` | Security review of a project |
| `/save-as-skill` | Turn a repeatable workflow into a skill |

Full list: open `skills/Skills.md` in Obsidian.

---

## Obsidian Tips

- Open `memory-map.md` to see how the workspace connects.
- Click any `[[link]]` to jump to that note.
- The backlinks panel shows every note that references the one you're reading.
- Obsidian hides folders starting with `.` — so `.claude/skills/` won't show. Use `skills/Skills.md` instead.

---

## File Naming Convention

Every file: `YYYY-MM-DD-slug.md`
Example: `2026-06-03-swell-score-collection-hooks.md`

One convention, everywhere, so you never have to decide.

---

## Your Current Client Files

- `clients/the-swell-score.md` — The Swell Score (Shopify, Klaviyo, Instant, GoAff)
- Add agency clients as you bring them into sessions: `clients/{name}.md`

---

## Git

Installed and ready (v2.54.0). Backup repo: https://github.com/RachelP3605/Claude-BU.git
