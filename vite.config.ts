import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
manifest: {
  name: '여수 관광 가이드',
  short_name: '여수가이드',
  description: '2026 여수 세계섬박람회 관광 가이드 앱',
  theme_color: '#0a1628',
  background_color: '#0a1628',
  display: 'standalone',
  start_url: '/',
  icons: [
    {
      src: '/icons/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'any'
    },
    {
      src: '/icons/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any'
    },
    {
      src: '/icons/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'maskable'
    },
    {
      src: '/icons/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'maskable'
    }
  ],
  screenshots: [
    {
      src: '/icons/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      form_factor: 'wide',
      label: 'Yeosu Guide Desktop'
    },
    {
      src: '/icons/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      label: 'Yeosu Guide Mobile'
    }
  ]
},
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/map\.kakao\.com\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'kakao-map-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 },
            },
          },
        ],
      },
    }),
  ],
});
