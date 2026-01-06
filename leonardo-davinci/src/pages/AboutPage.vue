<script setup lang="ts">
// About Leonardo da Vinci page - educational content about his life and significance
</script>

<template>
  <div class="about-page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">About Leonardo da Vinci</h1>
        <p class="page-subtitle">The Universal Genius of the Renaissance</p>
      </div>
    </header>

    <article class="about-content">
      <section class="content-section section" aria-labelledby="early-life-title">
        <div class="container">
          <div class="section-content">
            <h2 id="early-life-title" class="section-heading">Early Life</h2>
            <p>
              Leonardo di ser Piero da Vinci was born on April 15, 1452, in Anchiano, a small 
              village near the town of Vinci in the Republic of Florence, present-day Italy. 
              He was the illegitimate son of Messer Piero Fruosino di Antonio da Vinci, a 
              Florentine legal notary, and Caterina, a peasant woman.
            </p>
            <p>
              As a young boy, Leonardo showed remarkable aptitude for learning. He received 
              an informal education in Latin, geometry, and mathematics at his father's home. 
              His artistic talents became apparent early, leading his father to apprentice him 
              to the renowned Florentine artist Andrea del Verrocchio at around the age of 14.
            </p>
            <p>
              Under Verrocchio's guidance, Leonardo developed his extraordinary skills in 
              painting, sculpting, and metalworking. By 1472, at the age of 20, he qualified 
              as a master in the Guild of Saint Luke, the guild of artists and doctors of 
              medicine. However, he continued to work in Verrocchio's workshop for several 
              more years, eventually surpassing his master in skill and reputation.
            </p>
          </div>
        </div>
      </section>

      <section class="content-section section alt-bg" aria-labelledby="renaissance-title">
        <div class="container">
          <div class="section-content">
            <h2 id="renaissance-title" class="section-heading">The Renaissance Context</h2>
            <p>
              Leonardo lived during one of the most culturally significant periods in human 
              history: the Italian Renaissance. This era, spanning roughly from the 14th to 
              the 17th century, marked a profound transformation in European art, culture, 
              philosophy, and intellectual inquiry.
            </p>
            <p>
              The Renaissance represented a "rebirth" of classical learning and wisdom after 
              the Middle Ages. It was characterized by a renewed interest in Greek and Roman 
              antiquity, a celebration of human potential and achievement, and an emphasis on 
              secular themes alongside religious ones. The movement gave rise to humanism, 
              which placed human beings at the center of intellectual and artistic endeavor.
            </p>
            <p>
              Florence, where Leonardo spent his formative years, was the epicenter of this 
              cultural revolution. Patronized by wealthy families like the Medici, the city 
              attracted and nurtured some of history's greatest artists, including Sandro 
              Botticelli, Michelangelo, and Raphael. In this environment of intense creativity 
              and intellectual ferment, Leonardo's genius found fertile ground to flourish.
            </p>
            <p>
              The Renaissance emphasis on observation, experimentation, and the integration 
              of knowledge across disciplines profoundly shaped Leonardo's approach to both 
              art and science. He embodied the Renaissance ideal of the "Universal Man" — 
              an individual who seeks to develop all of their capabilities to the fullest 
              extent possible.
            </p>
          </div>
        </div>
      </section>

      <section class="content-section section" aria-labelledby="genius-title">
        <div class="container">
          <div class="section-content">
            <h2 id="genius-title" class="section-heading">An Interdisciplinary Genius</h2>
            <p>
              What sets Leonardo apart from his contemporaries is the extraordinary breadth 
              and depth of his interests and accomplishments. He seamlessly bridged the 
              worlds of art and science, viewing them not as separate disciplines but as 
              complementary ways of understanding and representing the natural world.
            </p>
            
            <h3 class="subsection-heading">Art and Visual Innovation</h3>
            <p>
              As a painter, Leonardo introduced revolutionary techniques that transformed 
              Western art. His mastery of sfumato — the subtle gradation of tones that 
              creates soft, hazy outlines — gave his paintings an unprecedented sense of 
              depth and lifelike quality. Works such as the Mona Lisa and The Last Supper 
              remain among the most studied and admired paintings in history.
            </p>

            <h3 class="subsection-heading">Scientific Investigation</h3>
            <p>
              Leonardo's scientific investigations were centuries ahead of his time. He 
              conducted detailed studies of human anatomy, dissecting more than 30 cadavers 
              to understand the structure and function of the human body. His anatomical 
              drawings remain remarkably accurate by modern standards.
            </p>

            <h3 class="subsection-heading">Engineering and Invention</h3>
            <p>
              His notebooks reveal designs for countless inventions, including flying 
              machines, armored vehicles, concentrated solar power, and calculating 
              machines. While most were never built during his lifetime, many anticipated 
              technologies that would only become reality centuries later.
            </p>

            <h3 class="subsection-heading">Natural Philosophy</h3>
            <p>
              Leonardo studied water flow, geology, botany, and optics with the same 
              meticulous attention he brought to his art. He understood that accurate 
              observation of nature was essential to both scientific understanding and 
              artistic representation.
            </p>

            <p class="conclusion-text">
              Leonardo da Vinci died on May 2, 1519, at Amboise, France, at the age of 67. 
              His legacy endures not only in his masterpieces and scientific discoveries 
              but in his example of insatiable curiosity and the pursuit of knowledge across 
              all domains of human endeavor. He remains the quintessential Renaissance figure: 
              a true universal genius whose influence continues to inspire artists, scientists, 
              and thinkers around the world.
            </p>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<style scoped>
.about-page {
  background-color: var(--color-cream);
}

.page-header {
  background-color: var(--color-white);
  padding: var(--spacing-4xl) 0;
  text-align: center;
  border-bottom: 1px solid var(--color-beige);
}

.page-title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 400;
  color: var(--color-dark-brown);
  margin-bottom: var(--spacing-sm);
}

.page-subtitle {
  font-family: var(--font-serif);
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--color-text-light);
  font-style: italic;
  margin: 0;
}

.content-section {
  padding: var(--spacing-3xl) 0;
}

.content-section.alt-bg {
  background-color: var(--color-white);
}

.section-content {
  max-width: 750px;
  margin: 0 auto;
}

.section-heading {
  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 400;
  color: var(--color-dark-brown);
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-md);
  border-bottom: 2px solid var(--color-muted-brown);
}

.subsection-heading {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--color-muted-brown);
  margin-top: var(--spacing-xl);
  margin-bottom: var(--spacing-md);
}

.section-content p {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-text);
  margin-bottom: var(--spacing-lg);
}

.conclusion-text {
  margin-top: var(--spacing-2xl);
  padding-top: var(--spacing-xl);
  border-top: 1px solid var(--color-beige);
  font-style: italic;
  color: var(--color-text-light);
}

@media (max-width: 640px) {
  .page-header {
    padding: var(--spacing-2xl) 0;
  }

  .content-section {
    padding: var(--spacing-2xl) 0;
  }

  .section-content p {
    font-size: 0.9375rem;
  }
}
</style>
