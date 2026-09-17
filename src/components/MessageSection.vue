<script setup>
import { useTypewriter } from "@/composables/useTypewriter";

const message = `
      Happy birthday, Jiwoo. May today remind you
      that you are someone truly special.
      May the new year bring even more happiness,
      peace, laughter, and beautiful stories you have yet to experience.
      ♡
    `;

const { typedText, targetRef } = useTypewriter(message, { speed: 25 });
</script>

<template>
  <section class="intro" id="message">
    <div class="container">
      <p class="section-label" data-aos="fade-up">for you</p>

      <h2 class="section-title" data-aos="fade-up">Happy Birthday</h2>

      <p class="section-desc" data-aos="fade-up">
        A small page for someone who deserves many wonderful things today.
      </p>

      <div class="intro-card" data-aos="fade-up" data-aos-delay="200">
        <p ref="targetRef" class="typing-text">{{ typedText }}</p>

        <p class="signature">— from someone who cares about you ♡</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro {
  background: white;
}

.intro-card {
  margin-top: 55px;
  padding: 55px;
  border-radius: 35px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.9),
    rgba(255, 239, 247, 0.8)
  );
  box-shadow: var(--shadow);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.intro-card::before {
  content: "♡";
  position: absolute;
  right: -30px;
  top: -70px;
  font-size: 250px;
  color: rgba(255, 126, 182, 0.08);
  font-family: serif;
}

.typing-text {
  position: relative;
  max-width: 700px;
  margin: auto;
  min-height: 6em;
  white-space: pre-line;
  font-family: var(--font-serif);
  font-size: 30px;
  line-height: 1.6;
  color: #604c59;
}

.signature {
  position: relative;
  margin-top: 30px;
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 25px;
  color: var(--pink);
}

@media (max-width: 700px) {
  .intro-card {
    padding: 35px 22px;
  }

  .typing-text {
    font-size: 24px;
  }
}
</style>
