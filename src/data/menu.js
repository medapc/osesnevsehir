// src/data/menu.js
// Ürünler UCUZDAN PAHALIYA sıralanmıştır — Google Ads kalite skoru & dönüşüm için kritik
// Fiyatlar burada merkezi tutulur; güncel restoran fiyat listesi geldiğinde sadece bu sabitleri değiştirin.
export const HOME_MENU_PRICES = {
  kucukDurum: 130,
  ortaDurum: 130,
  cigKofteTabak: 250,
  buyukDurum: 175,
  durumAyranMenu: 170,
  durumIcecekMenu: 180,
  ikiliMenu: 289,
  dortluMenu: 680,
};

export const menu = [
  {
    id: 1,
    kategori: "Çiğ Köfte",
    ad: "Çiğ Köfte Dürüm (Küçük)",
    fiyat: HOME_MENU_PRICES.kucukDurum,
    aciklama: "İnce lavaş, taze çiğ köfte, limon ve nar ekşisi ile",
    emoji: "🌯",
    image: "/images/cigkofte-durum-1.jpg",
    popüler: false,
  },
  {
    id: 2,
    kategori: "Çiğ Köfte",
    ad: "Çiğ Köfte Dürüm (Orta)",
    fiyat: HOME_MENU_PRICES.ortaDurum,
    aciklama: "Doyurucu porsiyon, bol malzeme, özel sos",
    emoji: "🌯",
    image: "/images/cigkofte-durum-2.jpg",
    popüler: true,
  },
  {
    id: 3,
    kategori: "Çiğ Köfte",
    ad: "Çiğ Köfte Tabak",
    fiyat: HOME_MENU_PRICES.cigKofteTabak,
    aciklama: "Taze yeşillikler, domates, limon ile servis",
    emoji: "🥗",
    image: "/images/cigkofte-porsiyon.jpg",
    popüler: false,
  },
  {
    id: 4,
    kategori: "Dürüm",
    ad: "Çiğ Köfte Dürüm (Büyük)",
    fiyat: HOME_MENU_PRICES.buyukDurum,
    aciklama: "Ekstra dolgun, açlığa son veren boy",
    emoji: "🌯",
    image: "/images/cigkofte-durum-1.jpg",
    popüler: true,
  },
  {
    id: 5,
    kategori: "Menü",
    ad: "Dürüm + Ayran Menü",
    fiyat: HOME_MENU_PRICES.durumAyranMenu,
    aciklama: "Orta dürüm + soğuk ayran, tam bir öğün",
    emoji: "🥤",
    image: "/images/cigkofte-durum-2.jpg",
    popüler: true,
  },
  {
    id: 6,
    kategori: "Menü",
    ad: "Dürüm + İçecek Menü",
    fiyat: HOME_MENU_PRICES.durumIcecekMenu,
    aciklama: "Büyük dürüm + seçtiğin içecek",
    emoji: "🥤",
    image: "/images/cigkofte-durum-1.jpg",
    popüler: false,
  },
  {
    id: 7,
    kategori: "Aile/Grup",
    ad: "İkili Menü",
    fiyat: HOME_MENU_PRICES.ikiliMenu,
    aciklama: "2x Büyük Dürüm + 2x İçecek, arkadaşına ısmarla",
    emoji: "👫",
    image: "/images/cigkofte-durum-2.jpg",
    popüler: false,
  },
  {
    id: 8,
    kategori: "Aile/Grup",
    ad: "Dörtlü Parti Menü",
    fiyat: HOME_MENU_PRICES.dortluMenu,
    aciklama: "4x Dürüm + 4x İçecek, grup siparişi için ideal",
    emoji: "🎉",
    image: "/images/cigkofte-durum-1.jpg",
    popüler: false,
  },
];

export const populerler = menu.filter((item) => item.popüler);

export default menu;
