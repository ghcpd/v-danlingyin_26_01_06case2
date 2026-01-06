<script setup lang="ts">
interface Props {
  heading: string;
  body: string;
}

defineProps<Props>();
</script>

<template>
  <section class="text-block card" role="article">
    <h3>{{ heading }}</h3>
    <p>{{ body }}</p>
  </section>
</template>

<style scoped>
.text-block h3 {
  margin: 0 0 0.5rem;
  letter-spacing: 0.04em;
}

.text-block p {
  margin: 0;
  color: var(--muted);
}
</style>
