# Sound Resource Guide Subagent Research Plan

Date: 2026-06-13

## Project

**Name:** Sound Resource Guide

**Tagline:** Find the tools, people, platforms, and resources to make, release, and monetize your music.

## Purpose

This file explains how to split Sound Resource Guide research across multiple subagents while controlling token spend and keeping quality high.

The goal is not to have agents write final website copy. The goal is to have agents collect structured, source-backed candidate data that Codex can later clean, dedupe, rank, and turn into directory listings, Top 5/Top 10 pages, comparison pages, and affiliate/sponsor opportunities.

## Core Rule

Use subagents for broad research. Use Codex for synthesis, quality control, final structure, import prep, and public-facing copy.

Do not give any subagent direct publishing access, credential access, Git access, Brilliant Directories access, affiliate account access, or final ranking authority.

## What The MVP Needs

The MVP should launch with:

- 100-150 approved directory listings
- 10 Top 5/Top 10 pages
- 3 comparison pages
- 1 free-resource hub
- 1 events/trade-shows page
- Newsletter signup
- Affiliate disclosure
- Badge/award methodology page
- Sponsor/featured-listing inquiry page, but sponsors are pitched after there is an MVP to show

## Important Scope Clarification

Do **not** list individual freelancers, musicians, artists, producers, singers, or session players in the directory.

For people/services categories, list the **platforms and websites where users can find those people**.

Examples:

- Correct: SoundBetter, AirGigs, Fiverr Pro, BeatStars, Kompoz, BandMix
- Incorrect: Jane Smith, session singer; Mike Jones, drummer; Alex Brown, producer

For tools/resources, list the actual brand/resource.

Examples:

- DistroKid
- TuneCore
- CD Baby
- Songtrust
- Splice
- Loopcloud
- Logic Pro
- Ableton Live

## Canonical Output Schema

Every subagent must return a table with exactly these columns:

- `name`
- `website_url`
- `category`
- `subcategory`
- `what_it_is`
- `best_for`
- `pricing_url`
- `affiliate_program_available`
- `affiliate_signup_url`
- `affiliate_program_highlights`
- `sponsor_potential`
- `top_list_fit`
- `suggested_top_list`
- `source_url`
- `confidence_score`
- `notes`

Allowed values:

- `affiliate_program_available`: `yes`, `no`, `unknown`
- `sponsor_potential`: `high`, `medium`, `low`
- `top_list_fit`: `yes`, `no`
- `confidence_score`: number from `0.00` to `1.00`

Rules:

- Use public sources only.
- Do not invent affiliate programs.
- Do not invent commission rates.
- Do not invent pricing.
- If details are not public, write `unknown`.
- Include the exact affiliate signup URL if found.
- If affiliate program is through Impact, PartnerStack, CJ, ShareASale, Awin, Rewardful, FirstPromoter, or another network, name the network if visible.
- Keep descriptions factual, not promotional.
- Use source URLs for every factual claim.
- Do not include individual people.
- Prioritize resources that could support affiliate revenue, SEO traffic, or future sponsorship.

## Subagent Assignments

Run these as separate agents if Open Claw, Claude, or another environment supports parallel subagents.

If subagents cannot run simultaneously, run them one at a time in this order.

### Agent 1: Distribution, Royalties, And Professional Affiliation

**Goal:** Find tools and organizations that help artists release music, collect royalties, manage publishing, and join professional affiliation systems.

**Categories to research:**

- Music distribution platforms
- Royalty collection tools
- Publishing admin services
- PROs and professional affiliation resources
- Mechanical royalty resources
- Neighboring rights resources
- Catalog/admin tools related to royalties

**Target output:** 40-60 candidates.

**Top-list ideas this agent should support:**

- Top 5 Music Distribution Platforms
- Top 5 Royalty Collection Resources
- Top 5 Publishing Admin Services
- Top Professional Organizations for Songwriters and Artists
- ASCAP vs BMI vs SESAC vs GMR
- DistroKid vs TuneCore vs CD Baby
- Songtrust vs Sentric vs CD Baby Pro

**Prompt:**

```text
You are Agent 1 researching Sound Resource Guide.

Sound Resource Guide helps music creators find the tools, people, platforms, and resources to make, release, and monetize their music.

Research these categories only:
- Music distribution platforms
- Royalty collection tools
- Publishing admin services
- PROs and professional affiliation resources
- Mechanical royalty resources
- Neighboring rights resources
- Catalog/admin tools related to royalties

Return 40-60 candidates in a table with exactly these columns:
name, website_url, category, subcategory, what_it_is, best_for, pricing_url, affiliate_program_available, affiliate_signup_url, affiliate_program_highlights, sponsor_potential, top_list_fit, suggested_top_list, source_url, confidence_score, notes.

Rules:
- Use public sources only.
- Do not invent affiliate programs, commission rates, or pricing.
- If details are not public, write unknown.
- Include the exact affiliate signup URL if found.
- If a program is through Impact, PartnerStack, CJ, ShareASale, Awin, Rewardful, FirstPromoter, or another network, name the network if visible.
- Do not include individual people.
- Keep descriptions factual, not promotional.
- Include source URLs for every factual claim.
- Prioritize resources that could support affiliate revenue, SEO traffic, or future sponsorship.
```

### Agent 2: Production Tools, DAWs, Plugins, Sounds, And Samples

**Goal:** Find tools and resources creators use to make music.

**Categories to research:**

- DAWs and music production software
- Free instrument sound resources
- Paid instrument sound resources
- Sample libraries
- Drum kits
- Plugin marketplaces
- VST resources
- Piano, guitar, keyboard, orchestral, vocal, and drum resources

**Target output:** 60-80 candidates.

**Top-list ideas this agent should support:**

- Top 5 DAWs for Music Creators
- Top 5 DAWs for Beginners
- Top 5 Free Instrument Sound Resources
- Top 5 Paid Instrument Sound Resources
- Top 5 Free VST Instruments
- Top 5 Paid VST Plugins
- Top 5 Drum Kit Resources
- Top 5 Piano Plugins
- Top 5 Guitar Plugin/Sound Resources
- Splice vs Loopcloud

**Prompt:**

```text
You are Agent 2 researching Sound Resource Guide.

Sound Resource Guide helps music creators find the tools, people, platforms, and resources to make, release, and monetize their music.

Research these categories only:
- DAWs and music production software
- Free instrument sound resources
- Paid instrument sound resources
- Sample libraries
- Drum kits
- Plugin marketplaces
- VST resources
- Piano, guitar, keyboard, orchestral, vocal, and drum resources

Return 60-80 candidates in a table with exactly these columns:
name, website_url, category, subcategory, what_it_is, best_for, pricing_url, affiliate_program_available, affiliate_signup_url, affiliate_program_highlights, sponsor_potential, top_list_fit, suggested_top_list, source_url, confidence_score, notes.

Rules:
- Use public sources only.
- Do not invent affiliate programs, commission rates, or pricing.
- If details are not public, write unknown.
- Include the exact affiliate signup URL if found.
- If a program is through Impact, PartnerStack, CJ, ShareASale, Awin, Rewardful, FirstPromoter, or another network, name the network if visible.
- Do not include individual people.
- Keep descriptions factual, not promotional.
- Include source URLs for every factual claim.
- Prioritize resources that could support affiliate revenue, SEO traffic, or future sponsorship.
```

### Agent 3: People And Services Marketplaces

**Goal:** Find platforms where creators can hire or find music professionals.

**Do not list individual people.**

**Categories to research:**

- Websites to find producers
- Websites to find beat makers
- Websites to find mix engineers
- Websites to find mastering engineers
- Websites to find session singers
- Websites to find vocalists
- Websites to find drummers
- Websites to find guitarists
- Websites to find bassists
- Websites to find keyboardists
- Websites to find arrangers
- Websites to find topliners
- Websites to find composers
- Websites to find music directors
- General music freelancer platforms

**Target output:** 40-60 candidates.

**Top-list ideas this agent should support:**

- Top 5 Websites to Find Producers and Beat Makers
- Top 5 Websites to Find Mix and Mastering Engineers
- Top 5 Websites to Find Session Singers
- Top 5 Websites to Find Session Drummers
- Top 5 Websites to Find Session Guitarists
- Top 5 Websites to Find Arrangers and Topliners
- SoundBetter vs AirGigs

**Prompt:**

```text
You are Agent 3 researching Sound Resource Guide.

Sound Resource Guide helps music creators find the tools, people, platforms, and resources to make, release, and monetize their music.

Research platforms and websites where music creators can find or hire professionals. Do not list individual freelancers or artists.

Research these categories only:
- Websites to find producers
- Websites to find beat makers
- Websites to find mix engineers
- Websites to find mastering engineers
- Websites to find session singers
- Websites to find vocalists
- Websites to find drummers
- Websites to find guitarists
- Websites to find bassists
- Websites to find keyboardists
- Websites to find arrangers
- Websites to find topliners
- Websites to find composers
- Websites to find music directors
- General music freelancer platforms

Return 40-60 candidates in a table with exactly these columns:
name, website_url, category, subcategory, what_it_is, best_for, pricing_url, affiliate_program_available, affiliate_signup_url, affiliate_program_highlights, sponsor_potential, top_list_fit, suggested_top_list, source_url, confidence_score, notes.

Rules:
- Use public sources only.
- Do not include individual people.
- Do not invent affiliate programs, commission rates, or pricing.
- If details are not public, write unknown.
- Include the exact affiliate signup URL if found.
- If a program is through Impact, PartnerStack, CJ, ShareASale, Awin, Rewardful, FirstPromoter, or another network, name the network if visible.
- Keep descriptions factual, not promotional.
- Include source URLs for every factual claim.
- Prioritize resources that could support affiliate revenue, SEO traffic, or future sponsorship.
```

### Agent 4: Sync, Licensing, Creative Briefs, Metadata, And Catalog Tools

**Goal:** Find sync-related platforms, tools, directories, education, and resource hubs.

**Categories to research:**

- Sync licensing platforms
- Music libraries
- Sync education and courses
- Creative brief sources, if real public sources exist
- Pitching resources
- Metadata tools
- Catalog management tools
- Split-sheet resources
- Rights/admin resources

**Target output:** 40-60 candidates.

**Top-list ideas this agent should support:**

- Top 5 Sync Licensing Platforms
- Top 5 Music Libraries Accepting Submissions
- Top 5 Sync Education Resources
- Top 5 Metadata Tools for Musicians
- Top 5 Catalog Management Tools
- Top 5 Split Sheet Resources
- Top Sources of Creative Briefs, only if enough legitimate options exist

**Prompt:**

```text
You are Agent 4 researching Sound Resource Guide.

Sound Resource Guide helps music creators find the tools, people, platforms, and resources to make, release, and monetize their music.

Research these categories only:
- Sync licensing platforms
- Music libraries
- Sync education and courses
- Creative brief sources, if real public sources exist
- Pitching resources
- Metadata tools
- Catalog management tools
- Split-sheet resources
- Rights/admin resources

Return 40-60 candidates in a table with exactly these columns:
name, website_url, category, subcategory, what_it_is, best_for, pricing_url, affiliate_program_available, affiliate_signup_url, affiliate_program_highlights, sponsor_potential, top_list_fit, suggested_top_list, source_url, confidence_score, notes.

Rules:
- Use public sources only.
- Do not invent creative brief sources. If there are not enough real public options, say so.
- Do not invent affiliate programs, commission rates, or pricing.
- If details are not public, write unknown.
- Include the exact affiliate signup URL if found.
- If a program is through Impact, PartnerStack, CJ, ShareASale, Awin, Rewardful, FirstPromoter, or another network, name the network if visible.
- Do not include individual people.
- Keep descriptions factual, not promotional.
- Include source URLs for every factual claim.
- Prioritize resources that could support affiliate revenue, SEO traffic, or future sponsorship.
```

### Agent 5: Artist Growth, Release Tools, And Direct-To-Fan

**Goal:** Find tools artists use to build audience, present themselves professionally, and sell directly.

**Categories to research:**

- EPK tools
- Artist website builders
- Smart links
- Fan/list-building tools
- Merch tools
- Direct-to-fan platforms
- Booking/gig tools
- Press and promo tools
- Music marketing education resources

**Target output:** 40-60 candidates.

**Top-list ideas this agent should support:**

- Top 5 EPK Tools
- Top 5 Smart Link Tools for Musicians
- Top 5 Direct-To-Fan Platforms
- Top 5 Artist Website Builders
- Top 5 Fan/List-Building Tools for Musicians
- Top 5 Merch Platforms for Artists

**Prompt:**

```text
You are Agent 5 researching Sound Resource Guide.

Sound Resource Guide helps music creators find the tools, people, platforms, and resources to make, release, and monetize their music.

Research these categories only:
- EPK tools
- Artist website builders
- Smart links
- Fan/list-building tools
- Merch tools
- Direct-to-fan platforms
- Booking/gig tools
- Press and promo tools
- Music marketing education resources

Return 40-60 candidates in a table with exactly these columns:
name, website_url, category, subcategory, what_it_is, best_for, pricing_url, affiliate_program_available, affiliate_signup_url, affiliate_program_highlights, sponsor_potential, top_list_fit, suggested_top_list, source_url, confidence_score, notes.

Rules:
- Use public sources only.
- Do not invent affiliate programs, commission rates, or pricing.
- If details are not public, write unknown.
- Include the exact affiliate signup URL if found.
- If a program is through Impact, PartnerStack, CJ, ShareASale, Awin, Rewardful, FirstPromoter, or another network, name the network if visible.
- Do not include individual people.
- Keep descriptions factual, not promotional.
- Include source URLs for every factual claim.
- Prioritize resources that could support affiliate revenue, SEO traffic, or future sponsorship.
```

### Agent 6: Trade Shows, Conferences, Events, And Associations

**Goal:** Find events and organizations that can support recurring SEO pages and later outreach.

**Categories to research:**

- Sync licensing conferences and events
- Artist conferences
- Producer conferences
- Music business conferences
- Music technology events
- Composer/film/TV music events
- Songwriter conferences
- Industry associations

**Target output:** 40-60 candidates.

**Top-list ideas this agent should support:**

- Top Music Industry Conferences for Artists
- Top Sync Licensing Conferences and Events
- Top Music Producer Conferences and Expos
- Top Music Business Conferences
- Top Composer and Film/TV Music Events
- Top Music Tech Conferences

**Prompt:**

```text
You are Agent 6 researching Sound Resource Guide.

Sound Resource Guide helps music creators find the tools, people, platforms, and resources to make, release, and monetize their music.

Research events, conferences, trade shows, and associations only.

Research these categories:
- Sync licensing conferences and events
- Artist conferences
- Producer conferences
- Music business conferences
- Music technology events
- Composer/film/TV music events
- Songwriter conferences
- Industry associations

Return 40-60 candidates in a table with exactly these columns:
name, website_url, category, subcategory, what_it_is, best_for, pricing_url, affiliate_program_available, affiliate_signup_url, affiliate_program_highlights, sponsor_potential, top_list_fit, suggested_top_list, source_url, confidence_score, notes.

Rules:
- Use public sources only.
- Include event dates only if current and source-backed.
- If dates are not announced or change annually, write "annual/date varies" and include the event website.
- Do not invent affiliate programs, commission rates, or pricing.
- If details are not public, write unknown.
- Include the exact affiliate/signup/sponsor/exhibitor page if found.
- Do not include individual people.
- Keep descriptions factual, not promotional.
- Include source URLs for every factual claim.
```

### Agent 7: Competitor And Traffic Landscape

**Goal:** Find whether a robust dedicated Sound Resource Guide-style site already exists and identify traffic opportunities.

**Categories to research:**

- Music production roundup sites
- Music business resource sites
- Plugin/sample review sites
- Artist tools directories
- Sync resource sites
- Affiliate-heavy music tool sites
- Gaps in existing coverage
- SEO page opportunities

**Target output:** 25-40 competitor/resource sites plus traffic recommendations.

**Prompt:**

```text
You are Agent 7 researching the competitor and traffic landscape for Sound Resource Guide.

Sound Resource Guide helps music creators find the tools, people, platforms, and resources to make, release, and monetize their music.

Find whether a robust dedicated website already exists that combines:
- music production tools
- people/service marketplaces
- distribution and royalty tools
- sync/licensing resources
- artist growth tools
- top lists and comparison guides
- affiliate/resource discovery

Return two sections:

1. Competitor/resource landscape table with these columns:
name, website_url, what_it_covers, what_it_does_not_cover, monetization_model_if_visible, strength, weakness, source_url, confidence_score.

2. Traffic opportunity table with these columns:
keyword_or_topic, page_type, search_intent, monetization_fit, difficulty_guess, why_it_matters, example_page_title.

Rules:
- Use public sources only.
- Do not invent traffic numbers unless a public tool/source provides them.
- Distinguish direct competitors from partial/splinter resources.
- Focus on practical gaps Sound Resource Guide could fill.
```

## Merge Process After Subagents Finish

Codex should merge all outputs into one master sheet or CSV.

Merge steps:

1. Combine all tables.
2. Normalize category names.
3. Remove duplicates.
4. Keep a candidate if it has a source URL and confidence score above `0.70`.
5. Flag anything below `0.70` as `Needs Research`.
6. Flag any affiliate claim without signup/source URL as `Needs Verification`.
7. Flag any pricing claim without pricing URL as `Needs Verification`.
8. Identify resources that appear in multiple categories.
9. Choose the first 100-150 MVP listings.
10. Choose the first 10 Top 5/Top 10 pages.

## First 10 MVP Top List Pages

Recommended first set:

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

## Traffic Plan

Traffic should come from search-driven pages, repeatable weekly discovery, and badge/link-back incentives.

### SEO Content

Primary traffic engine:

- Top 5 / Top 10 pages
- Comparison pages
- Free resource pages
- Annual event/trade-show pages
- "Best for" pages

Examples:

- Best Music Distribution Platforms for Independent Artists
- Best Royalty Collection Services for Musicians
- Best Websites to Find Session Singers
- Best Free VST Instruments
- Best Paid Sample Libraries
- Best Sync Licensing Platforms
- Best Metadata Tools for Musicians
- SoundBetter vs AirGigs
- DistroKid vs TuneCore vs CD Baby
- ASCAP vs BMI vs SESAC vs GMR

### Newsletter

Launch a simple weekly newsletter:

**5 music tools worth knowing this week**

Use it to:

- Build owned audience
- Test what links get clicks
- Create future sponsor inventory
- Drive repeat visits

### Badges And Awards

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
- Sponsors can buy visibility, not rankings or badges.
- Create a methodology page explaining the scoring process.

### Social/Community Distribution

Share useful pages in:

- Music creator Facebook groups
- Reddit communities where rules allow
- LinkedIn posts for music business topics
- YouTube comments only where helpful and non-spammy
- Newsletter swaps with small music creators
- Partner outreach to tools included in Top lists

### Link-Building Angle

After a Top list is published:

1. Email included companies.
2. Tell them they were included.
3. Offer badge embed code.
4. Ask them to share or link back.
5. Do not ask for payment in the award email.

Sponsor conversations happen later after traffic exists.

## What Codex Should Do After Research Returns

Codex tasks:

1. Create master staging sheet.
2. Merge all subagent outputs.
3. Dedupe resources.
4. Normalize categories.
5. Flag missing source/affiliate/pricing data.
6. Recommend first 100-150 listings.
7. Recommend first 10 Top list pages.
8. Draft ranking rubric.
9. Draft affiliate disclosure.
10. Draft badge methodology.
11. Draft sponsor page after MVP shape is visible.
12. Prepare Brilliant Directories import CSV.

## What Rachel Should Decide

Rachel decisions:

- Confirm domain purchase: `SoundResourceGuide.com`
- Confirm whether MVP starts in Brilliant Directories or with a landing page first
- Approve first 10 Top list topics
- Approve final categories
- Review first 20 listings for taste and trust
- Decide which newsletter platform to use

## Recommended First Move

Spin up these subagents first:

1. Agent 1: Distribution, Royalties, And Professional Affiliation
2. Agent 2: Production Tools, DAWs, Plugins, Sounds, And Samples
3. Agent 3: People And Services Marketplaces
4. Agent 7: Competitor And Traffic Landscape

Then run:

5. Agent 4: Sync, Licensing, Creative Briefs, Metadata, And Catalog Tools
6. Agent 5: Artist Growth, Release Tools, And Direct-To-Fan
7. Agent 6: Trade Shows, Conferences, Events, And Associations

Reason:

The first four agents give the clearest MVP direction, monetization clues, and traffic proof. The second group fills out the larger site map after the first data comes back.
