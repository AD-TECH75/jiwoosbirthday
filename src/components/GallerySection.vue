<script setup>
// Foto di-import lewat Vite supaya ikut di-hash & di-cache dengan benar.
// (.jfif sudah didaftarkan di assetsInclude pada vite.config.js)
import photo1 from "@/assets/photos/photo1.jfif";
import photo2 from "@/assets/photos/photo2.jfif";
import photo3 from "@/assets/photos/photo3.jfif";
import photo4 from "@/assets/photos/photo4.jfif";
import photo5 from "@/assets/photos/photo5.jfif";
import photo6 from "@/assets/photos/photo6.jfif";

const photos = [
  { src: photo1, alt: "Kenangan Jiwoo 1", delay: 0 },
  { src: photo2, alt: "Kenangan Jiwoo 2", delay: 100 },
  { src: photo3, alt: "Kenangan Jiwoo 3", delay: 200 },
  { src: photo4, alt: "Kenangan Jiwoo 4", delay: 0 },
  { src: photo5, alt: "Kenangan Jiwoo 5", delay: 100 },
  { src: photo6, alt: "Kenangan Jiwoo 6", delay: 200 },
];
</script>

<template>
  <section class="gallery" id="gallery">
    <div class="container">
      <p class="section-label" data-aos="fade-up">little memories</p>

      <h2 class="section-title" data-aos="fade-up">Moments ♡</h2>

      <p class="section-desc" data-aos="fade-up">
        Several photos to remind you that there are so many small moments worth
        keeping.
      </p>

      <div class="gallery-grid">
        <figure
          v-for="(photo, i) in photos"
          :key="photo.src"
          class="photo"
          data-aos="fade-up"
          :data-aos-delay="photo.delay"
        >
          <img
            :src="photo.src"
            :alt="photo.alt"
            :loading="i < 3 ? 'eager' : 'lazy'"
            decoding="async"
            width="400"
            height="330"
          />
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery {
  background: white;
}

.gallery-grid {
  margin-top: 55px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.photo {
  height: 330px;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  background: #f5eaf1;
  box-shadow: 0 12px 35px rgba(100, 60, 90, 0.1);
  margin: 0;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.photo:hover img {
  transform: scale(1.08);
}

.photo::after {
  content: "♡";
  position: absolute;
  right: 18px;
  bottom: 14px;
  color: white;
  font-size: 25px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

@media (max-width: 700px) {
  .gallery-grid {
    grid-template-columns: 1fr 1fr;
  }

  .photo {
    height: 230px;
  }

  .photo:nth-child(2) {
    transform: none;
  }
}

@media (max-width: 430px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .photo {
    height: 350px;
  }
}
</style>
