import VueGtag from 'vue-gtag-next'

// https://github.com/gtm-support/vue-gtm seems has bug

const id = 'G-J37CFPQKF4'

export default defineNuxtPlugin(nuxtApp =>
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id,
    },
  }),
)
