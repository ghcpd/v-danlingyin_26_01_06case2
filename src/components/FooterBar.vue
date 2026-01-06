<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div>
        <div class="footer-title">Leonardo da Vinci — Art &amp; Mind</div>
        <p class="footer-text">Educational purpose, cultural promotion only.</p>
      </div>
      <div class="footer-text">Calm, minimalist, museum-inspired presentation.</div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  background: var(--surface);
  padding: 1.5rem 0;
  margin-top: 3rem;
}

.footer-inner {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
}

.footer-title {
  font-weight: 700;
  letter-spacing: 0.08em;
}

.footer-text {
  margin: 0;
  color: var(--muted);
  font-size: 0.95rem;
}
</style>
