# Error Log

## [2026-04-25]
### Symptom: Multiple images failing to load (404)
- **Root Cause**: Invalid alphanumeric Unsplash ID patterns and decommissioned `loremflickr` tags.
- **Fix**: Replaced with verified Unsplash photo IDs.
- **Prevention**: Use only validated Unsplash ID strings in the data layer.

### Symptom: High TBT (Total Blocking Time) on Hero
- **Root Cause**: 45MB Hero video preloading in `auto` mode.
- **Fix**: Changed to `metadata` preload and added prioritized background poster.
- **Prevention**: Large video assets should always use deferred loading patterns.
