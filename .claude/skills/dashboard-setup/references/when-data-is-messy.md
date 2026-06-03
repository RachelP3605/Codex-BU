# When The Data Is Messy

Most first dashboards do not start with clean data. You will have a messy
export, a screenshot, a swipe file from another tool, or nothing yet. That is
fine. Here is what to do in each case so the dashboard is still honest and still
useful.

The rule that never bends: never show made-up numbers as if they were real.
Sample data is always labeled as sample data.

---

## You have nothing yet

1. Pick the lane (see `references/lanes.md`).
2. Follow that lane's sample data shape from `references/lanes.md` as a starting
   point, or make your own small sample file.
3. Build the page against the sample file.
4. Put a clear "Sample data" label on the page.
5. Write down the one swap: which file or export replaces the sample later.

This gets a real first screen on the table fast, which is where the useful
questions show up.

## You have a messy export (CSV, spreadsheet, copy-paste)

1. Decide what one row means before anything else. One customer? One day? One
   campaign? If rows mix two meanings, split them first.
2. Name the few columns each number needs. Ignore the rest for now.
3. Write how each number is worked out in plain words.
4. Make a small clean sample that matches the shape you want, build against it,
   then point the page at the real export once the shape holds.

If the export is dirty (blank cells, mixed units, duplicate rows), say so in the
data check under "what is left out." Do not hide it.

## You only have a screenshot or a picture

A screenshot proves what a screen looks like. It does not give you numbers you
can trust.

1. Use the screenshot as a reference for layout and labels, not as data.
2. Read off the few numbers by eye into a small sample file, and mark them as
   read-by-eye in the data check.
3. Replace them with a real export before anyone makes a decision on them.

When the dashboard needs to show an artifact (an ad creative, a report, a
product screen) and you do not have the real one, use a local prop image. The
skill ships a set in `assets/placeholders/`, and the worked examples in the pack
use the same ones. Generate fresh ones any time with
`scripts/generate-placeholder-assets.mjs`. These look like the real thing and
are tagged as sample.

## You have a swipe file from another dashboard

Borrow the shape, not the claims.

1. Keep the layout idea if it fits the lane.
2. Drop their numbers and labels. They are not yours and not trusted.
3. Rebuild with your own sample data and your own "what one row means."

## Connecting real data later

The sample data file is the shape the page reads. Swapping in real data is a
one-file change:

1. Export the real data into the same shape as the sample file.
2. Replace the sample file with the real one.
3. Remove the "Sample data" label only after the numbers are real and checked.
4. If there are passwords or keys, load the data on the server, never in browser
   code.

If the real numbers look wrong after the swap, the problem is almost always
"what one row means." Check that first.
