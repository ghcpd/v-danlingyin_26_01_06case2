<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Exhibition', path: '/exhibition' }
]

function toggleMenu(): void {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu(): void {
  isMenuOpen.value = false
}

function isActive(path: string): boolean {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}
</script>

<template>
  <header class="header" role="banner">
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <div class="header-container container">
      <RouterLink 
        to="/" 
        class="logo" 
        aria-label="Leonardo da Vinci — Art & Mind, Home"
        @click="closeMenu"
      >
        <span class="logo-text">Leonardo da Vinci</span>
      </RouterLink>

      <button
        class="menu-toggle"
        :aria-expanded="isMenuOpen"
        aria-controls="main-navigation"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <span class="menu-icon" :class="{ open: isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <nav 
        id="main-navigation" 
        class="nav" 
        :class="{ open: isMenuOpen }"
        role="navigation"
        aria-label="Main navigation"
      >
        <ul class="nav-list">
          <li v-for="item in navItems" :key="item.path" class="nav-item">
            <RouterLink
              :to="item.path"
              class="nav-link"
              :class="{ active: isActive(item.path) }"
              :aria-current="isActive(item.path) ? 'page' : undefined"
              @click="closeMenu"
            >
              {{ item.name }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-beige);
  height: var(--header-height);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.logo {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  color: var(--color-dark-brown);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.logo:hover {
  color: var(--color-muted-brown);
}

.logo-text {
  font-weight: 400;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-sm);
  z-index: 60;
}

.menu-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
}

.menu-icon span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--color-dark-brown);
  transition: all var(--transition-fast);
}

.menu-icon.open span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.menu-icon.open span:nth-child(2) {
  opacity: 0;
}

.menu-icon.open span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.nav-list {
  display: flex;
  gap: var(--spacing-xl);
  list-style: none;
}

.nav-link {
  font-size: 0.9375rem;
  color: var(--color-text);
  text-decoration: none;
  padding: var(--spacing-xs) 0;
  position: relative;
  transition: color var(--transition-fast);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-muted-brown);
  transition: width var(--transition-fast);
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-muted-brown);
}

.nav-link.active::after,
.nav-link:hover::after {
  width: 100%;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background-color: var(--color-white);
    padding: calc(var(--header-height) + var(--spacing-xl)) var(--spacing-xl) var(--spacing-xl);
    transition: right var(--transition-normal);
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
  }

  .nav.open {
    right: 0;
  }

  .nav-list {
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  .nav-link {
    font-size: 1.125rem;
    display: block;
    padding: var(--spacing-sm) 0;
  }
}
</style>
