# Leonardo da Vinci — Art & Mind

A cultural promotion website introducing Leonardo da Vinci's life, artistic works, and influence. This project showcases Leonardo's masterpieces and explores his legacy as the quintessential Renaissance man.

## 🎨 Project Overview

This is an educational, museum-like website designed to present Leonardo da Vinci's artistic achievements and historical significance in a respectful, visually compelling manner. The website features:

- **Informational Content**: Biography, historical context, and artistic analysis
- **Artwork Gallery**: Browse Leonardo's most celebrated works
- **Detailed Artwork Views**: In-depth information about each masterpiece
- **Exhibition Information**: Practical visitor details (fictional)
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing

### Artistic & Cultural Concept

The design philosophy emphasizes:
- **Minimalist aesthetics** inspired by museum exhibitions
- **Neutral color palette** (white, beige, gray, muted brown) to let the artworks speak
- **Typography** using serif fonts for cultural sophistication
- **Calm, focused browsing** without distracting animations
- **Accessibility** and semantic HTML for inclusive user experience

## 🛠️ Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Language**: TypeScript (strict mode enabled)
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **Styling**: Tailwind CSS
- **Routing**: Vue Router (with lazy-loaded routes)
- **State Management**: Local component state (no external store needed)

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)

### Steps

1. **Clone or navigate to the project directory**

2. **Install dependencies**
   ```bash
   pnpm install
   ```

## 🚀 Development Usage

Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

### Type Checking

Run TypeScript type checking without emitting files:

```bash
pnpm type-check
```

## 🏗️ Build Instructions

Build for production:

```bash
pnpm build
```

This will:
1. Run TypeScript compilation (`vue-tsc`)
2. Generate optimized production build in the `dist/` directory

### Preview Production Build

Preview the production build locally:

```bash
pnpm preview
```

## 📁 Project Structure

```
leonardo-davinci-website/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable Vue components
│   │   ├── NavigationBar.vue    # Top navigation with responsive menu
│   │   ├── FooterBar.vue        # Footer with project info
│   │   └── ArtworkCard.vue      # Gallery item card component
│   ├── data/              # Static data
│   │   └── artworks.ts          # Artwork data (4 masterpieces)
│   ├── pages/             # Page components (lazy-loaded)
│   │   ├── HomePage.vue         # Landing page with hero & featured works
│   │   ├── AboutPage.vue        # Leonardo's biography & context
│   │   ├── GalleryPage.vue      # Grid of all artworks
│   │   ├── ArtworkDetailPage.vue # Individual artwork view
│   │   └── ExhibitionPage.vue   # Visitor information
│   ├── router/            # Vue Router configuration
│   │   └── index.ts             # Route definitions
│   ├── App.vue            # Root component with layout
│   ├── main.ts            # Application entry point
│   ├── style.css          # Global styles & Tailwind imports
│   └── vite-env.d.ts      # Vite type declarations
├── index.html             # HTML entry point
├── package.json           # Dependencies & scripts
├── tsconfig.json          # TypeScript configuration (strict mode)
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── postcss.config.js      # PostCSS configuration
```

## 📄 Page-by-Page Features

### 1. **Home Page** (`/`)
- **Hero Section**: Large title with subtitle
- **Introduction**: Brief overview of Leonardo da Vinci
- **Featured Artworks**: 3 highlighted works (Mona Lisa, The Last Supper, Vitruvian Man)
- **Navigation Cards**: Entry points to About, Gallery, and Exhibition pages

### 2. **About Leonardo** (`/about`)
- **Early Life**: Biography and upbringing
- **Renaissance Context**: Historical period overview
- **Interdisciplinary Genius**: Art, science, anatomy, and engineering achievements
- Vertical reading flow with clear section headings

### 3. **Artwork Gallery** (`/gallery`)
- **Responsive Grid Layout**: 1-4 columns based on screen size
- **4 Artworks Displayed**:
  - Mona Lisa (1503)
  - The Last Supper (1498)
  - Vitruvian Man (1490)
  - Lady with an Ermine (1490)
- Each card shows image, title, and year
- Hover effects for enhanced interactivity

### 4. **Artwork Detail** (`/gallery/:id`)
- **Dynamic Routing**: URL parameter determines which artwork to display
- **Large Image Display**: High-quality artwork viewing
- **Detailed Information**: Title, year, and comprehensive description
- **Back Navigation**: Return to gallery
- **Graceful Error Handling**: Fallback message for invalid IDs

### 5. **Exhibition Info** (`/exhibition`)
- **Exhibition Title**: Full event name
- **Location**: Renaissance Cultural Center (fictional)
- **Date Range**: March 1 - September 30, 2024
- **Opening Hours**: Tue-Sun, 10 AM - 6 PM
- **Disclaimer**: Educational purpose notice

## ♿ Accessibility Features

- **Semantic HTML**: Proper use of `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
- **ARIA Labels**: Descriptive labels for navigation and interactive elements
- **Keyboard Navigation**: Full keyboard support for all interactive components
- **Focus Indicators**: Visible focus states on all interactive elements
- **Heading Hierarchy**: Logical heading structure (h1 → h2 → h3)
- **Alt Text**: Descriptive alternative text for all artwork images
- **Color Contrast**: WCAG AA compliant color combinations

## 🎯 Manual UI Validation Checklist

### ✅ Functionality
- [ ] All navigation links work correctly
- [ ] Home page displays 3 featured artworks
- [ ] Gallery page shows all 4 artworks in a grid
- [ ] Clicking an artwork navigates to its detail page
- [ ] Artwork detail page displays correct information based on URL parameter
- [ ] Invalid artwork IDs show error message with "Return to Gallery" button
- [ ] "Back to Gallery" button on detail page returns to gallery
- [ ] Mobile menu opens/closes correctly on small screens

### ✅ Responsive Design
- [ ] Mobile (< 640px): Single column layout, hamburger menu visible
- [ ] Tablet (640px - 1024px): 2-column gallery grid
- [ ] Desktop (> 1024px): 3-4 column gallery grid, horizontal navigation
- [ ] All text remains readable at all screen sizes
- [ ] Images scale appropriately without distortion

### ✅ Visual Design
- [ ] Color palette is neutral and museum-like (beige, gray, brown)
- [ ] Typography uses serif fonts for headings
- [ ] No distracting animations (only subtle hover effects)
- [ ] Layout is clean and minimalist
- [ ] Artwork images load and display correctly

### ✅ Content Accuracy
- [ ] All content matches the specification exactly
- [ ] 4 artworks present: Mona Lisa, The Last Supper, Vitruvian Man, Lady with an Ermine
- [ ] Years are correct: 1503, 1498, 1490, 1490
- [ ] About page contains Early Life, Renaissance Context, and Interdisciplinary Genius sections
- [ ] Exhibition info includes location, dates, and hours
- [ ] Footer contains disclaimer about educational purpose

### ✅ TypeScript & Code Quality
- [ ] No TypeScript errors in console
- [ ] No `any` types used in code
- [ ] Strict mode enabled and respected
- [ ] All props properly typed
- [ ] Component composition follows Vue 3 best practices

### ✅ Performance
- [ ] Routes are lazy-loaded
- [ ] Images use `loading="lazy"` attribute
- [ ] Page transitions are smooth
- [ ] Initial page load is fast
- [ ] No console errors or warnings

## 🚫 Known Limitations

1. **No Backend**: All data is static and hardcoded in `artworks.ts`
2. **Image Hosting**: Uses external URLs (Wikimedia Commons) for artwork images
3. **No Search**: No search functionality for artworks
4. **Limited Artwork Set**: Only 4 artworks included per specification
5. **Fictional Exhibition**: Exhibition information is not real
6. **No Internationalization**: English only
7. **No Analytics**: No tracking or analytics included
8. **No Forms**: No contact forms or user input capabilities

## 📝 Design Decisions

### Why Tailwind CSS?
- Rapid development with utility classes
- Consistent design system out of the box
- Easy responsive design implementation
- Small production bundle size with purging

### Why Lazy-Loaded Routes?
- Improves initial load time
- Code splitting for better performance
- Only loads page components when needed

### Why No State Management Library?
- Simple, read-only data structure
- No complex state mutations needed
- Local component state sufficient
- Reduces bundle size and complexity

### Why External Image URLs?
- Educational fair use
- Avoids copyright complications
- High-quality museum sources
- Reduces project repository size

## 🤝 Contributing

This is an educational project created for demonstration purposes. Content and images are used for educational purposes only.

## 📄 License

This project is created for educational purposes. All artwork images belong to their respective copyright holders and are used under fair use for educational purposes.

---

**Built with ❤️ as a cultural tribute to Leonardo da Vinci**
