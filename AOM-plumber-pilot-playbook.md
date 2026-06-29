# AOM Plumber Pilot Playbook

Last updated: June 2026

Purpose: Run the first AOM local business web presence pilot for plumbers in the Long Beach area using postcards, demo sites, and Rachel-approved proposals.

## Pilot Goal

Validate the plumber offer before scaling to other verticals.

The pilot should prove:
- The lead qualification rules identify real opportunities.
- The postcard message gets responses.
- Rachel can review only the decisions that need her judgment.
- Claude, Open Claw, and the VA have clear handoffs.

## Offer

Primary offer:
- Setup fee: $799-$999
- Monthly retainer: $700-$1,500/month

Monthly retainer includes:
- Website hosting
- 2-4 Google Business Profile posts per month
- Review response drafts and posting
- Monthly site/content update

SEO/AEO/GEO upcharge options:
- Foundation: +$100-$300 one-time
- Standard: +$500 one-time
- Full Build-Out: +$800-$1,200 one-time

## Target Area

Pilot vertical: Plumbers

Pilot city:
- Long Beach, CA

Expansion cities after pilot:
- Seal Beach, CA
- Huntington Beach, CA
- Signal Hill, CA
- Sunset Beach, CA
- Cypress, CA

## Source Of Truth Rules

1. Nothing goes to a client without Rachel's approval first.
2. No cold email. Postcard outreach only.
3. Open Claw qualifies leads.
4. Rachel only reviews Priority B leads and approval gates.
5. Claude drafts language, but Rachel approves final proposals before send.

## Roles

### Open Claw

Open Claw handles repeatable lead operations:
- Search Google Maps.
- Pull prospect data.
- Check whether the business has a website.
- Run speed and mobile checks.
- Capture screenshots through Screenshotone.
- Send screenshots to Claude for visual scoring.
- Assign Priority A, Priority B, or Discard.
- Identify a top local competitor.
- Populate the lead tracker.
- Prepare postcard queue after Rachel approval.

Open Claw does not:
- Send first postcard batches without Rachel approval.
- Approve borderline leads.
- Send proposals.
- Change offer/pricing rules.

### Claude

Claude handles judgment and writing:
- Score screenshots using the approved visual scoring prompt.
- Write one-line postcard callouts.
- Write competitor-specific callouts.
- Draft proposals before Rachel's sales calls.
- Revise proposals after Rachel gives call notes.
- Draft ongoing GBP posts, review responses, and monthly site updates.

Claude does not:
- Send client-facing messages without Rachel approval.
- Change pricing without Rachel approval.
- Decide whether to scale a vertical.

### VA

The VA handles execution after a deal closes:
- Duplicate the plumber template.
- Swap logo, colors, images, and NAP.
- Push/update the client site.
- Connect custom domain.
- Schedule GBP posts.
- Post approved review responses.
- Push monthly site updates.

### Rachel

Rachel owns all business decisions:
- Reviews Priority B leads.
- Approves the first postcard design.
- Approves the first postcard batch.
- Takes sales calls.
- Approves proposals before sending.
- Decides whether to scale after the test batch.

## Lead Qualification Workflow

### Step 1: Search

Search Google Maps for:

`plumber near Long Beach, CA`

Pull these fields for each result:
- Business name
- Owner name, if available
- Address
- Phone number
- Website URL, if available
- Google Business Profile URL
- City

### Step 2: Website Check

If no website URL exists:
- Mark `website_status` as `No Website`.
- Assign `priority` as `Priority A`.
- Skip technical and visual checks.
- Move to competitor identification.

If a website exists:
- Mark `website_status` as `Website Found`.
- Continue to technical check.

### Step 3: Technical Check

Run speed and mobile checks.

If the website fails existing thresholds:
- Mark `technical_result` as `Fail`.
- Continue to screenshot and visual score.

If the website passes:
- Mark `technical_result` as `Pass`.
- Assign `priority` as `Discard`, unless Rachel asks to manually review.

### Step 4: Visual Check

Capture screenshot through Screenshotone.

Send screenshot to Claude with this prompt:

```text
Score this website 1, 2, or 3.
1 = Clearly bad: outdated design (pre-2015 aesthetic), no clear CTA, not mobile-optimized visually, cluttered or amateurish, poor trust signals.
2 = Borderline: functional but dated or weak - needs improvement.
3 = Decent or professional - modern, clean, clear CTA.
Return only: the score and one specific reason.
```

Score rules:
- Score 1: Priority A
- Score 2: Priority B
- Score 3: Discard

### Step 5: Rachel Review

Rachel reviews only Priority B leads.

Rachel decision options:
- Approve for postcard
- Discard
- Hold for later

## Competitor Identification

For each Priority A lead and each Rachel-approved Priority B lead:

1. Search Google Maps for `plumber Long Beach CA`.
2. Identify the #1 or #2 ranked local competitor.
3. Add competitor name to the tracker.
4. If no clear competitor exists, mark `competitor_status` as `Generic Message`.

## Postcard Rules

Rachel must approve the first plumber postcard design before any sends.

Test batch size:
- 50-75 cards

Front of card:
- Bad website: use screenshot with issue highlighted.
- No website: use search-result gap concept.

Back of card:
- Prospect business name
- One-line message
- Plumber demo URL
- AOM phone number
- Simple offer line

Approved copy patterns:

Bad website:

```text
[Competitor Name] is getting the calls you're not. We can fix that.
```

No website:

```text
Someone in Long Beach searched "plumber near me" last night. You weren't there. [Competitor] was.
```

No competitor:

```text
Your customers are searching online right now. They can't find you.
```

## Approval Gates

Do not proceed past these gates without Rachel approval:

- First plumber postcard design
- First plumber postcard batch
- Any Priority B lead
- Any proposal before client delivery
- Scaling from test batch to larger batch

## Response Handling

Priority order:

1. Prospect called directly.
2. Prospect visited demo URL.
3. Prospect received postcard but has not acted.

When a prospect responds:

1. Mark response status in the tracker.
2. Claude drafts proposal briefing.
3. Rachel reviews before or during sales call.
4. Rachel gives post-call edits.
5. Claude revises proposal.
6. Rachel approves final proposal before send.

## Proposal Requirements

Each proposal must include:
- Setup fee
- Two monthly retainer options
- SEO/AEO/GEO upcharge options
- Included services
- Demo URL
- Simple next step
- Any changes Rachel requested after the call

## Pilot Success Criteria

After the first 50-75 postcards, wait two weeks.

Scale if:
- 3 or more prospects respond.

Revise before another batch if:
- Fewer than 3 prospects respond.
- Too many leads are poor fit.
- Rachel rejects many Priority B leads.
- Prospects are confused by the offer.

## Done For Pilot Setup

The plumber pilot setup is ready when:
- The lead tracker has the required columns.
- Open Claw knows what fields to populate.
- Claude has the visual scoring and copy prompts.
- Rachel approval gates are clear.
- The first postcard design is ready for Rachel approval.
