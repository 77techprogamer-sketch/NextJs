#!/bin/bash
# Batch submit all blog posts and pages to search engines
# Run daily via cron: 0 6 * * * /path/to/this/script

HOST="insurancesupport.online"
API_URL="https://${HOST}/api/seo/batch-submit"

echo "[$(date)] Starting batch SEO submission..."

# Trigger batch submission
RESPONSE=$(curl -s -X POST "${API_URL}" \
  -H "Content-Type: application/json" \
  -d '{"onlyNew": true}')

echo "[$(date)] Response: ${RESPONSE}"

# Also ping the auto-submit for the homepage
curl -s -X POST "https://${HOST}/api/seo/auto-submit" \
  -H "Content-Type: application/json" \
  -d "{\"url\": \"https://${HOST}/\"}" > /dev/null 2>&1

echo "[$(date)] Batch submission complete."
