import { defineNuxtConfig } from 'nuxt';
import nodePolyfills from 'rollup-plugin-polyfill-node';

const lifecycle = process.env.npm_lifecycle_event
const elementStr = lifecycle === 'build' || lifecycle === 'generate' ? 'element-plus' : ''
const MODE = process.env.NODE_ENV;

// ↓ Have to check the mode here because this cant run on build
const vitePlugin =
  MODE === 'development'
    ? [
        nodePolyfills({
          include: [
            'node_modules/**/*.js',
            new RegExp('node_modules/.vite/.*js'),
          ],
        }),
      ]
    : [];

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'referrer', content: 'no-referrer' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        { src: 'https://cdn.bootcdn.net/ajax/libs/web3/1.7.4/web3.min.js' }
      ],
    },
  },
  css: [
    '@/assets/css/main.scss',
    'vue3-marquee/dist/style.css',
    '~/node_modules/mv-full-page/dist-lib/style.css'
  ],
  typescript: {
    strict: true,
    shim: false,
  },
  buildModules: [
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    // '@fullpage/nuxt-fullpage',
  ],
  build: {
    standalone: true,
    transpile: [
      '@ethersproject',
      'ethers', 
      'node-fetch-native',
      // 打包的时候放开
      '@web3-onboard/injected-wallets',
      elementStr,
    ],
  },
  vite: {
    plugins: [...vitePlugin],
    define: {
      'window.global': {} // Amplify fix, pt. 2
    },
    build: {
      rollupOptions: {
        plugins: [
          // ↓ Needed for build
          nodePolyfills(),
        ],
      },
      // ↓ Needed for build
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
    optimizeDeps: {
      include: [
        'vue',
        'bn.js',
        'js-sha3',
        'hash.js',
        'aes-js',
        'scrypt-js',
        'bech32',
      ],
    },
  },
});
