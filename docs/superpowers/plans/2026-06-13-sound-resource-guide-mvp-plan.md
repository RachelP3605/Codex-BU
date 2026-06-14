# Sound Resource Guide MVP Planning Document

> **For agentic workers:** This plan is the canonical MVP plan. Use the separate subagent plan for parallel research prompts: `docs/superpowers/plans/2026-06-13-sound-resource-guide-subagent-plan.md`.

**Goal:** Validate Sound Resource Guide as a monetized, curated resource guide for music creators before investing in a full platform.

**Public Name:** Sound Resource Guide

**Tagline:** Find the tools, people, platforms, and resources to make, release, and monetize your music.

**Architecture:** Use Brilliant Directories as the MVP container, a spreadsheet as the staging database, and AI-assisted workflows for research, enrichment, tagging, outreach drafts, and CSV preparation. Human review stays between AI output and anything public, paid, submitted, ranked, or reputational.

**Tech Stack:** Brilliant Directories, Google Sheets or Airtable, Codex, Open Claw/Cowork subagents, Zapier/Make later, affiliate networks, GA4/Search Console, newsletter platform.

---

## Truth-Mode Positioning

Sound Resource Guide should not launch as a broad musician collaboration network. That market is crowded, app-like, and dependent on network effects.

The stronger MVP is:

**A trusted, maintained guide for music creators trying to find the right tools, people-finder platforms, services, events, and resources for production, release, monetization, sync, royalties, and music business workflows.**

The product is not the directory software. The product is curation, freshness, honest categorization, top-list judgment, and practical guidance.

## People/Services Scope Rule

Do not list individual freelancers, musicians, artists, producers, singers, drummers, or session players in the MVP.

For people/services categories, list the platforms and websites where users can find those people.

Examples:
- Correct: SoundBetter, AirGigs, Fiverr Pro, BeatStars, Kompoz, BandMix
- Incorrect: Jane Smith, session singer; Mike Jones, drummer; Alex Brown, producer

For tools/resources, list the actual brand/resource and include the direct website or affiliate link when available.

## MVP Scope

Build only enough to test whether music creators use the resource and whether the site can create affiliate clicks, search traffic, and future sponsor interest.

MVP target:
- 100-150 approved directory listings
- 10 Top 5/Top 10 guide pages
- 3 comparison pages
- 1 free-resource hub
- 1 events/trade-shows page
- Newsletter signup
- Affiliate disclosure page
- Badge/award methodology page
- Submit/update listing form
- Featured listing offer
- Sponsor inquiry page for later use
- Manual review workflow

Do not build:
- A social network
- Individual freelancer profiles
- User reviews
- Vendor dashboards
- Audio collaboration rooms
- File/version management
- Split-sheet execution tools
- Automated vendor reviews
- A custom app before traction

## Launch Categories

1. DAWs and production software
2. Plugins, VSTs, samples, and instrument sounds
3. Music distribution platforms
4. Royalty collection, publishing admin, and PRO resources
5. People/services marketplaces
6. Sync licensing, music libraries, and creative brief resources
7. Metadata, catalog, rights, and split-sheet tools
8. Artist growth, EPK, smart-link, merch, and direct-to-fan tools
9. Communities, newsletters, education, and courses
10. Trade shows, conferences, events, and associations

## First 10 Top List Pages

1. Top 5 Music Distribution Platforms for Independent Artists
2. Top 5 Royalty Collection Resources for Musicians
3. Top 5 DAWs for Music Creators
4. Top 5 Free Instrument Sound Resources
5. Top 5 Paid Instrument Sound Resources
6. Top 5 Websites to Find Producers, Beat Makers, Mix Engineers, and Mastering Engineers
7. Top 5 Websites to Find Session Singers and Vocalists
8. Top 5 Websites to Find Session Instrumentalists
9. Top 5 Sync Licensing Platforms
10. Top 5 Metadata and Catalog Management Tools

## Staging Sheet Columns

Use this as the source of truth before import into Brilliant Directories.

- `name`
- `website_url`
- `category`
- `subcategory`
- `what_it_is`
- `short_description`
- `long_description`
- `best_for`
- `pricing_url`
- `pricing_type`
- `affiliate_program_available`
- `affiliate_signup_url`
- `affiliate_program_highlights`
- `affiliate_status`
- `affiliate_network`
- `commission_notes`
- `sponsor_potential`
- `top_list_fit`
- `suggested_top_list`
- `award_candidate`
- `source_url`
- `last_reviewed`
- `source_verified`
- `confidence_score`
- `notes`
- `status`
- `human_approved`
- `bd_import_ready`

Allowed `status` values:
- `Candidate`
- `Needs Research`
- `Needs Verification`
- `Approved`
- `Rejected`
- `Published`
- `Needs Update`
- `Sponsor Prospect`
- `Affiliate Prospect`
- `Award Candidate`

## Monetization Plan

### Revenue Stream 1: Affiliate Revenue

Best early fit because it does not require traffic proof before setup.

Targets:
- Music production tools
- Plugins and sample libraries
- Music education platforms
- Distribution platforms
- Royalty/admin tools
- Sync courses
- Metadata/catalog tools
- Website/email tools for musicians

Rules:
- Never invent commission rates.
- Do not publish affiliate links without disclosure.
- Do not rank based only on commission.
- Track affiliate status separately from editorial quality.

### Revenue Stream 2: Featured Listings

Beta offer:
- $29-$49/month
- Highlighted listing
- Logo
- Stronger CTA
- Category placement where available

Raise pricing only after traffic/clicks exist.

### Revenue Stream 3: Sponsorships

Sponsorship should wait until there is an MVP to show and early usage data.

Starter sponsor:
- $99/month
- Sidebar or category banner
- Newsletter mention
- Basic click report

Featured sponsor:
- $249/month
- Banner placement
- Featured listing
- Newsletter mention
- CTA button

Rules:
- Sponsors can buy visibility, not rankings.
- Sponsors cannot buy awards or badges.
- Sponsor placements must be labeled.

### Revenue Stream 4: Badges And Awards

Use badges to encourage sharing and backlinks.

Possible badges:
- Sound Resource Guide Top Pick
- Best for Beginners
- Best Free Resource
- Best Value
- Best for Sync Creators
- Best for Session Hiring
- Editor's Pick

Rules:
- Badges must be editorially earned.
- Do not sell awards.
- Create a methodology page explaining the scoring process.
- Sponsors can buy visibility, not rankings or badges.

## Automation Map

### Safe To Automate

- Candidate discovery from public sources
- Finding pricing, affiliate, contact, and submission pages
- Broken link checks
- Drafting factual listing descriptions from source pages
- Tagging category and subcategory
- Flagging likely affiliate programs
- Creating CSVs for Brilliant Directories import
- Drafting outreach emails
- Drafting sponsor package copy
- Monitoring known pages for changes
- Creating weekly internal reports

### Semi-Automate With Human Review

- Publishing listings
- Applying to affiliate programs
- Writing review-style summaries
- Ranking tools as "best"
- Awarding badges
- Sending vendor outreach
- Accepting sponsor placements
- Updating pricing/commission notes
- Importing into Brilliant Directories

### Do Not Automate

- Fake reviews
- Anonymous negative claims
- Auto-submitting affiliate applications at scale
- Scraping private or gated data
- Publishing AI opinions as firsthand experience
- Auto-approving vendor-submitted edits
- Ranking sponsors as best because they paid
- Selling awards or badges

## Split: Codex vs Open Claw/Cowork

### Give Codex

Codex owns high-context, file-based, structured, verification-heavy tasks:
- Master planning docs
- Staging sheet schema
- CSV templates for Brilliant Directories import
- Editorial rules and disclosure language
- Badge/award methodology
- Ranking rubric
- Sponsor one-sheet copy after MVP shape is visible
- Outreach templates
- Data cleanup and dedupe
- Import/check scripts if needed
- Git commits and handoffs

### Give Open Claw/Cowork

Open Claw/Cowork owns bounded research batches:
- Candidate resource lists
- Affiliate program hunting
- Sponsor prospect signals
- Pricing/contact/submission URLs
- Rough factual descriptions
- Category tagging
- Competitor landscape
- Events/trade-show research

Use the prompts in `docs/superpowers/plans/2026-06-13-sound-resource-guide-subagent-plan.md`.

## Token-Spend Control Rules

1. Use Open Claw/Cowork for first-pass lists and rough enrichment.
2. Require source URLs for every factual claim.
3. Use Codex for synthesis, final docs, workflows, templates, and review.
4. Batch work by category.
5. Keep one canonical staging sheet.
6. Give agents a fixed output schema.
7. Do not ask for long prose until the data is approved.
8. Reuse prompts and templates.
9. Ask for confidence scores and `needs_review` flags.
10. Stop research after 150 strong listings unless the MVP proves demand.

## 30-Day Launch Plan

### Week 1: Validation Assets

- [x] Finalize public name: Sound Resource Guide.
- [ ] Choose final 8-10 launch categories.
- [ ] Create the staging sheet using the columns above.
- [ ] Create a one-page positioning statement.
- [ ] Create affiliate disclosure draft.
- [ ] Create badge/award methodology draft.
- [ ] Research 50 candidate listings.
- [ ] Ask 10-20 musicians whether this resource would save them time.

Success signal:
- 10 strong replies or 50 waitlist signups.

### Week 2: Seed Inventory

- [ ] Research 150 candidate listings.
- [ ] Review and approve 75-100.
- [ ] Identify 25 affiliate prospects.
- [ ] Identify 25 future sponsor prospects.
- [ ] Draft first 10 Top list outlines.
- [ ] Draft first 3 comparison page outlines.
- [ ] Create import-ready CSV.

Success signal:
- 100 listings with source URLs and human-approved descriptions.

### Week 3: Brilliant Directories MVP

- [ ] Configure categories.
- [ ] Configure listing tiers.
- [ ] Import approved listings.
- [ ] Add newsletter signup.
- [ ] Add submit/update listing form.
- [ ] Add affiliate disclosure.
- [ ] Add badge/award methodology page.
- [ ] Add sponsor inquiry page.
- [ ] Add featured listing offer.

Success signal:
- A usable directory that can be shared privately.

### Week 4: Soft Launch And Monetization Test

- [ ] Invite first musician/producer users.
- [ ] Apply to selected affiliate programs.
- [ ] Publish 10 Top 5/Top 10 pages.
- [ ] Publish 3 comparison pages.
- [ ] Publish 1 events/trade-shows page.
- [ ] Track clicks and signups.
- [ ] Collect feedback.
- [ ] Decide whether to continue, narrow, or pause.

Success signal:
- Meaningful affiliate clicks/signups, strong user feedback, and 2-3 warm future sponsor conversations.

## Traffic Plan

Primary traffic should come from search-driven pages, repeatable weekly discovery, and badge/link-back incentives.

Traffic assets:
- Top 5 / Top 10 pages
- Comparison pages
- Free resource pages
- Annual event/trade-show pages
- "Best for" pages
- Weekly newsletter

Newsletter concept:

**5 music tools worth knowing this week**

After each Top list is published:
1. Email included companies.
2. Tell them they were included.
3. Offer badge embed code if they earned a badge.
4. Ask them to share or link back.
5. Do not ask for payment in the award email.

## Quality Gates

Before publishing a listing:
- Source URL exists.
- Description is based on source material.
- Category is correct.
- Pricing is marked as free, paid, freemium, or unknown.
- Affiliate relationship is disclosed where applicable.
- Confidence score is at least 0.75 or manually approved.
- No invented claims, stats, quotes, or reviews.

Before publishing a Top list:
- Ranking rubric is visible or summarized.
- Affiliate links are disclosed.
- Sponsors are not ranked because they paid.
- Pricing and feature claims have source URLs.

Before launch:
- Affiliate disclosure is live.
- Badge/award methodology is live.
- Contact/update form is live.
- At least 75 listings are approved.
- Newsletter signup is tested.
- There is a simple analytics baseline.

## First Prompts To Use

### Open Claw/Cowork Research Prompt

```text
Research candidate resources for a directory called Sound Resource Guide: a curated resource hub for music creators looking for tools, people-finder platforms, services, events, and resources to make, release, and monetize music. Find public resources only. Return a table with these columns: name, website_url, category, subcategory, what_it_is, best_for, pricing_url, affiliate_program_available, affiliate_signup_url, affiliate_program_highlights, sponsor_potential, top_list_fit, suggested_top_list, source_url, confidence_score, notes. Do not list individual people. Do not invent affiliate programs or pricing. If unknown, write unknown. Provide 30 resources for one category only: [CATEGORY].
```

### Codex Synthesis Prompt

```text
We are building Sound Resource Guide, a curated music-resource directory MVP using Brilliant Directories. Read `docs/superpowers/plans/2026-06-13-sound-resource-guide-mvp-plan.md` and `docs/superpowers/plans/2026-06-13-sound-resource-guide-subagent-plan.md`, then review the latest staging sheet/export I provide. Check candidate listings for accuracy, missing fields, duplicate resources, risky claims, affiliate verification, and BD import readiness. Produce a clean approved CSV schema and a short list of items Rachel must manually verify before publishing.
```

## Next Best Action

While Open Claw/Cowork runs research, Codex should prepare the staging sheet template, ranking rubric, affiliate disclosure, and badge/award methodology.
