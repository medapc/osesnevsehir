# 🌯 Oses Çiğköfte Nevşehir – Web Sitesi

Astro.js + Cloudflare Pages tabanlı, yerel SEO odaklı, Google Ads dönüşüm hunisi sitesi.

---

## 📁 Proje Yapısı

```
oses-nevsehir/
├── astro.config.mjs              # Cloudflare Pages SSG konfigürasyonu
├── wrangler.toml                 # Cloudflare Pages build ayarları
├── package.json
├── public/
│   └── sertifikalar/             # ← JPG sertifikalarınızı buraya yükleyin
│       ├── gidalama-sertifikasi.jpg
│       ├── hijyen-belgesi.jpg
│       └── ...
└── src/
    ├── data/
    │   ├── adsKeywords.js        # A) Google Ads slug → title/h1/description
    │   ├── menu.js               # Ürünler (ucuzdan pahalıya)
    │   └── reviews.js            # Google yorum vitrini
    ├── layouts/
    │   └── BaseLayout.astro      # HTML kabuğu, meta, Schema.org
    ├── pages/
    │   ├── index.astro           # Ana sayfa
    │   ├── hakkimizda.astro      # C) Hakkımızda + Sertifikalar galerisi
    │   └── kampanya/
    │       └── [slug].astro      # B) Dinamik reklam sayfaları
    └── styles/
        └── global.css            # Tasarım sistemi değişkenleri
```

---

## 🚀 Kurulum & Çalıştırma

```bash
# 1. Bağımlılıkları yükle
npm install

# 2. Geliştirme sunucusunu başlat
npm run dev

# 3. Production build al
npm run build

# 4. Build'i önizle
npm run preview
```

---

## 🌐 Cloudflare Pages Deploy

1. GitHub'a push yapın
2. [Cloudflare Pages](https://pages.cloudflare.com) → "Create a project"
3. GitHub repo'nuzu bağlayın
4. Build ayarları:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** `20`
5. Deploy!

---

## 📢 Google Ads Kullanımı

Her reklam için farklı "Final URL" kullanın:

| Anahtar Kelime | URL |
|---|---|
| nevşehir yemek sipariş | `https://osesnevsehir.com/kampanya/nevsehir-yemek-siparis` |
| nevşehir dürüm sipariş | `https://osesnevsehir.com/kampanya/nevsehir-durum-siparis` |
| çiğköfte | `https://osesnevsehir.com/kampanya/cigkofte` |
| çiğ köfte nevşehir | `https://osesnevsehir.com/kampanya/cig-kofte-nevsehir` |
| nevşehir çiğ köfte sipariş | `https://osesnevsehir.com/kampanya/nevsehir-cig-kofte-siparis` |
| Oses 2000 Evler Üniversite | `https://osesnevsehir.com/kampanya/oses-2000-evler-universite` |
| Üniversite öğrenci indirimi | `https://osesnevsehir.com/kampanya/nevsehir-universitesi-ogrencilerine-ozel-indirim` |

> **Kalite Skoru İpucu:** Her reklam grubunda anahtar kelime ↔ URL ↔ reklam metni üçlüsü birebir eşleştiğinde Google Quality Score otomatik olarak yükselir.

---

## 🔧 Özelleştirme

### Yeni Kelime Eklemek
`src/data/adsKeywords.js` dosyasına yeni obje ekleyin:
```js
{
  slug: "yeni-kelime",
  title: "Sayfa Title",
  h1: "H1 Başlığı",
  description: "Meta description",
}
```
`npm run build` sonrası `/kampanya/yeni-kelime` sayfası otomatik oluşur.

### Sertifika Eklemek
1. JPG dosyasını `public/sertifikalar/` klasörüne koyun
2. `src/pages/hakkimizda.astro` içindeki `sertifikalar` dizisini güncelleyin

### Ürün/Fiyat Güncellemek
`src/data/menu.js` dosyasını düzenleyin. Ürünler UCUZDAN PAHALIYA sıralanmış olmalıdır.

### Callback Formu Backend Entegrasyonu
Şu an WhatsApp'a yönlendiriyor. Gerçek telefon entegrasyonu için:
- [Formspree](https://formspree.io) (ücretsiz)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- Kendi SMS API'niz (Twilio, Netgsm)

---

## 📊 SEO Kontrol Listesi

- [x] Her slug için benzersiz `<title>` ve `<meta description>`
- [x] `<h1>` reklam kelimesiyle birebir eşleşiyor
- [x] Schema.org LocalBusiness + FoodEstablishment markup
- [x] `<link rel="canonical">` her sayfada
- [x] Geo meta etiketleri (TR-50 / Nevşehir)
- [x] Çalışma saatleri OpeningHoursSpecification ile işaretli
- [x] Google Haritalar embed footer'da
- [x] Mobile-first, responsive tasarım
- [x] Görsel lazy loading (`loading="lazy"`)

---

## 📞 İletişim

**Oses Çiğköfte Nevşehir Üniversite**  
2000 Evler Mah. Şht. Musa Taşdemir Sk. No:13, 50100 Nevşehir  
📞 0384 215 2502 | 📧 osesnew50@gmail.com  
🕐 Her Gün 11:00 – 02:00
