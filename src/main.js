import { createApp } from "vue";
import { createHead } from "@unhead/vue";

// Semua dependency di-install lewat npm, TIDAK ada CDN.
// Font (dulu dari Google Fonts CDN) -> @fontsource
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource/cormorant-garamond/400-italic.css";

// AOS (dulu dari unpkg CDN) -> paket npm
import AOS from "aos";
import "aos/dist/aos.css";

import "./assets/styles/main.css";
import App from "./App.vue";

const app = createApp(App);
const head = createHead();

app.use(head);
app.mount("#app");

AOS.init({
  duration: 900,
  once: true,
  offset: 80,
  easing: "ease-out-cubic",
});

// Refresh AOS setelah semua gambar/font selesai dimuat
window.addEventListener("load", () => AOS.refreshHard());
