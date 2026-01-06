<script setup lang="ts">
import { RouterView } from "vue-router";
import FooterBar from "./components/FooterBar.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <div class="app-shell">
    <NavBar />
    <main id="main-content">
      <RouterView />
    </main>
    <FooterBar />
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.skip-link {
  position: absolute;
  left: -999px;
  top: -999px;
  background: var(--accent);
  color: var(--bg);
  padding: 0.75rem 1rem;
  border-radius: 0 0 var(--radius) var(--radius);
  z-index: 20;
}

.skip-link:focus {
  left: 1rem;
  top: 1rem;
}
</style>
