const CACHE_NAME = "my-cache-v2";
const URLs_TO_CACHE = [
  "/index.html",
  "/assets/images/about/amrshoukry.png",

  "/assets/images/activities/activities.png",
  "/assets/images/activities/lifemakers.png",
  "/assets/images/activities/mega.png",
  "/assets/images/activities/stepbystep.png",

  "/assets/images/certificates/agile.png",
  "/assets/images/certificates/alx.png",
  "/assets/images/certificates/assembly.png",
  "/assets/images/certificates/certificates.png",
  "/assets/images/certificates/english.png",
  "/assets/images/certificates/itiphp.png",

  "/assets/images/education/artevo.png",
  "/assets/images/education/assembly.png",
  "/assets/images/education/college.png",
  "/assets/images/education/education.png",
  "/assets/images/education/linear.png",
  "/assets/images/education/nqueens.png",

  "/assets/images/projects/assembly.png",
  "/assets/images/projects/personalwebsite.png",
  "/assets/images/projects/projects.png",
  "/assets/images/projects/simplemedia.png",
  "/assets/images/projects/whisper.png",

  "/favicon.ico",
  "/manifest.json",
  "/styles.css",
  "/service-worker.js",
  "/polyfills.js",
  "/main.js",

  "/main-QVGWOUDO.js ",
  "/polyfills-SCHOHYNV.js",
  "/styles-W5JOW7K4.css",
  "/media/Inter-Regular-CKBOXRQ3.ttf",
  "/media/Inter-Bold-YFDNZKYU.ttf",

  "/",
  "/education",
  "/projects",
  "/activities",
  "/certificates",
  "/about",
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        URLs_TO_CACHE.map((url) => cache.add(url).catch((err) => {}))
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      caches.match("/index.html").then((response) => {
        return response || fetch(event.request);
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
