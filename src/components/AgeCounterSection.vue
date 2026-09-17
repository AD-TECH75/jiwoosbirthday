<script setup>
import { computed } from "vue";
import { useAgeCounter } from "@/composables/useAgeCounter";

const { age } = useAgeCounter("2006-09-07T00:00:00");

const boxes = computed(() => [
  { value: age.value.years, label: "Years" },
  { value: age.value.days, label: "Days" },
  { value: age.value.hours, label: "Hours" },
  { value: age.value.minutes, label: "Minutes" },
  { value: age.value.seconds, label: "Seconds" },
]);
</script>

<template>
  <section class="countdown-section" id="age">
    <div class="container">
      <p class="section-label" data-aos="fade-up">since 7 september 2006</p>

      <h2 class="section-title" data-aos="fade-up">Jiwoo has been here for...</h2>

      <p class="section-desc" data-aos="fade-up">
        And we're very lucky that you are. ♡
      </p>

      <div class="age-counter" data-aos="zoom-in" aria-live="off">
        <template v-for="(box, i) in boxes" :key="box.label">
          <div v-if="i > 0" class="age-separator" aria-hidden="true">:</div>

          <div class="age-box">
            <strong>{{ box.value }}</strong>
            <span>{{ box.label }}</span>
          </div>
        </template>
      </div>

      <p class="age-caption" data-aos="fade-up">
        {{ age.years }} years of being wonderfully you ♡
      </p>
    </div>
  </section>
</template>

<style scoped>
.age-counter {
  max-width: 900px;
  margin: 55px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 25px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 126, 182, 0.15);
  border-radius: 35px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(15px);
}

.age-box {
  min-width: 120px;
  text-align: center;
}

.age-box strong {
  display: block;
  font-family: var(--font-serif);
  font-size: 65px;
  line-height: 1;
  color: var(--pink);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.age-box span {
  display: block;
  margin-top: 10px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--muted);
}

.age-separator {
  font-family: var(--font-serif);
  font-size: 50px;
  color: #e6c8d7;
  margin-bottom: 18px;
}

.age-caption {
  margin-top: 25px;
  text-align: center;
  font-family: var(--font-serif);
  font-size: 24px;
  font-style: italic;
  color: var(--purple-dark);
}

@media (max-width: 700px) {
  .age-counter {
    padding: 30px 10px;
  }

  .age-box {
    min-width: 55px;
  }

  .age-box strong {
    font-size: 35px;
  }

  .age-box span {
    font-size: 7px;
    letter-spacing: 1px;
  }

  .age-separator {
    font-size: 25px;
    margin-bottom: 12px;
  }

  .age-caption {
    font-size: 20px;
  }
}
</style>
