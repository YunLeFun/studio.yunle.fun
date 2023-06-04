import { appDescription } from './constants'

export default defineNuxtConfig({
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
  modules: [
    '@nuxt/content',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',

    // https://nuxt.com/modules/gtag
    'nuxt-gtag',
    '@vite-pwa/nuxt',
  ],

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
  },

  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],

  gtag: {
    id: 'G-J37CFPQKF4',
  },

  unocss: {
    preflight: true,
  },
  colorMode: {
    classSuffix: '',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/styles/index.scss" as *;',
        },
      },
    },
  },
})
