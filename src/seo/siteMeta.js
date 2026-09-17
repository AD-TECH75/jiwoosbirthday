/**
 * Satu sumber kebenaran untuk semua metadata SEO.
 * Ubah di sini saja kalau domain / teks berubah,
 * lalu samakan juga bagian statis di index.html, sitemap.xml, robots.txt.
 */

export const SITE_URL = "https://jiwoosbirthday.vercel.app/";
export const OG_IMAGE = `${SITE_URL}assets/og-image.png`;

export const siteMeta = {
  title: "Happy Birthday, Jiwoo ♡ | 20 Tahun Penuh Cerita",
  shortTitle: "Happy Birthday Jiwoo ♡",
  siteName: "Happy Birthday Jiwoo",
  description:
    "A little birthday website made specially for Jiwoo — celebrating 20 wonderful years since September 7, 2006. Berisi pesan, galeri kenangan, surat, dan penghitung usia langsung. ♡",
  shortDescription:
    "A little birthday surprise for Jiwoo — celebrating 20 years of being wonderfully you. ♡",
  keywords:
    "Happy Birthday Jiwoo, Jiwoo Birthday, Jiwoo H2H, Birthday Jiwoo, 20 Years of Jiwoo, ucapan ulang tahun Jiwoo, website ulang tahun",
  author: "ad-tech75",
  locale: "id_ID",
  lang: "id",
  themeColor: "#ff7eb6",
  url: SITE_URL,
  image: OG_IMAGE,
  imageAlt: "Happy Birthday Jiwoo ♡",
};

/** Objek siap pakai untuk useHead() dari @unhead/vue */
export const headConfig = {
  htmlAttrs: { lang: siteMeta.lang },
  title: siteMeta.title,
  meta: [
    { name: "description", content: siteMeta.description },
    { name: "keywords", content: siteMeta.keywords },
    { name: "author", content: siteMeta.author },
    {
      name: "robots",
      content: "index, follow, max-image-preview:large, max-snippet:-1",
    },
    { name: "googlebot", content: "index, follow, max-image-preview:large" },
    { name: "theme-color", content: siteMeta.themeColor },
    { name: "color-scheme", content: "light" },

    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: siteMeta.siteName },
    { property: "og:title", content: siteMeta.shortTitle },
    { property: "og:description", content: siteMeta.shortDescription },
    { property: "og:url", content: siteMeta.url },
    { property: "og:image", content: siteMeta.image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: siteMeta.imageAlt },
    { property: "og:locale", content: siteMeta.locale },

    // Twitter / X
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: siteMeta.shortTitle },
    { name: "twitter:description", content: siteMeta.shortDescription },
    { name: "twitter:image", content: siteMeta.image },
    { name: "twitter:image:alt", content: siteMeta.imageAlt },
  ],
  link: [
    { rel: "canonical", href: siteMeta.url },
    { rel: "alternate", hreflang: "id", href: siteMeta.url },
    { rel: "alternate", hreflang: "x-default", href: siteMeta.url },
  ],
};
