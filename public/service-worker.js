self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  return self.clients.claim();
});
