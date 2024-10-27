import { appDescription } from './app/constants'

export default defineNuxtConfig({

  modules: [
    '@unocss/nuxt',
    '@nuxt/content',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',

    // https://nuxt.com/modules/gtag
    'nuxt-gtag',
    '@vite-pwa/nuxt',
  ],

  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],

  gtag: {
    id: 'G-J37CFPQKF4',
  },

  css: [
    '@unocss/reset/tailwind.css',
    '~/styles/index.scss',
  ],

  colorMode: {
    classSuffix: '',
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  compatibilityDate: '2024-08-14',

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: 'https://www.yunyoujun.cn/favicon.svg', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: 'https://www.yunyoujun.cn/favicon.svg' },
        // { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },

    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' },
  },

  devtools: {
    enabled: true,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
})
