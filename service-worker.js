/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7b839b5b5b02ae82ab5ea36c30a06737"
  },
  {
    "url": "apis/index.html",
    "revision": "b04f53c9a7010d8de515791cfb7cb5df"
  },
  {
    "url": "assets/css/0.styles.91424cca.css",
    "revision": "7b45ae214f1255c73f53be3274103067"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.488bc707.js",
    "revision": "16eeb54a9cff6fdad33e8ab9293cb078"
  },
  {
    "url": "assets/js/11.d91d9ddf.js",
    "revision": "82e0887c1e7da52422fb1c85a4aaee8a"
  },
  {
    "url": "assets/js/2.e3cef707.js",
    "revision": "1249ccdddddcf481d57efcf4e7641411"
  },
  {
    "url": "assets/js/3.8179b05a.js",
    "revision": "d160e94b163117ba79cbdaf26dc7b462"
  },
  {
    "url": "assets/js/4.e8e30af9.js",
    "revision": "2b5c450864d1933b78d3cbd350b72f06"
  },
  {
    "url": "assets/js/5.331662ab.js",
    "revision": "9b8c4d5436a4b722996be902ea189f0a"
  },
  {
    "url": "assets/js/6.0c2a9114.js",
    "revision": "6a0c53b6470bcb19e8d8c421fe6209fc"
  },
  {
    "url": "assets/js/7.be1d7ebe.js",
    "revision": "3b4ef920f2d16316e081525d45b4671c"
  },
  {
    "url": "assets/js/8.b4cfb9fc.js",
    "revision": "ec87a7bf89b5428d99177aee727f0219"
  },
  {
    "url": "assets/js/9.54ea482a.js",
    "revision": "72edaa341c10c1aa0c949af47af8f3e3"
  },
  {
    "url": "assets/js/app.b25087cf.js",
    "revision": "03b0362319338143428913ce2832cd8c"
  },
  {
    "url": "icons/logo.png",
    "revision": "e62ce7a08d2d39a6b9634a8177da4fa5"
  },
  {
    "url": "index.html",
    "revision": "8cd04fb01000fb7ff50b7be0d4693f55"
  },
  {
    "url": "wiki/index.html",
    "revision": "c8d1c7b1ab62fc8f2b8d7a320421d41b"
  },
  {
    "url": "wiki/pwa.html",
    "revision": "3498b97ebacc2e9ef0341168ed483ed4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
