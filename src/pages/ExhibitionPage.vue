<script setup lang="ts">
import MetaTile from "@/components/MetaTile.vue";
import PageShell from "@/components/PageShell.vue";
import SectionHeader from "@/components/SectionHeader.vue";
</script>

<template>
  <PageShell>
    <SectionHeader
      title="Exhibition Info"
      subtitle="Provide practical visitor information."
    />
    <div class="grid two">
      <MetaTile label="Exhibition title" value="Exhibition title" />
      <MetaTile label="Location" value="Location (fictional)" />
      <MetaTile label="Date range" value="Date range" />
      <MetaTile label="Opening hours" value="Opening hours" />
    </div>
    <p class="description">Short descriptive paragraph for the exhibition.</p>
  </PageShell>
</template>

<style scoped>
.description {
  margin-top: 1.2rem;
  color: var(--muted);
}
</style>
