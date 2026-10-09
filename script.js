(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const waBase = "https://wa.me/" + SHOP.whatsapp;
  const waLink = (msg, to) => (to === false ? "https://wa.me/" : waBase) + "?text=" + encodeURIComponent(msg);
  const ICON_LINK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>';
  const ICON_WA = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>';
  const ICON_BOUQUET = '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="24" cy="18" r="7"/><circle cx="40" cy="16" r="7"/><circle cx="32" cy="27" r="7"/><path d="M18 30l14 28 14-28"/><path d="M26 44c4-3 8-3 12 0"/></svg>';

  // Harga: kosong -> teks default (SHOP.hargaDefault)
  const priceOf = p => (p.harga && String(p.harga).trim()) || SHOP.hargaDefault || "Harga dibicarakan dengan admin";
  const isAsk = p => !(p.harga && String(p.harga).trim());

  // ---------- Shop info ----------
  document.title = SHOP.nama + " — Bucket Gift & Hampers";
  const shopVals = Object.assign({}, SHOP, { whatsappDisplay: SHOP.whatsappDisplay || ("wa.me/" + SHOP.whatsapp) });
  document.querySelectorAll("[data-shop]").forEach(el => { const v = shopVals[el.dataset.shop]; if (v) el.textContent = v; });
  document.querySelectorAll(".wa-link").forEach(a => a.href = waLink("Halo " + SHOP.nama + ", saya mau tanya/pesan bucket gift."));
  $("#year").textContent = new Date().getFullYear();
  // "Label: nilai" -> <b>Label</b> <span>nilai</span>
  document.querySelectorAll("[data-shop-line]").forEach(li => {
    const v = SHOP[li.dataset.shopLine]; if (!v) return;
    const i = v.indexOf(":"); const lab = i > 0 ? v.slice(0, i) : "", val = i > 0 ? v.slice(i + 1).trim() : v;
    if (lab) li.querySelector("b").textContent = lab;
    li.querySelector("span").textContent = val.charAt(0).toUpperCase() + val.slice(1);
  });
  document.querySelectorAll("[data-tiktok]").forEach(a => { if (SHOP.tiktokUrl) a.href = SHOP.tiktokUrl; });

  // ---------- Lists: main collection + Paket Ramadan ----------
  const PROMO = typeof PROMO_RAMADAN !== "undefined" ? PROMO_RAMADAN : [];
  PRODUCTS.forEach(p => { p._slug = "produk-" + p.id; p._label = "No. " + p.id; p._page = p.id; p._list = "main"; });
  PROMO.forEach(p => { p._slug = p.id; p._label = p.kode || p.id; p._page = p.id; p._list = "promo"; });
  const NATARU = typeof PROMO_NATARU !== "undefined" ? PROMO_NATARU : [];
  NATARU.forEach(p => { p._slug = p.id; p._label = p.kode || p.id; p._page = p.id; p._list = "nataru"; });
  const ALL = PRODUCTS.concat(PROMO, NATARU);
  const LIST_NAME = { main: "Koleksi Bucket Gift", promo: "Paket Ramadan", nataru: "Paket Natal & Tahun Baru" };
  const LIST_HASH = { main: "#koleksi", promo: "#paket-ramadan", nataru: "#paket-nataru" };
  // [PAKET SEMBAKO] sembako Ramadan/Lebaran jadi 1 menu utama (tema ungu biasa); sembako Natal tetap di Special Edition Natal & Tahun Baru
  const SEMBAKO_CAT = "Paket Sembako";
  const isSembako = p => p._list === "promo" && p.kategori === SEMBAKO_CAT;
  const SEMBAKO = PROMO.filter(isSembako);
  const hashOf = p => isSembako(p) ? "#paket-sembako" : (LIST_HASH[p._list] || "#koleksi");

  // ---------- Share links ----------
  // Default: absolute link to this page + #produk-NN / #ramadan-NN (location.origin + path).
  // If SHOP.siteUrl is filled (site online), links point to static p/<id>.html pages (with og:image preview).
  function pageBase() {
    const origin = location.origin && location.origin !== "null" ? location.origin : location.protocol + "//";
    return origin + location.pathname;
  }
  function productUrl(p) {
    if (SHOP.siteUrl) return SHOP.siteUrl.replace(/\/?$/, "/") + "p/" + p._page + ".html";
    return pageBase() + "#" + p._slug;
  }
  const toastEl = $("#toast");
  let toastT;
  function toast(msg) {
    toastEl.textContent = msg; toastEl.classList.add("show");
    clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove("show"), 2200);
  }
  function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select(); ta.setSelectionRange(0, text.length);
    let ok = false; try { ok = document.execCommand("copy"); } catch (e) {}
    ta.remove(); return ok;
  }
  function copyLink(p) {
    const url = productUrl(p);
    const done = () => toast("Link disalin");
    const fail = () => { fallbackCopy(url) ? done() : window.prompt("Salin link ini:", url); };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(url).then(done, fail);
    else fail();
  }
  function orderMsg(p) {
    return "Halo " + SHOP.nama + ", saya mau pesan " + p.nama + " (" + p._label + "). Foto: " + productUrl(p);
  }
  const orderLink = p => waLink(orderMsg(p));
  function shareWa(p) {
    const msg = p.nama + " — " + priceOf(p) + " (Estimasi jadi: " + p.estimasi + ")\n" + productUrl(p);
    window.open(waLink(msg, false), "_blank", "noopener");
  }

  // ---------- Media (photo or labeled placeholder) ----------
  function media(p, cls) {
    const wrap = document.createElement("div");
    wrap.className = "media " + (cls || "");
    const ph = document.createElement("div");
    ph.className = "ph";
    ph.innerHTML = '<span class="ph-icon">' + ICON_BOUQUET + '</span><span class="ph-label">Foto produk</span><span class="ph-id">' + p._label.replace("No. ", "") + "</span>";
    wrap.appendChild(ph);
    if (p.foto) {
      const img = new Image();
      img.alt = p.nama; img.decoding = "async";
      if (cls !== "modal-m") img.loading = "lazy";
      img.onload = () => ph.remove();
      img.onerror = () => img.remove();   // file belum ada -> tetap tampil kotak "Foto produk"
      img.src = p.foto;
      wrap.appendChild(img);
    }
    return wrap;
  }

  // Hero: first promo photos if available, else first products
  const hv = $("#heroVisual");
  (PROMO.length >= 2 ? [PROMO[5] || PROMO[0], PROMO[1]] : PRODUCTS.slice(0, 2)).forEach((p, i) => hv.appendChild(media(p, "hero-m hero-m" + i)));

  // ---------- Catalog: left sidebar categories, only the selected one is shown ----------
  // Main collection items appear only once their photo file exists (loads); until then "Segera hadir".
  const photoOk = {};
  function hasPhoto(p) {
    if (!p.foto) return Promise.resolve(false);
    if (!photoOk[p.foto]) photoOk[p.foto] = new Promise(res => { const i = new Image(); i.onload = () => res(true); i.onerror = () => res(false); i.src = p.foto; });
    return photoOk[p.foto];
  }
  const mainCats = (typeof KATEGORI !== "undefined" ? KATEGORI : ["Semua"]).filter(k => k !== "Semua");
  const promoCats = (typeof PROMO_KATEGORI !== "undefined" ? PROMO_KATEGORI : ["Semua"]).filter(k => k !== "Semua" && k !== SEMBAKO_CAT);
  const TABS = [];
  // Natal & Tahun Baru first (default tab on first load)
  if (NATARU.length) {
    const nCats = (typeof NATARU_KATEGORI !== "undefined" ? NATARU_KATEGORI : ["Semua"]).filter(k => k !== "Semua");
    TABS.push({ key: "nataru", list: "nataru", cat: null, label: "Paket Natal & Tahun Baru", group: true, promo: true, star: true, eyebrow: "Edisi Spesial" });
    nCats.forEach(c => TABS.push({ key: "nataru:" + c, list: "nataru", cat: c, label: c, promo: true, eyebrow: "Paket Natal & Tahun Baru" }));
  }
  TABS.push({ key: "main", list: "main", cat: null, label: "Koleksi Bucket Gift", group: true, eyebrow: "Koleksi" });
  mainCats.forEach(c => TABS.push({ key: "main:" + c, list: "main", cat: c, label: c, eyebrow: "Koleksi Bucket Gift" }));
  if (SEMBAKO.length) TABS.push({ key: "sembako", list: "sembako", cat: null, label: "Paket Sembako", group: true, eyebrow: "Paket" });
  if (PROMO.length) {
    TABS.push({ key: "promo", list: "promo", cat: null, label: "Paket Ramadan", group: true, promo: true, eyebrow: "Edisi Spesial" });
    if (promoCats.length > 1) promoCats.forEach(c => TABS.push({ key: "promo:" + c, list: "promo", cat: c, label: c, promo: true, eyebrow: "Paket Ramadan" }));
  }
  const VIDEOS = typeof VIDEO_REVIEW !== "undefined" ? VIDEO_REVIEW : [];
  if (VIDEOS.length) TABS.push({ key: "video", list: "video", cat: null, label: "Video Review", group: true, promo: true, icon: "▶", eyebrow: "Testimoni" });
  const TESTI = typeof TESTIMONI !== "undefined" ? TESTIMONI : [];
  if (TESTI.length) TABS.push({ key: "testi", list: "testi", cat: null, label: "Testimoni", title: "Kata Pelanggan Hawa Bouquet", group: true, promo: true, icon: "♡", eyebrow: "Testimoni" });
  const listOf = name => name === "sembako" ? SEMBAKO : name === "promo" ? PROMO.filter(p => !isSembako(p)) : name === "nataru" ? NATARU : PRODUCTS;
  const listKeyOf = p => isSembako(p) ? "sembako" : p._list;
  const itemsOf = t => (t.list === "video" || t.list === "testi") ? [] : listOf(t.list).filter(p => !t.cat || p.kategori === t.cat);
  const catList = $("#catList"), spList = $("#spList"), catSide = $(".cat-side"), grid = $("#catGrid"), empty = $("#catEmpty");
  // [SPECIAL EDITION] Paket Natal & Tahun Baru (merah) + Paket Ramadan (hijau) di baris atas; sub-tab tampil hanya untuk edisi yang aktif
  const isSpecial = t => t.list === "nataru" || t.list === "promo";
  let activeTab = null, visible = [], renderSeq = 0;

  TABS.forEach(t => {
    const b = document.createElement("button");
    b.type = "button"; b.setAttribute("role", "tab"); b.dataset.key = t.key;
    b.className = "cat-tab" + (t.group ? " cat-group" : " cat-sub") + (t.promo ? " is-promo" : "");
    if (isSpecial(t)) { b.classList.add("sp-tab", t.list === "nataru" ? "sp-natal" : "sp-ramadan"); b.dataset.list = t.list; if (!t.group) b.hidden = true; }
    b.innerHTML = (t.group && t.promo ? '<span class="cat-moon">' + (t.icon || (t.star ? "✦" : "☾")) + "</span>" : "") + '<span class="cat-label">' + t.label + '</span><span class="cat-badge" data-badge></span>';
    b.onclick = () => { selectTab(t.key); };
    (isSpecial(t) ? spList : catList).appendChild(b);
  });
  // Badges: count of items with photos; "Segera" if none yet
  TABS.forEach(t => {
    if (t.list === "testi") { catSide.querySelector('[data-key="testi"] [data-badge]').textContent = TESTI.length; return; }
    if (t.list === "video") { const el = catSide.querySelector('[data-key="video"] [data-badge]'); el.textContent = VIDEOS.length; return; }
    Promise.all(itemsOf(t).map(hasPhoto)).then(r => {
      const n = r.filter(Boolean).length;
      const el = catSide.querySelector('[data-key="' + t.key + '"] [data-badge]');
      el.textContent = n ? n : "Segera"; el.classList.toggle("soon", !n);
    });
  });

  // [SLIDER KARTU] Produk dengan fotoLain: geser foto langsung di kartu + nomor sudut "1 2" (tanpa membuka popup).
  // Ketuk foto tetap membuka detail; geser = scroll horizontal bawaan (tidak memicu klik).
  function cardMedia(p) {
    const srcs = p.foto ? [p.foto].concat(p.fotoLain || []) : [];
    if (srcs.length < 2) return media(p, "card-m");
    const m = document.createElement("div");
    m.className = "media card-m card-slider";
    const track = document.createElement("div"); track.className = "cs-track";
    const pills = document.createElement("div"); pills.className = "cs-pills"; pills.setAttribute("aria-label", srcs.length + " sudut foto");
    srcs.forEach((src, i) => {
      const sl = document.createElement("div"); sl.className = "cs-slide";
      const img = new Image(); img.alt = p.nama + " — sudut " + (i + 1); img.decoding = "async"; img.loading = "lazy"; img.src = src;
      sl.appendChild(img); track.appendChild(sl);
      const b = document.createElement("button"); b.type = "button"; b.className = "cs-pill"; b.textContent = i + 1;
      b.setAttribute("aria-label", "Lihat sudut foto " + (i + 1));
      b.onclick = e => { e.stopPropagation(); go(i); };
      pills.appendChild(b);
    });
    let idx = -1;
    function mark(i) { if (i === idx) return; idx = i; [...pills.children].forEach((b, j) => { b.classList.toggle("on", j === i); b.setAttribute("aria-current", j === i ? "true" : "false"); }); if (i > 0) m.classList.add("seen"); }
    function go(i) { track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" }); mark(i); }
    let raf; track.addEventListener("scroll", () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => mark(Math.round(track.scrollLeft / Math.max(1, track.clientWidth)))); }, { passive: true });
    pills.addEventListener("click", e => e.stopPropagation());   // ketuk area nomor tidak membuka popup
    m.appendChild(track); m.appendChild(pills);
    mark(0);
    return m;
  }

  function cardFor(p) {
    const card = document.createElement("article");
    card.className = "card"; card.tabIndex = 0; card.id = "kartu-" + p._slug;
    card.appendChild(cardMedia(p));
    const no = document.createElement("span"); no.className = "card-no" + (p._list !== "main" ? " promo-no" : ""); no.textContent = p._label;
    card.appendChild(no);
    const body = document.createElement("div");
    body.className = "card-body";
    body.innerHTML =
      '<span class="tag">' + (p.kategori || "") + "</span>" +
      "<h3>" + p.nama + "</h3>" +
      '<div class="card-actions"><a class="btn btn-primary btn-sm" href="#' + p._slug + '">Lihat Detail</a>' +
      '<button class="icon-btn" data-copy title="Salin link produk">' + ICON_LINK + "Salin link</button></div>" +
      '<a class="btn btn-wa btn-sm btn-block card-wa" target="_blank" rel="noopener" href="' + orderLink(p) + '">' + ICON_WA + "Pesan via WA</a>";
    card.appendChild(body);
    body.querySelector("[data-copy]").onclick = e => { e.stopPropagation(); copyLink(p); };
    body.querySelector(".card-wa").onclick = e => e.stopPropagation();
    body.querySelector("a.btn-primary").onclick = e => { e.preventDefault(); e.stopPropagation(); openProduct(p._slug); };
    card.onclick = () => openProduct(p._slug);
    card.onkeydown = e => { if (e.key === "Enter" && e.target === card) openProduct(p._slug); };
    return card;
  }

  function selectTab(key) {
    const t = TABS.find(x => x.key === key) || TABS[0];
    activeTab = t;
    catSide.querySelectorAll(".cat-tab").forEach(b => {
      const on = b.dataset.key === t.key;
      b.classList.toggle("active", on); b.setAttribute("aria-selected", on);
      // keep parent group highlighted when a sub-item is active
      b.classList.toggle("parent-active", !on && b.dataset.key === t.list);
      if (b.classList.contains("sp-tab") && b.classList.contains("cat-sub")) b.hidden = b.dataset.list !== t.list;
    });
    spList.classList.toggle("sp-on", isSpecial(t));
    const centerIn = bar => { const a = bar.querySelector(".cat-tab.active"); if (a && window.matchMedia("(max-width: 800px)").matches) bar.scrollLeft += a.getBoundingClientRect().left - bar.getBoundingClientRect().left - (bar.clientWidth - a.offsetWidth) / 2; };
    const center = () => { if (isSpecial(t)) { centerIn(spList); catList.scrollLeft = 0; } else { centerIn(catList); spList.scrollLeft = 0; } };
    center(); requestAnimationFrame(center); setTimeout(center, 400);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(center);
    $("#catEyebrow").textContent = t.eyebrow;
    $("#catTitle").textContent = t.title || t.label;
    // [ANIMASI TRANSISI] judul kategori + panel video/testimoni muncul halus tiap ganti menu
    const replay = el => { if (!el) return; el.classList.remove("cat-anim"); void el.offsetWidth; el.classList.add("cat-anim"); };
    ["#catEyebrow", "#catTitle", "#videoPanel", "#testiPanel"].forEach(s => replay($(s)));
    // Tema katalog: semua kategori gelap (ungu premium); Natal = merah + dekor Natal; Ramadan = hijau-ungu + dekor Ramadan
    const kat = $("#katalog"), theme = t.list === "nataru" ? "natal" : t.list === "promo" ? "ramadan" : "purple";
    kat.classList.add("promo-mode");
    ["natal", "ramadan", "purple"].forEach(n => kat.classList.toggle("theme-" + n, n === theme));
    const seq = ++renderSeq, items = itemsOf(t);
    grid.innerHTML = ""; empty.hidden = true; $("#catCount").textContent = "";
    const vp = $("#videoPanel"), isVid = t.list === "video";
    const tp = $("#testiPanel"), isTesti = t.list === "testi";
    vp.hidden = !isVid; tp.hidden = !isTesti; grid.hidden = isVid || isTesti;
    if (isTesti) { renderTesti(); $("#catCount").textContent = TESTI.length + " testimoni"; return; }
    if (!isVid) vp.querySelectorAll("video").forEach(v => v.pause());
    if (isVid) { renderVideos(); $("#catCount").textContent = VIDEOS.length + " video"; return; }
    Promise.all(items.map(hasPhoto)).then(ok => {
      if (seq !== renderSeq) return;
      // Promo items always show; main items only when their photo exists
      visible = t.list !== "main" ? items : items.filter((p, i) => ok[i]);
      // [ANIMASI TRANSISI] kartu produk muncul satu per satu (fade + naik), maks jeda 12 kartu
      visible.forEach((p, i) => {
        const c = cardFor(p);
        c.style.setProperty("--i", Math.min(i, 12));
        c.classList.add("card-in");
        c.addEventListener("animationend", () => c.classList.remove("card-in"), { once: true });
        grid.appendChild(c);
      });
      empty.hidden = visible.length > 0;
      $("#catCount").textContent = visible.length ? visible.length + " produk" : "";
    });
  }
  function renderVideos() {
    const g = $("#videoGrid");
    if (g.childElementCount) return;
    VIDEOS.forEach((v, i) => {
      const f = document.createElement("figure"); f.className = "vcard";
      f.innerHTML = '<div class="vbox"><video controls playsinline preload="none" poster="' + v.poster + '" src="' + v.video + '" aria-label="' + v.judul + '"></video></div>' +
        '<figcaption><span class="vno">Video ' + String(i + 1).padStart(2, "0") + "</span>" + v.judul + "</figcaption>";
      const el = f.querySelector("video");
      el.addEventListener("play", () => g.querySelectorAll("video").forEach(o => { if (o !== el) o.pause(); }));
      g.appendChild(f);
    });
  }
  // ---------- Riwayat (tombol Back HP): setiap popup = 1 entri history ----------
  // state: { hb: 1, ov: null } = tampilan katalog; { hb: 1, ov: "modal", slug } / { hb: 1, ov: "lb", i } = popup terbuka
  let curHash = location.hash, skipHash = null, pendingBack = false;
  const isOv = ov => !!(history.state && history.state.ov === ov);
  function hist(mode, st, url) {
    const s = Object.assign({ hb: 1 }, st);
    if (mode === "push") history.pushState(s, "", url || location.href);
    else history.replaceState(s, "", url || location.href);
    curHash = location.hash;
  }
  // Popup ditutup lewat X/latar/Esc: mundur 1 entri supaya tidak ada entri sisa (popstate berikutnya diabaikan)
  function consumeEntry(ov) { if (isOv(ov)) { pendingBack = true; history.back(); } }

  // ---------- Testimoni grid + lightbox ----------
  let lbIdx = 0, lbScrollY = 0;
  const lb = $("#lightbox"), lbImg = $("#lbImg");
  function lbShow(i) {
    lbIdx = (i + TESTI.length) % TESTI.length; lbImg.src = TESTI[lbIdx].foto; lbImg.alt = "Testimoni pelanggan " + (lbIdx + 1); $("#lbCount").textContent = (lbIdx + 1) + " / " + TESTI.length;
    if (!lb.hidden && isOv("lb")) hist("replace", { ov: "lb", i: lbIdx });   // geser foto: tidak menambah entri riwayat
  }
  // mode: "push" (default, buka baru) | "none" (dari tombol Back/Forward)
  function lbOpen(i, mode) {
    const wasOpen = !lb.hidden;
    if (!wasOpen) lbScrollY = window.scrollY;
    lb.hidden = false; lbShow(i); document.body.style.overflow = "hidden"; $("#lbClose").focus();
    if (mode !== "none" && !wasOpen) hist("push", { ov: "lb", i: lbIdx });
  }
  function lbHide() { if (lb.hidden) return; lb.hidden = true; document.body.style.overflow = ""; lbImg.removeAttribute("src"); const y = lbScrollY; window.scrollTo(0, y); requestAnimationFrame(() => window.scrollTo(0, y)); }
  // Tutup oleh pengguna (X / latar / Esc): sembunyikan + buang entri riwayat popup
  function lbClose() { if (lb.hidden) return; lbHide(); consumeEntry("lb"); }
  $("#lbClose").onclick = lbClose;
  $("#lbPrev").onclick = e => { e.stopPropagation(); lbShow(lbIdx - 1); };
  $("#lbNext").onclick = e => { e.stopPropagation(); lbShow(lbIdx + 1); };
  lb.onclick = e => { if (e.target === lb || e.target.classList.contains("lb-stage")) lbClose(); };
  document.addEventListener("keydown", e => { if (lb.hidden) return; if (e.key === "Escape") lbClose(); if (e.key === "ArrowLeft") lbShow(lbIdx - 1); if (e.key === "ArrowRight") lbShow(lbIdx + 1); });
  let tx = null;
  lb.addEventListener("touchstart", e => { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", e => { if (tx === null) return; const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) lbShow(lbIdx + (dx < 0 ? 1 : -1)); tx = null; });
  function renderTesti() {
    const g = $("#testiGrid");
    if (g.childElementCount) return;
    TESTI.forEach((t, i) => {
      const b = document.createElement("button"); b.type = "button"; b.className = "tcard"; b.setAttribute("aria-label", "Perbesar testimoni " + (i + 1));
      b.innerHTML = '<img src="' + t.foto + '" alt="Screenshot chat testimoni pelanggan ' + (i + 1) + '" loading="lazy"><span class="tzoom">Perbesar</span>';
      b.onclick = () => lbOpen(i);
      g.appendChild(b);
    });
  }
  selectTab(NATARU.length ? "nataru" : PROMO.length ? "promo" : "main");


  // ---------- [SLIDER MULTI-FOTO] Galeri multi-sudut di popup detail ----------
  // Aktif bila produk punya `fotoLain: [...]` di products.js. Produk tanpa fotoLain tetap pakai media() biasa.
  const photosOf = p => p.foto ? [p.foto].concat(p.fotoLain || []) : [];
  function gallery(p) {
    const srcs = photosOf(p);
    if (srcs.length < 2) return media(p, "modal-m");
    const g = document.createElement("div");
    g.className = "gallery";
    g.innerHTML =
      '<div class="media modal-m g-viewport"><div class="g-track"></div>' +
      '<span class="g-count" aria-live="polite"></span>' +
      '<button class="g-arrow g-prev" type="button" aria-label="Foto sebelumnya">‹</button>' +
      '<button class="g-arrow g-next" type="button" aria-label="Foto berikutnya">›</button>' +
      '<div class="g-dots"></div></div>' +
      '<div class="g-thumbs"><span class="g-hint">‹ Geser untuk lihat sudut lain ›</span></div>';
    const track = g.querySelector(".g-track"), dots = g.querySelector(".g-dots"), thumbs = g.querySelector(".g-thumbs"), count = g.querySelector(".g-count");
    srcs.forEach((src, i) => {
      const slide = document.createElement("div"); slide.className = "g-slide";
      const img = new Image(); img.alt = p.nama + " — foto " + (i + 1); img.decoding = "async"; img.src = src;
      if (i) img.loading = "lazy";
      slide.appendChild(img); track.appendChild(slide);
      const d = document.createElement("button"); d.type = "button"; d.className = "g-dot"; d.setAttribute("aria-label", "Foto " + (i + 1)); d.onclick = () => go(i); dots.appendChild(d);
      const t = document.createElement("button"); t.type = "button"; t.className = "g-thumb"; t.setAttribute("aria-label", "Lihat foto " + (i + 1));
      t.innerHTML = '<img src="' + src + '" alt="" loading="lazy">'; t.onclick = () => go(i); thumbs.insertBefore(t, thumbs.querySelector(".g-hint"));
    });
    let idx = 0;
    function mark(i) {
      idx = i;
      count.textContent = (i + 1) + " / " + srcs.length;
      [dots, thumbs].forEach(c => [...c.querySelectorAll('.g-dot,.g-thumb')].forEach((el, j) => el.classList.toggle("on", j === i)));
      g.querySelector(".g-prev").disabled = i === 0;
      g.querySelector(".g-next").disabled = i === srcs.length - 1;
      if (i > 0) g.classList.add("seen");
    }
    function go(i) { i = Math.max(0, Math.min(srcs.length - 1, i)); track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" }); mark(i); }
    // Geser jari = scroll-snap bawaan browser; posisi dibaca dari scroll.
    let raf; track.addEventListener("scroll", () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { const i = Math.round(track.scrollLeft / track.clientWidth); if (i !== idx) mark(i); }); }, { passive: true });
    g.querySelector(".g-prev").onclick = e => { e.stopPropagation(); go(idx - 1); };
    g.querySelector(".g-next").onclick = e => { e.stopPropagation(); go(idx + 1); };
    g._go = go; g._idx = () => idx; g._n = srcs.length;
    mark(0);
    return g;
  }
  // ---------- [/SLIDER MULTI-FOTO] ----------

  // ---------- Detail modal ----------
  const modal = $("#modal");
  let cur = null, openedSlug = null, openScrollY = 0;
  const cleanUrl = h => location.pathname + location.search.replace(/([?&])p=[\w-]+&?/, "$1").replace(/[?&]$/, "") + h;
  // mode: "push" (buka baru: tambah entri) | "replace" (prev/next, atau entri sudah dibuat oleh hashchange) | "none" (Back/Forward)
  function openProduct(slug, mode) {
    const p = ALL.find(x => x._slug === slug);
    if (!p) return;
    const wasOpen = modal.classList.contains("open");
    if (!wasOpen) { openedSlug = slug; openScrollY = window.scrollY; }
    if (!mode) mode = wasOpen ? "replace" : "push";
    cur = p;
    const mm = $("#modalMedia"); mm.innerHTML = ""; mm.appendChild(gallery(p));   // [SLIDER MULTI-FOTO] dulu: media(p, "modal-m")
    $("#mKategori").textContent = (p.kategori || "") + " · " + p._label + (p._list !== "main" ? " · " + LIST_NAME[p._list] : "");
    $("#mNama").textContent = p.nama;
    $("#mHarga").textContent = priceOf(p); $("#mHarga").classList.toggle("ask", isAsk(p));
    $("#mEstimasi").textContent = "Estimasi jadi: " + p.estimasi;
    $("#mDeskripsi").textContent = p.deskripsi || "";
    $("#mUkuran").textContent = p.ukuran || "";
    $("#mKirim").textContent = SHOP.area || "";
    $("#mIsi").innerHTML = (p.isi || []).map(x => "<li>" + x + "</li>").join("");
    $("#mOrder").href = orderLink(p);
    $("#mCopy").onclick = () => copyLink(p);
    $("#mShareWa").onclick = () => shareWa(p);
    document.title = p.nama + " — " + SHOP.nama;
    if (mode !== "none") hist(mode, { ov: "modal", slug: p._slug }, cleanUrl("#" + p._slug));
    modal.classList.add("open"); modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function step(d) {
    const list = visible.includes(cur) ? visible : listOf(listKeyOf(cur));
    const i = list.indexOf(cur);
    openProduct(list[(i + d + list.length) % list.length]._slug, "replace");
  }
  // Sembunyikan popup & kembalikan posisi katalog (tab tetap, posisi gulir sama)
  function hideModal() {
    if (!modal.classList.contains("open")) return;
    modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; document.title = SHOP.nama + " — Bucket Gift & Hampers";
    // Produk sama seperti saat dibuka -> posisi gulir semula; setelah prev/next -> gulir ke kartu produk terakhir
    const c = cur && cur._slug !== openedSlug ? document.getElementById("kartu-" + cur._slug) : null, y = openScrollY;
    const restore = () => { if (c) c.scrollIntoView({ block: "center" }); else window.scrollTo(0, y); };
    restore(); requestAnimationFrame(restore);
    cur = null;
  }
  // Tutup oleh pengguna (X / latar / Esc)
  function closeModal() {
    if (!modal.classList.contains("open")) return;
    const p = cur; hideModal();
    if (isOv("modal")) consumeEntry("modal");
    else if (p) hist("replace", { ov: null }, cleanUrl(hashOf(p)));
  }
  modal.querySelectorAll("[data-close]").forEach(el => el.onclick = closeModal);
  $("#mPrev").onclick = () => step(-1);
  $("#mNext").onclick = () => step(1);
  document.addEventListener("keydown", e => {
    if (!modal.classList.contains("open")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });

  // ---------- Deep links: #produk-01, #ramadan-01, ?p=01, ?p=ramadan-01 ----------
  function route() {
    const h = location.hash.slice(1);
    const q = new URLSearchParams(location.search).get("p");
    let slug = null;
    if (/^(produk|ramadan|nataru)-\d+$/.test(h)) slug = h;
    else if (q) slug = /^(ramadan|nataru)-\d+$/i.test(q) ? q.toLowerCase() : /^r\d+$/i.test(q) ? "ramadan-" + q.slice(1).padStart(2, "0") : /^n\d+$/i.test(q) ? "nataru-" + q.slice(1).padStart(2, "0") : "produk-" + String(q).padStart(2, "0");
    const listHash = { koleksi: "main", "paket-ramadan": "promo", "paket-nataru": "nataru", "paket-sembako": "sembako", "promo-ramadan": "promo", "promo-nataru": "nataru", "video-review": "video", testimoni: "testi" };
    if (listHash[h]) { hideModal(); lbHide(); selectTab(listHash[h]); return; }
    if (slug) {
      const p = ALL.find(x => x._slug === slug);
      if (p && (!activeTab || activeTab.list !== listKeyOf(p) || (activeTab.cat && activeTab.cat !== p.kategori))) selectTab(listKeyOf(p));
      return p;
    }
    else if (modal.classList.contains("open")) closeModal();
  }
  window.addEventListener("hashchange", () => {
    if (skipHash !== null && location.hash === skipHash) { skipHash = null; curHash = location.hash; return; }   // sudah ditangani popstate
    skipHash = null;
    const p = route();
    // Hash produk diketik/diklik sebagai link: browser sudah membuat entri baru -> tandai entri itu sebagai popup (tanpa push lagi)
    if (p) openProduct(p._slug, "replace");
    curHash = location.hash;
  });
  window.addEventListener("popstate", e => {
    const st = e.state || {}, hashChanged = location.hash !== curHash;
    curHash = location.hash;
    let handled = false;
    if (pendingBack) { pendingBack = false; handled = true; }   // entri sisa dari tutup via X/Esc: popup sudah tertutup
    else {
      if (st.ov !== "modal" && modal.classList.contains("open")) { hideModal(); handled = true; }
      if (st.ov !== "lb" && !lb.hidden) { lbHide(); handled = true; }
      if (st.ov === "modal" && st.slug && !modal.classList.contains("open")) { openProduct(st.slug, "none"); handled = true; }   // Forward
      else if (st.ov === "lb" && lb.hidden && TESTI.length) { if (!activeTab || activeTab.list !== "testi") selectTab("testi"); lbOpen(st.i || 0, "none"); handled = true; }
    }
    if (handled && hashChanged) skipHash = location.hash;   // jangan biarkan hashchange memuat ulang tab (posisi gulir/tab tetap)
  });
  // First load always opens photos: Video Review only opens after its tab/menu is clicked
  if (location.hash === "#video-review" || location.hash === "#testimoni") history.replaceState(null, "", location.pathname + location.search);
  curHash = location.hash;
  {
    const st = history.state || {};
    const p = route();
    if (p) {
      if (st.hb && st.ov === "modal") openProduct(p._slug, "replace");   // muat ulang saat popup terbuka: entri dasar sudah ada di bawahnya
      else {
        // Dibuka langsung via deep link: buat entri dasar (katalog) dulu, lalu entri popup -> Back menutup popup, bukan keluar situs
        hist("replace", { ov: null }, cleanUrl(hashOf(p)));
        openProduct(p._slug, "push");
      }
    } else hist("replace", { ov: null });
  }

  // Mobile nav
  $(".nav-toggle").onclick = () => $(".nav-links").classList.toggle("show");
  document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => $(".nav-links").classList.remove("show")));
})();
