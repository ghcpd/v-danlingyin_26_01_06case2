<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer" role="contentinfo">
    <div class="footer-container container">
      <div class="footer-content">
        <h2 class="footer-title">Leonardo da Vinci — Art & Mind</h2>
        <p class="footer-disclaimer">
          This website is created for educational purposes only. All artwork images and historical 
          information are presented to promote cultural appreciation and understanding of Leonardo 
          da Vinci's contributions to art and science.
        </p>
      </div>
      <div class="footer-bottom">
        <p class="copyright">© {{ currentYear }} Leonardo da Vinci Exhibition. Educational Project.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-dark-brown);
  color: var(--color-beige);
  padding: var(--spacing-2xl) 0 var(--spacing-lg);
  margin-top: auto;
}

.footer-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.footer-content {
  text-align: center;
}

.footer-title {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--color-cream);
  margin-bottom: var(--spacing-md);
}

.footer-disclaimer {
  font-size: 0.875rem;
  line-height: 1.7;
  color: var(--color-light-gray);
  max-width: 600px;
  margin: 0 auto;
}

.footer-bottom {
  text-align: center;
  padding-top: var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.copyright {
  font-size: 0.8125rem;
  color: var(--color-gray);
  margin: 0;
}

@media (max-width: 640px) {
  .footer {
    padding: var(--spacing-xl) 0 var(--spacing-md);
  }

  .footer-disclaimer {
    font-size: 0.8125rem;
  }
}
</style>
