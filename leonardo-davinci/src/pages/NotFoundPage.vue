<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="not-found-page">
    <div class="container">
      <div class="not-found-content">
        <h1 class="not-found-title">Page Not Found</h1>
        <p class="not-found-text">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <RouterLink to="/" class="btn btn-primary">
          Return to Home
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - var(--header-height) - 200px);
  background-color: var(--color-cream);
  padding: var(--spacing-4xl) 0;
}

.not-found-content {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.not-found-title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 400;
  color: var(--color-dark-brown);
  margin-bottom: var(--spacing-md);
}

.not-found-text {
  font-size: 1.125rem;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-2xl);
  line-height: 1.7;
}
</style>
