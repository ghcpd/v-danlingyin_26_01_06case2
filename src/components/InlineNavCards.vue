<script setup lang="ts">
import { RouterLink } from "vue-router";

interface LinkCard {
  title: string;
  to: string;
  description: string;
}

defineProps<{ links: LinkCard[] }>();
</script>

<template>
  <div class="grid two">
    <RouterLink v-for="link in links" :key="link.to" :to="link.to" class="nav-card card" :aria-label="link.title">
      <p class="nav-eyebrow">Navigate</p>
      <h3>{{ link.title }}</h3>
      <p class="nav-desc">{{ link.description }}</p>
    </RouterLink>
  </div>
</template>

<style scoped>
.nav-card {
  display: block;
  transition: border-color 120ms ease, transform 120ms ease;
}

.nav-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

.nav-eyebrow {
  margin: 0 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.8rem;
  color: var(--muted);
}

.nav-desc {
  margin: 0.2rem 0 0;
  color: var(--muted);
}
</style>
