# Happy Birthday, Jiwoo ♡ — Vue 3 + Vite

Versi Vue dari website ulang tahun Jiwoo. Semua dependency (AOS, font, SEO head manager) di-install lewat **npm**, tidak ada satu pun CDN.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:5173/jiwoosbirthday/
```

Build untuk produksi:

```bash
npm run build    # hasil ke folder dist/
npm run preview  # cek hasil build secara lokal
```

## Struktur

```
├─ index.html                 # SEO statis (penting untuk crawler tanpa JS) + JSON-LD
├─ vite.config.js             # base GitHub Pages + dukungan file .jfif
├─ public/
│  ├─ assets/                 # favicon.png, og-image.png, music.mp3
│  ├─ robots.txt
│  ├─ sitemap.xml
│  ├─ site.webmanifest
│  └─ .nojekyll
└─ src/
   ├─ main.js                 # bootstrap Vue, init AOS, import font
   ├─ App.vue
   ├─ seo/siteMeta.js         # satu sumber untuk semua metadata
   ├─ assets/
   │  ├─ styles/main.css      # CSS variable + style global
   │  └─ photos/              # photo1–6.jfif (di-import via Vite, ikut di-hash)
   ├─ composables/
   │  ├─ useAgeCounter.js     # penghitung usia live
   │  ├─ useTypewriter.js     # efek ketik saat elemen masuk layar
   │  └─ useHearts.js         # hati melayang + hati saat klik
   └─ components/
      AppLoader · MusicToggle · HeroSection · MessageSection ·
      AgeCounterSection · GallerySection · LetterSection ·
      LetterModal · WishesSection · FinalSection · AppFooter
```

## Dependency (semua dari npm)

| Paket | Dulu | Sekarang |
|---|---|---|
| `aos` | `unpkg.com/aos@2.3.1` | `npm i aos` |
| `@fontsource/poppins` | Google Fonts CDN | `npm i @fontsource/poppins` |
| `@fontsource/cormorant-garamond` | Google Fonts CDN | `npm i @fontsource/cormorant-garamond` |
| `@unhead/vue` | — | manajemen `<head>` reaktif |
| `vue`, `vite`, `@vitejs/plugin-vue` | — | framework & bundler |

Efeknya: tidak ada request ke domain pihak ketiga, font di-selfhost, dan situs tetap jalan walaupun CDN-nya down.

## SEO yang sudah dipasang

- Title, description, keywords, author, robots, googlebot, bingbot, theme-color, color-scheme
- Canonical + `hreflang` (`id` dan `x-default`)
- Open Graph lengkap: type, site_name, title, description, url, image (+ width/height/type/alt), locale
- Twitter/X Card `summary_large_image` lengkap + `twitter:image:alt`
- JSON-LD `@graph`: `WebSite`, `WebPage`, `Person` (Jiwoo), `Event` (ulang tahun ke-20)
- `robots.txt` + `sitemap.xml` (dengan image sitemap)
- `site.webmanifest` + apple-touch-icon (bisa di-"Add to Home Screen")
- `<noscript>` fallback berisi teks utama
- Semantik: satu `<h1>`, `<main>`, `<section>`, `<article>`, `<figure>`, alt text di semua gambar
- Aksesibilitas: `aria-label`, `aria-pressed`, modal `role="dialog"` + tutup pakai Esc, dukungan `prefers-reduced-motion`
- Performa: `loading="lazy"` untuk foto di bawah lipatan, `decoding="async"`, `preload="none"` di audio

> **Catatan penting soal SPA & SEO.** Semua meta tag kritikal ditulis **statis di `index.html`**, bukan hanya lewat `@unhead/vue`. Ini disengaja: crawler WhatsApp, Telegram, Facebook, dan Discord tidak menjalankan JavaScript, jadi kalau OG tag hanya dipasang saat runtime, preview link-nya akan kosong. `@unhead/vue` tetap dipakai supaya metadata terpusat dan mudah diubah dari `src/seo/siteMeta.js` kalau nanti mau ditambah halaman.

## Kalau ganti domain

Ubah di 5 tempat ini:

1. `vite.config.js` → `BASE` (pakai `"/"` kalau domain sendiri)
2. `index.html` → semua URL absolut (canonical, og:url, og:image, JSON-LD)
3. `src/seo/siteMeta.js` → `SITE_URL`
4. `public/sitemap.xml` dan `public/robots.txt`
5. `public/site.webmanifest` → `start_url`, `scope`, `icons.src`

## Deploy ke GitHub Pages

Workflow `.github/workflows/deploy.yml` sudah disiapkan. Di repo GitHub: **Settings → Pages → Source: GitHub Actions**. Setiap push ke `main` akan otomatis build dan deploy.
