export default defineNuxtConfig({
  app: {
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
  ],

  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],

  gtag: {
    id: 'G-J37CFPQKF4',
  },

  experimental: {
    reactivityTransform: true,
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
