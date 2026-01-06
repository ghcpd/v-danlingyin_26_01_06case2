<script setup lang="ts">
import artworks from "@/data/artworks";
import ArtworkCard from "@/components/ArtworkCard.vue";
import InlineNavCards from "@/components/InlineNavCards.vue";
import PageShell from "@/components/PageShell.vue";
import SectionDivider from "@/components/SectionDivider.vue";
import SectionHeader from "@/components/SectionHeader.vue";

const featured = artworks.slice(0, 3);

const navLinks = [
  {
    title: "About Leonardo",
    to: "/about",
    description: "Early life, Renaissance context, and interdisciplinary genius."
  },
  {
    title: "Gallery",
    to: "/gallery",
    description: "Browse static artworks: Mona Lisa, The Last Supper, Vitruvian Man, Lady with an Ermine."
  },
  {
    title: "Exhibition Info",
    to: "/exhibition",
    description: "Exhibition title, location (fictional), date range, and opening hours."
  }
];
</script>

<template>
  <PageShell>
    <section class="hero" aria-labelledby="hero-title">
      <p class="tagline">Cultural Promotion</p>
      <h1 id="hero-title">Leonardo da Vinci</h1>
      <p class="hero-sub">Art, Science, and the Renaissance Mind</p>
      <p class="hero-lead">
        A cultural promotion website introducing Leonardo da Vinci’s life, artistic works, and influence.
      </p>
    </section>

    <SectionDivider />

    <section aria-labelledby="highlight-title" class="page-section">
      <SectionHeader
        title="Featured Artworks"
        subtitle="Highlighting three pieces with image and title."
        id="highlight-title"
      />
      <div class="grid three">
        <ArtworkCard
          v-for="artwork in featured"
          :key="artwork.id"
          :artwork="artwork"
          :to="`/gallery/${artwork.id}`"
          :showYear="false"
        />
      </div>
    </section>

    <SectionDivider />

    <section aria-labelledby="nav-title" class="page-section">
      <SectionHeader
        title="Navigation"
        subtitle="Entry points to About, Gallery, and Exhibition information."
        id="nav-title"
      />
      <InlineNavCards :links="navLinks" />
    </section>
  </PageShell>
</template>

<style scoped>
.hero-sub {
  margin: 0 0 0.4rem;
  font-size: 1.2rem;
  color: var(--muted);
}

.hero-lead {
  margin: 0;
  max-width: 36rem;
  color: var(--text);
}
</style>
