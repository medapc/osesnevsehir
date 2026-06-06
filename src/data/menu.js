// src/data/menu.js
// Ürünler UCUZDAN PAHALIYA sıralanmıştır — Google Ads kalite skoru & dönüşüm için kritik

export const menu = [
  {
    id: 1,
    kategori: "Çiğköfte",
    ad: "Çiğköfte Dürüm (Küçük)",
    fiyat: 30,
    aciklama: "İnce lavaş, taze çiğköfte, limon ve nar ekşisi ile",
    emoji: "🌯",
    image: "/images/cigkofte-durum-1.jpg",
    popüler: false,
  },
  {
    id: 2,
    kategori: "Çiğköfte",
    ad: "Çiğköfte Dürüm (Orta)",
    fiyat: 40,
    aciklama: "Doyurucu porsiyon, bol malzeme, özel sos",
    emoji: "🌯",
    image: "/images/cigkofte-durum-2.jpg",
    popüler: true,
  },
  {
    id: 3,
    kategori: "Çiğköfte",
    ad: "Çiğköfte Tabak",
    fiyat: 45,
    aciklama: "Taze yeşillikler, domates, limon ile servis",
    emoji: "🥗",
    image: "/images/cigkofte-porsiyon.jpg",
    popüler: false,
  },
  {
    id: 4,
    kategori: "Dürüm",
    ad: "Çiğköfte Dürüm (Büyük)",
    fiyat: 55,
    aciklama: "Ekstra dolgun, açlığa son veren boy",
    emoji: "🌯",
    image: "/images/cigkofte-durum-1.jpg",
    popüler: true,
  },
  {
    id: 5,
    kategori: "Menü",
    ad: "Dürüm + Ayran Menü",
    fiyat: 65,
    aciklama: "Orta dürüm + soğuk ayran, tam bir öğün",
    emoji: "🥤",
    image: "/images/cigkofte-durum-2.jpg",
    popüler: true,
  },
  {
    id: 6,
    kategori: "Menü",
    ad: "Dürüm + İçecek Menü",
    fiyat: 70,
    aciklama: "Büyük dürüm + seçtiğin içecek",
    emoji: "🥤",
    image: "/images/cigkofte-durum-1.jpg",
    popüler: false,
  },
  {
    id: 7,
    kategori: "Aile/Grup",
    ad: "İkili Menü",
    fiyat: 120,
    aciklama: "2x Büyük Dürüm + 2x İçecek, arkadaşına ısmarla",
    emoji: "👫",
    image: "/images/cigkofte-durum-2.jpg",
    popüler: false,
  },
  {
    id: 8,
    kategori: "Aile/Grup",
    ad: "Dörtlü Parti Menü",
    fiyat: 220,
    aciklama: "4x Dürüm + 4x İçecek, grup siparişi için ideal",
    emoji: "🎉",
    image: "/images/cigkofte-durum-1.jpg",
    popüler: false,
  },
];

export const populerler = menu.filter((item) => item.popüler);

export default menu;
