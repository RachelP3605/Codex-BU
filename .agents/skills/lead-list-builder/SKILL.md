---
name: lead-list-builder
description: Build campaign lead lists for AOM postcard website campaigns. Use when Rachel wants targeted local/service-business lists by industry and city, with Google Places data, optional public email discovery, website URLs, and a CSV/table output for manual visual review before website generation or postcards.
---

# Lead List Builder

Build the list first. Show Rachel usable leads before showing code.

## Use when
- Rachel wants prospects for the custom website postcard campaign.
- The target is an industry plus cities/regions, such as plumbers, fire protection, electricians, roofers, HVAC, marine fire protection, garage doors, pest control, or similar service businesses.
- The output needs company name, address, phone, email when easily available, website URL, Google Maps URL, ratings/reviews, and blank review columns for Rachel/VA.

## Inputs
Ask only for missing pieces that cannot be reasonably inferred:
1. Industry or niche.
2. Cities/regions.
3. Approximate lead count.
4. Whether to include email discovery.

Use `.env` keys only after explicit authorization:
- `GOOGLE_PLACES_API_KEY` or `GOOGLE_MAPS_API_KEY`
- `GOOGLE_PAGESPEED_API_KEY` only if Rachel explicitly asks for PageSpeed scoring.

Never print or log API keys.

## Process
1. Confirm the next action in one sentence.
2. Pull leads from Google Places by `industry + city`.
3. Capture:
   - company name
   - full address
   - phone
   - website URL, if present
   - Google Maps URL
   - rating and review count
   - business status
   - Place ID
4. Do not run PageSpeed by default. Rachel is manually reviewing sites, and that visual review is the deciding filter.
5. If requested, scrape light email candidates from the homepage and likely contact/about pages.
6. Add blank review/action columns:
   - `visual_review_status`
   - `visual_notes`
   - `build_demo`
   - `postcard_ready`
7. Save a CSV in `campaign-output/`.
8. Show Rachel the lead list/table first.
9. Then mention script changes or technical notes only if they affect trust in the list.

## Targeting rules
- Best postcard targets are companies Rachel/VA marks after manual review.
- Do not pretend a list is clean if a parser/source issue appears. Flag it plainly.
- Exclude obvious directories unless Rachel asks to include them.
- Chains/franchises may be lower priority unless the local branch appears independently owned.
- For compliance-heavy or B2B niches, prefer businesses with weak websites over consumer-only trades.

## Output standard
Every run should produce:
- A CSV file path.
- A short count summary.
- A table of the best leads.
- Any caveats, such as missing emails, duplicate companies, incomplete addresses, or source-quality issues.

## Rules from Rachel
- Output the actual list first, not code.
- Truth mode always: say what is known, what is inferred, and what still needs manual review.
- Do not commit, deploy, send postcards, upload to Lob, or spend API/vendor credits beyond the agreed run without approval.
- Email is opportunistic. Google Places usually does not provide email; discover it only from public website pages when available.
- Do not require an offer angle before the call. Rachel will decide the offer based on what the prospect says.
- Do not run PageSpeed unless Rachel specifically asks for it.
