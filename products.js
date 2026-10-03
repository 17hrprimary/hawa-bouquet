// ============================================================
//  DATA PRODUK — satu-satunya file yang perlu diedit untuk produk.
//  Ganti nama, harga, estimasi, deskripsi, dan foto di sini.
//  Foto: taruh di assets/products/ (mis. 01.jpg ... 25.jpg).
//  Jika foto belum ada, kartu otomatis menampilkan kotak "Foto produk".
// ============================================================
const SHOP = {
  hargaDefault: "Harga dibicarakan dengan admin",   // teks yang tampil bila harga produk kosong
  nama: "Hawa Bouquet",
  tagline: "Bucket gift & hampers penuh cinta untuk setiap momen spesial",
  whatsapp: "6283831131080",          // format wa.me: 62 + nomor tanpa 0 di depan
  whatsappDisplay: "0838-3113-1080",   // nomor yang ditampilkan di info kontak
  tiktok: "@hawa_bouquet",            // username TikTok
  tiktokName: "Hawa_Bouquet",         // nama tampilan TikTok
  tiktokUrl: "https://www.tiktok.com/@hawa_bouquet",
  alamat: "Alamat toko: Silakan hubungi admin",
  jamBuka: "Jam buka: Selama admin merespons chat",
  area: "Pengiriman: diantar admin atau ambil sendiri",
  siteUrl: "https://17hrprimary.github.io/hawa-bouquet/"                        // isi setelah online, mis. "https://hawabouquet.com/" -> link share memakai p/NN.html (preview foto di WA)
};

const KATEGORI = ["Semua", "Bucket Bunga", "Bucket Snack", "Bucket Uang", "Parcel / Hampers", "Bucket Boneka"];

// ---------- KOLEKSI UTAMA (25 produk) — link: index.html#produk-01, halaman: p/01.html ----------
const PRODUCTS = [
  {
    id: "01",
    nama: "Produk 01",
    kategori: "Bucket Bunga",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Deskripsi produk 01 — isi dengan penjelasan singkat bucket ini.",
    isi: ["Isi paket 1", "Isi paket 2", "Kartu ucapan"],
    foto: "assets/products/01.jpg"
  },
  {
    id: "02",
    nama: "Produk 02",
    kategori: "Bucket Snack",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Deskripsi produk 02 — isi dengan penjelasan singkat bucket ini.",
    isi: ["Isi paket 1", "Isi paket 2", "Kartu ucapan"],
    foto: "assets/products/02.jpg"
  },
  {
    id: "03",
    nama: "Produk 03",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Deskripsi produk 03 — isi dengan penjelasan singkat bucket ini.",
    isi: ["Isi paket 1", "Isi paket 2", "Kartu ucapan"],
    foto: "assets/products/03.jpg"
  },
  {
    id: "04",
    nama: "Produk 04",
    kategori: "Parcel / Hampers",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Deskripsi produk 04 — isi dengan penjelasan singkat bucket ini.",
    isi: ["Isi paket 1", "Isi paket 2", "Kartu ucapan"],
    foto: "assets/products/04.jpg"
  },
  {
    id: "05",
    nama: "Produk 05",
    kategori: "Bucket Boneka",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Deskripsi produk 05 — isi dengan penjelasan singkat bucket ini.",
    isi: ["Isi paket 1", "Isi paket 2", "Kartu ucapan"],
    foto: "assets/products/05.jpg"
  },
  {
    id: "06",
    nama: "Produk 06",
    kategori: "Bucket Bunga",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Deskripsi produk 06 — isi dengan penjelasan singkat bucket ini.",
    isi: ["Isi paket 1", "Isi paket 2", "Kartu ucapan"],
    foto: "assets/products/06.jpg"
  },
  {
    id: "07",
    nama: "Produk 07",
    kategori: "Bucket Snack",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Deskripsi produk 07 — isi dengan penjelasan singkat bucket ini.",
    isi: ["Isi paket 1", "Isi paket 2", "Kartu ucapan"],
    foto: "assets/products/07.jpg"
  },
  {
    id: "08",
    nama: "Produk 08",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Deskripsi produk 08 — isi dengan penjelasan singkat bucket ini.",
    isi: ["Isi paket 1", "Isi paket 2", "Kartu ucapan"],
    foto: "assets/products/08.jpg"
  },
  {
    id: "09",
    nama: "Produk 09",
    kategori: "Parcel / Hampers",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Deskripsi produk 09 — isi dengan penjelasan singkat bucket ini.",
    isi: ["Isi paket 1", "Isi paket 2", "Kartu ucapan"],
    foto: "assets/products/09.jpg"
  },
  {
    id: "10",
    nama: "Produk 10",
    kategori: "Bucket Boneka",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Deskripsi produk 10 — isi dengan penjelasan singkat bucket ini.",
    isi: ["Isi paket 1", "Isi paket 2", "Kartu ucapan"],
    foto: "assets/products/10.jpg"
  },
  {
    id: "11",
    nama: "Produk 11",
    kategori: "Bucket Bunga",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Deskripsi produk 11 — isi dengan penjelasan singkat bucket ini.",
    isi: ["Isi paket 1", "Isi paket 2", "Kartu ucapan"],
    foto: "assets/products/11.jpg"
  },
  {
    id: "12",
    nama: "Produk 12",
    kategori: "Bucket Snack",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Deskripsi produk 12 — isi dengan penjelasan singkat bucket ini.",
    isi: ["Isi paket 1", "Isi paket 2", "Kartu ucapan"],
    foto: "assets/products/12.jpg"
  },
  {
    id: "13",
    nama: "Produk 13",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Deskripsi produk 13 — isi dengan penjelasan singkat bucket ini.",
    isi: ["Isi paket 1", "Isi paket 2", "Kartu ucapan"],
    foto: "assets/products/13.jpg"
  },
  {
    id: "14",
    nama: "Produk 14",
    kategori: "Parcel / Hampers",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Deskripsi produk 14 — isi dengan penjelasan singkat bucket ini.",
    isi: ["Isi paket 1", "Isi paket 2", "Kartu ucapan"],
    foto: "assets/products/14.jpg"
  },
  {
    id: "15",
    nama: "Produk 15",
    kategori: "Bucket Boneka",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Deskripsi produk 15 — isi dengan penjelasan singkat bucket ini.",
    isi: ["Isi paket 1", "Isi paket 2", "Kartu ucapan"],
    foto: "assets/products/15.jpg"
  },
  {
    id: "16",
    nama: "Produk 16",
    kategori: "Bucket Bunga",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Deskripsi produk 16 — isi dengan penjelasan singkat bucket ini.",
    isi: ["Isi paket 1", "Isi paket 2", "Kartu ucapan"],
    foto: "assets/products/16.jpg"
  },
  {
    id: "17",
    nama: "Produk 17",
    kategori: "Bucket Snack",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Deskripsi produk 17 — isi dengan penjelasan singkat bucket ini.",
    isi: ["Isi paket 1", "Isi paket 2", "Kartu ucapan"],
    foto: "assets/products/17.jpg"
  },
  {
    id: "18",
    nama: "Produk 18",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Deskripsi produk 18 — isi dengan penjelasan singkat bucket ini.",
    isi: ["Isi paket 1", "Isi paket 2", "Kartu ucapan"],
    foto: "assets/products/18.jpg"
  },
  {
    id: "19",
    nama: "Produk 19",
    kategori: "Parcel / Hampers",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Deskripsi produk 19 — isi dengan penjelasan singkat bucket ini.",
    isi: ["Isi paket 1", "Isi paket 2", "Kartu ucapan"],
    foto: "assets/products/19.jpg"
  },
  {
    id: "20",
    nama: "Produk 20",
    kategori: "Bucket Boneka",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Deskripsi produk 20 — isi dengan penjelasan singkat bucket ini.",
    isi: ["Isi paket 1", "Isi paket 2", "Kartu ucapan"],
    foto: "assets/products/20.jpg"
  },
  {
    id: "21",
    nama: "Produk 21",
    kategori: "Bucket Bunga",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Deskripsi produk 21 — isi dengan penjelasan singkat bucket ini.",
    isi: ["Isi paket 1", "Isi paket 2", "Kartu ucapan"],
    foto: "assets/products/21.jpg"
  },
  {
    id: "22",
    nama: "Produk 22",
    kategori: "Bucket Snack",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Deskripsi produk 22 — isi dengan penjelasan singkat bucket ini.",
    isi: ["Isi paket 1", "Isi paket 2", "Kartu ucapan"],
    foto: "assets/products/22.jpg"
  },
  {
    id: "23",
    nama: "Produk 23",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Deskripsi produk 23 — isi dengan penjelasan singkat bucket ini.",
    isi: ["Isi paket 1", "Isi paket 2", "Kartu ucapan"],
    foto: "assets/products/23.jpg"
  },
  {
    id: "24",
    nama: "Produk 24",
    kategori: "Parcel / Hampers",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Deskripsi produk 24 — isi dengan penjelasan singkat bucket ini.",
    isi: ["Isi paket 1", "Isi paket 2", "Kartu ucapan"],
    foto: "assets/products/24.jpg"
  },
  {
    id: "25",
    nama: "Produk 25",
    kategori: "Bucket Boneka",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Deskripsi produk 25 — isi dengan penjelasan singkat bucket ini.",
    isi: ["Isi paket 1", "Isi paket 2", "Kartu ucapan"],
    foto: "assets/products/25.jpg"
  }
];

// ---------- PROMO RAMADAN — menu terpisah. Tambah item baru dengan id "ramadan-18", kode "R18", dst. ----------
// Link: index.html#ramadan-01, halaman: p/ramadan-01.html. Foto: assets/ramadan/
const PROMO_KATEGORI = ["Semua", "Parcel Lebaran", "Paket Sembako"];
const PROMO_RAMADAN = [
  {
    id: "ramadan-01",
    kode: "R01",
    nama: "Parcel Lebaran Astor Choco",
    kategori: "Parcel Lebaran",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Parcel Idul Fitri dalam keranjang emas berisi aneka cokelat dan biskuit favorit keluarga, dihias pita dan selempang \"Selamat Idul Fitri\".",
    isi: ["Astor cokelat (2 kaleng)", "Nabati Bites", "Biskuit Stik (2 kotak)", "Roll wafer", "Sirup Marjan", "Keranjang emas + selempang \"Selamat Idul Fitri\""],
    foto: "assets/ramadan/ramadan-01.jpg"
  },
  {
    id: "ramadan-02",
    kode: "R02",
    nama: "Parcel Lebaran Ceria Kuning",
    kategori: "Parcel Lebaran",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Parcel Idul Fitri bernuansa kuning keju yang ceria dalam keranjang emas, dihias pita dan selempang \"Selamat Idul Fitri\".",
    isi: ["Nabati keju (kaleng)", "Ahh (2 pak)", "Nyam Nyam", "Kuki", "Sirup ABC Squash Mangga", "Keranjang emas + selempang \"Selamat Idul Fitri\""],
    foto: "assets/ramadan/ramadan-02.jpg"
  },
  {
    id: "ramadan-03",
    kode: "R03",
    nama: "Parcel Lebaran Biru",
    kategori: "Parcel Lebaran",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Parcel Idul Fitri bernuansa biru yang segar dalam keranjang emas, dihias pita dan selempang \"Selamat Idul Fitri\".",
    isi: ["Astor Vanilla (2 kotak)", "Fruit Tea", "Tango wafer", "Biskitop", "Keranjang emas + selempang \"Selamat Idul Fitri\""],
    foto: "assets/ramadan/ramadan-03.jpg"
  },
  {
    id: "ramadan-04",
    kode: "R04",
    nama: "Parcel Lebaran Zyluc",
    kategori: "Parcel Lebaran",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Parcel Idul Fitri dalam keranjang emas berisi stik dan wafer cokelat serta teh, dihias pita dan selempang \"Selamat Idul Fitri\".",
    isi: ["Zyluc stik cokelat (2 kotak)", "Wafer cokelat", "Teh Sosro", "Keranjang emas + selempang \"Selamat Idul Fitri\""],
    foto: "assets/ramadan/ramadan-04.jpg"
  },
  {
    id: "ramadan-05",
    kode: "R05",
    nama: "Parcel Sembako Lebaran",
    kategori: "Paket Sembako",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Parcel Idul Fitri berisi sembako yang praktis dan bermanfaat, dalam keranjang emas, dihias pita dan selempang \"Selamat Idul Fitri\".",
    isi: ["Minyak goreng", "Gula Gulaku", "Teh Celup Sosro", "Mi instan", "Keranjang emas + selempang \"Selamat Idul Fitri\""],
    foto: "assets/ramadan/ramadan-05.jpg"
  },
  {
    id: "ramadan-06",
    kode: "R06",
    nama: "Parcel Lebaran Jumbo",
    kategori: "Parcel Lebaran",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Parcel Idul Fitri ukuran besar dan tinggi dalam keranjang cokelat, penuh aneka biskuit, wafer, dan sirup, dihias pita dan selempang \"Selamat Idul Fitri\".",
    isi: ["Biskuit Butter Caramel", "Ahh", "Nabati", "Choco Lito", "Nextar", "Nyam Nyam", "Sirup", "Keranjang cokelat + selempang \"Selamat Idul Fitri\""],
    foto: "assets/ramadan/ramadan-06.jpg"
  },
  {
    id: "ramadan-07",
    kode: "R07",
    nama: "Paket Couple Lebaran Jumbo",
    kategori: "Parcel Lebaran",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Sepasang parcel Idul Fitri besar yang serasi (paket duo), cocok untuk dua keluarga atau rekan sekaligus.",
    isi: ["2 parcel serasi", "Biskuit Butter Caramel / Coffee Caramel", "Ahh", "Nabati", "Choco Lito", "Nextar", "Keranjang + selempang \"Selamat Idul Fitri\" (×2)"],
    foto: "assets/ramadan/ramadan-07.jpg"
  },
  {
    id: "ramadan-08",
    kode: "R08",
    nama: "Parcel Lebaran Tower Istimewa",
    kategori: "Parcel Lebaran",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Parcel Idul Fitri bertingkat tinggi dan megah, penuh camilan pilihan, dihias pita dan selempang \"Selamat Idul Fitri\".",
    isi: ["Nextar", "Egg Rolls", "Pocky", "Biskuit Strawberry", "Top Selected", "Tango", "Nabati", "Keranjang + selempang \"Selamat Idul Fitri\""],
    foto: "assets/ramadan/ramadan-08.jpg"
  },
  {
    id: "ramadan-09",
    kode: "R09",
    nama: "Parcel Lebaran Strawberry Tosca",
    kategori: "Parcel Lebaran",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Parcel Idul Fitri bernuansa pink dan tosca dengan camilan rasa strawberry, dihias pita dan selempang \"Selamat Idul Fitri\".",
    isi: ["Biskitop Strawberry", "Nabati Bites Pink Lava", "Zyluc", "Sirup Marjan", "Keranjang + selempang \"Selamat Idul Fitri\""],
    foto: "assets/ramadan/ramadan-09.jpg"
  },
  {
    id: "ramadan-10",
    kode: "R10",
    nama: "Parcel Mini Nanas Cokelat",
    kategori: "Parcel Lebaran",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Parcel Idul Fitri ukuran mini yang manis, pas untuk bingkisan sederhana, dihias pita dan selempang \"Selamat Idul Fitri\".",
    isi: ["Biskuit selai nanas", "Wafer stik cokelat", "Minuman Nipis Madu", "Keranjang + selempang \"Selamat Idul Fitri\""],
    foto: "assets/ramadan/ramadan-10.jpg"
  },
  {
    id: "ramadan-11",
    kode: "R11",
    nama: "Parcel Mini Rosé Strawberry",
    kategori: "Parcel Lebaran",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Parcel Idul Fitri ukuran mini bernuansa pink dengan camilan strawberry, dihias pita dan selempang \"Selamat Idul Fitri\".",
    isi: ["Stik strawberry", "Biskuit selai strawberry", "Minuman Nipis Madu", "Keranjang + selempang \"Selamat Idul Fitri\""],
    foto: "assets/ramadan/ramadan-11.jpg"
  },
  {
    id: "ramadan-12",
    kode: "R12",
    nama: "Parcel Tabung Premium Minal Aidzin",
    kategori: "Parcel Lebaran",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Parcel Idul Fitri premium dalam tabung bening, dengan toples permen bertuliskan \"Minal Aidzin\".",
    isi: ["Toples permen \"Minal Aidzin\"", "Nextar", "Pocky Matcha", "Sirup Marjan Melon", "Pringles", "Kemasan tabung bening"],
    foto: "assets/ramadan/ramadan-12.jpg"
  },
  {
    id: "ramadan-13",
    kode: "R13",
    nama: "Parcel Lebaran Pink Manis",
    kategori: "Parcel Lebaran",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Parcel Idul Fitri bernuansa pink lembut dengan camilan rasa strawberry, dihias pita dan selempang \"Selamat Idul Fitri\".",
    isi: ["Nextar Strawberry", "Stik strawberry", "Fruit Tea Apel", "Nabati Bites Strawberry", "Keranjang + selempang \"Selamat Idul Fitri\""],
    foto: "assets/ramadan/ramadan-13.jpg"
  },
  {
    id: "ramadan-14",
    kode: "R14",
    nama: "Parcel Lebaran Biru Tango",
    kategori: "Parcel Lebaran",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Parcel Idul Fitri bernuansa biru dengan camilan wafer dan biskuit, dihias pita dan selempang \"Selamat Idul Fitri\".",
    isi: ["Zyluc Black", "Pocky Milk", "Tango", "Biskitop beruang", "Minuman soda", "Keranjang + selempang \"Selamat Idul Fitri\""],
    foto: "assets/ramadan/ramadan-14.jpg"
  },
  {
    id: "ramadan-15",
    kode: "R15",
    nama: "Parcel Lebaran Merah Strawberry",
    kategori: "Parcel Lebaran",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Parcel Idul Fitri bernuansa merah muda dan merah, serba strawberry, dihias pita dan selempang \"Selamat Idul Fitri\".",
    isi: ["Ahh Strawberry", "Nabati Bites Strawberry", "Pocky Strawberry", "Sirup Marjan", "Biskitop", "Keranjang + selempang \"Selamat Idul Fitri\""],
    foto: "assets/ramadan/ramadan-15.jpg"
  },
  {
    id: "ramadan-16",
    kode: "R16",
    nama: "Parcel Lebaran Hijau Kelapa",
    kategori: "Parcel Lebaran",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Parcel Idul Fitri bernuansa hijau segar dengan rasa kelapa, matcha, dan melon, dihias pita dan selempang \"Selamat Idul Fitri\".",
    isi: ["Ahh Coconut", "Tango Coconut", "Pocky Matcha", "Sirup Marjan Melon", "Astor", "Keranjang + selempang \"Selamat Idul Fitri\""],
    foto: "assets/ramadan/ramadan-16.jpg"
  },
  {
    id: "ramadan-17",
    kode: "R17",
    nama: "Paket Sembako Berkah",
    kategori: "Paket Sembako",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Paket sembako Idul Fitri (tanpa keranjang) berisi kebutuhan dapur sehari-hari.",
    isi: ["Gula pasir", "Minyak goreng Rizki", "Kopi Kapal Api", "Mi instan", "Rosina"],
    foto: "assets/ramadan/ramadan-17.jpg"
  }
];

// ---------- PROMO NATAL & TAHUN BARU — menu terpisah. Tambah item: id "nataru-04", kode "N04", dst. ----------
// Link: index.html#nataru-01, halaman: p/nataru-01.html. Foto: assets/nataru/
const NATARU_KATEGORI = ["Semua", "Parcel Natal", "Paket Sembako"];
const PROMO_NATARU = [
  {
    id: "nataru-01",
    kode: "N01",
    nama: "Parcel Natal Astor Choco",
    kategori: "Parcel Natal",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Parcel Natal & Tahun Baru dalam keranjang abu-abu elegan dengan pita hijau-merah, kartu \"Merry Christmas & Happy New Year\", dan aneka cokelat serta biskuit.",
    isi: ["Astor cokelat", "Nabati Bites", "Biskuit Stik (2 kotak)", "Roll wafer", "Sirup", "Keranjang abu-abu + selempang \"Selamat Natal & Tahun Baru\""],
    foto: "assets/nataru/nataru-01.jpg"
  },
  {
    id: "nataru-02",
    kode: "N02",
    nama: "Parcel Natal Zyluc",
    kategori: "Parcel Natal",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Parcel Natal & Tahun Baru dalam keranjang abu-abu berisi stik cokelat, wafer, dan teh, dengan kartu \"Merry Christmas & Happy New Year\".",
    isi: ["Zyluc stik cokelat (2 kotak)", "Wafer cokelat", "Teh Botol", "Keranjang abu-abu + selempang \"Selamat Natal & Tahun Baru\""],
    foto: "assets/nataru/nataru-02.jpg"
  },
  {
    id: "nataru-03",
    kode: "N03",
    nama: "Paket Sembako Natal",
    kategori: "Paket Sembako",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Paket sembako Natal & Tahun Baru dengan pita merah, praktis dan bermanfaat untuk keluarga.",
    isi: ["Gula pasir", "Rosina", "Kopi Kapal Api", "Mi instan", "Minyak goreng Rizki", "Pita merah"],
    foto: "assets/nataru/nataru-03.jpg"
  },
  {
    id: "nataru-04",
    kode: "N04",
    nama: "Parcel Natal Good Time",
    kategori: "Parcel Natal",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Parcel Natal & Tahun Baru dalam keranjang anyaman dengan pita hijau-merah dan selempang \"Selamat Natal & Tahun Baru\", berisi cokelat, cookies, dan sirup.",
    isi: ["Astor cokelat", "Good Time cookies", "Roll wafer", "Biskuit stik", "Sirup", "Keranjang anyaman + selempang \"Selamat Natal & Tahun Baru\""],
    foto: "assets/nataru/nataru-04.jpg"
  }
];
