// Tombol "‹ Kembali" + tombol Back HP ke katalog untuk semua p/*.html (idempoten). Jalankan: node tools/tombol-kembali.js [root] [versiCache]
const fs=require("fs"),path=require("path"),vm=require("vm");
const root=process.argv[2]||path.join(__dirname,".."), ver=process.argv[3];
const c={};vm.createContext(c);
vm.runInContext(fs.readFileSync(path.join(root,"products.js"),"utf8")+";this.P=PRODUCTS;this.R=typeof PROMO_RAMADAN!='undefined'?PROMO_RAMADAN:[];this.N=typeof PROMO_NATARU!='undefined'?PROMO_NATARU:[];",c);
const byId={};c.P.forEach(p=>byId[p.id]={p,list:"main"});c.R.forEach(p=>byId[p.id]={p,list:"promo"});c.N.forEach(p=>byId[p.id]={p,list:"nataru"});
const CSS=`.pp-kembali{position:fixed;top:max(12px,env(safe-area-inset-top));left:12px;z-index:60;display:inline-flex;align-items:center;gap:.4rem;padding:.6rem 1.1rem .6rem .85rem;background:rgba(36,17,48,.84);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);color:var(--lav-soft);border:1px solid rgba(200,178,138,.65);border-radius:999px;font-family:Jost,system-ui,sans-serif;font-size:.76rem;font-weight:500;letter-spacing:.16em;text-transform:uppercase;text-decoration:none;box-shadow:0 8px 22px rgba(20,0,30,.32);transition:.25s}
.pp-kembali span{font-size:1.35rem;line-height:1;margin-top:-3px;color:var(--champ)}
.pp-kembali:hover{background:var(--plum)}
.pp .g-count{left:auto;right:.9rem}`;
const JS=`<script>(function(){var b=document.getElementById("ppKembali"),home=b.getAttribute("href"),base=location.pathname.replace(/p\\/[^\\/]*$/,""),same=false;try{var r=new URL(document.referrer);same=r.origin===location.origin&&r.pathname.indexOf(base)===0&&r.href!==location.href}catch(e){}
if(!same&&!(history.state&&history.state.hbp)){var me=location.href;try{history.replaceState({hbHome:1},"",home);history.pushState({hbp:1},"",me)}catch(e){}}
var trap=!!(history.state&&history.state.hbp);
b.addEventListener("click",function(e){if((same||trap)&&history.length>1){e.preventDefault();history.back()}});
addEventListener("popstate",function(){if(!/\\/p\\/[^\\/]*$/.test(location.pathname))location.reload()});})();</script>`;
let n=0;
for(const f of fs.readdirSync(path.join(root,"p")).filter(f=>f.endsWith(".html"))){
  const fp=path.join(root,"p",f);let s=fs.readFileSync(fp,"utf8");
  const id=f.replace(/\.html$/,""),e=byId[id];if(!e)throw new Error("no product "+id);
  const hash=(s.match(/class="pp-back" href="\.\.\/index\.html(?:\?cat=[^"#]*)?#([\w-]+)"/)||[])[1];if(!hash)throw new Error("no pp-back "+f);
  const cat=(e.list==="main"||e.list==="nataru")&&hash!=="paket-sembako"?e.p.kategori:null;
  const home="../index.html"+(cat?"?cat="+encodeURIComponent(cat):"")+"#"+hash;
  s=s.replace(/\n?\.pp-kembali[\s\S]*?\.pp \.g-count\{[^}]*\}/,"");
  s=s.replace("</style>",CSS+"\n</style>");
  s=s.replace(/<a class="pp-kembali"[^>]*>[\s\S]*?<\/a>\n?/,"").replace(/<script>\(function\(\)\{var b=document\.getElementById\("ppKembali"\)[\s\S]*?<\/script>\n?/,"");
  s=s.replace("<body>\n",`<body>\n<a class="pp-kembali" id="ppKembali" href="${home.replace(/&/g,"&amp;")}" aria-label="Kembali ke katalog"><span aria-hidden="true">‹</span> Kembali</a>\n`);
  s=s.replace(/class="pp-back" href="[^"]*"/,`class="pp-back" href="${home}"`);
  s=s.replace("</body></html>",JS+"\n</body></html>");
  if(ver)s=s.replace(/\?v=\d+/g,"?v="+ver);
  fs.writeFileSync(fp,s);n++;
}
console.log("patched",n);
