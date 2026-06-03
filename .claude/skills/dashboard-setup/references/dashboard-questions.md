# Dashboard Questions

Ask the smallest set of questions needed to turn a dashboard request into a
dashboard someone can actually use.

## Questions To Answer

1. Who uses the dashboard?
2. What decision or action should it improve?
3. How often should it be used: live, daily, weekly, monthly, quarterly, or just once?
4. What data sources are trusted?
5. What data sources are explicitly not trusted?
6. What are the 3 to 5 most important numbers?
7. What does one row or data point represent: customer, account, campaign,
   project, owner, day, week, or something else?
8. What must people be able to narrow the view by?
9. What should someone do after reading it?
10. What should the output be: HTML, PDF, app route, screenshot, CSV, or
    builder prompt?

## How Many Questions To Ask

If the user is in a workshop or live build, ask no more than 3 questions before
creating the first dashboard plan.

If the data is missing, create a sample-data checklist and label it clearly as
sample data.

If the decision is fuzzy, restate it as:

```text
This dashboard helps [person] decide whether to [action] based on [signals].
```

## Common Dashboard Types

| Type | Main question | Common data sources |
|---|---|---|
| Client report | Is the work creating visible progress? | Sheets, HubSpot, GA4, Search Console, Stripe |
| Ad performance | What should we scale, pause, or inspect? | Meta Ads, Google Ads, TikTok, Shopify, CSV exports |
| Revenue board | Where is revenue changing and why? | Stripe, CRM, accounting export, warehouse |
| Ops status | What is blocked, late, or ready? | Linear, GitHub, ClickUp, Airtable, local JSON |
| Product behavior | What behavior changed? | PostHog, GA4, event database, CSV |
| Research decision dashboard | What evidence supports the recommendation? | Notes, transcripts, survey exports, competitor research |
