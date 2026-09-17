<script setup>
import { ref, onBeforeUnmount } from "vue";

// File ada di public/assets, jadi pakai BASE_URL agar tetap benar di GitHub Pages.
const musicSrc = `${import.meta.env.BASE_URL}assets/music.mp3`;

const audioRef = ref(null);
const isPlaying = ref(false);
const error = ref("");

async function toggle() {
  const audio = audioRef.value;
  if (!audio) return;

  if (isPlaying.value) {
    audio.pause();
    isPlaying.value = false;
    return;
  }

  try {
    await audio.play();
    isPlaying.value = true;
    error.value = "";
  } catch {
    error.value = "Musik belum bisa diputar. Pastikan file assets/music.mp3 ada.";
  }
}

onBeforeUnmount(() => {
  audioRef.value?.pause();
});
</script>

<template>
  <audio ref="audioRef" loop preload="none" :src="musicSrc"></audio>

  <button
    class="music-btn"
    type="button"
    :title="isPlaying ? 'Pause music' : 'Play music'"
    :aria-label="isPlaying ? 'Jeda musik' : 'Putar musik'"
    :aria-pressed="isPlaying"
    @click="toggle"
  >
    {{ isPlaying ? "❚❚" : "♫" }}
  </button>

  <p v-if="error" class="music-error" role="alert">{{ error }}</p>
</template>

<style scoped>
.music-btn {
  position: fixed;
  right: 20px;
  top: 20px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  color: var(--purple-dark);
  cursor: pointer;
  z-index: 1000;
  font-size: 18px;
  box-shadow: 0 10px 30px rgba(80, 50, 100, 0.12);
  transition: 0.3s ease;
}

.music-btn:hover {
  transform: scale(1.08) rotate(10deg);
}

.music-error {
  position: fixed;
  right: 20px;
  top: 76px;
  z-index: 1000;
  max-width: 230px;
  padding: 10px 14px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: var(--shadow);
  color: var(--muted);
  font-size: 11px;
  line-height: 1.6;
}
</style>
