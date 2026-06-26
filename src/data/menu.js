// src/data/menu.js
// Ana sayfa urunleri ve fiyatlari merkezi olarak burada tutulur.
export const HOME_MENU_PRICES = {
  enfesDurum: 130,
  cigKofteTabak: 250,
  megaDurum: 160,
  durumAyranMenu: 170,
  durumIcecekMenu: 180,
  ikiliMenu: 289,
  dortluMenu: 680,
};

export const menu = [
  {
    id: 2,
    kategori: "Çiğ Köfte Dürüm",
    ad: "Enfes Dürüm",
    gramaj: "100 gram",
    fiyat: HOME_MENU_PRICES.enfesDurum,
    aciklama: "20\u20BA fark ile Doritos se\u00E7ene\u011Fi",
    emoji: "🌯",
    image: "/images/menu/durum-normal-yeni.jpg",
    populer: true,
  },
  {
    id: 3,
    kategori: "Çiğ Köfte Porsiyon",
    ad: "Çiğ Köfte Tabak",
    fiyat: HOME_MENU_PRICES.cigKofteTabak,
    aciklama: "Taze yeşillikler, domates, limon ile servis",
    emoji: "🥗",
    image: "/images/cigkofte-porsiyon.jpg",
    populer: false,
  },
  {
    id: 4,
    kategori: "Çiğ Köfte Dürüm",
    ad: "Mega Dürüm",
    gramaj: "150 gram",
    fiyat: HOME_MENU_PRICES.megaDurum,
    aciklama: "20\u20BA fark ile Doritos se\u00E7ene\u011Fi",
    emoji: "🌯",
    image: "/images/menu/durum-normal-yeni.jpg",
    populer: true,
  },
  {
    id: 5,
    kategori: "Menü",
    ad: "Dürüm + Ayran Menü",
    gramaj: "100 gram",
    fiyat: HOME_MENU_PRICES.durumAyranMenu,
    aciklama: "Orta dürüm + soğuk ayran, tam bir öğün",
    emoji: "🥤",
    image: "/images/menu/durum-normal-yeni.jpg",
    populer: true,
  },
  {
    id: 6,
    kategori: "Menü",
    ad: "Dürüm + İçecek Menü",
    fiyat: HOME_MENU_PRICES.durumIcecekMenu,
    aciklama: "Büyük dürüm + seçtiğin içecek",
    emoji: "🥤",
    image: "/images/menu/durum-normal-yeni.jpg",
    populer: false,
  },
  {
    id: 7,
    kategori: "Aile/Grup",
    ad: "İkili Menü",
    fiyat: HOME_MENU_PRICES.ikiliMenu,
    aciklama: "2x Büyük Dürüm + 2x İçecek, arkadaşına ısmarla",
    emoji: "👫",
    image: "/images/menu/durum-normal-yeni.jpg",
    populer: false,
  },
  {
    id: 8,
    kategori: "Aile/Grup",
    ad: "Dörtlü Parti Menü",
    fiyat: HOME_MENU_PRICES.dortluMenu,
    aciklama: "4x Dürüm + 4x İçecek, grup siparişi için ideal",
    emoji: "🎉",
    image: "/images/menu/durum-normal-yeni.jpg",
    populer: false,
  },
];

export const populerler = menu.filter((item) => item.populer);

export default menu;
