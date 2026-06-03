# Cult UI Guide

This is an optional shelf, not a requirement. The primary thing to build from is
the lane specs in `references/lanes.md` and the local prop images in
`assets/placeholders/`. Reach for Cult UI only when you
are building in a React, shadcn, or Tailwind app and want a ready-made component.
A member who is not in a React app can ignore this whole file and still build a
good dashboard.

Cult UI source:

- Repository: `https://github.com/nolly-studio/cult-ui.git`
- Pinned commit: `a3308bad8496b036adf2fbd29d50b877fb3c5987`
- License: MIT

Use Cult UI as a shelf of dashboard examples. Do not load or copy the entire
GitHub project into a member project by default.

## Copying Rules

Allowed:

- MIT-licensed files present in the public GitHub project at the pinned commit.
- Selected component code, examples, and screenshots copied by
  `scripts/sync-cult-ui.mjs`.
- Modified/adapted code when the MIT license is preserved.

Not allowed by default:

- Paid/pro/offsite code referenced by links.
- Any component copied without license attribution.
- The full Cult UI project inside the files Claude reads by default.

## Dashboard-Relevant Components

| Component | Use for | Notes |
|---|---|---|
| `animated-number` | Important numbers and changes | Pair with date range and comparison. |
| `side-panel` | Filters and detail views | Good when someone needs details without leaving the dashboard. |
| `floating-panel` | Temporary controls | Use sparingly. |
| `popover` / `popover-form` | Small edits and filter forms | Good for quick, focused changes. |
| `sortable-list` | Reordering dashboard sections | Useful when building an editable dashboard. |
| `toolbar-expandable` | View controls and step-by-step actions | Useful in live dashboard builders. |
| `prompt-library` | Reusable dashboard prompts | Good for course exercises. |
| `ai-instructions` | On/off build instructions | Good for showing which rules the agent is following. |
| `code-block` | Export and builder-prompt snippets | Include copy support when possible. |
| `mock-browser-window` | Preview shells and demos | Good for teaching examples. |
| `choice-poll` | First dashboard choices | Use when members pick a dashboard path. |
| `feature-voting` / `vote-tally` | Prioritizing what matters | Useful when a team has to pick what to build or fix first. |
| `timer` | Live workshop / sprint timing | Keep it functional, not decorative. |

## Dashboard Examples To Study

| File | Use for |
|---|---|
| `app/(app)/themes/cards/data-table.tsx` | Table behavior with search, sorting, pages, and show/hide columns. |
| Compact line-chart card example | Important-number card with compact line chart. |
| `app/(app)/themes/cards/stats.tsx` | Multi-chart stat card patterns. |
| `app/(app)/themes/cards/activity-goal.tsx` | Progress/goal comparison pattern. |
| `public/migrate/blocks/ai-artifact-table-*.png` | Reference image for table pages. |
| `public/migrate/blocks/ai-artifact-chart-*.png` | Reference image for chart pages. |
| `public/migrate/blocks/example-agent-data-analysis-*.png` | Reference image for data-analysis agent flow. |

## How To Use In A Build

1. Start from the dashboard plan and data checklist.
2. Choose only the components that match the dashboard's job.
3. Copy the selected files from the Cult UI examples folder into the target app,
   adjusting import paths to match that app.
4. Prefer the target app's existing shadcn components for basics like
   `Button`, `Card`, `Table`, `Input`, and `DropdownMenu`.
5. Keep visual effects less important than readability and usefulness.

## Course Packaging

Run:

```bash
node .claude/skills/dashboard-setup/scripts/sync-cult-ui.mjs
```

The script creates the copied Cult UI examples folder with source files,
screenshots, license, and a generated file list.
