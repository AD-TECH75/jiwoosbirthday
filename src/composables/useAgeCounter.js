import { ref, onMounted, onBeforeUnmount } from "vue";

const pad = (n) => String(n).padStart(2, "0");

/**
 * Menghitung usia secara langsung (years, days, hours, minutes, seconds)
 * dari tanggal lahir sampai detik ini, dan update tiap 1 detik.
 */
export function useAgeCounter(birthDateString = "2006-09-07T00:00:00") {
  const birthDate = new Date(birthDateString);

  const age = ref({
    years: "00",
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  let timerId = null;

  function update() {
    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();
    const birthdayThisYear = new Date(
      now.getFullYear(),
      birthDate.getMonth(),
      birthDate.getDate(),
    );
    if (now < birthdayThisYear) years--;

    const lastBirthday = new Date(
      birthDate.getFullYear() + years,
      birthDate.getMonth(),
      birthDate.getDate(),
    );

    const diff = now - lastBirthday;

    age.value = {
      years: pad(years),
      days: pad(Math.floor(diff / (1000 * 60 * 60 * 24))),
      hours: pad(Math.floor((diff / (1000 * 60 * 60)) % 24)),
      minutes: pad(Math.floor((diff / (1000 * 60)) % 60)),
      seconds: pad(Math.floor((diff / 1000) % 60)),
    };
  }

  onMounted(() => {
    update();
    timerId = window.setInterval(update, 1000);
  });

  onBeforeUnmount(() => {
    if (timerId) window.clearInterval(timerId);
  });

  return { age };
}
