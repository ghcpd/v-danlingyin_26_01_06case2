<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-container container">
      <div class="hero-content">
        <h1 id="hero-title" class="hero-title">Leonardo da Vinci</h1>
        <p class="hero-subtitle">Art, Science, and the Renaissance Mind</p>
        <div class="hero-actions">
          <RouterLink to="/gallery" class="btn btn-primary">
            Explore Gallery
          </RouterLink>
          <RouterLink to="/about" class="btn btn-outline">
            Learn More
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="hero-decoration" aria-hidden="true"></div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    var(--color-cream) 0%,
    var(--color-beige) 50%,
    var(--color-light-gray) 100%
  );
  overflow: hidden;
}

.hero-container {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: var(--spacing-4xl) var(--spacing-lg);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 400;
  color: var(--color-dark-brown);
  margin-bottom: var(--spacing-md);
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-family: var(--font-serif);
  font-size: clamp(1rem, 3vw, 1.5rem);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-2xl);
  font-style: italic;
}

.hero-actions {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
}

.hero-decoration {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  border: 1px solid var(--color-light-gray);
  border-radius: 50%;
  opacity: 0.3;
}

.hero-decoration::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  border: 1px solid var(--color-light-gray);
  border-radius: 50%;
}

.hero-decoration::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border: 1px solid var(--color-light-gray);
  border-radius: 50%;
}

@media (max-width: 640px) {
  .hero {
    min-height: calc(80vh - var(--header-height));
  }

  .hero-container {
    padding: var(--spacing-2xl) var(--spacing-md);
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .hero-actions .btn {
    width: 100%;
    max-width: 280px;
  }

  .hero-decoration {
    width: 300px;
    height: 300px;
  }

  .hero-decoration::before {
    width: 200px;
    height: 200px;
  }

  .hero-decoration::after {
    width: 100px;
    height: 100px;
  }
}
</style>
