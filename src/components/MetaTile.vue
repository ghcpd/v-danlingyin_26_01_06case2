<script setup lang="ts">
interface Props {
  label: string;
  value: string;
}

defineProps<Props>();
</script>

<template>
  <div class="meta-tile card" role="presentation">
    <p class="label">{{ label }}</p>
    <p class="value">{{ value }}</p>
  </div>
</template>

<style scoped>
.meta-tile {
  padding: 1rem 1.2rem;
}

.label {
  margin: 0 0 0.3rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.8rem;
  color: var(--muted);
}

.value {
  margin: 0;
  font-weight: 600;
}
</style>
