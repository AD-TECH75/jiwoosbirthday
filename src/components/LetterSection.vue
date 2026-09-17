<script setup>
import { ref } from "vue";
import LetterModal from "./LetterModal.vue";
import { burstHearts } from "@/composables/useHearts";

const isOpen = ref(false);

function openLetter() {
  isOpen.value = true;
  burstHearts(15);
}
</script>

<template>
  <section class="letter-section" id="letter">
    <div class="container">
      <p class="section-label" data-aos="fade-up">one more thing</p>

      <h2 class="section-title" data-aos="fade-up">A Letter for You</h2>

      <p class="section-desc" data-aos="fade-up">
        There is something that might be more pleasant to read than to say.
      </p>

      <div class="letter-wrapper" data-aos="zoom-in">
        <div
          class="envelope"
          role="button"
          tabindex="0"
          aria-label="Buka surat untuk Jiwoo"
          @click="openLetter"
          @keydown.enter.prevent="openLetter"
          @keydown.space.prevent="openLetter"
        >
          💌
        </div>

        <p class="click-text">tap the letter ♡</p>
      </div>
    </div>

    <LetterModal :open="isOpen" @close="isOpen = false" />
  </section>
</template>

<style scoped>
.letter-section {
  background:
    radial-gradient(circle at 10% 10%, rgba(255, 126, 182, 0.2), transparent 30%),
    radial-gradient(circle at 90% 90%, rgba(155, 140, 255, 0.2), transparent 30%),
    #faf8ff;
}

.letter-wrapper {
  margin: 50px auto 0;
  max-width: 750px;
  text-align: center;
}

.envelope {
  width: 180px;
  height: 130px;
  background: linear-gradient(135deg, #ffb6d5, #d7cbff);
  border-radius: 15px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 55px;
  cursor: pointer;
  box-shadow: 0 20px 50px rgba(120, 80, 130, 0.2);
  transition: 0.4s ease;
}

.envelope:hover,
.envelope:focus-visible {
  transform: translateY(-8px) rotate(-2deg);
  outline: none;
}

.click-text {
  margin-top: 20px;
  color: var(--muted);
  font-size: 13px;
}
</style>
