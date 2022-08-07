importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn/workbox/workbox-sw.js')

self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', () => {
  self.clients.claim()
})

// Navigation route are handled by network first strategy
//导航路线采用网络优先策略
workbox.routing.registerRoute(
  ({ request }) => request.mode === 'navigate',
  new workbox.strategies.NetworkFirst({ cacheName: 'navigation' })
)

// CSS are handled by a Stale While Revalidate strategy
//CSS由过时的重新验证策略处理
workbox.routing.registerRoute(
  ({ request }) => request.destination === 'style',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'assets',
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      //确保仅缓存导致200状态的请求
      new workbox.cacheableResponse.CacheableResponse({
        statuses: [200]
      })
    ]
  })
)

// // Images are handled with a Cache First strategy
// //使用缓存优先策略处理图像
// workbox.routing.registerRoute(
//   ({ request }) => request.destination === 'image',
//   new workbox.strategies.CacheFirst({
//     cacheName: 'images',
//     plugins: [
//       // Ensure that only requests that result in a 200 status are cached
//       //确保仅缓存导致200状态的请求
//       new workbox.cacheableResponse.CacheableResponse({
//         statuses: [200]
//       }),
//       // Don't cache more than 50 items, and expire them after 30 days
//       //不要缓存超过50个项目，并在30天后过期
//       new workbox.expiration.CacheExpiration('images', {
//         maxEntries: 50,
//         maxAgeSeconds: 60 * 60 * 24 * 30 // 30 Days
//       })
//     ]
//   })
// )

// Demonstrates a custom cache name for a route.
workbox.routing.registerRoute(
  new RegExp('.*\\.(?:png|jpg|jpeg|svg|gif|svga)'),
  new workbox.strategies.CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      //确保仅缓存导致200状态的请求
      new workbox.cacheableResponse.CacheableResponse({
        statuses: [200]
      }),
      // Don't cache more than 50 items, and expire them after 30 days
      //不要缓存超过50个项目，并在30天后过期
      new workbox.expiration.CacheExpiration('images', {
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 30 // 30 Days
      })
    ],
  }),
);