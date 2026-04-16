# Scrape Tools

## scrape-with-chrome.js

Launches a real Chrome browser via Playwright's `launchPersistentContext` to scrape sites with Cloudflare protection.

```bash
node tools/scrape-with-chrome.js <url> [waitSeconds] [timeoutMs]
```

**Arguments:**
- `url` - Target URL (default: https://www.visittheusa.com/)
- `waitSeconds` - Seconds to wait after load for Cloudflare verification (default: 8)
- `timeoutMs` - Total timeout in milliseconds (default: 60000)

**Usage for Cloudflare sites:**
1. Run the script
2. If Cloudflare verification appears, complete it manually in the Chrome window
3. Script will continue automatically after waitSeconds
4. Output JSON will be printed to stdout

**Chrome path:** `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`

**User data dir:** `/tmp/pw-chrome-<timestamp>` (auto-cleaned on macOS)
