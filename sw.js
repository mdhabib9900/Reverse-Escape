// Feather Dash Pro - Service Worker v1.0.0
const CACHE_NAME = 'feather-dash-pro-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap'
];

// Install event - cache core assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching core assets');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating Service Worker...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - network first with cache fallback for HTML, cache first for assets
self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);
  
  // Skip cross-origin requests except for allowed CDNs
  if (requestUrl.origin !== self.location.origin) {
    // Allow font CDNs and ad scripts to pass through
    if (requestUrl.hostname.includes('googleapis.com') ||
        requestUrl.hostname.includes('gstatic.com') ||
        requestUrl.hostname.includes('highperformanceformat.com') ||
        requestUrl.hostname.includes('profitablecpmratenetwork.com')) {
      // For ad scripts and external resources, use network only (no cache)
      event.respondWith(fetch(event.request).catch(() => {
        return new Response('', { status: 200, statusText: 'OK' });
      }));
      return;
    }
    // Don't cache other cross-origin resources
    return;
  }
  
  // For HTML files - Network first, then cache
  if (event.request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Cache the fresh HTML for offline use
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          return caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // Return offline page if available
            return caches.match('./index.html');
          });
        })
    );
    return;
  }
  
  // For static assets (JS, CSS, images) - Cache first, then network
  if (event.request.url.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|webp|json)$/)) {
    event.respondWith(
      caches.match(event.request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(event.request).then((response) => {
            if (response && response.status === 200) {
              const responseClone = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseClone);
              });
            }
            return response;
          });
        })
    );
    return;
  }
  
  // For all other requests - Network first
  event.respondWith(
    fetch(event.request)
      .catch(() => {
        return caches.match(event.request);
      })
  );
});

// Handle background sync for offline high scores (optional feature)
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-scores') {
    event.waitUntil(syncHighScores());
  }
});

async function syncHighScores() {
  const cache = await caches.open(CACHE_NAME);
  const storedScores = await cache.match('pending-scores');
  if (storedScores) {
    const scores = await storedScores.json();
    // Attempt to send to server if endpoint exists
    try {
      await fetch('/api/scores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(scores)
      });
      await cache.delete('pending-scores');
    } catch (e) {
      console.log('[SW] Failed to sync scores, will retry later');
    }
  }
}

// Handle push notifications (optional)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body || 'Come play Feather Dash Pro!',
      icon: 'icons/icon-192.png',
      badge: 'icons/icon-72.png',
      vibrate: [200, 100, 200],
      data: {
        url: data.url || './'
      }
    };
    event.waitUntil(
      self.registration.showNotification('Feather Dash Pro', options)
    );
  }
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url || './')
  );
});

// Handle message from client
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});