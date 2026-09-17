import { ref, onMounted, onBeforeUnmount } from "vue";

/**
 * Efek mengetik yang baru jalan ketika elemen target masuk viewport.
 * @param {string} fullText teks lengkap yang akan diketik
 * @param {object} options  { speed, threshold }
 */
export function useTypewriter(fullText, { speed = 25, threshold = 0.5 } = {}) {
  const typedText = ref("");
  const targetRef = ref(null);

  let index = 0;
  let timerId = null;
  let observer = null;

  function type() {
    if (index < fullText.length) {
      typedText.value += fullText.charAt(index);
      index++;
      timerId = window.setTimeout(type, speed);
    }
  }

  onMounted(() => {
    if (!targetRef.value) return;

    // Kalau user minta minim animasi, langsung tampilkan penuh.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      typedText.value = fullText;
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && index === 0) type();
        });
      },
      { threshold },
    );

    observer.observe(targetRef.value);
  });

  onBeforeUnmount(() => {
    if (timerId) window.clearTimeout(timerId);
    if (observer) observer.disconnect();
  });

  return { typedText, targetRef };
}
