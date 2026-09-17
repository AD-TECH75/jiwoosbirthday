<script setup>
import { watch, onBeforeUnmount } from "vue";

const props = defineProps({
  open: { type: Boolean, default: false },
});

const emit = defineEmits(["close"]);

function onKeydown(e) {
  if (e.key === "Escape") emit("close");
}

watch(
  () => props.open,
  (isOpen) => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) document.addEventListener("keydown", onKeydown);
    else document.removeEventListener("keydown", onKeydown);
  },
);

onBeforeUnmount(() => {
  document.body.style.overflow = "";
  document.removeEventListener("keydown", onKeydown);
});
</script>

<template>
  <Teleport to="body">
    <div
      class="modal"
      :class="{ active: open }"
      role="dialog"
      aria-modal="true"
      aria-labelledby="letterTitle"
      :aria-hidden="!open"
      @click.self="emit('close')"
    >
      <div class="letter">
        <button class="close" type="button" aria-label="Tutup surat" @click="emit('close')">
          ×
        </button>

        <h3 id="letterTitle">Dear Jiwoo,</h3>

        <p>Happy birthday to you. ♡</p>

        <p>
          Today is all about you. It is about how someone—who might not always
          realize it—can bring so much color into the lives of others.
        </p>

        <p>
          I hope that in this new year of your life, you find more reasons to
          smile, more things that warm your heart, and more moments that make you
          say, "Life is truly beautiful."
        </p>

        <p>
          If there are days when everything feels heavy, I hope you remember that
          you don't always have to be strong. Rest. Take it easy. You are still
          precious, even when you aren't doing anything at all.
        </p>

        <p>Thank you for being Jiwoo. Thank you for being in this world.</p>

        <p>
          May all the heartfelt wishes you've kept to yourself find their way to
          you.
        </p>

        <p class="letter-sign">Happy Birthday, Jiwoo. ♡</p>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  inset: 0;
  z-index: 5000;
  background: rgba(49, 35, 48, 0.5);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  opacity: 0;
  visibility: hidden;
  transition: 0.4s ease;
}

.modal.active {
  opacity: 1;
  visibility: visible;
}

.letter {
  width: min(650px, 100%);
  max-height: 85vh;
  overflow-y: auto;
  background: #fffdf8;
  border-radius: 8px;
  padding: 55px;
  position: relative;
  box-shadow: 0 30px 100px rgba(0, 0, 0, 0.2);
  transform: translateY(30px) scale(0.96);
  transition: 0.4s ease;
}

.modal.active .letter {
  transform: translateY(0) scale(1);
}

.close {
  position: absolute;
  right: 18px;
  top: 15px;
  border: none;
  background: transparent;
  font-size: 24px;
  color: #8b7883;
  cursor: pointer;
}

.letter h3 {
  font-family: var(--font-serif);
  font-size: 40px;
  margin-bottom: 25px;
  color: var(--pink);
}

.letter p {
  font-family: var(--font-serif);
  font-size: 21px;
  line-height: 1.8;
  color: #5f4e58;
  margin-bottom: 20px;
}

.letter-sign {
  margin-top: 30px;
  font-family: var(--font-serif);
  font-size: 27px !important;
  color: var(--purple-dark) !important;
  font-style: italic;
}

@media (max-width: 700px) {
  .letter {
    padding: 40px 25px;
  }

  .letter h3 {
    font-size: 34px;
  }

  .letter p {
    font-size: 19px;
  }
}
</style>
