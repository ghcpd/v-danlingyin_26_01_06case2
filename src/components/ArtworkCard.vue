<script setup lang="ts">
import { RouterLink } from "vue-router";
import type { Artwork } from "@/data/artworks";

interface Props {
  artwork: Artwork;
  to?: string;
  showYear?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showYear: true
});
</script>

<template>
  <article class="artwork-card card">
    <component :is="to ? RouterLink : 'div'" :to="to" class="card-body" :aria-label="artwork.title">
      <figure class="artwork-figure">
        <img :src="artwork.image" :alt="artwork.alt" loading="lazy" />
      </figure>
      <div class="artwork-meta">
        <h3>{{ artwork.title }}</h3>
        <p v-if="showYear" class="year">{{ artwork.year }}</p>
      </div>
    </component>
  </article>
</template>

<style scoped>
.artwork-card {
  padding: 0;
  overflow: hidden;
}

.card-body {
  display: block;
  color: inherit;
  text-decoration: none;
}

.artwork-figure {
  margin: 0;
  border-bottom: 1px solid var(--border);
  background: var(--card);
}

.artwork-figure img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.artwork-meta {
  padding: 1rem 1.1rem 1.2rem;
}

.artwork-meta h3 {
  margin: 0 0 0.35rem;
  font-size: 1.2rem;
}

.year {
  margin: 0;
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.9rem;
}
</style>
