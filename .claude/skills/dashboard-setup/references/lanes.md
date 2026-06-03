# Dashboard Lanes

Six common dashboard jobs. Each one answers a different kind of question, so
each one has a different shape, a different kind of image, and a different
sample data shape. Pick the lane first. The lane decides most of the layout.

Each lane below is a full spec: its shape, the kind of image it uses, and its
sample data shape. Build from these specs and the local prop images in
`assets/placeholders/`. The full pack also ships working pages for all six in
`examples/dashboard-versions/` (open `index.html`), but those stay in the pack
and are not part of the installed skill, so use them only as a reference to look
at, not as files to copy at build time.

---

## 1. Client review dashboard

- **The one decision:** should the client approve the work or this plan?
- **Who uses it:** the client lead and the person delivering the work.
- **Shape:** a clean, light packet. A clear approval call up top, the few
  numbers that prove progress, a readiness view, and a delivery queue.
- **Images:** thumbnails of the work that was delivered, such as a landing page,
  an email, and a report cover. A client report must show the work, not just
  bars.
- **Sample data:** deliverables, their state, open comments, owners.
- **What the member learns:** a client dashboard earns trust by showing the
  actual work next to a clear yes or no.

## 2. Ad decision dashboard

- **The one decision:** which ads should be scaled, paused, or inspected today?
- **Who uses it:** a media buyer and a creative strategist.
- **Shape:** a dark command wall. Creatives on the left, spend on the right, a
  decision table below.
- **Images:** real-looking ad creatives, such as a before and after, a founder
  talking-head, a product demo, and a text-only hook test. The creative decision
  needs the creative visible next to the number.
- **Sample data:** creative name, spend, cost per result, the recommended action.
- **What the member learns:** a creative call you cannot see is a guess. Put the
  thumbnail next to the verdict.

## 3. Revenue movement dashboard

- **The one decision:** where did revenue change, and what should be fixed first?
- **Who uses it:** a founder and a finance owner.
- **Shape:** a steel ledger. A movement panel, a few metric cards, a small
  chart-card, and an exceptions list.
- **Images:** restrained. A chart-card or a table snapshot is enough. Do not
  force a photo into a money screen. Knowing when not to add an image is part of
  the lesson.
- **Sample data:** accounts, the change, the reason, the next move.
- **What the member learns:** money screens earn restraint. The artifact is the
  figure, not a picture.

## 4. Ops readiness dashboard

- **The one decision:** what is blocked, late, or ready before the next send-off?
- **Who uses it:** the project owner and team leads.
- **Shape:** a dense cockpit. State lanes (ready, review, blocked, late) and a
  blocker table.
- **Images:** light. The blocked lane shows the actual blocked ticket. Other
  lanes can stay as simple stacked cards. The point is flow position, not totals.
- **Sample data:** items, owner, due date, what unblocks each one.
- **What the member learns:** an ops screen is about where work is stuck, not how
  much work exists.

## 5. Product behavior dashboard

- **The one decision:** which step in the product needs the next experiment?
- **Who uses it:** a product lead and a growth owner.
- **Shape:** a bright lab. A path that shows where users move and drop, plus a
  next-test card.
- **Images:** product screens of the step where users drop, such as an
  onboarding step and an empty invite screen. The drop-off is abstract until you
  see the screen causing it.
- **Sample data:** steps, the rate at each step, the drop, the test to run.
- **What the member learns:** a number tells you where users leave. A screenshot
  tells you why.

## 6. Research evidence dashboard

- **The one decision:** which direction do we recommend, and is the proof strong?
- **Who uses it:** a founder and a strategy lead.
- **Shape:** an editorial desk. A short recommendation memo and a rack of the
  evidence behind it.
- **Images:** evidence clips, such as a call transcript snippet, a survey result
  chart, and a competitor screenshot. A recommendation is only as strong as the
  proof you can see.
- **Sample data:** each claim, its source, how strong it is, what it means.
- **What the member learns:** a recommendation without visible proof is an
  opinion.

---

## How to use a lane

1. Pick the lane that matches the decision.
2. Copy the shape from that lane's example page.
3. Use the lane's kind of image where a real artifact belongs.
4. Start from the lane's sample data file and swap in real data later.

If a request does not fit a lane, build the closest one and note what is
different. Do not force a job into the wrong shape.
