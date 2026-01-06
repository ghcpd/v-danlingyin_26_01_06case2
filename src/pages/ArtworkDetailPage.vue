<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { artworks } from '@/data/artworks'

const route = useRoute()
const router = useRouter()

const artworkId = computed(() => route.params.id as string)

const artwork = computed(() => {
  return artworks.find(a => a.id === artworkId.value)
})

const goBack = () => {
  router.push('/gallery')
}
</script>

<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <!-- Back Button -->
      <div class="mb-8">
        <button
          @click="goBack"
          class="inline-flex items-center text-museum-brown hover:text-museum-gray transition-colors focus:outline-none focus:ring-2 focus:ring-museum-brown rounded-md px-2 py-1"
          aria-label="Back to Gallery"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Gallery
        </button>
      </div>

      <!-- Artwork Found -->
      <article v-if="artwork">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Artwork Image -->
          <div class="bg-gray-100 rounded-lg overflow-hidden">
            <img 
              :src="artwork.imageUrl" 
              :alt="artwork.title"
              class="w-full h-auto object-contain"
            />
          </div>

          <!-- Artwork Details -->
          <div>
            <header class="mb-6">
              <h1 class="text-4xl md:text-5xl font-serif text-museum-brown mb-2">
                {{ artwork.title }}
              </h1>
              <p class="text-xl text-gray-600">
                {{ artwork.year }}
              </p>
            </header>

            <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p>{{ artwork.description }}</p>
            </div>
          </div>
        </div>
      </article>

      <!-- Artwork Not Found -->
      <div v-else class="text-center py-20">
        <h1 class="text-3xl font-serif text-museum-brown mb-4">
          Artwork Not Found
        </h1>
        <p class="text-gray-600 mb-8">
          The artwork you're looking for could not be found.
        </p>
        <button
          @click="goBack"
          class="inline-flex items-center px-6 py-3 bg-museum-brown text-white rounded-md hover:bg-museum-gray transition-colors focus:outline-none focus:ring-2 focus:ring-museum-brown"
        >
          Return to Gallery
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
