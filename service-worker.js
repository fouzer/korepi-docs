if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const f=e=>a(e,d),n={module:{uri:d},exports:r,require:f};s[d]=Promise.all(i.map((e=>n[e]||f(e)))).then((e=>(c(...e),r)))}}define(["./workbox-33d91895"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-f8mHPHhj.js",revision:"0b3381d259b82326e30bcff0b0d8881f"},{url:"assets/404.html-jhLeqP8E.js",revision:"fda16c44dbb335058a7ade97c5d309c9"},{url:"assets/app-jCnCfEzw.js",revision:"85e235f88ff17f091a4862d8c514999e"},{url:"assets/docsearch-w40geAFS.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/donate.html-MLqY-rEv.js",revision:"d020bd523878036321d53e891dc040de"},{url:"assets/donate.html-xfdtHo6t.js",revision:"235039cb551c16252d905f483dc6e9cd"},{url:"assets/giscus-unEZQsJ0.js",revision:"34c4288ad53e7d9be8d0f44c9fdba069"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/kit.svg",revision:"a3663a205654213e974cfc9ef73a68c0"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-QOy62Fup.js",revision:"fa112b5cda5ee3c969c504c6a3080b4c"},{url:"assets/index.html--hPBfUb-.js",revision:"bbffc2d7df6bba722e9c54a4c42bc69d"},{url:"assets/index.html-5FkRjiYl.js",revision:"05a5cfe5faeb6f8667242b6caf8b5891"},{url:"assets/index.html-6-jK2HA1.js",revision:"41d3ffb02bdc4e36a10fd915da066556"},{url:"assets/index.html-8cI4TK7y.js",revision:"79413ee81915c4197b57ef861111b01b"},{url:"assets/index.html-8ZCduLRc.js",revision:"90db102b34c44a425e694c8630cab359"},{url:"assets/index.html-Ci0U96gM.js",revision:"9f52e6ada4680c0c180a7298d4a73aa1"},{url:"assets/index.html-d99Zx2XE.js",revision:"bd53db45ece65ae8d904e19d3fcb5a74"},{url:"assets/index.html-DXU-e_Tx.js",revision:"023babf3cd2652e0b78dca559ba9dcaa"},{url:"assets/index.html-FAQ_cm6b.js",revision:"90db102b34c44a425e694c8630cab359"},{url:"assets/index.html-GUquChAE.js",revision:"90db102b34c44a425e694c8630cab359"},{url:"assets/index.html-gYIyF0y6.js",revision:"3e3f5d638a6e9cbdc704b40e87abfcee"},{url:"assets/index.html-l2BiKrv_.js",revision:"42bbd4de28bd3378c290d0dc8d11cc12"},{url:"assets/index.html-lggxBGIp.js",revision:"fe2c4133da14e4f83c467b49091c3afb"},{url:"assets/index.html-lwAra3Nw.js",revision:"6992a5e319ca5950e0ba602c927cdca2"},{url:"assets/index.html-m_NthRaF.js",revision:"64afc1472ffacbe9bbf36527fbae22a2"},{url:"assets/index.html-MwzqXqlq.js",revision:"974ee7a3cd802b2b24c68ca5d1044346"},{url:"assets/index.html-nLUdscij.js",revision:"34578f790342acefdd51ad90faef86ce"},{url:"assets/index.html-O-HBvOCQ.js",revision:"bd53db45ece65ae8d904e19d3fcb5a74"},{url:"assets/index.html-PUMhYxPy.js",revision:"14c102469b76b26f713618edf50729ed"},{url:"assets/index.html-tZGW1s2u.js",revision:"cc0894a996f0c5f20a6f1b97ed82cf55"},{url:"assets/index.html-xBwmBuyb.js",revision:"381bef6c6c7ef4bb3b7db445708f036c"},{url:"assets/index.html-zvxEW-A8.js",revision:"3a3172562a2df7425418508b89551ff6"},{url:"assets/join.html-ftsWY26R.js",revision:"46f68ce94accec0fc1e57fd1b3153fad"},{url:"assets/join.html-JMyY5Sjj.js",revision:"42982b53cc8b483c9f1d898ca9778d7e"},{url:"assets/join.html-L0OWc6PS.js",revision:"06ca7d2e2069124e24b65d08538046d9"},{url:"assets/join.html-lkuzkKww.js",revision:"738ce3f5a8a5a7a017889aef276bba65"},{url:"assets/join.html-P57H1QV5.js",revision:"e46d73a47633a467b2f7ecc23f2c1782"},{url:"assets/join.html-U2I454xj.js",revision:"62ce37f01a7789e264a2101fee6d8675"},{url:"assets/page.html--FW-SI9p.js",revision:"9304459de10336c8034cf20beeb1241f"},{url:"assets/page.html-3OgJdR-O.js",revision:"407fd47ec0b5d6bf21419da61d29859f"},{url:"assets/page.html-AzgvdFPQ.js",revision:"81f442339cc88ca837417c08d6731a79"},{url:"assets/page.html-cJUA6GNH.js",revision:"51a84b471daa315e16fc1403dcef6fcb"},{url:"assets/page.html-K7WiZx_l.js",revision:"0817b2d6d6c032a676df030617415c6e"},{url:"assets/page.html-PnIQYtUM.js",revision:"710c89c7245c394921e12088f78f0354"},{url:"assets/page.html-vKggPGby.js",revision:"f2fb796565de340d665308dbce7655cf"},{url:"assets/page.html-YIftBS0W.js",revision:"710c89c7245c394921e12088f78f0354"},{url:"assets/photoswipe.esm-mC0Qcr12.js",revision:"3a72d9823ffa5943f03c5e884d0f66d8"},{url:"assets/plugin-vue_export-helper-x3n3nnut.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/sign-in.html-20jp9A77.js",revision:"e3af0e09972284d59bd43755e33fe731"},{url:"assets/sign-in.html-3VtZnyr1.js",revision:"1fa3f4699640d7da6b00c4f79a27464e"},{url:"assets/sign-in.html-cSKK-6S-.js",revision:"01522ea356f5e9815072a8fab3ed2f0a"},{url:"assets/sign-in.html-Er5qkqd5.js",revision:"d0e21a3d4b1ecd9d82db8877e14c753c"},{url:"assets/sign-in.html-kYGeGIKM.js",revision:"35be60f4cfdf7e3ec0a5e3176f68d434"},{url:"assets/sign-in.html-RwJo1RkG.js",revision:"42c5e3e2e9785d7155f9bd1ebe82d677"},{url:"assets/style-jZJT948h.css",revision:"b47ab0ea8950cdac3be891db2e417c13"},{url:"assets/style-w40geAFS.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/verify.html-5razU0B3.js",revision:"b10daf726cecf6b7e784f59713534e1f"},{url:"assets/verify.html-aczFoP5u.js",revision:"1d2bdfbf9d7c55fda2290db6e80c84f1"},{url:"assets/verify.html-Nz4fmX-U.js",revision:"65f00fc12c4aa0cf6c206546d48406e1"},{url:"assets/verify.html-TlCZo4t-.js",revision:"48e118dbd2255c0fd21dde969cb29de1"},{url:"assets/verify.html-v3DUHrFL.js",revision:"b8f9c5f840d27343520f9682001e2641"},{url:"assets/verify.html-Wo0j-y7h.js",revision:"a135ad30e2b84ef049aac2e7c58088e4"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"logo2.svg",revision:"12955c1ee6894e906370acafe76a8971"},{url:"404.html",revision:"51a293c4f4473342154c519a5db615e8"},{url:"en/guide/index.html",revision:"96380a72f2b7c2d8a64d2721817656d1"},{url:"en/guide/page.html",revision:"2d5ebcb493156b7c4bf7e953ea68ef5b"},{url:"en/index.html",revision:"0dd6a3f73df71f2022e9bfe7f0b9a5c1"},{url:"en/start/index.html",revision:"15a2750a9d544467590eae95830d1bd5"},{url:"en/start/join.html",revision:"6a45b836b867e7594fcb7a4068fcf80e"},{url:"en/start/sign-in.html",revision:"6c6a89ea29d5528e0e4aaea1bffa58a3"},{url:"en/start/verify.html",revision:"c4902a96983918cc6f7c6db8f862b255"},{url:"index.html",revision:"8d738d79c642238eca670b15fd9d9e3b"},{url:"ru/guide/index.html",revision:"0ac79b37246e14dfebeec1b921d1b4db"},{url:"ru/guide/info/index.html",revision:"abf0990e7deddfc27efc49cf50f6caa4"},{url:"ru/guide/info/page.html",revision:"9a37ccf268596baabdcfdb3e1533ef04"},{url:"ru/guide/page.html",revision:"93547fc41adfdb0dd435139db3f49aa2"},{url:"ru/index.html",revision:"8dc89172a1e724ed3efccb6471ac1b9a"},{url:"ru/start/index.html",revision:"68ac885ed37a9be8438a8cd6c88abfb5"},{url:"ru/start/join.html",revision:"450dc35e820579a40db551eb0f595c11"},{url:"ru/start/sign-in.html",revision:"c97c39d275fd19e3ecb2d550a0ea39da"},{url:"ru/start/verify.html",revision:"2855c38979d95a16229b678b17727950"},{url:"zh/guide/index.html",revision:"8cfa4e19c83930553c484ae61b0afa4a"},{url:"zh/guide/page.html",revision:"8e6e5de97c69a1f4a7698d61f70c3753"},{url:"zh/index.html",revision:"b1620b01fcfe59a5a3c98b916328c362"},{url:"zh/start/donate.html",revision:"f6560cae1f1bb39f1bea31527e3553b3"},{url:"zh/start/index.html",revision:"99cc59923c0dd6adf767f7c3b1636468"},{url:"zh/start/join.html",revision:"14ccdccfc8bb551d1dde2fc2b41e6db0"},{url:"zh/start/sign-in.html",revision:"05f3acd0bbb8ba3cd7ab1272af8a101d"},{url:"zh/start/verify.html",revision:"2e395ce8fb74e895b23dc97cd3d93f08"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/image-1-FV6oGkZb.png",revision:"84c4107dc9f19a62a5b812c69b4ce6ac"},{url:"assets/image-2-KpoO4MGE.png",revision:"957882169bf28c8a379b0ede724ca749"},{url:"assets/image-Ib5u8se7.png",revision:"35e50a5a0652f82dd1eeed791ba9fa69"},{url:"korepi.png",revision:"36977c6af17471338477971462b79073"},{url:"logo.png",revision:"36977c6af17471338477971462b79073"},{url:"logo2.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
