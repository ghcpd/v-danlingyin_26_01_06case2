<script setup lang="ts">
import ArtworkCard from '@/components/ArtworkCard.vue'
import { artworks } from '@/data/artworks'
</script>

<template>
  <div class="gallery-page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">Gallery</h1>
        <p class="page-subtitle">Explore Leonardo's Masterpieces</p>
      </div>
    </header>

    <section class="gallery-section section" aria-label="Artwork gallery">
      <div class="container">
        <div class="gallery-grid" role="list">
          <div 
            v-for="artwork in artworks" 
            :key="artwork.id" 
            class="gallery-item"
            role="listitem"
          >
            <ArtworkCard :artwork="artwork" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.gallery-page {
  background-color: var(--color-cream);
  min-height: calc(100vh - var(--header-height));
}

.page-header {
  background-color: var(--color-white);
  padding: var(--spacing-3xl) 0;
  text-align: center;
  border-bottom: 1px solid var(--color-beige);
}

.page-title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 400;
  color: var(--color-dark-brown);
  margin-bottom: var(--spacing-sm);
}

.page-subtitle {
  font-family: var(--font-serif);
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--color-text-light);
  font-style: italic;
  margin: 0;
}

.gallery-section {
  padding: var(--spacing-3xl) 0;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-xl);
}

.gallery-item {
  display: flex;
}

.gallery-item > * {
  width: 100%;
}

@media (max-width: 1200px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .page-header {
    padding: var(--spacing-2xl) 0;
  }

  .gallery-section {
    padding: var(--spacing-2xl) 0;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
}
</style>
