<script setup lang="ts">
import { computed } from 'vue'
import type { Artwork } from '@/data/artworks'

interface Props {
  artwork: Artwork
}

const props = defineProps<Props>()

const artworkUrl = computed(() => `/gallery/${props.artwork.id}`)
</script>

<template>
  <RouterLink 
    :to="artworkUrl"
    class="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    :aria-label="`View ${artwork.title}`"
  >
    <div class="aspect-[4/3] overflow-hidden bg-gray-100">
      <img 
        :src="artwork.imageUrl" 
        :alt="artwork.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
    </div>
    <div class="p-4">
      <h3 class="text-lg font-serif text-museum-brown mb-1">
        {{ artwork.title }}
      </h3>
      <p class="text-sm text-gray-600">
        {{ artwork.year }}
      </p>
    </div>
  </RouterLink>
</template>

<style scoped>
</style>
