# Dashboard Design System

This is the look every dashboard from this skill should have. The six pages in
`examples/dashboard-versions/` are the canonical reference. Build new dashboards
in this same language so they read as designed, not as a generic admin template.

The goal is one calm, high-end, decision-first surface. Linear, Stripe, and
Vercel are the bar, not a colorful BI tool.

## The six rules that kill the generic look

1. **Full bleed, no floating card.** The page is the surface, edge to edge, with
   side padding `0 clamp(24px, 5vw, 72px)`. Never a rounded card centered on a
   gray page with a drop shadow. That single pattern is the clearest "template"
   tell.
2. **Asymmetric hero, not a tile grid.** Left side: a small uppercase eyebrow, a
   large display verdict (the one-line call), and a short "why" sentence. Right
   side: a ledger, which is a definition list (label on the left, value on the
   right, hairline rows, a `2px solid` ink rule on top). Do not lay the key
   numbers out as a row of equal stat tiles.
3. **Semantic dots, not rainbow pills.** Status is a small colored dot plus plain
   text. Do not put a tinted color pill on every row. Reserve emphasis (bolder
   text plus a thin left accent bar on the row) for the rows that need attention.
4. **Near monochrome.** Ink plus cool grays. Color appears only as small semantic
   dots: green = good or ready or approved, slate = awaiting or neutral, amber =
   watch or changes or risk, red = blocked or late or overdue, faint gray = idle.
   No electric-blue primary accent, no purple, no gradients.
5. **Real display type.** Use the bundled Space Grotesk (see Fonts below) for the
   board title, the verdict, the numbers, and section labels. Body and table text
   stay in the system sans. Never Inter, never a serif on a data screen.
6. **White is white.** Light mode is pure white or cool gray. Dark mode is soft
   black (never `#000`), off-white text, cool neutrals. Never tan, cream, or
   warm-white.

## Light and dark

Ship both. Use CSS variable tokens with three blocks: `:root` (light),
`:root[data-theme="dark"]`, and `@media (prefers-color-scheme: dark)
{ :root:not([data-theme]) { ... } }`. Add a sun and moon toggle button (inline
SVG, never an emoji). The small script sets `data-theme` on `<html>`, remembers
the choice in `localStorage`, and honors a `?theme=dark` or `?theme=light` URL
value. Copy the token blocks and the script from any example page; they are
identical across all six.

## Fonts (keep it self-contained)

The skill bundles Space Grotesk as base64 at `assets/sg-fonts.css` (four weights,
latin, OFL, license clean). Inline that file's contents into the page's `<style>`
so the page stays one self-contained file that renders on double-click with no
network and no external font files. Never link Google Fonts or any CDN.

## Layout order

Top bar (a small rotated-square mark, the board title, a thin rule, the lane
context; on the right the cadence, a quiet "Sample data" tag, the theme toggle)
-> asymmetric hero (verdict plus ledger) -> the main table or queue -> a one line
footer that names what is counted, what is not counted, and the next action.

## Tables

Clean hairline rows, a hover tint, generous row height. The status column is a
dot plus plain text. Show a small inline-SVG thumbnail in the first column only
when the row is itself a visual artifact (a deliverable, an ad creative). For
rows that are accounts, tasks, steps, or evidence, skip the thumbnail.

## What stays the same as the rest of the skill

Decision first, sample data always labeled, every number sourced, the page must
render its sample data on open (data inlined, no `fetch`), and it must pass
`references/dashboard-check.md` before it is called done.
