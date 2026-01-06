<script setup lang="ts">
import PageShell from "@/components/PageShell.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import TextBlock from "@/components/TextBlock.vue";

const text = "A cultural promotion website introducing Leonardo da Vinci’s life, artistic works, and influence.";
</script>

<template>
  <PageShell>
    <SectionHeader
      title="About Leonardo"
      subtitle="Explain Leonardo’s background and historical importance."
    />
    <div class="stack" aria-label="About Leonardo sections">
      <TextBlock heading="Early life" :body="`${text} Early life.`" />
      <TextBlock heading="Renaissance context" :body="`${text} Renaissance context.`" />
      <TextBlock heading="Interdisciplinary genius" :body="`${text} Interdisciplinary genius in art, science, anatomy, and engineering.`" />
    </div>
  </PageShell>
</template>

<style scoped>
.stack {
  display: grid;
  gap: 1rem;
}
</style>
