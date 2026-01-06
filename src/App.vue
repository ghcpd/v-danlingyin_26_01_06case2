<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <NavigationBar />
    <main class="flex-1">
      <RouterView />
    </main>
    <FooterBar />
  </div>
</template>

<style scoped>
</style>
