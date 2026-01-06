# Leonardo da Vinci — Art & Mind

## Project overview
A cultural promotion website introducing Leonardo da Vinci’s life, artistic works, and influence. The tone is cultural, respectful, educational, with a minimalist museum-inspired presentation using a neutral palette.

## Artistic & cultural concept
- Calm, gallery-like layout prioritizing reading comfort and artwork focus.
- Neutral beige/gray/brown palette with serif typography for a museum feel.
- Image-light except in gallery contexts to keep the experience contemplative.

## Tech stack
- Vite + Vue 3 (Composition API) + TypeScript (strict)
- Vue Router for multi-page navigation
- Plain CSS with design tokens in [src/styles/base.css](src/styles/base.css)
- Static data only (no backend)

## Installation
1. Install pnpm if needed: `npm install -g pnpm`
2. Install dependencies: `pnpm install`

## Development
- Start dev server: `pnpm dev`
- Type check: `pnpm typecheck`

## Build
- Production build: `pnpm build`
- Preview build: `pnpm preview`

## Project structure
- [src/main.ts](src/main.ts) mounts the app with global styles and router.
- [src/App.vue](src/App.vue) sets shell, skip link, header, footer.
- [src/router/index.ts](src/router/index.ts) defines lazy-loaded routes.
- [src/data/artworks.ts](src/data/artworks.ts) holds static artwork data and helpers.
- Pages: [src/pages/HomePage.vue](src/pages/HomePage.vue), [src/pages/AboutPage.vue](src/pages/AboutPage.vue), [src/pages/GalleryPage.vue](src/pages/GalleryPage.vue), [src/pages/ArtworkDetailPage.vue](src/pages/ArtworkDetailPage.vue), [src/pages/ExhibitionPage.vue](src/pages/ExhibitionPage.vue).
- Components: navigation, footer, cards, metadata tiles, section headers in [src/components](src/components).
- Assets: neutral SVG placeholders in [src/assets](src/assets).

## Page-by-page features
- Home: hero with title/subtitle, intro text, highlighted 3 artworks (image + title), navigation entry points to About, Gallery, Exhibition.
- About: vertical text sections for Early life, Renaissance context, Interdisciplinary genius (text-focused, minimal imagery).
- Gallery: grid of artworks showing image, title, year; cards link to detail pages.
- Artwork detail: large image, title, year, description paragraph, metadata tiles, Back to Gallery; invalid IDs show a fallback message.
- Exhibition: exhibition title, location (fictional), date range, opening hours, descriptive paragraph.

## Manual UI validation checklist
- Navigation bar visible on all pages; keyboard-focusable links and skip link work.
- Home hero shows required title/subtitle and intro text; highlight section shows exactly three artworks with image and title.
- About page presents the three required sections in a vertical reading flow.
- Gallery grid lists Mona Lisa, The Last Supper, Vitruvian Man, Lady with an Ermine with image, title, year; clicking opens detail.
- Artwork detail displays large image, title, year, description; fallback text appears for an invalid `/gallery/:id`.
- Exhibition page lists exhibition title, location (fictional), date range, opening hours, and a descriptive paragraph.
- Footer displays project title and educational disclaimer.
- Responsive layouts verified at mobile, tablet, desktop breakpoints.
- No forms, authentication, payments, or external APIs present.

## Known limitations
- Artwork descriptions and exhibition fields mirror specification text and placeholders; no external narrative content is added.
- Imagery uses local neutral SVG placeholders rather than historical reproductions.
- No additional accessibility testing tools run beyond manual checklist; recommend further audits.
