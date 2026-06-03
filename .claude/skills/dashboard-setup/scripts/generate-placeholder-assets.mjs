#!/usr/bin/env node

// Generates local, license-clean SVG prop images for the dashboard examples.
// Every file is authored here (no external assets, no network, no paid sources),
// so the pack stays self-contained and safe to give out.
//
// Each prop looks like a real dashboard artifact (an ad creative, a report
// thumbnail, a product screen, a chart card, a table snapshot, an evidence
// clip) so the example dashboards feel inspectable instead of fake.
//
// Run from inside the skill: node scripts/generate-placeholder-assets.mjs
// It writes the props into this skill's own assets/placeholders/ folder so the
// installed skill is self-contained. Pass an output folder to write elsewhere:
//   node scripts/generate-placeholder-assets.mjs /path/to/assets/placeholders

import { mkdirSync, writeFileSync } from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const skillDir = dirname(dirname(__filename))
const assetsDir = process.argv[2]
  ? resolve(process.argv[2])
  : join(skillDir, "assets", "placeholders")
mkdirSync(assetsDir, { recursive: true })

// Shared building blocks ----------------------------------------------------

const FONT =
  'font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"'
const MONO = 'font-family="JetBrains Mono, ui-monospace, SFMono-Regular, monospace"'

// A small honest "SAMPLE" tag baked into every prop. Keeps the image readable
// as sample data even if it is pulled out of the dashboard.
function sampleTag(w, h, color = "#111827", bg = "#ffffff", pos = "tr") {
  const x = pos === "tl" || pos === "bl" ? 12 : w - 70
  const y = pos === "bl" || pos === "br" ? h - 32 : 12
  return `
    <g transform="translate(${x}, ${y})">
      <rect width="58" height="20" rx="5" fill="${bg}" opacity="0.92"/>
      <rect width="58" height="20" rx="5" fill="none" stroke="${color}" stroke-opacity="0.25"/>
      <text x="29" y="14" ${FONT} font-size="10" font-weight="800"
        letter-spacing="1" fill="${color}" text-anchor="middle">SAMPLE</text>
    </g>`
}

function svg(w, h, body, tagColor = "#111827", tagBg = "#ffffff", pos = "tr") {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img">
${body}
${sampleTag(w, h, tagColor, tagBg, pos)}
</svg>
`
}

// A browser window chrome (dots + address bar) for screenshot-style props.
function browserChrome(w, urlText) {
  return `
    <rect x="0" y="0" width="${w}" height="34" fill="#e9edf3"/>
    <circle cx="18" cy="17" r="5" fill="#e15b4c"/>
    <circle cx="36" cy="17" r="5" fill="#e6b24a"/>
    <circle cx="54" cy="17" r="5" fill="#4caf7d"/>
    <rect x="74" y="8" width="${w - 90}" height="18" rx="9" fill="#ffffff"/>
    <text x="86" y="21" ${FONT} font-size="10" fill="#7a828d">${urlText}</text>`
}

// A subject silhouette (head + shoulders) for UGC / talking-head creatives.
function person(cx, cy, scale, fill) {
  const r = 34 * scale
  return `
    <g transform="translate(${cx}, ${cy})">
      <path d="M ${-70 * scale} ${120 * scale}
        a ${70 * scale} ${78 * scale} 0 0 1 ${140 * scale} 0 Z" fill="${fill}"/>
      <circle cx="0" cy="${10 * scale}" r="${r}" fill="${fill}"/>
    </g>`
}

const assets = []
function add(name, represents, usedIn, source) {
  assets.push({ name, represents, usedIn, source })
}

// --- Ad creatives (dark ad dashboard) -------------------------------------------

function adBeforeAfter() {
  const w = 400
  const h = 500
  return svg(
    w,
    h,
    `
    <rect width="${w}" height="${h}" fill="#10131a"/>
    <rect x="0" y="0" width="${w / 2}" height="${h}" fill="#2b3340"/>
    <rect x="${w / 2}" y="0" width="${w / 2}" height="${h}" fill="#1c2c5a"/>
    ${person(100, 150, 1, "#3c4656")}
    ${person(300, 150, 1, "#3a5fd0")}
    <text x="100" y="60" ${FONT} font-size="16" font-weight="800" fill="#aeb6c4" text-anchor="middle">DAY 1</text>
    <text x="300" y="60" ${FONT} font-size="16" font-weight="800" fill="#dfe7ff" text-anchor="middle">DAY 30</text>
    <line x1="200" y1="0" x2="200" y2="${h}" stroke="#0b0e14" stroke-width="3"/>
    <rect x="0" y="${h - 96}" width="${w}" height="96" fill="#0b0e14" opacity="0.86"/>
    <text x="24" y="${h - 56}" ${FONT} font-size="22" font-weight="800" fill="#f8fbff">The change people noticed</text>
    <rect x="24" y="${h - 40}" width="150" height="26" rx="13" fill="#ffd84d"/>
    <text x="99" y="${h - 22}" ${FONT} font-size="12" font-weight="800" fill="#111827" text-anchor="middle">See the routine</text>`,
    "#f8fbff",
    "#1c2230"
  )
}

function adFounder() {
  const w = 400
  const h = 500
  return svg(
    w,
    h,
    `
    <rect width="${w}" height="${h}" fill="#15233f"/>
    <rect width="${w}" height="${h}" fill="url(#fg)"/>
    <defs><linearGradient id="fg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1d3050"/><stop offset="1" stop-color="#0f1a30"/>
    </linearGradient></defs>
    ${person(200, 150, 1.5, "#33476e")}
    <circle cx="200" cy="250" r="46" fill="#ffffff" opacity="0.95"/>
    <path d="M 186 228 L 186 272 L 224 250 Z" fill="#15233f"/>
    <rect x="24" y="28" width="120" height="26" rx="6" fill="#ffffff" opacity="0.12"/>
    <text x="38" y="46" ${FONT} font-size="12" font-weight="800" fill="#cdd8ee">@thefounder</text>
    <rect x="0" y="${h - 92}" width="${w}" height="92" fill="#0b1322" opacity="0.85"/>
    <text x="24" y="${h - 52}" ${FONT} font-size="22" font-weight="800" fill="#f8fbff">Why I actually built this</text>
    <text x="24" y="${h - 26}" ${FONT} font-size="13" fill="#9fb0cc">0:42  ·  founder story</text>`,
    "#f8fbff",
    "#16243f"
  )
}

function adProofDemo() {
  const w = 400
  const h = 500
  return svg(
    w,
    h,
    `
    <rect width="${w}" height="${h}" fill="#1a1530"/>
    <rect x="0" y="320" width="${w}" height="180" fill="#241d40"/>
    <ellipse cx="200" cy="330" rx="150" ry="26" fill="#000000" opacity="0.25"/>
    <rect x="158" y="150" width="84" height="180" rx="12" fill="#6f5ad6"/>
    <rect x="158" y="150" width="84" height="50" rx="12" fill="#8a78e6"/>
    <rect x="172" y="210" width="56" height="70" rx="4" fill="#efeaff"/>
    <text x="200" y="252" ${FONT} font-size="11" font-weight="800" fill="#5a4bb0" text-anchor="middle">DAILY</text>
    <g transform="translate(250,300)"><circle r="30" fill="#ffd84d"/>
      <text y="-2" ${FONT} font-size="12" font-weight="800" fill="#111827" text-anchor="middle">REAL</text>
      <text y="13" ${FONT} font-size="12" font-weight="800" fill="#111827" text-anchor="middle">RESULT</text></g>
    <rect x="0" y="${h - 84}" width="${w}" height="84" fill="#0e0a1c" opacity="0.85"/>
    <text x="24" y="${h - 46}" ${FONT} font-size="21" font-weight="800" fill="#f8fbff">Watch it work in 15 seconds</text>
    <text x="24" y="${h - 22}" ${FONT} font-size="13" fill="#b0a6d8">product demo  ·  unedited</text>`,
    "#f8fbff",
    "#1c1636"
  )
}

function adHookText() {
  const w = 400
  const h = 500
  return svg(
    w,
    h,
    `
    <rect width="${w}" height="${h}" fill="#e6332a"/>
    <rect x="0" y="0" width="${w}" height="${h}" fill="url(#hk)"/>
    <defs><linearGradient id="hk" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ff5246"/><stop offset="1" stop-color="#c41f17"/>
    </linearGradient></defs>
    <text x="40" y="150" ${FONT} font-size="58" font-weight="900" fill="#ffffff">Read</text>
    <text x="40" y="216" ${FONT} font-size="58" font-weight="900" fill="#ffffff">this</text>
    <text x="40" y="290" ${FONT} font-size="58" font-weight="900" fill="#111827">before</text>
    <text x="40" y="356" ${FONT} font-size="58" font-weight="900" fill="#111827">you buy.</text>
    <path d="M 40 392 L 150 392" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
    <path d="M 140 380 L 156 392 L 140 404" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="40" y="${h - 30}" ${FONT} font-size="14" font-weight="800" fill="#ffffff" opacity="0.85">hook test  ·  text-only</text>`,
    "#ffffff",
    "#c41f17"
  )
}

// --- Client review props (light) -------------------------------------------

function reportLandingPage() {
  const w = 420
  const h = 320
  return svg(
    w,
    h,
    `
    <rect width="${w}" height="${h}" fill="#ffffff"/>
    ${browserChrome(w, "preview.sample/landing")}
    <rect x="0" y="34" width="${w}" height="120" fill="#172a63"/>
    <rect x="30" y="60" width="220" height="16" rx="4" fill="#ffffff" opacity="0.92"/>
    <rect x="30" y="84" width="170" height="16" rx="4" fill="#ffffff" opacity="0.7"/>
    <rect x="30" y="116" width="110" height="24" rx="12" fill="#ffd84d"/>
    <rect x="290" y="56" width="100" height="80" rx="8" fill="#3a4f97"/>
    <rect x="30" y="178" width="110" height="100" rx="8" fill="#eef2f8"/>
    <rect x="155" y="178" width="110" height="100" rx="8" fill="#eef2f8"/>
    <rect x="280" y="178" width="110" height="100" rx="8" fill="#eef2f8"/>
    <rect x="46" y="196" width="36" height="36" rx="8" fill="#2453d4"/>
    <rect x="171" y="196" width="36" height="36" rx="8" fill="#2453d4"/>
    <rect x="296" y="196" width="36" height="36" rx="8" fill="#2453d4"/>
    <rect x="46" y="244" width="78" height="9" rx="4" fill="#c9d3e6"/>
    <rect x="171" y="244" width="78" height="9" rx="4" fill="#c9d3e6"/>
    <rect x="296" y="244" width="78" height="9" rx="4" fill="#c9d3e6"/>`
  )
}

function reportEmail() {
  const w = 420
  const h = 320
  return svg(
    w,
    h,
    `
    <rect width="${w}" height="${h}" fill="#ffffff"/>
    <rect x="0" y="0" width="${w}" height="70" fill="#f4f6fa"/>
    <circle cx="36" cy="35" r="16" fill="#2453d4"/>
    <text x="36" y="40" ${FONT} font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">A</text>
    <rect x="64" y="22" width="160" height="11" rx="4" fill="#1f2937"/>
    <rect x="64" y="42" width="110" height="9" rx="4" fill="#9aa4b2"/>
    <text x="${w - 24}" y="40" ${FONT} font-size="11" fill="#9aa4b2" text-anchor="end">9:14 AM</text>
    <rect x="24" y="94" width="${w - 48}" height="13" rx="4" fill="#1f2937"/>
    <rect x="24" y="120" width="${w - 60}" height="9" rx="4" fill="#cfd6e2"/>
    <rect x="24" y="138" width="${w - 90}" height="9" rx="4" fill="#cfd6e2"/>
    <rect x="24" y="156" width="${w - 120}" height="9" rx="4" fill="#cfd6e2"/>
    <rect x="24" y="190" width="140" height="32" rx="8" fill="#2453d4"/>
    <text x="94" y="211" ${FONT} font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">Review the work</text>
    <line x1="24" y1="250" x2="${w - 24}" y2="250" stroke="#e6eaf1"/>
    <rect x="24" y="268" width="90" height="9" rx="4" fill="#9aa4b2"/>
    <rect x="24" y="286" width="130" height="9" rx="4" fill="#cfd6e2"/>`,
    "#111827",
    "#ffffff",
    "br"
  )
}

function reportCover() {
  const w = 340
  const h = 440
  return svg(
    w,
    h,
    `
    <rect width="${w}" height="${h}" fill="#ffffff"/>
    <rect x="0" y="0" width="${w}" height="10" fill="#2453d4"/>
    <text x="32" y="64" ${FONT} font-size="11" font-weight="800" letter-spacing="2" fill="#2453d4">WEEKLY REVIEW</text>
    <text x="32" y="104" ${FONT} font-size="28" font-weight="800" fill="#111827">Sprint</text>
    <text x="32" y="138" ${FONT} font-size="28" font-weight="800" fill="#111827">Progress</text>
    <rect x="32" y="168" width="180" height="9" rx="4" fill="#c9d3e6"/>
    <rect x="32" y="206" width="${w - 64}" height="150" rx="10" fill="#eef2f8"/>
    <polyline points="52,330 100,300 148,312 196,266 244,284 292,240"
      fill="none" stroke="#2453d4" stroke-width="3"/>
    <circle cx="292" cy="240" r="5" fill="#e45745"/>
    <rect x="52" y="226" width="70" height="20" rx="10" fill="#ffffff"/>
    <text x="62" y="240" ${FONT} font-size="11" font-weight="800" fill="#2f7654">+18%</text>
    <line x1="32" y1="386" x2="${w - 32}" y2="386" stroke="#e6eaf1"/>
    <circle cx="44" cy="408" r="9" fill="#2453d4"/>
    <rect x="60" y="402" width="120" height="11" rx="5" fill="#9aa4b2"/>`
  )
}

// --- Revenue props (steel) -------------------------------------------------

function chartCardRevenue() {
  const w = 380
  const h = 300
  return svg(
    w,
    h,
    `
    <rect width="${w}" height="${h}" fill="#ffffff"/>
    <rect x="0" y="0" width="${w}" height="4" fill="#243b62"/>
    <text x="24" y="42" ${FONT} font-size="11" font-weight="800" letter-spacing="1" fill="#6b7686">MONTHLY REVENUE</text>
    <text x="24" y="84" ${MONO} font-size="38" font-weight="800" fill="#111827">$82.4k</text>
    <rect x="180" y="56" width="74" height="26" rx="13" fill="#e7f3ec"/>
    <text x="217" y="74" ${FONT} font-size="13" font-weight="800" fill="#2f7654" text-anchor="middle">+7.8%</text>
    <path d="M 24 250 L 24 130 L 80 150 L 136 120 L 192 132 L 248 96 L 304 108 L 356 70 L 356 250 Z"
      fill="#e7edf6"/>
    <polyline points="24,130 80,150 136,120 192,132 248,96 304,108 356,70"
      fill="none" stroke="#243b62" stroke-width="3"/>
    <circle cx="356" cy="70" r="5" fill="#b05a2a"/>
    <line x1="24" y1="250" x2="356" y2="250" stroke="#dfe4ec"/>
    <text x="24" y="272" ${FONT} font-size="10" fill="#9aa4b2">Jan</text>
    <text x="336" y="272" ${FONT} font-size="10" fill="#9aa4b2">Jul</text>`
  )
}

function tableSnapshot() {
  const w = 420
  const h = 280
  const rows = [
    ["Northstar", "+$5.4k", "Expansion"],
    ["Pioneer", "-$2.2k", "Downgrade"],
    ["Helio", "$11.8k", "Overdue"],
    ["Brightline", "+$4.2k", "Upgrade"],
  ]
  const rowMarkup = rows
    .map((r, i) => {
      const y = 78 + i * 44
      const highlight = r[2] === "Overdue"
      return `
      ${highlight ? `<rect x="0" y="${y - 22}" width="${w}" height="44" fill="#fdecea"/>` : ""}
      <text x="24" y="${y + 4}" ${FONT} font-size="14" font-weight="700" fill="#111827">${r[0]}</text>
      <text x="220" y="${y + 4}" ${MONO} font-size="13" fill="${r[1].startsWith("-") || highlight ? "#b04437" : "#2f7654"}">${r[1]}</text>
      <text x="320" y="${y + 4}" ${FONT} font-size="12" fill="#6b7686">${r[2]}</text>
      <line x1="0" y1="${y + 22}" x2="${w}" y2="${y + 22}" stroke="#eef1f5"/>`
    })
    .join("")
  return svg(
    w,
    h,
    `
    <rect width="${w}" height="${h}" fill="#ffffff"/>
    <rect x="0" y="0" width="${w}" height="44" fill="#f4f6fa"/>
    <text x="24" y="28" ${FONT} font-size="11" font-weight="800" letter-spacing="1" fill="#6b7686">ACCOUNT</text>
    <text x="220" y="28" ${FONT} font-size="11" font-weight="800" letter-spacing="1" fill="#6b7686">CHANGE</text>
    <text x="320" y="28" ${FONT} font-size="11" font-weight="800" letter-spacing="1" fill="#6b7686">REASON</text>
    <path d="M 268 22 L 274 16 L 280 22 Z" fill="#243b62"/>
    ${rowMarkup}`,
    "#111827",
    "#ffffff",
    "br"
  )
}

// --- Ops props (dark) ------------------------------------------------------

function ticketCard() {
  const w = 320
  const h = 200
  return svg(
    w,
    h,
    `
    <rect width="${w}" height="${h}" rx="10" fill="#151b24"/>
    <rect width="${w}" height="${h}" rx="10" fill="none" stroke="#2a3340"/>
    <rect x="20" y="20" width="74" height="22" rx="6" fill="#3a2c1a"/>
    <text x="57" y="35" ${FONT} font-size="11" font-weight="800" fill="#f08a35" text-anchor="middle">BLOCKED</text>
    <text x="20" y="78" ${FONT} font-size="16" font-weight="800" fill="#f3f6fb">Approve data labels</text>
    <rect x="20" y="96" width="${w - 120}" height="9" rx="4" fill="#2a3340"/>
    <rect x="20" y="114" width="${w - 160}" height="9" rx="4" fill="#2a3340"/>
    <line x1="20" y1="146" x2="${w - 20}" y2="146" stroke="#222a35"/>
    <circle cx="34" cy="172" r="13" fill="#39c5e5"/>
    <text x="34" y="176" ${FONT} font-size="11" font-weight="800" fill="#0c0f14" text-anchor="middle">A</text>
    <rect x="${w - 96}" y="161" width="76" height="22" rx="6" fill="#33231f"/>
    <text x="${w - 58}" y="176" ${FONT} font-size="11" font-weight="800" fill="#e96a5b" text-anchor="middle">Due today</text>`,
    "#f3f6fb",
    "#1b232e"
  )
}

// --- Product props (phone screens) -----------------------------------------

function phoneFrame(w, h, inner, bg = "#ffffff") {
  return `
    <rect x="0" y="0" width="${w}" height="${h}" rx="26" fill="#0d1424"/>
    <rect x="10" y="10" width="${w - 20}" height="${h - 20}" rx="18" fill="${bg}"/>
    <rect x="${w / 2 - 26}" y="20" width="52" height="6" rx="3" fill="#0d1424"/>
    ${inner}`
}

function productOnboarding() {
  const w = 300
  const h = 420
  return svg(
    w,
    h,
    phoneFrame(
      w,
      h,
      `
      <text x="32" y="64" ${FONT} font-size="11" font-weight="800" letter-spacing="1" fill="#265fce">STEP 2 OF 4</text>
      <text x="32" y="92" ${FONT} font-size="20" font-weight="800" fill="#111827">Save your first item</text>
      <g>
        <circle cx="40" cy="128" r="11" fill="#265fce"/>
        <circle cx="92" cy="128" r="11" fill="#265fce" stroke="#ce4e96" stroke-width="3"/>
        <circle cx="144" cy="128" r="11" fill="#d7e2f3"/>
        <circle cx="196" cy="128" r="11" fill="#d7e2f3"/>
        <line x1="51" y1="128" x2="81" y2="128" stroke="#265fce" stroke-width="3"/>
        <line x1="103" y1="128" x2="133" y2="128" stroke="#d7e2f3" stroke-width="3"/>
        <line x1="155" y1="128" x2="185" y2="128" stroke="#d7e2f3" stroke-width="3"/>
      </g>
      <rect x="32" y="166" width="${w - 64}" height="48" rx="10" fill="#f1f5fc" stroke="#ce4e96" stroke-width="2"/>
      <text x="46" y="195" ${FONT} font-size="13" fill="#9aa4b2">Name this item…</text>
      <rect x="32" y="226" width="${w - 64}" height="48" rx="10" fill="#f5f7fb"/>
      <rect x="46" y="244" width="130" height="11" rx="5" fill="#cfd6e2"/>
      <rect x="32" y="${h - 78}" width="${w - 64}" height="44" rx="10" fill="#265fce"/>
      <text x="${w / 2}" y="${h - 50}" ${FONT} font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">Save and continue</text>`
    )
  )
}

function productEmptyInvite() {
  const w = 300
  const h = 420
  return svg(
    w,
    h,
    phoneFrame(
      w,
      h,
      `
      <text x="32" y="60" ${FONT} font-size="17" font-weight="800" fill="#111827">Your team</text>
      <circle cx="${w / 2}" cy="160" r="46" fill="#eef4ff"/>
      <circle cx="${w / 2 - 14}" cy="152" r="15" fill="#c2d3f2"/>
      <circle cx="${w / 2 + 16}" cy="152" r="15" fill="#c2d3f2"/>
      <path d="M ${w / 2 - 30} 188 a 30 24 0 0 1 60 0 Z" fill="#c2d3f2"/>
      <text x="${w / 2}" y="240" ${FONT} font-size="15" font-weight="800" fill="#111827" text-anchor="middle">No teammates yet</text>
      <text x="${w / 2}" y="262" ${FONT} font-size="12" fill="#9aa4b2" text-anchor="middle">Invite someone to share this</text>
      <rect x="32" y="288" width="${w - 64}" height="44" rx="10" fill="#f5f7fb"/>
      <text x="46" y="315" ${FONT} font-size="13" fill="#9aa4b2">name@team.com</text>
      <rect x="32" y="${h - 70}" width="${w - 64}" height="44" rx="10" fill="#d7e2f3"/>
      <text x="${w / 2}" y="${h - 42}" ${FONT} font-size="13" font-weight="800" fill="#7e8aa0" text-anchor="middle">Send invite</text>`
    )
  )
}

// --- Research evidence props -----------------------------------------------

function evidenceTranscript() {
  const w = 380
  const h = 260
  return svg(
    w,
    h,
    `
    <rect width="${w}" height="${h}" fill="#ffffff"/>
    <rect x="0" y="0" width="${w}" height="4" fill="#4b5563"/>
    <text x="24" y="40" ${FONT} font-size="11" font-weight="800" letter-spacing="1" fill="#6b7280">CALL TRANSCRIPT · 12:04</text>
    <text x="24" y="70" ${FONT} font-size="12" font-weight="800" fill="#111827">Member</text>
    <rect x="24" y="80" width="${w - 60}" height="9" rx="4" fill="#dfe2e7"/>
    <rect x="24" y="98" width="${w - 110}" height="9" rx="4" fill="#dfe2e7"/>
    <text x="24" y="138" ${FONT} font-size="12" font-weight="800" fill="#d1495b">Founder</text>
    <rect x="24" y="148" width="${w - 48}" height="34" rx="6" fill="#fbeaed"/>
    <text x="34" y="170" ${FONT} font-size="12" font-style="italic" fill="#7a2230">"I just need plain words, not jargon."</text>
    <rect x="24" y="198" width="${w - 80}" height="9" rx="4" fill="#dfe2e7"/>
    <rect x="24" y="216" width="${w - 140}" height="9" rx="4" fill="#dfe2e7"/>`
  )
}

function evidenceSurvey() {
  const w = 380
  const h = 260
  const bars = [
    ["Plain language", 78, "#4b5563"],
    ["More examples", 61, "#6b7280"],
    ["Live data", 34, "#9aa1ab"],
    ["Templates", 22, "#c2c7cf"],
  ]
  const barMarkup = bars
    .map((b, i) => {
      const y = 70 + i * 44
      return `
      <text x="24" y="${y - 6}" ${FONT} font-size="11" font-weight="700" fill="#374151">${b[0]}</text>
      <rect x="24" y="${y}" width="${(w - 90) }" height="18" rx="9" fill="#eef0f3"/>
      <rect x="24" y="${y}" width="${((w - 90) * b[1]) / 100}" height="18" rx="9" fill="${b[2]}"/>
      <text x="${w - 50}" y="${y + 14}" ${MONO} font-size="12" font-weight="700" fill="#374151">${b[1]}%</text>`
    })
    .join("")
  return svg(
    w,
    h,
    `
    <rect width="${w}" height="${h}" fill="#ffffff"/>
    <rect x="0" y="0" width="${w}" height="4" fill="#2e6f73"/>
    <text x="24" y="40" ${FONT} font-size="13" font-weight="800" fill="#111827">What members asked for most</text>
    ${barMarkup}`
  )
}

function evidenceCompetitor() {
  const w = 380
  const h = 260
  return svg(
    w,
    h,
    `
    <rect width="${w}" height="${h}" fill="#ffffff"/>
    ${browserChrome(w, "competitor.sample/pricing")}
    <text x="24" y="68" ${FONT} font-size="14" font-weight="800" fill="#111827">Plans</text>
    <rect x="24" y="84" width="100" height="150" rx="10" fill="#f4f6fa"/>
    <rect x="140" y="84" width="100" height="150" rx="10" fill="#ffffff" stroke="#d1495b" stroke-width="2"/>
    <rect x="256" y="84" width="100" height="150" rx="10" fill="#f4f6fa"/>
    <circle cx="190" cy="74" r="9" fill="#d1495b"/>
    <text x="74" y="118" ${FONT} font-size="11" font-weight="800" fill="#6b7280" text-anchor="middle">Starter</text>
    <text x="190" y="118" ${FONT} font-size="11" font-weight="800" fill="#d1495b" text-anchor="middle">Pro</text>
    <text x="306" y="118" ${FONT} font-size="11" font-weight="800" fill="#6b7280" text-anchor="middle">Team</text>
    <text x="74" y="150" ${MONO} font-size="16" font-weight="800" fill="#111827" text-anchor="middle">$0</text>
    <text x="190" y="150" ${MONO} font-size="16" font-weight="800" fill="#111827" text-anchor="middle">$29</text>
    <text x="306" y="150" ${MONO} font-size="16" font-weight="800" fill="#111827" text-anchor="middle">$99</text>
    <rect x="44" y="170" width="60" height="8" rx="4" fill="#dde2ea"/>
    <rect x="160" y="170" width="60" height="8" rx="4" fill="#dde2ea"/>
    <rect x="276" y="170" width="60" height="8" rx="4" fill="#dde2ea"/>
    <rect x="44" y="188" width="60" height="8" rx="4" fill="#dde2ea"/>
    <rect x="160" y="188" width="60" height="8" rx="4" fill="#dde2ea"/>
    <rect x="276" y="188" width="60" height="8" rx="4" fill="#dde2ea"/>`
  )
}

// Register + write ----------------------------------------------------------

const files = [
  ["ad-before-after.svg", adBeforeAfter(), "Before / after split ad creative", "Ad dashboard creative wall"],
  ["ad-founder-talkinghead.svg", adFounder(), "UGC founder talking-head video frame", "Ad dashboard creative wall"],
  ["ad-proof-demo.svg", adProofDemo(), "Product demo ad frame", "Ad dashboard creative wall"],
  ["ad-hook-text.svg", adHookText(), "Bold hook-test text card ad", "Ad dashboard creative wall"],
  ["report-landing-page.svg", reportLandingPage(), "Landing page thumbnail", "Client review dashboard deliverables"],
  ["report-email.svg", reportEmail(), "Client email mockup thumbnail", "Client review dashboard deliverables"],
  ["report-cover.svg", reportCover(), "Weekly report cover one-pager", "Client review dashboard deliverables"],
  ["chart-card-revenue.svg", chartCardRevenue(), "Revenue chart card / tear sheet", "Revenue movement dashboard"],
  ["table-snapshot.svg", tableSnapshot(), "Accounts table snapshot", "Revenue dashboard and ops dashboard"],
  ["ticket-card.svg", ticketCard(), "Blocked ticket / PR card", "Ops readiness lanes"],
  ["product-onboarding.svg", productOnboarding(), "App onboarding screen at the drop step", "Product behavior dashboard"],
  ["product-empty-invite.svg", productEmptyInvite(), "Empty invite-teammate screen", "Product behavior dashboard"],
  ["evidence-transcript.svg", evidenceTranscript(), "Call transcript snippet clip", "Research evidence dashboard"],
  ["evidence-survey.svg", evidenceSurvey(), "Survey result chart clip", "Research evidence dashboard"],
  ["evidence-competitor.svg", evidenceCompetitor(), "Competitor pricing page screenshot", "Research evidence dashboard"],
]

for (const [name, content, represents, usedIn] of files) {
  writeFileSync(join(assetsDir, name), content)
  add(name, represents, usedIn, "Generated locally by generate-placeholder-assets.mjs")
}

const manifest = {
  note:
    "Local, license-clean SVG props for the Dashboard Setup examples. Every file is authored by generate-placeholder-assets.mjs. No external assets, no network, no paid sources. All content is sample data and is tagged SAMPLE.",
  generated_by: "scripts/generate-placeholder-assets.mjs",
  license: "Original work, free to use and modify with this skill pack.",
  count: assets.length,
  assets,
}

writeFileSync(join(assetsDir, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n")

console.log(`Built ${assets.length} placeholder assets in ${assetsDir}`)
