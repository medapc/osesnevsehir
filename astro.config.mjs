// astro.config.mjs
import { defineConfig } from "astro/config";

// Cloudflare Pages için tam SSG (Static Site Generation) modu
// "output: 'static'" ile tüm sayfalar build sırasında pre-render edilir
// Cloudflare Pages'e yüklemek için: `npm run build` → `dist/` klasörünü yükle

export default defineConfig({
  output: "static",

  // Gerçek domain'inizi buraya yazın (sitemap ve canonical URL'ler için)
  site: "https://osesnevsehir.com",

  // Cloudflare Pages'de trailing slash sorununu önler
  trailingSlash: "never",

  // Astro'nun built-in optimizasyonları
  build: {
    // Her sayfa için ayrı HTML dosyası (SEO için kritik)
    format: "file",
  },

  // Görsel optimizasyonu (Cloudflare CDN ile uyumlu)
  image: {
    // Cloudflare Pages'de harici servis gerekmez, Astro built-in kullan
    service: { entrypoint: "astro/assets/services/sharp" },
  },

  // Vite ayarları
  vite: {
    build: {
      // Chunk boyutunu optimize et
      cssCodeSplit: true,
    },
  },
});
