<script setup lang="ts">
import { computed } from 'vue'
import { artworks } from '@/data/artworks'
import ArtworkCard from '@/components/ArtworkCard.vue'

const featuredArtworks = computed(() => artworks.slice(0, 3))
</script>

<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section class="bg-museum-beige py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl md:text-6xl font-serif text-museum-brown mb-4">
          Leonardo da Vinci
        </h1>
        <p class="text-xl md:text-2xl text-gray-700 font-light">
          Art, Science, and the Renaissance Mind
        </p>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <p class="text-lg text-gray-700 leading-relaxed text-center">
          Leonardo da Vinci (1452-1519) was an Italian polymath whose genius spanned art, science, engineering, and anatomy. 
          His insatiable curiosity and innovative spirit made him the archetypal Renaissance man. Through his paintings, 
          drawings, and scientific observations, Leonardo bridged the gap between art and science, creating works that 
          continue to inspire and fascinate people worldwide.
        </p>
      </div>
    </section>

    <!-- Featured Artworks -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-serif text-museum-brown text-center mb-12">
          Featured Artworks
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ArtworkCard 
            v-for="artwork in featuredArtworks" 
            :key="artwork.id"
            :artwork="artwork"
          />
        </div>
      </div>
    </section>

    <!-- Navigation Entries -->
    <section class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RouterLink 
            to="/about"
            class="group p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow text-center"
          >
            <h3 class="text-2xl font-serif text-museum-brown mb-3 group-hover:text-museum-gray transition-colors">
              About Leonardo
            </h3>
            <p class="text-gray-600">
              Discover the life and legacy of the Renaissance master
            </p>
          </RouterLink>

          <RouterLink 
            to="/gallery"
            class="group p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow text-center"
          >
            <h3 class="text-2xl font-serif text-museum-brown mb-3 group-hover:text-museum-gray transition-colors">
              Gallery
            </h3>
            <p class="text-gray-600">
              Explore Leonardo's most celebrated artworks
            </p>
          </RouterLink>

          <RouterLink 
            to="/exhibition"
            class="group p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow text-center"
          >
            <h3 class="text-2xl font-serif text-museum-brown mb-3 group-hover:text-museum-gray transition-colors">
              Exhibition Info
            </h3>
            <p class="text-gray-600">
              Visit details, location, and opening hours
            </p>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
