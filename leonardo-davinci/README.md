# Leonardo da Vinci — Art & Mind

A cultural promotion website introducing Leonardo da Vinci's life, artistic works, and influence. This educational project presents a museum-like digital experience celebrating the Renaissance master's contributions to art and science.

## 🎨 Artistic & Cultural Concept

This website is designed as a digital exhibition space that honors Leonardo da Vinci's legacy. The design philosophy embraces:

- **Museum-like aesthetics**: Clean, minimal layouts that let the artwork speak for itself
- **Calm, contemplative experience**: Neutral color palette (cream, beige, muted brown) creates a refined atmosphere
- **Educational focus**: Content prioritizes historical accuracy and cultural appreciation
- **Respectful presentation**: Typography and spacing reflect the dignity of the subject matter
- **Visual storytelling**: Each page guides visitors through Leonardo's world in a narrative sequence

The design draws inspiration from renowned art museums and cultural institutions, creating a digital space worthy of housing representations of history's most celebrated artworks.

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Vue 3** | UI framework with Composition API |
| **TypeScript** | Type-safe JavaScript (strict mode enabled) |
| **Vite** | Next-generation build tool |
| **Vue Router** | Client-side routing with lazy loading |
| **CSS Variables** | Design system and theming |
| **pnpm** | Fast, efficient package manager |

## 📦 Installation

Ensure you have Node.js (v18+) and pnpm installed on your system.

```bash
# Clone the repository (if applicable)
cd leonardo-davinci

# Install dependencies
pnpm install
```

## 🚀 Development

Start the development server with hot module replacement:

```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

## 🏗 Build

Create a production-ready build:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## 📁 Project Structure

```
leonardo-davinci/
├── public/
│   ├── favicon.svg           # Site favicon
│   └── images/               # Artwork images
│       ├── mona-lisa.jpg
│       ├── last-supper.jpg
│       ├── vitruvian-man.jpg
│       └── lady-ermine.jpg
├── src/
│   ├── components/           # Reusable Vue components
│   │   ├── AppHeader.vue     # Navigation header
│   │   ├── AppFooter.vue     # Site footer
│   │   ├── ArtworkCard.vue   # Gallery artwork card
│   │   └── HeroSection.vue   # Home page hero
│   ├── data/                 # Static data files
│   │   ├── artworks.ts       # Artwork database
│   │   └── exhibition.ts     # Exhibition information
│   ├── pages/                # Page components
│   │   ├── HomePage.vue      # Landing page
│   │   ├── AboutPage.vue     # Biography page
│   │   ├── GalleryPage.vue   # Artwork gallery
│   │   ├── ArtworkDetailPage.vue # Individual artwork view
│   │   ├── ExhibitionPage.vue    # Visitor information
│   │   └── NotFoundPage.vue  # 404 error page
│   ├── router/
│   │   └── index.ts          # Route configuration
│   ├── styles/
│   │   └── main.css          # Global styles & design system
│   ├── App.vue               # Root application component
│   ├── main.ts               # Application entry point
│   └── env.d.ts              # TypeScript declarations
├── index.html                # HTML entry point
├── package.json              # Dependencies & scripts
├── tsconfig.json             # TypeScript configuration
├── tsconfig.node.json        # Node TypeScript config
├── vite.config.ts            # Vite configuration
└── README.md                 # This file
```

## 📄 Page-by-Page Feature Description

### Home Page (`/`)

The landing page introduces visitors to the exhibition theme:

- **Hero Section**: Full-screen introduction with title "Leonardo da Vinci" and subtitle "Art, Science, and the Renaissance Mind"
- **Introduction Text**: Brief biographical overview establishing Leonardo's historical significance
- **Featured Artworks**: Grid showcase of 3 highlighted masterpieces with images and titles
- **Navigation Cards**: Quick access to About, Gallery, and Exhibition pages

### About Leonardo Page (`/about`)

Educational content exploring Leonardo's life and legacy:

- **Early Life**: Birth, childhood, and apprenticeship under Verrocchio
- **Renaissance Context**: Historical setting and cultural significance of the era
- **Interdisciplinary Genius**: Detailed sections on art, science, engineering, and natural philosophy
- Vertical reading flow with clear section headings

### Gallery Page (`/gallery`)

Visual browsing experience for Leonardo's artworks:

- **Responsive Grid**: 4-column layout on desktop, adapting to 3, 2, and 1 columns on smaller screens
- **Artwork Cards**: Each shows image, title, and year
- **Interactive Elements**: Hover effects and click-through to detail pages
- Current artworks: Mona Lisa, The Last Supper, Vitruvian Man, Lady with an Ermine

### Artwork Detail Page (`/gallery/:id`)

In-depth view of individual artworks:

- **Large Image Display**: Prominent artwork presentation with white framing
- **Metadata**: Title and year clearly displayed
- **Description**: Comprehensive historical and artistic context
- **Navigation**: Breadcrumb and back-to-gallery button
- **Error Handling**: Graceful fallback for invalid artwork IDs

### Exhibition Info Page (`/exhibition`)

Practical visitor information:

- **Exhibition Title**: "Leonardo da Vinci: Art, Science, and the Renaissance Mind"
- **Location**: The Renaissance Gallery, Florence Cultural Center
- **Date Range**: January 15, 2026 — June 30, 2026
- **Opening Hours**: Tuesday–Sunday schedule with late Thursday hours
- **Description**: Exhibition context and visitor expectations

## ✅ Manual UI Validation Checklist

### General

- [ ] Site loads without console errors
- [ ] All navigation links work correctly
- [ ] Footer appears on all pages
- [ ] Header navigation is consistent across pages
- [ ] Responsive design works on mobile (320px), tablet (768px), and desktop (1200px+)

### Home Page

- [ ] Hero section displays title and subtitle
- [ ] Introduction paragraph is visible
- [ ] Three featured artworks display correctly
- [ ] Navigation cards link to correct pages
- [ ] "Explore Gallery" and "Learn More" buttons work

### About Page

- [ ] Page title and subtitle display
- [ ] All three sections render (Early Life, Renaissance Context, Interdisciplinary Genius)
- [ ] Section headings have proper hierarchy (h2, h3)
- [ ] Text is readable with appropriate line height

### Gallery Page

- [ ] All 4 artworks display in grid
- [ ] Each card shows image, title, and year
- [ ] Hover effects work on artwork cards
- [ ] Clicking artwork navigates to detail page
- [ ] Grid is responsive across breakpoints

### Artwork Detail Page

- [ ] Correct artwork displays based on URL parameter
- [ ] Image, title, year, and description all render
- [ ] "Back to Gallery" links work
- [ ] Invalid ID (e.g., `/gallery/invalid`) shows fallback message

### Exhibition Page

- [ ] Exhibition title displays
- [ ] Location, dates, and hours are visible
- [ ] Description paragraph renders
- [ ] Card styling is consistent

### Accessibility

- [ ] Skip link appears on keyboard focus
- [ ] Tab navigation works through all interactive elements
- [ ] Focus states are visible
- [ ] Images have alt text
- [ ] Heading hierarchy is logical (h1 → h2 → h3)
- [ ] ARIA labels present on navigation and buttons

### Performance

- [ ] Routes are lazy-loaded (check network tab)
- [ ] Images use loading="lazy" attribute
- [ ] Page transitions are smooth
- [ ] No layout shift during loading

## ⚠️ Known Limitations

1. **Placeholder Images**: The current implementation uses SVG placeholders. In production, these would be replaced with actual high-resolution artwork images.

2. **Static Data Only**: All content is stored in static TypeScript files. No backend API or database integration.

3. **No Search Functionality**: The gallery does not include search or filtering capabilities.

4. **No Authentication**: As specified, no user accounts or login functionality exists.

5. **No Internationalization**: The site is English-only. Multi-language support would require additional implementation.

6. **Limited Browser Support**: Targets modern browsers (Chrome, Firefox, Safari, Edge). IE11 is not supported.

7. **No Analytics**: No tracking or analytics integration is included.

8. **Simplified Responsive Images**: The current implementation uses simple responsive CSS rather than `<picture>` elements with multiple source sizes.

## 📝 License

This project is created for educational purposes. All artwork information is presented for cultural appreciation and historical education.

---

*"Learning never exhausts the mind."* — Leonardo da Vinci
