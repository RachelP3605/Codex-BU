# Dashboard Builder Prompt

You are building a dashboard from an approved plan.

## Goal

Build the smallest working dashboard that satisfies the plan and can be checked
against the data checklist.

## Inputs

- Dashboard plan:
- Data checklist:
- Sample data:
- Target app or project folder:
- UI examples:
- Known limits or rules:

## Rules

- Read the target project before choosing how to build.
- Use existing app patterns before adding new ones.
- For a standalone HTML page, make it one self-contained file that renders when
  opened by double-click. Inline the sample data as a block near the top. Do not
  use `fetch()` or an un-included script for the data: a page opened from a file
  path blocks `fetch()` and a missing include opens blank. Confirm it renders by
  opening it, not by a logic check alone.
- When there are passwords or tokens, load data on the server, not in browser code.
- Label sample data clearly.
- Do not create a generic software dashboard if the plan calls for a process,
  review dashboard, queue, or decision screen.
- Check that charts have stable height, tables do not break when text is long,
  no-data screens make sense, and the dashboard works on mobile.

## Deliverables

1. Code changes or page files.
2. Verification notes.
3. Known limitations.
4. Next recommended action.
