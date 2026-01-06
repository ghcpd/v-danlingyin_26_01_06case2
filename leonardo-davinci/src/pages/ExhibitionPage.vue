<script setup lang="ts">
import { exhibitionInfo } from '@/data/exhibition'
</script>

<template>
  <div class="exhibition-page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">Exhibition Info</h1>
        <p class="page-subtitle">Plan Your Visit</p>
      </div>
    </header>

    <section class="exhibition-content section" aria-labelledby="exhibition-details">
      <div class="container">
        <article class="exhibition-card">
          <h2 id="exhibition-details" class="exhibition-title">
            {{ exhibitionInfo.title }}
          </h2>

          <div class="exhibition-details">
            <div class="detail-item">
              <h3 class="detail-label">Location</h3>
              <p class="detail-value">{{ exhibitionInfo.location }}</p>
            </div>

            <div class="detail-item">
              <h3 class="detail-label">Exhibition Dates</h3>
              <p class="detail-value">{{ exhibitionInfo.dateRange }}</p>
            </div>

            <div class="detail-item">
              <h3 class="detail-label">Opening Hours</h3>
              <p class="detail-value">{{ exhibitionInfo.openingHours }}</p>
            </div>
          </div>

          <div class="exhibition-description">
            <h3 class="description-label">About the Exhibition</h3>
            <p class="description-text">{{ exhibitionInfo.description }}</p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.exhibition-page {
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

.exhibition-content {
  padding: var(--spacing-3xl) 0;
}

.exhibition-card {
  background-color: var(--color-white);
  max-width: 800px;
  margin: 0 auto;
  padding: var(--spacing-3xl);
  border-radius: 4px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.exhibition-title {
  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 400;
  color: var(--color-dark-brown);
  text-align: center;
  margin-bottom: var(--spacing-2xl);
  padding-bottom: var(--spacing-xl);
  border-bottom: 2px solid var(--color-muted-brown);
}

.exhibition-details {
  display: grid;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-2xl);
}

.detail-item {
  padding: var(--spacing-lg);
  background-color: var(--color-cream);
  border-radius: 4px;
}

.detail-label {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-muted-brown);
  margin-bottom: var(--spacing-sm);
}

.detail-value {
  font-family: var(--font-serif);
  font-size: 1.125rem;
  color: var(--color-text);
  margin: 0;
  line-height: 1.6;
}

.exhibition-description {
  padding-top: var(--spacing-xl);
  border-top: 1px solid var(--color-beige);
}

.description-label {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--color-muted-brown);
  margin-bottom: var(--spacing-md);
}

.description-text {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-text);
  margin: 0;
}

@media (max-width: 640px) {
  .page-header {
    padding: var(--spacing-2xl) 0;
  }

  .exhibition-content {
    padding: var(--spacing-2xl) 0;
  }

  .exhibition-card {
    padding: var(--spacing-xl);
  }

  .detail-item {
    padding: var(--spacing-md);
  }

  .detail-value {
    font-size: 1rem;
  }
}
</style>
