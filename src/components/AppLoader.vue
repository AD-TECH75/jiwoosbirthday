<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const hidden = ref(false);
let timerId = null;

onMounted(() => {
  const finish = () => {
    timerId = window.setTimeout(() => (hidden.value = true), 1000);
  };

  if (document.readyState === "complete") finish();
  else window.addEventListener("load", finish, { once: true });
});

onBeforeUnmount(() => {
  if (timerId) window.clearTimeout(timerId);
});
</script>

<template>
  <div id="loader" :class="{ hide: hidden }" role="status" aria-live="polite">
    <div class="loader-content">
      <div class="loader-heart" aria-hidden="true">♡</div>
      <div class="loader-text">something special is loading...</div>
    </div>
  </div>
</template>

<style scoped>
#loader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: linear-gradient(135deg, #fff0f6, #f2efff);
  display: flex;
  justify-content: center;
  align-items: center;
  transition:
    opacity 0.8s ease,
    visibility 0.8s ease;
}

#loader.hide {
  opacity: 0;
  visibility: hidden;
}

.loader-content {
  text-align: center;
}

.loader-heart {
  font-size: 55px;
  animation: heartbeat 1s infinite;
}

.loader-text {
  margin-top: 12px;
  color: var(--purple-dark);
  font-size: 14px;
  letter-spacing: 2px;
}
</style>
