<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { getArtworkById } from '@/data/artworks'

const route = useRoute()

const artworkId = computed(() => {
  const id = route.params.id
  return typeof id === 'string' ? id : ''
})

const artwork = computed(() => {
  return getArtworkById(artworkId.value)
})
</script>

<template>
  <div class="artwork-detail-page">
    <template v-if="artwork">
      <article class="artwork-article">
        <header class="artwork-header">
          <div class="container">
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <RouterLink to="/gallery" class="breadcrumb-link">
                ← Back to Gallery
              </RouterLink>
            </nav>
          </div>
        </header>

        <div class="artwork-content">
          <div class="container">
            <div class="artwork-layout">
              <figure class="artwork-figure">
                <div class="image-wrapper">
                  <img
                    :src="artwork.image"
                    :alt="artwork.title"
                    class="artwork-image"
                  />
                </div>
              </figure>

              <div class="artwork-info">
                <h1 class="artwork-title">{{ artwork.title }}</h1>
                <p class="artwork-year">
                  <span class="label">Year:</span> {{ artwork.year }}
                </p>
                <div class="artwork-description">
                  <h2 class="description-title">About this work</h2>
                  <p>{{ artwork.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer class="artwork-footer">
          <div class="container">
            <RouterLink to="/gallery" class="btn btn-outline">
              ← Back to Gallery
            </RouterLink>
          </div>
        </footer>
      </article>
    </template>

    <template v-else>
      <div class="not-found-content">
        <div class="container">
          <div class="not-found-message">
            <h1 class="not-found-title">Artwork Not Found</h1>
            <p class="not-found-text">
              We couldn't find the artwork you're looking for. It may have been removed 
              or the link may be incorrect.
            </p>
            <RouterLink to="/gallery" class="btn btn-primary">
              Return to Gallery
            </RouterLink>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.artwork-detail-page {
  background-color: var(--color-cream);
  min-height: calc(100vh - var(--header-height));
}

/* Header */
.artwork-header {
  background-color: var(--color-white);
  padding: var(--spacing-lg) 0;
  border-bottom: 1px solid var(--color-beige);
}

.breadcrumb-link {
  font-size: 0.9375rem;
  color: var(--color-muted-brown);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.breadcrumb-link:hover {
  color: var(--color-dark-brown);
}

.breadcrumb-link:focus-visible {
  outline: 2px solid var(--color-muted-brown);
  outline-offset: 2px;
}

/* Content */
.artwork-content {
  padding: var(--spacing-3xl) 0;
}

.artwork-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: start;
}

/* Figure */
.artwork-figure {
  margin: 0;
}

.image-wrapper {
  background-color: var(--color-white);
  padding: var(--spacing-lg);
  border-radius: 4px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.artwork-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Info */
.artwork-info {
  padding-top: var(--spacing-md);
}

.artwork-title {
  font-family: var(--font-serif);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 400;
  color: var(--color-dark-brown);
  margin-bottom: var(--spacing-md);
}

.artwork-year {
  font-size: 1.125rem;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-xl);
}

.artwork-year .label {
  color: var(--color-gray);
}

.description-title {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--color-muted-brown);
  margin-bottom: var(--spacing-md);
}

.artwork-description p {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-text);
}

/* Footer */
.artwork-footer {
  padding: var(--spacing-2xl) 0;
  border-top: 1px solid var(--color-beige);
}

/* Not Found State */
.not-found-content {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - var(--header-height) - 200px);
  padding: var(--spacing-3xl) 0;
}

.not-found-message {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.not-found-title {
  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 400;
  color: var(--color-dark-brown);
  margin-bottom: var(--spacing-md);
}

.not-found-text {
  font-size: 1rem;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-xl);
  line-height: 1.7;
}

@media (max-width: 900px) {
  .artwork-layout {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }

  .artwork-info {
    padding-top: 0;
  }
}

@media (max-width: 640px) {
  .artwork-content {
    padding: var(--spacing-2xl) 0;
  }

  .image-wrapper {
    padding: var(--spacing-md);
  }

  .artwork-footer {
    padding: var(--spacing-xl) 0;
  }
}
</style>
