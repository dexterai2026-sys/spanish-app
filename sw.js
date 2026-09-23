/* Calle — service worker.

   Why this exists at all, in an app that is otherwise one file: an iOS app
   added to the home screen gets its own cache and no address bar. Once it is
   holding a bad copy of the page there is nothing the user can type to get
   past it, and nothing the page can do about it either, because the bad copy
   is what runs. That has now cost three white screens.

   So: the network wins whenever it answers, and the cache exists only for the
   offline case. Never the other way round. A cached copy that is merely old
   is a bug here, not a feature. */

const SHELL = "calle-shell-v1";
/* The app's own URL: this file's directory. */
const KEY = new URL("./", self.location).href;
const NET_TIMEOUT = 8000;

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== SHELL).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

/* A cut-off transfer still arrives as a 200, which is exactly how this whole
   problem started. Only a copy that reaches its own last bytes is worth
   keeping, so check both ends: the boot marker near the top and the closing
   tag at the very bottom. */
function complete(text){
  return text.indexOf("CALLE_BUILD") !== -1 && /<\/html>\s*$/.test(text);
}

function html(text){
  return new Response(text, {
    headers: {"Content-Type": "text/html; charset=utf-8"}
  });
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if(req.method !== "GET") return;
  const url = new URL(req.url);
  if(url.origin !== self.location.origin) return;
  if(req.mode !== "navigate") return;

  e.respondWith((async () => {
    let fresh = null;
    try{
      fresh = await Promise.race([
        fetch(req, {cache: "no-store"}),
        new Promise((_, rej) => setTimeout(() => rej(new Error("slow")), NET_TIMEOUT))
      ]);
    }catch(err){ fresh = null; }

    if(fresh && fresh.status === 200){
      const text = await fresh.clone().text();
      if(complete(text)){
        const cache = await caches.open(SHELL);
        await cache.put(KEY, html(text));
        return html(text);
      }
      /* Truncated. Prefer a copy we know was whole. */
      const good = await caches.match(KEY);
      if(good) return good;
      return html(text);
    }

    const cached = await caches.match(KEY);
    if(cached) return cached;
    return fresh || fetch(req);
  })());
});
