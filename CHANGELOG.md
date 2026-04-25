# Changelog

## [2026-04-25] - Optimization & Integration

### Added
- Secure API route for Telegram form submissions.
- `.env.local` for sensitive credential management.
- Newsletter and Talent Community form logic.

### Changed
- Refactored all website forms (Contact, Partnership) to route to Telegram.
- Optimized global image infrastructure with responsive `sizes` and `AVIF/WebP` support.
- Performance tuned Hero section (video preloading and prioritized posters).
- Replaced broken Unsplash and slow `loremflickr` assets.
- Refactored Hero section to move heading onto video with an orange (`sunrise-amber`) highlight box.

### Fixed
- Multiple 404 image errors in Leadership and Industries sections.
- Hero video blocking initial page render.
