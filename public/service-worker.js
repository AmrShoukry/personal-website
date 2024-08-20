const CACHE_NAME = "my-cache-v1";
const pathsToCache = [
  "/projects",
  "/education",
  "/activities",
  "/certificates",
  "/about",
];
const URLs_TO_CACHE = [
  "/index.html",
  "/assets/images/about/amrshoukry.jpg",

  "/assets/images/activities/activities.jpg",
  "/assets/images/activities/lifemakers.jpg",
  "/assets/images/activities/mega.jpg",
  "/assets/images/activities/stepbystep.jpg",

  "/assets/images/certificates/agile.jpg",
  "/assets/images/certificates/alx.jpg",
  "/assets/images/certificates/assembly.jpg",
  "/assets/images/certificates/certificates.jpg",
  "/assets/images/certificates/english.jpg",
  "/assets/images/certificates/itiphp.jpg",

  "/assets/images/education/artevo.jpg",
  "/assets/images/education/assembly.jpg",
  "/assets/images/education/college.jpg",
  "/assets/images/education/education.jpg",
  "/assets/images/education/linear.jpg",
  "/assets/images/education/nqueens.jpg",

  "/assets/images/projects/assembly.jpg",
  "/assets/images/projects/personalwebsite.jpg",
  "/assets/images/projects/projects.jpg",
  "/assets/images/projects/simplemedia.jpg",
  "/assets/images/projects/whisper.jpg",

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
  "/media/Inter-Regular.ttf",
  "/media/Inter-Bold.ttf",

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
