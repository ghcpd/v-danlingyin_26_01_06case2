<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Artwork } from '@/data/artworks'

defineProps<{
  artwork: Artwork
}>()
</script>

<template>
  <article class="artwork-card">
    <RouterLink 
      :to="`/gallery/${artwork.id}`" 
      class="card-link"
      :aria-label="`View details of ${artwork.title}, ${artwork.year}`"
    >
      <figure class="card-figure">
        <div class="image-wrapper">
          <img
            :src="artwork.image"
            :alt="artwork.title"
            class="card-image"
            loading="lazy"
          />
        </div>
        <figcaption class="card-caption">
          <h3 class="card-title">{{ artwork.title }}</h3>
          <p class="card-year">{{ artwork.year }}</p>
        </figcaption>
      </figure>
    </RouterLink>
  </article>
</template>

<style scoped>
.artwork-card {
  background-color: var(--color-white);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.artwork-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.card-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.card-link:focus-visible {
  outline: 2px solid var(--color-muted-brown);
  outline-offset: 2px;
}

.card-figure {
  margin: 0;
}

.image-wrapper {
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background-color: var(--color-beige);
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);
}

.artwork-card:hover .card-image {
  transform: scale(1.05);
}

.card-caption {
  padding: var(--spacing-md) var(--spacing-lg);
  text-align: center;
}

.card-title {
  font-family: var(--font-serif);
  font-size: 1.125rem;
  font-weight: 400;
  color: var(--color-dark-brown);
  margin-bottom: var(--spacing-xs);
}

.card-year {
  font-size: 0.875rem;
  color: var(--color-text-light);
  margin: 0;
}

@media (max-width: 640px) {
  .card-caption {
    padding: var(--spacing-sm) var(--spacing-md);
  }

  .card-title {
    font-size: 1rem;
  }
}
</style>
