# Build Your First Dashboard

A short walkthrough. By the end you will have a real dashboard page you can open
in a browser, built from one plain-English decision and your own sample data,
using the dashboard-setup skill.

You do not need clean data to start. You do not need to write code. You type one
plain request, the skill does the work, and you end with something you can show.

---

## Before you start

- Install the skill (see INSTALL.md), then open Claude Code in any folder.
- Pick a real decision you make on a schedule. The example below is a weekly
  client check-in. Swap in your own if you have one.
- If all you have is a messy export, a screenshot, or nothing yet, read
  `when-data-is-messy.md` first. You can still do this in one pass.

---

## Step 1. Build it from one decision

This is the whole build. One prompt in, a working dashboard out.

Paste:

```
Use the dashboard-setup skill. I want a weekly dashboard that helps me decide
whether to approve a client's work for the week. I trust my project tracker and
the review links. I do not trust unconfirmed chat updates yet. One row is one
promised deliverable.
```

What to expect: the skill restates your decision in one sentence, picks a lane
(here, the client review dashboard), then builds the whole thing in one pass. It
writes a short data check, labeled sample data baked into the page, a working page
with local thumbnails, and a final check. The decision is the dashboard, so this
one prompt does the real work. If it asks a question or two, answer them.

When it finishes, open the page it made (an `index.html` in the new folder) by
double-clicking it. It opens with no server. It should answer your decision on the
first screen with the sample data already showing, show the few numbers that
matter, and end with a clear next action. If it opens blank, that is a bug worth
flagging, not your fault.

## Step 2. Read what it refused to fake

Before you trust it, look at what the skill would not invent. On the page and in
the files it wrote:

- Every number names where it comes from.
- The sample data is clearly labeled "sample," so nobody mistakes it for real.
- The data you said not to trust (unconfirmed chat) is shown, flagged, and never
  counted toward the decision.
- Where a real deliverable would go, you see a thumbnail or a clear "nothing to
  review yet" box, not a fake preview.

This is the point of the skill: a first screen you can actually trust.

## Step 3. Check it before you trust it

Paste:

```
Run the dashboard check on this page.
```

What to expect: a pass or fail list, not a vibe. Every number has a source, the
sample data is labeled, the no-data case makes sense, and the first screen
answers the decision. Fix anything that fails before you move on.

---

## Step 4. Make it yours

This is the part that turns a sample into your dashboard.

- **Swap in your real data.** The sample data sits in a labeled block near the top
  of the page. Replace those rows with your real numbers in the same shape. That
  one edit makes it live. If the numbers look wrong after the swap, check "what one
  row means" first.
- **Swap in your real images.** Where the page shows a prop image (a deliverable
  thumbnail, an ad creative, a product screen), replace it with a screenshot of
  the real thing. Keep the same spot and size.
- **Drop the sample label.** Remove the "Sample data" label and the SAMPLE tags
  only after the numbers and images are real and you have run the check again.
- **Reuse the shape.** Need a different kind of dashboard next week? Start over at
  Step 1 with a different decision and pick a different lane from `lanes.md`. The
  ad dashboard, revenue dashboard, ops dashboard, product dashboard, and evidence dashboard each have
  their own shape.

---

## What good looks like

If you kept the full pack, open the worked examples at
`examples/dashboard-versions/index.html`. Your client check-in should resemble
the Client Progress Dashboard, and the other five show what the same workflow produces
for different jobs. These pages live in the pack, not in the installed skill, so
treat them as a target to look at, not a template to copy line for line. The
skill carries its own prop images and lane specs, so it builds a good page
without them.
