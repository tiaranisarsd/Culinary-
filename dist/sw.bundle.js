if(!self.define){let e,i={};const a=(a,n)=>(a=new URL(a+".js",n).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,d)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let r={};const b=e=>a(e,f),s={module:{uri:f},exports:r,require:b};i[f]=Promise.all(n.map((e=>s[e]||b(e)))).then((e=>(d(...e),r)))}}define(["./workbox-234b72bb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"949.bundle.js",revision:"6bc48cc0714418f8cfd4611a43bfbfdb"},{url:"app.webmanifest",revision:"2136ef036b10a73ded6831d387f9bc2d"},{url:"app~309f7e27.bundle.js",revision:"65cdcda4d7d775b2b79abbf9312ab74c"},{url:"app~309f7e27.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~48bafecf.bundle.js",revision:"5dfe0548810920a8542d495e5ac6f24e"},{url:"app~48bafecf.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~4e5ec22b.bundle.js",revision:"bbbd168d0aaa630fdb2ce12f10eadf7a"},{url:"app~4e5ec22b.css",revision:"12d2f39f1714bc835d05555272c660cd"},{url:"app~a51fa3f5.bundle.js",revision:"4dd63f8414ca89ea2ae1b0fca5a137ea"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"7358d8c0eb69c8d4ff0bcab790d63e7b"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"329bfe2d1f8728f3ad6580da4ee70bd4"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"favicon.png",revision:"8cf539d61d2e963342297268f5d4f2d6"},{url:"icons/icon-128x128.png",revision:"846eb9efd55bbb4d770072a7048b7855"},{url:"icons/icon-144x144.png",revision:"8830d5a5aa2b7305770071f24e0ab4cc"},{url:"icons/icon-152x152.png",revision:"8cf539d61d2e963342297268f5d4f2d6"},{url:"icons/icon-192x192.png",revision:"2d66cb649b1d5984fac30d2e844da231"},{url:"icons/icon-384x384.png",revision:"0b474229723c95af2a65a04802c7f4fe"},{url:"icons/icon-512x512.png",revision:"5d4a25db856285ec3b9f78e87e8dbabb"},{url:"icons/icon-72x72.png",revision:"e805792f5d7934cc89d5cb540b13fa27"},{url:"icons/icon-96x96.png",revision:"6e89d3d0eeeeb0e6a51b83e559b39a8a"},{url:"images/hero-image_2.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"images/hero-image_4-large.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"images/hero-image_4-small.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"images/hero-image_4.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"index.html",revision:"931473b7191ca3dc8f159794fefceda5"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev")),new e.StaleWhileRevalidate({cacheName:"therestaurantdb-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/small/")),new e.StaleWhileRevalidate({cacheName:"therestaurantdb-image-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map