<script setup>
import { ref, onBeforeUnmount } from "vue";
import { burstHearts } from "@/composables/useHearts";

const DEFAULT_LABEL = "Make a Wish ✨";
const label = ref(DEFAULT_LABEL);
let timerId = null;

function celebrate() {
  burstHearts(50);
  label.value = "Wish sent! ♡";

  if (timerId) window.clearTimeout(timerId);
  timerId = window.setTimeout(() => (label.value = DEFAULT_LABEL), 3000);
}

onBeforeUnmount(() => {
  if (timerId) window.clearTimeout(timerId);
});
</script>

<template>
  <section class="final" id="final">
    <div class="final-content">
      <div class="final-heart" aria-hidden="true">♡</div>

      <p class="section-label">one last thing</p>

      <h2>
        Happy Birthday,<br />
        <span>Jiwoo.</span>
      </h2>

      <p>
        May this year be one of the best chapters of your life. Keep smiling,
        keep dreaming, and please keep being you.
      </p>

      <button class="celebrate-btn" type="button" @click="celebrate">
        {{ label }}
      </button>
    </div>
  </section>
</template>

<style scoped>
.final {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background:
    radial-gradient(circle at center, rgba(255, 126, 182, 0.2), transparent 40%),
    linear-gradient(135deg, #fff4f9, #f1efff);
}

.final-content {
  max-width: 750px;
}

.final-heart {
  font-size: 60px;
  animation: heartbeat 1.4s infinite;
  margin-bottom: 20px;
}

.final h2 {
  font-family: var(--font-serif);
  font-size: clamp(50px, 8vw, 90px);
  line-height: 0.95;
}

.final h2 span {
  color: var(--pink);
  font-style: italic;
}

.final p {
  margin: 30px auto;
  color: var(--muted);
  line-height: 1.9;
  max-width: 550px;
}

.celebrate-btn {
  border: none;
  cursor: pointer;
  background: var(--pink);
  color: white;
  padding: 15px 30px;
  border-radius: 50px;
  font-family: var(--font-sans);
  font-size: 14px;
  box-shadow: 0 15px 35px rgba(255, 126, 182, 0.3);
  transition: 0.3s ease;
}

.celebrate-btn:hover {
  transform: translateY(-4px) scale(1.03);
  background: var(--purple-dark);
}
</style>
