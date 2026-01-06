<script setup lang="ts">
import { RouterLink } from 'vue-router'
import HeroSection from '@/components/HeroSection.vue'
import ArtworkCard from '@/components/ArtworkCard.vue'
import { getFeaturedArtworks } from '@/data/artworks'

const featuredArtworks = getFeaturedArtworks()
</script>

<template>
  <div class="home-page">
    <HeroSection />

    <section class="intro-section section" aria-labelledby="intro-title">
      <div class="container">
        <h2 id="intro-title" class="sr-only">Introduction</h2>
        <div class="intro-content">
          <p class="intro-text">
            Leonardo da Vinci (1452–1519) stands as one of the most diversely talented individuals 
            in human history. A polymath of the Renaissance, he excelled as a painter, sculptor, 
            architect, musician, mathematician, engineer, inventor, anatomist, geologist, botanist, 
            and writer. His genius epitomizes the Renaissance humanist ideal, and his works continue 
            to inspire wonder and scholarly fascination more than five centuries after his death.
          </p>
        </div>
      </div>
    </section>

    <section class="featured-section section" aria-labelledby="featured-title">
      <div class="container">
        <h2 id="featured-title" class="section-title">Featured Artworks</h2>
        <div class="featured-grid">
          <ArtworkCard 
            v-for="artwork in featuredArtworks" 
            :key="artwork.id" 
            :artwork="artwork" 
          />
        </div>
        <div class="featured-action">
          <RouterLink to="/gallery" class="btn btn-outline">
            View Full Gallery
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="navigation-section section" aria-labelledby="nav-section-title">
      <div class="container">
        <h2 id="nav-section-title" class="section-title">Explore the Exhibition</h2>
        <nav class="nav-grid" aria-label="Exhibition sections">
          <RouterLink to="/about" class="nav-card">
            <h3 class="nav-card-title">About Leonardo</h3>
            <p class="nav-card-text">
              Discover the life and legacy of the Renaissance master
            </p>
          </RouterLink>
          <RouterLink to="/gallery" class="nav-card">
            <h3 class="nav-card-title">Gallery</h3>
            <p class="nav-card-text">
              Explore Leonardo's most celebrated artistic works
            </p>
          </RouterLink>
          <RouterLink to="/exhibition" class="nav-card">
            <h3 class="nav-card-title">Exhibition Info</h3>
            <p class="nav-card-text">
              Plan your visit to the exhibition
            </p>
          </RouterLink>
        </nav>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  background-color: var(--color-cream);
}

/* Introduction Section */
.intro-section {
  background-color: var(--color-white);
}

.intro-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.intro-text {
  font-family: var(--font-serif);
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.8;
  color: var(--color-text);
}

/* Featured Section */
.featured-section {
  background-color: var(--color-cream);
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-2xl);
}

.featured-action {
  text-align: center;
}

/* Navigation Section */
.navigation-section {
  background-color: var(--color-beige);
}

.nav-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

.nav-card {
  display: block;
  background-color: var(--color-white);
  padding: var(--spacing-2xl);
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.nav-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.nav-card:focus-visible {
  outline: 2px solid var(--color-muted-brown);
  outline-offset: 2px;
}

.nav-card-title {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  color: var(--color-dark-brown);
  margin-bottom: var(--spacing-sm);
}

.nav-card-text {
  font-size: 0.9375rem;
  color: var(--color-text-light);
  margin: 0;
}

@media (max-width: 1024px) {
  .featured-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .featured-grid > :last-child {
    grid-column: span 2;
    max-width: 50%;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .nav-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  .nav-card {
    padding: var(--spacing-lg);
  }
}

@media (max-width: 640px) {
  .featured-grid {
    grid-template-columns: 1fr;
  }

  .featured-grid > :last-child {
    grid-column: span 1;
    max-width: 100%;
  }
}
</style>
