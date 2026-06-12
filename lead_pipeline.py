#!/usr/bin/env python3
"""
Lead pipeline for AOM postcard campaigns.

Current pilot:
- Use Marinas.com as a city/source signal for marina markets.
- Search Google Places for marine fire protection prospects near those cities.
- Enrich with Google Place details.
- Run PageSpeed Insights on websites when available.
- Try light email discovery from website home/contact pages.
- Export a CSV suitable for manual review before site generation/postcards.

Required .env keys:
- GOOGLE_PLACES_API_KEY
- GOOGLE_PAGESPEED_API_KEY

This script does not deploy websites or send postcards.
"""

from __future__ import annotations

import argparse
import csv
import json
import os
import re
import ssl
import time
from dataclasses import dataclass, asdict
from html.parser import HTMLParser
from pathlib import Path
from typing import Iterable
from urllib.parse import urlencode, urljoin, urlparse
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError


ROOT = Path(__file__).resolve().parent
OUTPUT_DIR = ROOT / "campaign-output"
USER_AGENT = "Mozilla/5.0 (compatible; AOMLeadResearch/1.0)"
SSL_CONTEXT: ssl.SSLContext | None = None

MARINAS_US_STATES = {
    "CA": "California",
    "FL": "Florida",
    "TX": "Texas",
    "NY": "New York",
    "NJ": "New Jersey",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "WA": "Washington",
    "NC": "North Carolina",
    "SC": "South Carolina",
    "VA": "Virginia",
    "RI": "Rhode Island",
    "CT": "Connecticut",
    "LA": "Louisiana",
}

SEARCH_TERMS = [
    "marine fire protection",
    "fire suppression marine",
    "fire extinguisher service marine",
    "boat fire suppression",
    "fire protection company marina",
]

EMAIL_RE = re.compile(
    r"\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b",
    re.IGNORECASE,
)


def load_env(path: Path = ROOT / ".env") -> None:
    if not path.exists():
        return
    for line in path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))


def fetch_text(url: str, timeout: int = 25) -> str:
    req = Request(url, headers={"User-Agent": USER_AGENT})
    with urlopen(req, timeout=timeout, context=SSL_CONTEXT) as response:
        return response.read().decode("utf-8", errors="replace")


def fetch_json(url: str, params: dict, timeout: int = 30) -> dict:
    full_url = f"{url}?{urlencode(params, doseq=True)}"
    return json.loads(fetch_text(full_url, timeout=timeout))


class LinkTextParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.links: list[tuple[str, str]] = []
        self._href: str | None = None
        self._text: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag.lower() == "a":
            attrs_dict = dict(attrs)
            self._href = attrs_dict.get("href")
            self._text = []

    def handle_data(self, data: str) -> None:
        if self._href is not None:
            self._text.append(data)

    def handle_endtag(self, tag: str) -> None:
        if tag.lower() == "a" and self._href is not None:
            text = " ".join("".join(self._text).split())
            self.links.append((self._href, text))
            self._href = None
            self._text = []


def extract_marina_cities(states: Iterable[str], limit_per_state: int) -> list[dict]:
    rows: list[dict] = []
    seen: set[tuple[str, str]] = set()

    for state in states:
        state = state.upper()
        url = f"https://marinas.com/browse/marina/US/{state}"
        print(f"Reading marina city seeds: {url}")
        html = fetch_text(url)
        parser = LinkTextParser()
        parser.feed(html)

        # Marinas.com state pages expose city links near "Explore other Marinas".
        for href, text in parser.links:
            path = urlparse(href).path if href.startswith("http") else href
            if not path.startswith("/browse/marina/US/"):
                continue
            parts = path.strip("/").split("/")
            if len(parts) < 5:
                continue
            city = text.strip()
            if not city or city == MARINAS_US_STATES.get(state):
                continue
            if city.lower() in {"next", "previous", "prev", "last", "first"}:
                continue
            key = (city.lower(), state)
            if key in seen:
                continue
            seen.add(key)
            rows.append({"city": city, "state": state, "source": url})
            if limit_per_state and sum(1 for r in rows if r["state"] == state) >= limit_per_state:
                break

    return rows


def google_text_search(query: str, api_key: str) -> list[dict]:
    data = fetch_json(
        "https://maps.googleapis.com/maps/api/place/textsearch/json",
        {"query": query, "key": api_key},
    )
    status = data.get("status")
    if status not in {"OK", "ZERO_RESULTS"}:
        print(f"Places search status for '{query}': {status} {data.get('error_message', '')}")
    return data.get("results", [])


def google_place_details(place_id: str, api_key: str) -> dict:
    fields = [
        "place_id",
        "name",
        "formatted_address",
        "formatted_phone_number",
        "international_phone_number",
        "website",
        "url",
        "rating",
        "user_ratings_total",
        "business_status",
        "types",
    ]
    data = fetch_json(
        "https://maps.googleapis.com/maps/api/place/details/json",
        {"place_id": place_id, "fields": ",".join(fields), "key": api_key},
    )
    if data.get("status") != "OK":
        print(f"Place details status for {place_id}: {data.get('status')} {data.get('error_message', '')}")
    return data.get("result", {})


def pagespeed_score(url: str, api_key: str) -> tuple[str, str]:
    if not url:
        return "", "No Website"
    try:
        data = fetch_json(
            "https://www.googleapis.com/pagespeedonline/v5/runPagespeed",
            {"url": url, "key": api_key, "strategy": "mobile", "category": "performance"},
            timeout=45,
        )
        score = data.get("lighthouseResult", {}).get("categories", {}).get("performance", {}).get("score")
        if score is None:
            return "", "PSI Error"
        numeric = round(score * 100)
        if numeric < 50:
            status = "Poor Mobile PSI"
        elif numeric < 80:
            status = "OK Mobile PSI"
        else:
            status = "Good Mobile PSI"
        return str(numeric), status
    except Exception as exc:
        return "", f"PSI Error: {str(exc)[:80]}"


def likely_contact_links(base_url: str, html: str) -> list[str]:
    parser = LinkTextParser()
    parser.feed(html)
    links: list[str] = []
    for href, text in parser.links:
        label = f"{href} {text}".lower()
        if any(word in label for word in ["contact", "about", "service", "quote"]):
            absolute = urljoin(base_url, href)
            if urlparse(absolute).netloc == urlparse(base_url).netloc:
                links.append(absolute)
    return list(dict.fromkeys(links))[:3]


def discover_emails(website: str) -> str:
    if not website:
        return ""
    urls_to_check = [website]
    found: set[str] = set()
    try:
        html = fetch_text(website, timeout=6)
        found.update(EMAIL_RE.findall(html))
        urls_to_check.extend(likely_contact_links(website, html))
    except Exception:
        return ""

    for url in urls_to_check[1:]:
        try:
            found.update(EMAIL_RE.findall(fetch_text(url, timeout=6)))
        except Exception:
            continue
    blocked_domains = (
        "sentry.io",
        "sentry.wixpress.com",
        "sentry-next.wixpress.com",
        "example.com",
    )
    clean = sorted(
        email
        for email in found
        if not email.lower().endswith((".png", ".jpg", ".jpeg", ".webp"))
        and not any(email.lower().endswith("@" + domain) for domain in blocked_domains)
    )
    return "; ".join(clean[:3])


@dataclass
class LeadRow:
    industry: str
    seed_city: str
    seed_state: str
    search_query: str
    company_name: str
    address: str
    phone: str
    email: str
    website: str
    google_maps_url: str
    rating: str
    review_count: str
    business_status: str
    place_id: str
    psi_mobile_score: str
    lead_status: str
    visual_review_status: str
    visual_notes: str
    build_demo: str
    postcard_ready: str


def build_leads(cities: list[dict], max_places_per_query: int, include_email: bool, search_terms: list[str], skip_pagespeed: bool) -> list[LeadRow]:
    places_key = os.getenv("GOOGLE_PLACES_API_KEY") or os.getenv("GOOGLE_MAPS_API_KEY")
    psi_key = os.getenv("GOOGLE_PAGESPEED_API_KEY")
    if not places_key:
        raise SystemExit("ERROR: GOOGLE_PLACES_API_KEY or GOOGLE_MAPS_API_KEY is required in .env")
    if not psi_key:
        raise SystemExit("ERROR: GOOGLE_PAGESPEED_API_KEY is required in .env")

    leads: list[LeadRow] = []
    seen_place_ids: set[str] = set()

    for city in cities:
        city_name = city["city"]
        state = city["state"]
        for term in search_terms:
            query = f"{term} near {city_name}, {state}"
            print(f"Searching: {query}")
            places = google_text_search(query, places_key)[:max_places_per_query]
            for place in places:
                place_id = place.get("place_id", "")
                if not place_id or place_id in seen_place_ids:
                    continue
                seen_place_ids.add(place_id)
                details = google_place_details(place_id, places_key)
                website = details.get("website", "")
                if skip_pagespeed:
                    score, status = "", "Not Scored"
                else:
                    score, status = pagespeed_score(website, psi_key)
                email = discover_emails(website) if include_email and website else ""
                if not website:
                    status = "No Website"
                leads.append(
                    LeadRow(
                        industry="Marine Fire Protection",
                        seed_city=city_name,
                        seed_state=state,
                        search_query=query,
                        company_name=details.get("name", place.get("name", "")),
                        address=details.get("formatted_address", place.get("formatted_address", "")),
                        phone=details.get("formatted_phone_number") or details.get("international_phone_number", ""),
                        email=email,
                        website=website,
                        google_maps_url=details.get("url", ""),
                        rating=str(details.get("rating", place.get("rating", ""))),
                        review_count=str(details.get("user_ratings_total", place.get("user_ratings_total", ""))),
                        business_status=details.get("business_status", place.get("business_status", "")),
                        place_id=place_id,
                        psi_mobile_score=score,
                        lead_status=status,
                        visual_review_status="",
                        visual_notes="",
                        build_demo="",
                        postcard_ready="",
                    )
                )
                time.sleep(0.4)
            time.sleep(0.6)
    return leads


def write_csv(rows: list[LeadRow], output: Path) -> None:
    output.parent.mkdir(parents=True, exist_ok=True)
    with output.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=list(asdict(rows[0]).keys()) if rows else [field.name for field in LeadRow.__dataclass_fields__.values()])
        writer.writeheader()
        for row in rows:
            writer.writerow(asdict(row))


def main() -> None:
    parser = argparse.ArgumentParser(description="Build marine fire protection lead list.")
    parser.add_argument("--states", default="CA", help="Comma-separated state abbreviations for marina city seeds.")
    parser.add_argument("--cities", default="", help="Optional explicit city list, e.g. 'Long Beach CA; Newport Beach CA'.")
    parser.add_argument("--limit-per-state", type=int, default=8)
    parser.add_argument("--max-places-per-query", type=int, default=5)
    parser.add_argument("--include-email", action="store_true")
    parser.add_argument("--search-terms", default=",".join(SEARCH_TERMS), help="Comma-separated Google Places search terms.")
    parser.add_argument("--skip-pagespeed", action="store_true", help="Create the lead list without PageSpeed scoring.")
    parser.add_argument("--allow-insecure-ssl", action="store_true", help="Disable SSL verification for local Windows cert-chain issues.")
    parser.add_argument("--output", default=str(OUTPUT_DIR / "marine-fire-protection-leads.csv"))
    args = parser.parse_args()

    load_env()

    global SSL_CONTEXT
    if args.allow_insecure_ssl:
        SSL_CONTEXT = ssl._create_unverified_context()
        print("WARNING: SSL verification disabled for this run due to local certificate-chain issues.")

    if args.cities:
        cities = []
        for raw in args.cities.split(";"):
            raw = raw.strip()
            if not raw:
                continue
            parts = raw.rsplit(" ", 1)
            if len(parts) != 2:
                raise SystemExit(f"City must end with state abbreviation: {raw}")
            cities.append({"city": parts[0].strip().rstrip(","), "state": parts[1].strip().upper(), "source": "manual"})
    else:
        states = [state.strip().upper() for state in args.states.split(",") if state.strip()]
        cities = extract_marina_cities(states, args.limit_per_state)

    seed_city_text = ", ".join([f"{city['city']}, {city['state']}" for city in cities])
    print(f"Seed cities: {seed_city_text}")
    search_terms = [term.strip() for term in args.search_terms.split(",") if term.strip()]
    leads = build_leads(cities, args.max_places_per_query, args.include_email, search_terms, args.skip_pagespeed)
    leads.sort(key=lambda row: (row.lead_status not in {"No Website", "Poor Mobile PSI"}, row.psi_mobile_score or "999", row.company_name))
    output = Path(args.output)
    write_csv(leads, output)
    print(f"Wrote {len(leads)} leads to {output}")


if __name__ == "__main__":
    main()
