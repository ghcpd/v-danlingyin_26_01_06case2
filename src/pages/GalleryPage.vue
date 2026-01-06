<script setup lang="ts">
import ArtworkCard from "@/components/ArtworkCard.vue";
import PageShell from "@/components/PageShell.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import artworks from "@/data/artworks";
</script>

<template>
  <PageShell>
    <SectionHeader
      title="Artwork Gallery"
      subtitle="Display a grid of artworks. Each artwork shows image, title, and year."
    />
    <div class="grid three" aria-label="Artwork grid">
      <ArtworkCard
        v-for="artwork in artworks"
        :key="artwork.id"
        :artwork="artwork"
        :to="`/gallery/${artwork.id}`"
      />
    </div>
  </PageShell>
</template>
