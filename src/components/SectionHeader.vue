<script setup lang="ts">
interface Props {
  title: string;
  subtitle?: string;
}

withDefaults(defineProps<Props>(), {
  subtitle: ""
});
</script>

<template>
  <header class="page-section">
    <h2 class="section-title">{{ title }}</h2>
    <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
  </header>
</template>

<style scoped>
header {
  margin-bottom: 1rem;
}
</style>
