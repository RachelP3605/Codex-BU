---
name: plan-as-page
description: Render a plan as a clean, shareable HTML page before any building starts. Turns a multi-step plan into a styled page with the goal, the steps, and the decisions, so you or a client can read and approve it at a glance. Use for any build over a few steps, especially client-facing work.
---

# Plan as Page

A plan you can see and hand to someone beats a plan buried in chat. This is the decide step, made visible.

## When to run
Before building anything over a few steps. Especially when a client or teammate should approve the plan first.

## Process
1. Take the current plan, or write one with the operator first.
2. Render it as a single self-contained HTML file with: the goal in one line, the steps in order, the key decisions each with its reason, and what "done" looks like. Clean and readable, no clutter.
3. Save it to the relevant project or client folder as YYYY-MM-DD-slug-plan.html.
4. Hand the path to the operator. They read, approve, or redline.
5. Build only after the page is approved.

## Rules
- One shippable surface per plan. Do not plan the whole project; plan the next piece.
- Every decision carries its reason. A step without a why is not decided yet.
- The page is the contract. If the plan changes, update the page.
