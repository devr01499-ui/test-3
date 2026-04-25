# Error Log

## [2026-04-25]
### Symptom: Multiple images failing to load (404)
- **Root Cause**: Invalid alphanumeric Unsplash ID patterns and decommissioned `loremflickr` tags.
- **Fix**: Replaced with verified Unsplash photo IDs.
- **Prevention**: Use only validated Unsplash ID strings in the data layer.

### Symptom: Telegram forms not sending details
- **Root Cause**: Potential Markdown parsing errors due to special characters in user input (e.g., underscores in emails) and missing environment variables in certain environments.
- **Fix**: Switched Telegram `parse_mode` from `Markdown` to `HTML` and added HTML escaping for user input. Implemented hardcoded fallbacks for API Token and Chat ID to ensure functionality even without `.env` configuration.
- **Prevention**: Use HTML mode for Telegram bots when handling unpredictable user input.
