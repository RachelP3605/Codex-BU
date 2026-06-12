#!/bin/bash

# PageSpeed Insights Analysis Script
# Reads CSV and analyzes all URLs

CSV_FILE="C:\Users\rache\Downloads\Test Plumbers.csv"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$SCRIPT_DIR/.env"
if [ -f "$ENV_FILE" ]; then
    set -a
    # shellcheck disable=SC1090
    source "$ENV_FILE"
    set +a
fi

: "${GOOGLE_PAGESPEED_API_KEY:?Set GOOGLE_PAGESPEED_API_KEY in .env before running analyze_psi.sh}"
API_KEY="$GOOGLE_PAGESPEED_API_KEY"
OUTPUT_FILE="C:\Users\rache\Downloads\PageSpeed_Results.csv"

# Temporary file for results
TEMP_FILE="/tmp/psi_results.txt"
> "$TEMP_FILE"

echo "=========================================================="
echo "PAGESPEED INSIGHTS ANALYSIS - BAY AREA PLUMBERS"
echo "=========================================================="
echo ""

# Counter
count=0
total=0

# Read CSV and process each line
tail -n +2 "$CSV_FILE" | while IFS=',' read -r name category phone website address rating reviews years claimed profileurl; do
    # Skip empty lines
    [ -z "$website" ] && continue

    total=$((total + 1))

    # Clean up the website field (remove quotes)
    website=$(echo "$website" | sed 's/^"//;s/"$//')
    name=$(echo "$name" | sed 's/^"//;s/"$//')
    phone=$(echo "$phone" | sed 's/^"//;s/"$//')
    address=$(echo "$address" | sed 's/^"//;s/"$//')

    # Skip non-HTTP URLs and ones that are just directory pages
    if [[ ! "$website" =~ ^https?:// ]]; then
        website="http://$website"
    fi

    echo "[$total] Analyzing: $name - $website"

    # Call PageSpeed API
    response=$(curl -s -k "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=$(echo -n "$website" | jq -sRr @uri)&key=$API_KEY" 2>/dev/null)

    # Extract performance score
    perf_score=$(echo "$response" | jq -r '.lighthouseResult.categories.performance.score // 0' 2>/dev/null)
    perf_score=$(echo "$perf_score * 100" | bc 2>/dev/null || echo "0")

    # Determine status
    if (( $(echo "$perf_score >= 80" | bc -l) )); then
        status="Good"
    elif (( $(echo "$perf_score >= 50" | bc -l) )); then
        status="OK"
    elif (( $(echo "$perf_score > 0" | bc -l) )); then
        status="Poor"
    else
        status="Dead"
    fi

    # Output
    printf "%-40s | %-15s | %6.1f | %-8s | %s\n" "$name" "$phone" "$perf_score" "$status" "$website" >> "$TEMP_FILE"

    sleep 1  # Rate limiting
done

# Sort by score (worst first)
echo "Name                                     | Phone           | Score | Status   | Website" > "$OUTPUT_FILE"
echo "=========================================================================================" >> "$OUTPUT_FILE"
sort -t'|' -k3 -n "$TEMP_FILE" >> "$OUTPUT_FILE"

# Display results
cat "$OUTPUT_FILE"

echo ""
echo "Results saved to: $OUTPUT_FILE"
