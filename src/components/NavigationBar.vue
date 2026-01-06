<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
      <div class="flex justify-between items-center h-16">
        <div class="flex-shrink-0">
          <RouterLink 
            to="/" 
            class="text-xl font-serif text-museum-brown hover:text-museum-gray transition-colors"
            aria-label="Leonardo da Vinci home"
          >
            Leonardo da Vinci
          </RouterLink>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex md:space-x-8">
          <RouterLink 
            to="/"
            class="inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors"
            :class="route.path === '/' ? 'text-museum-brown border-b-2 border-museum-brown' : 'text-gray-600 hover:text-museum-brown'"
            aria-current="page"
          >
            Home
          </RouterLink>
          <RouterLink 
            to="/about"
            class="inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors"
            :class="route.path === '/about' ? 'text-museum-brown border-b-2 border-museum-brown' : 'text-gray-600 hover:text-museum-brown'"
          >
            About
          </RouterLink>
          <RouterLink 
            to="/gallery"
            class="inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors"
            :class="route.path.startsWith('/gallery') ? 'text-museum-brown border-b-2 border-museum-brown' : 'text-gray-600 hover:text-museum-brown'"
          >
            Gallery
          </RouterLink>
          <RouterLink 
            to="/exhibition"
            class="inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors"
            :class="route.path === '/exhibition' ? 'text-museum-brown border-b-2 border-museum-brown' : 'text-gray-600 hover:text-museum-brown'"
          >
            Exhibition
          </RouterLink>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            type="button"
            @click="toggleMobileMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-museum-brown focus:outline-none focus:ring-2 focus:ring-inset focus:ring-museum-brown"
            aria-expanded="false"
            aria-label="Toggle navigation menu"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="pt-2 pb-3 space-y-1">
          <RouterLink 
            to="/"
            @click="closeMobileMenu"
            class="block pl-3 pr-4 py-2 text-base font-medium transition-colors"
            :class="route.path === '/' ? 'bg-museum-beige text-museum-brown border-l-4 border-museum-brown' : 'text-gray-600 hover:bg-gray-50 hover:text-museum-brown'"
          >
            Home
          </RouterLink>
          <RouterLink 
            to="/about"
            @click="closeMobileMenu"
            class="block pl-3 pr-4 py-2 text-base font-medium transition-colors"
            :class="route.path === '/about' ? 'bg-museum-beige text-museum-brown border-l-4 border-museum-brown' : 'text-gray-600 hover:bg-gray-50 hover:text-museum-brown'"
          >
            About
          </RouterLink>
          <RouterLink 
            to="/gallery"
            @click="closeMobileMenu"
            class="block pl-3 pr-4 py-2 text-base font-medium transition-colors"
            :class="route.path.startsWith('/gallery') ? 'bg-museum-beige text-museum-brown border-l-4 border-museum-brown' : 'text-gray-600 hover:bg-gray-50 hover:text-museum-brown'"
          >
            Gallery
          </RouterLink>
          <RouterLink 
            to="/exhibition"
            @click="closeMobileMenu"
            class="block pl-3 pr-4 py-2 text-base font-medium transition-colors"
            :class="route.path === '/exhibition' ? 'bg-museum-beige text-museum-brown border-l-4 border-museum-brown' : 'text-gray-600 hover:bg-gray-50 hover:text-museum-brown'"
          >
            Exhibition
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
</style>
