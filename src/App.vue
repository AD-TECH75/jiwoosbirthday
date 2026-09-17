<script setup>
import { useHead } from "@unhead/vue";

import AppLoader from "./components/AppLoader.vue";
import MusicToggle from "./components/MusicToggle.vue";
import HeroSection from "./components/HeroSection.vue";
import MessageSection from "./components/MessageSection.vue";
import AgeCounterSection from "./components/AgeCounterSection.vue";
import GallerySection from "./components/GallerySection.vue";
import LetterSection from "./components/LetterSection.vue";
import WishesSection from "./components/WishesSection.vue";
import FinalSection from "./components/FinalSection.vue";
import AppFooter from "./components/AppFooter.vue";

import { headConfig } from "./seo/siteMeta";
import { useHearts } from "./composables/useHearts";

// SEO dikelola terpusat dari src/seo/siteMeta.js
useHead(headConfig);

// Hati ambient + hati saat klik di mana saja
useHearts({ interval: 900 });
</script>

<template>
  <AppLoader />
  <MusicToggle />

  <main>
    <HeroSection />
    <MessageSection />
    <AgeCounterSection />
    <GallerySection />
    <LetterSection />
    <WishesSection />
    <FinalSection />
  </main>

  <AppFooter />
</template>
