<script setup lang="ts">
import { computed, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

interface NavItem {
  label: string;
  to: string;
}

const links: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Exhibition", to: "/exhibition" }
];

const isOpen = ref(false);
const route = useRoute();

const activePath = computed(() => route.path);

function toggleMenu(): void {
  isOpen.value = !isOpen.value;
}

function closeMenu(): void {
  isOpen.value = false;
}
</script>

<template>
  <header class="nav-shell" role="banner">
    <div class="container nav-bar">
      <RouterLink to="/" class="brand" @click="closeMenu">
        <span class="brand-title">Leonardo da Vinci — Art &amp; Mind</span>
      </RouterLink>
      <button
        class="menu-toggle"
        type="button"
        aria-label="Toggle navigation"
        :aria-expanded="isOpen"
        @click="toggleMenu"
      >
        <span class="bar" aria-hidden="true"></span>
        <span class="bar" aria-hidden="true"></span>
        <span class="bar" aria-hidden="true"></span>
      </button>
      <nav class="nav-links" aria-label="Primary">
        <ul :class="['link-list', { open: isOpen }]">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="nav-link"
              :class="{ active: activePath === link.to }"
              @click="closeMenu"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav-shell {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(245, 242, 235, 0.96);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(8px);
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.25rem;
  gap: 1rem;
}

.brand-title {
  font-weight: 700;
  letter-spacing: 0.08em;
  font-size: 1rem;
  text-transform: uppercase;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0.55rem;
}

.menu-toggle .bar {
  width: 22px;
  height: 2px;
  background: var(--text);
}

.link-list {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  border: 1px solid transparent;
  font-weight: 600;
  transition: border-color 120ms ease, background 120ms ease;
}

.nav-link:hover {
  border-color: var(--border);
  background: var(--surface);
}

.nav-link.active {
  border-color: var(--accent);
  background: var(--surface);
}

@media (max-width: 800px) {
  .menu-toggle {
    display: inline-flex;
  }

  .link-list {
    position: absolute;
    right: 1.25rem;
    top: 64px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    padding: 0.75rem;
    flex-direction: column;
    min-width: 200px;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-6px);
    transition: opacity 150ms ease, transform 150ms ease;
  }

  .link-list.open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }
}
</style>
