const CACHE_NAME = "my-cache-v6";
const URLs_TO_CACHE = [
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
  "/styles.css",
  "/service-worker.js",
  "/polyfills.js",
  "/main.js",

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
      console.log("Opened cache");
      return cache.addAll(URLs_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
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
