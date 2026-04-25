# ARCHITECTURE DECISIONS

## [ADR-001] Framework Selection
**Decision**: Use Next.js 15+ App Router with TypeScript.
**Rationale**: Modern standard for Vercel deployment, excellent performance, and built-in optimization.
**Rejected Alternative**: Vite-based SPA. Reason: Next.js provides better SEO and Vercel-native features.
**Consequences**: Requires standard App Router patterns (layouts, server vs client components).

## [ADR-002] Styling Strategy
**Decision**: Vanilla CSS Modules.
**Rationale**: User requested vanilla CSS and maximum flexibility. No black/dark colors constraint is easier to manage with a central CSS variables system.
**Rejected Alternative**: Tailwind CSS. Reason: Explicitly avoided as per user instructions and governance rules.

## [ADR-003] Icon Library
**Decision**: Lucide-React.
**Rationale**: Lightweight, customizable, and covers all requested iconography (Healthcare, Tech, etc.).

## [ADR-004] Typography
**Decision**: Outfit (Primary) and Inter (Secondary) via Google Fonts.
**Rationale**: High-end, clean, and modern "AI" aesthetic.
**Trade-offs**: Requires font loading config in Next.js.

## [ADR-005] Navigation System
**Decision**: React-based Mega Menu with hover interaction and sticky glassmorphic header.
**Rationale**: Matches the complex architecture provided. Using `framer-motion` for smooth transitions.

## [ADR-006] Hero Layout and Accent Colors
**Decision**: Move Hero heading onto video background with a `sunrise-amber` (orange) highlight box.
**Rationale**: Enhances visual hierarchy by placing the primary message over the immersive video while ensuring legibility through a high-contrast background highlight.
**Trade-offs**: Introduces a strong secondary color (`amber`) into the primarily `sky-blue` aesthetic.
