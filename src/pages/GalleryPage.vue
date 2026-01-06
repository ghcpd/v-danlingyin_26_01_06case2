<script setup lang="ts">
import { artworks } from '@/data/artworks'
import ArtworkCard from '@/components/ArtworkCard.vue'
</script>

<template>
  <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <header class="mb-12 text-center">
        <h1 class="text-4xl md:text-5xl font-serif text-museum-brown mb-4">
          Artwork Gallery
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore Leonardo da Vinci's most celebrated masterpieces, each demonstrating his unique fusion of art and science.
        </p>
      </header>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <ArtworkCard 
          v-for="artwork in artworks" 
          :key="artwork.id"
          :artwork="artwork"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
