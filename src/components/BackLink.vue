<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="back-link">
    <RouterLink class="button-link" to="/gallery" aria-label="Back to Gallery">← Back to Gallery</RouterLink>
  </div>
</template>

<style scoped>
.back-link {
  margin: 1rem 0 2rem;
}
</style>
