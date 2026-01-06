<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import BackLink from "@/components/BackLink.vue";
import MetaTile from "@/components/MetaTile.vue";
import PageShell from "@/components/PageShell.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import { getArtworkById } from "@/data/artworks";

const route = useRoute();
const artworkId = computed(() => String(route.params.id));
const artwork = computed(() => getArtworkById(artworkId.value));
</script>

<template>
  <PageShell>
    <BackLink />
    <div v-if="artwork" class="detail">
      <SectionHeader
        :title="artwork.title"
        :subtitle="`Year: ${artwork.year}`"
      />
      <div class="detail-grid">
        <figure class="detail-figure">
          <img :src="artwork.image" :alt="artwork.alt" />
        </figure>
        <div class="detail-body">
          <p class="description">{{ artwork.description }}</p>
          <div class="meta">
            <MetaTile label="Title" :value="artwork.title" />
            <MetaTile label="Year" :value="String(artwork.year)" />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="fallback" role="status">
      The requested artwork is not available.
    </div>
  </PageShell>
</template>

<style scoped>
.detail {
  display: grid;
  gap: 1.5rem;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  align-items: start;
}

.detail-figure {
  margin: 0;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--card);
  overflow: hidden;
}

.detail-figure img {
  width: 100%;
  display: block;
}

.detail-body {
  display: grid;
  gap: 1rem;
}

.description {
  margin: 0;
  color: var(--muted);
}

.meta {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.75rem;
}
</style>
