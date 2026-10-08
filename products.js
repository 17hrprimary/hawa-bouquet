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

// ---------- KOLEKSI UTAMA — produk berfoto di atas, placeholder "Segera hadir" (tanpa foto) di bawah. Link: index.html#produk-01, halaman: p/01.html ----------
const PRODUCTS = [
  {
    id: "01",
    nama: "Bucket Bunga Pink",
    kategori: "Bucket Bunga",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket bunga artifisial nuansa pink: mawar pink, ungu, dan putih dengan wrapping pink salem bergaris emas.",
    isi: ["Bunga mawar artifisial (pink, ungu, putih)", "Bunga kecil pelengkap", "Wrapping pink + pita"],
    foto: "assets/products/01.jpg"
  },
  {
    id: "02",
    nama: "Bucket Snack Silverqueen Pink",
    kategori: "Bucket Snack",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket snack cokelat Silverqueen dengan topper kupu-kupu, balon hati pink, dan bunga artifisial dalam wrapping pink.",
    isi: ["Cokelat Silverqueen", "Topper kupu-kupu Silverqueen", "Balon foil hati pink", "Bunga artifisial", "Wrapping pink + pita"],
    foto: "assets/products/02.jpg"
  },
  {
    id: "03",
    nama: "Bucket Uang Kipas Pink Jumbo",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket uang jumbo dengan lembaran uang tersusun seperti kipas, hiasan bunga di tengah, dan wrapping pink berlapis.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Bunga artifisial", "Wrapping pink berlapis + pita"],
    foto: "assets/products/03.jpg"
  },
  {
    id: "04",
    nama: "Bucket Dompet Hari Guru",
    kategori: "Parcel / Hampers",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket hadiah Hari Guru berisi dompet dalam kotak, topper karakter guru, bunga artifisial, dan kartu \"Terima Kasih Guruku\" dengan wrapping pink.",
    isi: ["Dompet dalam kotak", "Topper karakter guru", "Bunga artifisial", "Kartu \"Terima Kasih Guruku\"", "Wrapping pink + pita"],
    foto: "assets/products/04.jpg"
  },
  {
    id: "05",
    nama: "Bucket Boneka Teddy Wisuda",
    kategori: "Bucket Boneka",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket boneka teddy bear bertoga dengan uang kertas yang dilipat seperti bunga, dalam wrapping hitam-putih elegan.",
    isi: ["Boneka teddy bear bertoga", "Uang kertas (jumlah & nominal dibahas dengan admin)", "Bunga artifisial", "Kartu ucapan", "Wrapping hitam-putih + pita"],
    foto: "assets/products/05.jpg"
  },
  {
    id: "06",
    nama: "Bucket Bunga Pink Mawar Putih",
    kategori: "Bucket Bunga",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket bunga artifisial dengan mawar putih di tengah, bunga kecil ungu-kuning, dan wrapping pink-putih bertumpuk.",
    isi: ["Mawar putih artifisial", "Bunga kecil ungu & kuning", "Wrapping pink-putih"],
    foto: "assets/products/06.jpg"
  },
  {
    id: "07",
    nama: "Bucket Bumbu Dapur Hijau Mint",
    kategori: "Bucket Snack",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket hadiah Hari Guru berisi aneka bumbu dapur dan cokelat, dengan topper karakter berhijab dan kartu \"Terima Kasih Guruku\" dalam wrapping hijau mint.",
    isi: ["Aneka bumbu dapur (Masako, Royco, Desaku, dll.)", "Cokelat Silverqueen", "Topper karakter berhijab", "Kartu \"Terima Kasih Guruku\"", "Wrapping hijau mint + pita cokelat"],
    foto: "assets/products/07.jpg"
  },
  {
    id: "08",
    nama: "Bucket Uang Bunga Putih Lilac",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket uang dengan susunan uang kertas berbentuk bunga besar, glitter ungu, dan ruffle putih.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Glitter ungu", "Wrapping putih + pita lilac"],
    foto: "assets/products/08.jpg",
    fotoLain: ["assets/products/08-2.jpg"]
  },
  {
    id: "09",
    nama: "Bucket Jam Tangan Hari Guru",
    kategori: "Parcel / Hampers",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket hadiah Hari Guru berisi jam tangan dalam kotak, daun dan bunga artifisial, serta kartu \"Terima Kasih Guruku\" dalam wrapping putih.",
    isi: ["Jam tangan dalam kotak", "Daun & bunga artifisial", "Kartu \"Terima Kasih Guruku\"", "Wrapping putih + pita pink"],
    foto: "assets/products/09.jpg"
  },
  {
    id: "10",
    nama: "Bucket Wisuda Topi Toga & Boneka",
    kategori: "Bucket Boneka",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Kado wisuda berbentuk topi toga berisi boneka teddy pink, bunga artifisial, dan cokelat Silverqueen, dengan tulisan nama wisudawan.",
    isi: ["Boneka teddy pink", "Bunga artifisial", "Cokelat Silverqueen", "Kotak topi toga + tulisan nama"],
    foto: "assets/products/10.jpg"
  },
  {
    id: "12",
    nama: "Bucket Bumbu Dapur Pink",
    kategori: "Bucket Snack",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket hadiah Hari Guru berisi aneka bumbu dapur, topper karakter berhijab, dan kartu \"Terima Kasih Guruku\" dalam wrapping pink.",
    isi: ["Aneka bumbu dapur (Indofood Racik, Desaku, Ladaku, dll.)", "Topper karakter berhijab", "Bunga artifisial", "Kartu \"Terima Kasih Guruku\"", "Wrapping pink + pita"],
    foto: "assets/products/12.jpg"
  },
  {
    id: "13",
    nama: "Bucket Uang Bunga Ungu Lilac",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket uang dengan uang kertas yang dibentuk bunga-bunga kecil bernuansa ungu, ruffle putih, dan wrapping lilac berhias pita.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Wrapping lilac + ruffle putih", "Pita lilac"],
    foto: "assets/products/13.jpg",
    fotoLain: ["assets/products/13-2.jpg"]
  },
  {
    id: "14",
    nama: "Bucket Alat Tulis Hari Guru",
    kategori: "Parcel / Hampers",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Hadiah Hari Guru berisi pulpen dan alat tulis, topper karakter guru, bunga artifisial biru, dan kartu \"Terima Kasih Guruku\".",
    isi: ["Pulpen & alat tulis", "Topper karakter guru", "Bunga artifisial biru", "Kartu \"Terima Kasih Guruku\"", "Pita biru"],
    foto: "assets/products/14.jpg"
  },
  {
    id: "18",
    nama: "Bucket Uang Mawar Pink Hitam",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket uang dengan mawar pink di tengah, lingkaran uang kertas biru, dan wrapping hitam-abu bertumpuk.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Mawar pink + hiasan kupu-kupu", "Wrapping hitam-abu"],
    foto: "assets/products/18.jpg"
  },
  {
    id: "23",
    nama: "Bucket Uang Mawar Ungu Hitam",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket uang dengan mawar ungu dan kupu-kupu di tengah, lingkaran uang kertas, glitter ungu, dan wrapping hitam-abu.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Mawar ungu + hiasan kupu-kupu", "Glitter ungu", "Wrapping hitam-abu + pita"],
    foto: "assets/products/23.jpg",
    fotoLain: ["assets/products/23-2.jpg"]
  },
  {
    id: "26",
    nama: "Bucket Uang Mawar Ungu Glitter",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket uang dengan rangkaian mawar ungu dan kupu-kupu di tengah, uang kertas di sekelilingnya, glitter ungu, dan wrapping hitam-abu.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Mawar ungu + hiasan kupu-kupu", "Glitter ungu", "Wrapping hitam-abu"],
    foto: "assets/products/26.jpg"
  },
  {
    id: "27",
    nama: "Bucket Uang Oranye Mawar Kuning",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket uang bernuansa oranye dengan lipatan uang kertas berbentuk kelopak dan mawar kuning di tengah.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Mawar kuning", "Wrapping oranye"],
    foto: "assets/products/27.jpg"
  },
  {
    id: "28",
    nama: "Bucket Uang Bunga Oranye",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket uang dengan lipatan uang kertas berbentuk bunga-bunga oranye, bunga kecil kuning, dan mawar putih, dalam wrapping oranye.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Mawar putih & bunga kecil kuning", "Wrapping oranye + pita"],
    foto: "assets/products/28.jpg"
  },
  {
    id: "29",
    nama: "Bucket Uang Biru Mawar Merah",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket uang dengan lipatan uang kertas biru, mawar merah, dan bunga kecil warna-warni, dilengkapi kartu ucapan.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Mawar merah & bunga artifisial", "Kartu ucapan", "Pita merah"],
    foto: "assets/products/29.jpg"
  },
  {
    id: "30",
    nama: "Bucket Uang Kipas Abu-Putih",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket uang jumbo dengan lembaran uang tersusun seperti kipas, topper, dan wrapping abu-putih berpita biru.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Topper", "Wrapping abu-putih + pita biru"],
    foto: "assets/products/30.jpg"
  },
  {
    id: "31",
    nama: "Bucket Uang Bunga Biru",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket uang dengan susunan uang kertas berbentuk bunga besar, mawar biru di tengah, bunga biru di sekeliling, dan kartu ucapan.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Mawar & bunga biru artifisial", "Kartu ucapan", "Wrapping biru-putih"],
    foto: "assets/products/31.jpg"
  },
  {
    id: "32",
    nama: "Bucket Uang & Silverqueen Hari Guru",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket hadiah Hari Guru berisi uang kertas yang dilipat, cokelat Silverqueen, bunga artifisial, topper karakter berhijab, dan kartu \"Terima Kasih Guruku\".",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Cokelat Silverqueen", "Bunga artifisial", "Topper karakter berhijab", "Kartu \"Terima Kasih Guruku\"", "Pita pink"],
    foto: "assets/products/32.jpg"
  },
  {
    id: "33",
    nama: "Bucket Uang Mawar Biru Jumbo",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket uang berbentuk satu mawar besar dari uang kertas, dihias baby breath biru dan wrapping biru-putih.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Baby breath biru", "Wrapping biru-putih"],
    foto: "assets/products/33.jpg"
  },
  {
    id: "34",
    nama: "Bucket Uang Krem Mawar Merah",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket uang dengan lipatan uang kertas hijau dan mawar merah di tengah, dalam wrapping krem bergelombang berpita merah.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Mawar merah", "Wrapping krem + pita merah"],
    foto: "assets/products/34.jpg"
  },
  {
    id: "35",
    nama: "Bucket Uang Jumbo Pink Salem",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket uang ukuran besar dengan susunan uang kertas melingkar, mawar di tengah, bunga kecil, dan wrapping pink salem bergelombang.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Mawar & bunga kecil artifisial", "Wrapping pink salem + pita"],
    foto: "assets/products/35.jpg"
  },
  {
    id: "36",
    nama: "Bucket Uang Happy Birthday Mawar Biru",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket berbentuk hati dari mawar biru dengan tulisan \"Happy Birthday\", lingkaran uang kertas, dan wrapping hitam.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Mawar biru artifisial", "Tulisan \"Happy Birthday\"", "Wrapping hitam"],
    foto: "assets/products/36.jpg"
  },
  {
    id: "37",
    nama: "Bucket Uang Peach Bunga Oranye",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket uang dengan lipatan uang kertas bernuansa peach, bunga oranye-kuning, mawar putih, dan kartu ucapan.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Bunga artifisial oranye, kuning & putih", "Kartu ucapan", "Wrapping peach + pita putih"],
    foto: "assets/products/37.jpg"
  },
  {
    id: "38",
    nama: "Bucket Uang Mawar Biru Putih",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket uang dengan rangkaian mawar biru dan hiasan mahkota emas di tengah, lingkaran uang kertas, ruffle putih, dan pita biru.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Mawar biru artifisial", "Hiasan mahkota", "Wrapping putih + pita biru"],
    foto: "assets/products/38.jpg",
    fotoLain: ["assets/products/38-2.jpg"]
  },
  {
    id: "39",
    nama: "Bucket Uang Mawar Pink Lilac",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket uang dengan mawar pink di tengah, uang kertas biru di sekelilingnya, dan wrapping pink-lilac berpita pink.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Mawar pink artifisial", "Wrapping pink-lilac + pita"],
    foto: "assets/products/39.jpg",
    fotoLain: ["assets/products/39-2.jpg"]
  },
  {
    id: "40",
    nama: "Bucket Uang Kipas Lilac Lily",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket uang jumbo dengan lembaran uang tersusun seperti kipas, bunga lily dan mawar, dalam wrapping lilac.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Bunga lily & mawar artifisial", "Wrapping lilac + pita"],
    foto: "assets/products/40.jpg"
  },
  {
    id: "41",
    nama: "Bucket Uang Biru Mawar Pink",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket uang dengan tiga mawar pink di tengah, lipatan uang kertas dan ruffle putih, dalam wrapping biru berpita pink.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Mawar pink artifisial", "Wrapping biru + pita pink"],
    foto: "assets/products/41.jpg",
    fotoLain: ["assets/products/41-2.jpg"]
  },
  {
    id: "42",
    nama: "Bucket Uang Kipas Biru Jumbo",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket uang jumbo dengan banyak lembaran uang tersusun seperti kipas, topper, dan wrapping biru berpita.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Topper", "Wrapping biru + pita"],
    foto: "assets/products/42.jpg"
  },
  {
    id: "43",
    nama: "Bucket Uang Khitanan",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket ucapan khitanan dengan banner bulat bertuliskan \"Alhamdulillah\" dan nama anak, bingkai lembaran uang kertas, bunga lily, dan wrapping abu-abu.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Banner ucapan + nama (custom)", "Bunga lily artifisial", "Wrapping abu-abu + pita peach"],
    foto: "assets/products/43.jpg"
  },
  {
    id: "44",
    nama: "Bucket Uang Hitam Mawar Merah",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket uang dengan susunan uang kertas berbentuk bunga, mawar merah di tengah, bunga kecil merah-putih-kuning, dan wrapping hitam.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Mawar merah & bunga kecil artifisial", "Wrapping hitam-abu"],
    foto: "assets/products/44.jpg"
  },
  {
    id: "45",
    nama: "Bucket Uang Mawar Hitam",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket uang elegan dengan mawar hitam di tengah, kelopak dari uang kertas, dan wrapping hitam berpita putih.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Mawar hitam", "Wrapping hitam + pita putih"],
    foto: "assets/products/45.jpg",
    fotoLain: ["assets/products/45-2.jpg"]
  },
  {
    id: "46",
    nama: "Bucket Uang Peach Mawar Pink",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket uang dengan lipatan uang kertas dan wrapping peach bergelombang, mawar pink, baby breath, dan hiasan kupu-kupu.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Mawar pink + baby breath", "Hiasan kupu-kupu", "Wrapping peach"],
    foto: "assets/products/46.jpg"
  },
  {
    id: "47",
    nama: "Bucket Uang Lilac Bunga Ungu",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket uang dengan susunan uang kertas berbentuk bunga, dikelilingi bunga ungu dan kuning, dalam wrapping lilac bertumpuk.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Bunga artifisial ungu & kuning", "Wrapping lilac + pita ungu"],
    foto: "assets/products/47.jpg",
    fotoLain: ["assets/products/47-2.jpg"]
  },
  {
    id: "48",
    nama: "Bucket Uang Kupu-Kupu",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket uang dengan uang kertas yang dilipat berbentuk kupu-kupu, dalam wrapping putih dengan pita putih menjuntai.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Wrapping putih + pita putih"],
    foto: "assets/products/48.jpg"
  },
  {
    id: "49",
    nama: "Bucket Uang Princess Ulang Tahun",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Bucket ulang tahun dengan topper princess bergaun dari lipatan uang kertas, aneka permen/cokelat stik, bunga kecil, dan kartu \"Happy Birthday\" dalam wrapping pink.",
    isi: ["Uang kertas (jumlah & nominal dibahas dengan admin)", "Topper princess", "Aneka permen & cokelat stik", "Bunga artifisial", "Kartu \"Happy Birthday\"", "Wrapping pink + pita"],
    foto: "assets/products/49.jpg"
  },
  {
    id: "50",
    nama: "Buket Rokok Mix Uang Happy Birthday Hitam Emas",
    kategori: "Bucket Uang",
    harga: "",
    estimasi: "tergantung tingkat kesulitan, detail dibahas dengan admin",
    ukuran: "Ukuran: xx cm",
    deskripsi: "Buket ulang tahun jumbo berisi rokok dan uang lipat, dengan wrapping hitam bertumpuk, pita satin emas besar, mawar merah, bunga kecil ungu-kuning, dan kartu \"Happy Birthday\". Khusus pengantaran langsung (tidak dikirim via ekspedisi).",
    isi: ["Rokok (merk & jumlah sesuai request)", "Uang lipat (nominal sesuai request)", "Mawar merah & bunga kecil artifisial", "Kartu \"Happy Birthday\"", "Wrapping hitam + pita satin emas"],
    foto: "assets/products/50.jpg"
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

// ---------- PAKET RAMADAN — menu terpisah. Tambah item baru dengan id "ramadan-18", kode "R18", dst. ----------
// Link: index.html#ramadan-01, halaman: p/ramadan-01.html. Foto: assets/ramadan/
// Item kategori "Paket Sembako" Ramadan otomatis tampil di menu utama "Paket Sembako". Paket Sembako Natal (N03) tetap di Special Edition Natal & Tahun Baru.
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

// ---------- PAKET NATAL & TAHUN BARU — menu terpisah. Tambah item: id "nataru-04", kode "N04", dst. ----------
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

// =============================================================
//  VIDEO REVIEW — file di assets/videos/ (mp4 + poster jpg)
// =============================================================
const VIDEO_REVIEW = [
  { judul: "Review Parcel Snack Tabung Ramadan", video: "assets/videos/review-01.mp4", poster: "assets/videos/review-01.jpg" },
  { judul: "Review Bucket Uang & Bunga Kelahiran", video: "assets/videos/review-02.mp4", poster: "assets/videos/review-02.jpg" },
  { judul: "Review Buket dari Hijab", video: "assets/videos/review-03.mp4", poster: "assets/videos/review-03.jpg" },
  { judul: "Review Parcel Lebaran 100K", video: "assets/videos/review-04.mp4", poster: "assets/videos/review-04.jpg" }
];

// =============================================================
//  TESTIMONI — screenshot chat pelanggan di assets/testimoni/
// =============================================================
const TESTIMONI = Array.from({ length: 14 }, (_, i) => ({ foto: "assets/testimoni/testimoni-" + String(i + 1).padStart(2, "0") + ".webp" }));
