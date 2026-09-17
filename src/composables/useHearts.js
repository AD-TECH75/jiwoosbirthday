import { onMounted, onBeforeUnmount } from "vue";

const AMBIENT_SYMBOLS = ["♡", "♥", "♡", "💗", "💖", "✦"];
const BURST_SYMBOLS = ["♡", "♥", "💗", "💖", "✨", "🌸"];

function randomColor() {
  return Math.random() > 0.5 ? "#ff7eb6" : "#9b8cff";
}

/** Satu hati yang naik dari bawah layar. */
function spawnHeart(symbols, minSize, sizeRange, minDur, durRange, lifetime) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.setAttribute("aria-hidden", "true");
  heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.fontSize = `${minSize + Math.random() * sizeRange}px`;
  heart.style.color = randomColor();
  heart.style.animationDuration = `${minDur + Math.random() * durRange}s`;

  document.body.appendChild(heart);
  window.setTimeout(() => heart.remove(), lifetime);
}

/** Ledakan beberapa hati sekaligus (dipakai saat buka surat / make a wish). */
export function burstHearts(amount = 15) {
  for (let i = 0; i < amount; i++) {
    window.setTimeout(() => {
      spawnHeart(BURST_SYMBOLS, 14, 25, 3, 4, 8000);
    }, i * 50);
  }
}

/** Hati kecil yang muncul di titik klik. */
function spawnClickHeart(x, y) {
  const heart = document.createElement("div");
  heart.textContent = "♡";
  heart.setAttribute("aria-hidden", "true");
  Object.assign(heart.style, {
    position: "fixed",
    left: `${x}px`,
    top: `${y}px`,
    color: "#ff7eb6",
    fontSize: "20px",
    pointerEvents: "none",
    zIndex: "9999",
  });

  heart.animate(
    [
      { transform: "translate(-50%, -50%) scale(.5)", opacity: 0 },
      { transform: "translate(-50%, -80%) scale(1)", opacity: 1 },
      { transform: "translate(-50%, -180%) scale(1.3)", opacity: 0 },
    ],
    { duration: 800, easing: "ease-out" },
  );

  document.body.appendChild(heart);
  window.setTimeout(() => heart.remove(), 800);
}

/**
 * Pasang efek hati ambient + hati saat klik.
 * Semua interval & listener dibersihkan otomatis saat komponen di-unmount.
 */
export function useHearts({ interval = 900 } = {}) {
  let timerId = null;

  const onClick = (e) => {
    if (e.target.closest("button") || e.target.closest(".envelope")) return;
    spawnClickHeart(e.clientX, e.clientY);
  };

  onMounted(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced) {
      timerId = window.setInterval(() => {
        spawnHeart(AMBIENT_SYMBOLS, 12, 22, 5, 5, 10000);
      }, interval);
    }
    document.addEventListener("click", onClick);
  });

  onBeforeUnmount(() => {
    if (timerId) window.clearInterval(timerId);
    document.removeEventListener("click", onClick);
  });

  return { burstHearts };
}
