<script setup>
const wishes = [
  {
    icon: "🌷",
    title: "You Stay Happy",
    text: "May there always be a small reason to smile, even on days that feel heavy.",
    delay: 0,
  },
  {
    icon: "✨",
    title: "Your Dreams Come True",
    text: "May everything you are striving for gradually find its way.",
    delay: 100,
  },
  {
    icon: "💗",
    title: "You Feel Loved",
    text: "May you always know that your presence means more than you might realize.",
    delay: 200,
  },
];
</script>

<template>
  <section class="wishes" id="wishes">
    <div class="container">
      <p class="section-label" data-aos="fade-up">my wishes for you</p>

      <h2 class="section-title" data-aos="fade-up">I Hope...</h2>

      <div class="wish-grid">
        <article
          v-for="wish in wishes"
          :key="wish.title"
          class="wish-card"
          data-aos="fade-up"
          :data-aos-delay="wish.delay"
        >
          <div class="wish-icon" aria-hidden="true">{{ wish.icon }}</div>
          <h3>{{ wish.title }}</h3>
          <p>{{ wish.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wishes {
  background: white;
}

.wish-grid {
  margin-top: 55px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.wish-card {
  padding: 35px 25px;
  text-align: center;
  border-radius: 25px;
  background: #fff8fb;
  border: 1px solid #f8ddea;
  transition: 0.3s ease;
}

.wish-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow);
}

.wish-icon {
  font-size: 35px;
  margin-bottom: 15px;
}

.wish-card h3 {
  font-family: var(--font-serif);
  font-size: 28px;
  margin-bottom: 10px;
}

.wish-card p {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

@media (max-width: 700px) {
  .wish-grid {
    grid-template-columns: 1fr;
  }
}
</style>
