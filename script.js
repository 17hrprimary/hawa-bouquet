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

  // ---------- Lists: main collection + Promo Ramadan ----------
  const PROMO = typeof PROMO_RAMADAN !== "undefined" ? PROMO_RAMADAN : [];
  PRODUCTS.forEach(p => { p._slug = "produk-" + p.id; p._label = "No. " + p.id; p._page = p.id; p._list = "main"; });
  PROMO.forEach(p => { p._slug = p.id; p._label = p.kode || p.id; p._page = p.id; p._list = "promo"; });
  const NATARU = typeof PROMO_NATARU !== "undefined" ? PROMO_NATARU : [];
  NATARU.forEach(p => { p._slug = p.id; p._label = p.kode || p.id; p._page = p.id; p._list = "nataru"; });
  const ALL = PRODUCTS.concat(PROMO, NATARU);
  const LIST_NAME = { main: "Koleksi Bucket Gift", promo: "Promo Ramadan", nataru: "Promo Natal & Tahun Baru" };
  const LIST_HASH = { main: "#koleksi", promo: "#promo-ramadan", nataru: "#promo-nataru" };

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
  const promoCats = (typeof PROMO_KATEGORI !== "undefined" ? PROMO_KATEGORI : ["Semua"]).filter(k => k !== "Semua");
  const TABS = [];
  TABS.push({ key: "main", list: "main", cat: null, label: "Koleksi Bucket Gift", group: true, eyebrow: "Koleksi" });
  mainCats.forEach(c => TABS.push({ key: "main:" + c, list: "main", cat: c, label: c, eyebrow: "Koleksi Bucket Gift" }));
  if (PROMO.length) {
    TABS.push({ key: "promo", list: "promo", cat: null, label: "Promo Ramadan", group: true, promo: true, eyebrow: "Edisi Spesial" });
    promoCats.forEach(c => TABS.push({ key: "promo:" + c, list: "promo", cat: c, label: c, promo: true, eyebrow: "Promo Ramadan" }));
  }
  if (NATARU.length) {
    const nCats = (typeof NATARU_KATEGORI !== "undefined" ? NATARU_KATEGORI : ["Semua"]).filter(k => k !== "Semua");
    TABS.push({ key: "nataru", list: "nataru", cat: null, label: "Promo Natal & Tahun Baru", group: true, promo: true, star: true, eyebrow: "Edisi Spesial" });
    nCats.forEach(c => TABS.push({ key: "nataru:" + c, list: "nataru", cat: c, label: c, promo: true, eyebrow: "Promo Natal & Tahun Baru" }));
  }
  const listOf = name => name === "promo" ? PROMO : name === "nataru" ? NATARU : PRODUCTS;
  const itemsOf = t => listOf(t.list).filter(p => !t.cat || p.kategori === t.cat);
  const catList = $("#catList"), grid = $("#catGrid"), empty = $("#catEmpty");
  let activeTab = null, visible = [], renderSeq = 0;

  TABS.forEach(t => {
    const b = document.createElement("button");
    b.type = "button"; b.setAttribute("role", "tab"); b.dataset.key = t.key;
    b.className = "cat-tab" + (t.group ? " cat-group" : " cat-sub") + (t.promo ? " is-promo" : "");
    b.innerHTML = (t.group && t.promo ? '<span class="cat-moon">' + (t.star ? "✦" : "☾") + "</span>" : "") + '<span class="cat-label">' + t.label + '</span><span class="cat-badge" data-badge></span>';
    b.onclick = () => { selectTab(t.key); };
    catList.appendChild(b);
  });
  // Badges: count of items with photos; "Segera" if none yet
  TABS.forEach(t => {
    Promise.all(itemsOf(t).map(hasPhoto)).then(r => {
      const n = r.filter(Boolean).length;
      const el = catList.querySelector('[data-key="' + t.key + '"] [data-badge]');
      el.textContent = n ? n : "Segera"; el.classList.toggle("soon", !n);
    });
  });

  function cardFor(p) {
    const card = document.createElement("article");
    card.className = "card"; card.tabIndex = 0; card.id = "kartu-" + p._slug;
    card.appendChild(media(p, "card-m"));
    const no = document.createElement("span"); no.className = "card-no" + (p._list !== "main" ? " promo-no" : ""); no.textContent = p._label;
    card.appendChild(no);
    const body = document.createElement("div");
    body.className = "card-body";
    body.innerHTML =
      '<span class="tag">' + (p.kategori || "") + "</span>" +
      "<h3>" + p.nama + "</h3>" +
      '<div class="card-meta"><span class="price' + (isAsk(p) ? " ask" : "") + '">' + priceOf(p) + "</span>" +
      '<span class="eta">Estimasi jadi: <b>' + p.estimasi + "</b></span></div>" +
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
    catList.querySelectorAll(".cat-tab").forEach(b => {
      const on = b.dataset.key === t.key;
      b.classList.toggle("active", on); b.setAttribute("aria-selected", on);
      // keep parent group highlighted when a sub-item is active
      b.classList.toggle("parent-active", !on && b.dataset.key === t.list);
    });
    const act = catList.querySelector(".cat-tab.active");
    const center = () => { const a = catList.querySelector(".cat-tab.active"); if (a && window.matchMedia("(max-width: 800px)").matches) catList.scrollLeft += a.getBoundingClientRect().left - catList.getBoundingClientRect().left - (catList.clientWidth - a.offsetWidth) / 2; };
    center(); requestAnimationFrame(center); setTimeout(center, 400);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(center);
    $("#catEyebrow").textContent = t.eyebrow;
    $("#catTitle").textContent = t.group ? t.label : t.label;
    $("#katalog").classList.toggle("promo-mode", t.list !== "main");
    $("#katalog").classList.toggle("nataru-mode", t.list === "nataru");
    const seq = ++renderSeq, items = itemsOf(t);
    grid.innerHTML = ""; empty.hidden = true; $("#catCount").textContent = "";
    Promise.all(items.map(hasPhoto)).then(ok => {
      if (seq !== renderSeq) return;
      // Promo items always show; main items only when their photo exists
      visible = t.list !== "main" ? items : items.filter((p, i) => ok[i]);
      visible.forEach(p => grid.appendChild(cardFor(p)));
      empty.hidden = visible.length > 0;
      $("#catCount").textContent = visible.length ? visible.length + " produk" : "";
    });
  }
  selectTab(PROMO.length ? "promo" : "main");

  // ---------- Detail modal ----------
  const modal = $("#modal");
  let cur = null;
  function setHash(h) { history.replaceState(null, "", location.pathname + location.search.replace(/([?&])p=[\w-]+&?/, "$1").replace(/[?&]$/, "") + h); }
  function openProduct(slug) {
    const p = ALL.find(x => x._slug === slug);
    if (!p) return;
    cur = p;
    const mm = $("#modalMedia"); mm.innerHTML = ""; mm.appendChild(media(p, "modal-m"));
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
    if (location.hash !== "#" + p._slug) setHash("#" + p._slug);
    modal.classList.add("open"); modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function step(d) {
    const list = visible.includes(cur) ? visible : listOf(cur._list);
    const i = list.indexOf(cur);
    openProduct(list[(i + d + list.length) % list.length]._slug);
  }
  function closeModal() {
    modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; document.title = SHOP.nama + " — Bucket Gift & Hampers";
    if (cur) { const c = document.getElementById("kartu-" + cur._slug); setHash(LIST_HASH[cur._list] || "#koleksi"); if (c) c.scrollIntoView({ block: "center" }); }
    cur = null;
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
    const listHash = { koleksi: "main", "promo-ramadan": "promo", "promo-nataru": "nataru" };
    if (listHash[h]) { if (modal.classList.contains("open")) { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; cur = null; } selectTab(listHash[h]); return; }
    if (slug) {
      const p = ALL.find(x => x._slug === slug);
      if (p && (!activeTab || activeTab.list !== p._list || (activeTab.cat && activeTab.cat !== p.kategori))) selectTab(p._list);
      openProduct(slug);
    }
    else if (modal.classList.contains("open")) closeModal();
  }
  window.addEventListener("hashchange", route);
  route();

  // Mobile nav
  $(".nav-toggle").onclick = () => $(".nav-links").classList.toggle("show");
  document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => $(".nav-links").classList.remove("show")));
})();
