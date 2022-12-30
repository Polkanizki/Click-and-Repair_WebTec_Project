self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./bootstrap/dist/css/bootstrap.min.css", "./images/logo_192.png"]);
        })
    );
});

self.addEventListener("fetch", e => {
    console.log(`Trovata richiesta per: ${e.request.url}`);
});

