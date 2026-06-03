---
name: dashboard-setup
description: Build useful dashboards from a plain-English question, trusted data, clearly defined numbers, a dashboard plan, a working page, and a builder prompt. Use when creating, checking, redesigning, or packaging dashboards, reporting views, client reports, scoreboards, data pages, or dashboard-ready Claude Code/Codex prompts.
metadata:
  short-description: Build useful dashboards
---

# Dashboard Setup

Use this skill when someone wants a dashboard, reporting view, data report,
scoreboard, client report, or a prompt another builder can use to make one.

It is built for a member building their first dashboard that someone will
actually trust. They may have clean data, a messy export, a screenshot, or
nothing yet. This skill gets them to a real first screen either way.

New to this? Walk a member through `references/first-build-walkthrough.md`. It is
a ten-minute, paste-along build that ends with a real page and a "make it yours"
step.

## Core Rule

Do not start with layout. Start with the decision the dashboard must improve.

The trap and the fix:

- The trap: a dashboard is a wall of charts, cards, and a table.
- The fix: a dashboard is one screen built around one decision. Start with the
  decision, force the data check, then build the first screen around the one
  thing the reader has to do next.

Every dashboard run produces:

1. the decision the dashboard is for,
2. the data it is allowed to trust, and the data it does not trust yet,
3. the important numbers and what each one means,
4. a dashboard plan,
5. a working page or build plan,
6. a final check.

## Workflow

### 1. Questions

If the user has not already said what the dashboard is for, read
`references/dashboard-questions.md` and ask only the few questions that change
the build. In a live build, ask no more than three before the first plan:

- Who uses it, and what decision should it improve?
- What data do you trust, and what do you not trust yet?
- What should the reader do after reading it?

### 2. Pick the lane

Read `references/lanes.md` and pick the lane that matches the job. Each lane has
a different shape because each answers a different kind of question:

- client review dashboard (approve the work?)
- ad decision dashboard (scale, pause, or inspect?)
- revenue movement dashboard (what to fix first?)
- ops readiness dashboard (what is blocked?)
- product behavior dashboard (which step to fix?)
- research evidence dashboard (what do we recommend, and why?)

The lane decides the layout, the kind of images, and the sample data shape. A
queue does not look like a memo does not look like a command board.

### 3. Data check

Before making charts or tables, create or update a short data check using
`templates/data-checklist.md`. Name:

- where the data comes from,
- how old it is allowed to be,
- how each number is worked out,
- what one row or data point means,
- what is left out,
- who is allowed to trust it.

If data is missing, messy, or only a screenshot, read
`references/when-data-is-messy.md`. Make labeled sample data, build against it,
and write the one swap needed for real data. Never show sample numbers as if
they were real.

### 4. Dashboard plan

Create the plan from `templates/dashboard-plan.md`. The plan is the important
middle step. It keeps the model from guessing at the data, the design, and the
code all at once.

### 5. Build or hand off

If working inside an app or project folder, build the smallest dashboard screen
that satisfies the plan and uses the project's existing patterns.

If building a standalone HTML page (the common case for a first dashboard), the
page must be one self-contained file that renders when opened directly by
double-click. Inline the sample data into the page as a plain data block near the
top. Do not load the data with `fetch()` and do not rely on a separate script
file that the page does not itself include. A browser opened from a file path
blocks `fetch()`, and a missing include leaves the page blank, so either one
ships a dead dashboard. The page must show its sample data on open, never an empty
"no data" state. That inlined data block is the one spot a member edits to go live.

For the visual language, follow `references/design-system.md`: full bleed with no
floating card, an asymmetric verdict-plus-ledger hero, status as a dot plus text
rather than a tinted pill, near monochrome with semantic dots, the bundled Space
Grotesk display font inlined from `assets/sg-fonts.css`, and both a light and a
dark theme with a toggle. The six pages in `examples/dashboard-versions/` are the
canonical look to match.

If packaging for another builder (Claude Code, Codex, a design tool), write a
builder prompt from `templates/builder-prompt.md`. Bundle the plan, the data
check, the sample data, the chosen lane, and the "do not fake it" rules.

For React, shadcn, or Tailwind work, treat `references/cult-ui-guide.md` as an
optional shelf of example components. Build from what the installed skill carries:
the lane specs in `references/lanes.md` and the local prop images in
`assets/placeholders/`. The worked pages in `examples/dashboard-versions/` live in
the full pack, not in the installed skill, so treat them as an optional reference
for the human to browse, never as files to read at build time.

### 6. Verify

Before calling the dashboard done, read `references/dashboard-check.md` and run
each item as pass or fail, not as a feeling. Check the data, the first screen,
chart and table behavior, what shows when there is no data, that images are
local, and the builder notes.

Verify by opening the actual page the way a member will: double-click it, or load
its file path in a browser, and confirm the sample data renders. Do not call it
done from a logic check alone. A page can pass every calculation and still open
blank. If the page opens to an empty state, it fails the check until the data is
inlined.

## What this skill will not fake

- A number without a stated source.
- An artifact drawn as a gradient box when a real image would teach better. Use
  the local prop images, or generate new ones with
  `scripts/generate-placeholder-assets.mjs`.
- A "done" verdict before the check list passes.
- Live data when only sample data exists. Sample data is always labeled.
- A page that opens blank. A standalone dashboard must render its sample data when
  opened directly as a file. Inline the data; never depend on `fetch()` or an
  un-included file to show the first screen.

## Dashboard Taste Defaults

- Follow `references/design-system.md` for the look: full bleed (no floating card
  on a gray page), an asymmetric verdict-plus-ledger hero (not a row of equal stat
  tiles), status as a dot plus text (not a tinted pill on every row), near
  monochrome with semantic dots, Space Grotesk for the display type, light and dark.
- Compact, easy to scan, decision-first.
- A dashboard is a work screen, not a landing page.
- Show current state, change, confidence, and next action where it helps.
- Use tables to investigate and charts to compare, show a trend, or show shape.
- Where a real user expects to see an artifact (an ad creative, a report, a
  screen), show an image of it, not a colored box.
- White means white. Use pure white or cool gray panels. No tan, cream, or
  warm-white backgrounds.
- Avoid nice-looking numbers that do not change what anyone does.
- Avoid generic card grids when the question wants a process, queue, or review
  screen.

## Ways To Use This Skill

Use the mode that matches the request:

- `plan`: data check and dashboard plan only.
- `page`: static HTML/React page with sample data.
- `live`: page plus notes for connecting real data.
- `code`: code changes in the current app.
- `builder-prompt`: prompt and package for Claude Code, Codex, Cursor, or
  another builder.

When unclear, default to `plan` first, then ask for approval before building.

## Gotchas
