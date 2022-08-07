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
      title: 'OTOKO',
      meta: [
        { name: 'referrer', content: 'no-referrer' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/website.ico' }
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
  modules: [
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    // 国际化i18n
    '@intlify/nuxt3',
    // 颜色模块
    '@nuxtjs/color-mode',
    // '@fullpage/nuxt-fullpage',
    // '@kevinmarrec/nuxt-pwa',
  ],
  pwa: {
    meta: {
      // Generate splash screens for iOS
      mobileAppIOS: true,
      name: 'OTOKO',
      author: 'Ajake123123@gmail.com',
      description: 'OTOKO',
      lang: 'en',
    },
    workbox: {
      enabled: true
    }
  },
  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en-US',
      fallbackLocale: 'en-US',
      availableLocales: ['en-US', 'zh-CN'],
      sync: true,
    },
  },
  // 颜色
  colorMode: {
    classSuffix: '',
    fallback: 'light',
    storageKey: 'color-mode',
  },
  // typescript: {
  //   strict: true,
  //   shim: false,
  // },
  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: ['@pinia/nuxt', '@intlify/nuxt3', './type.d.ts'],
      },
    },
  },
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
