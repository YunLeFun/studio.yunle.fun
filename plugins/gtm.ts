import { createGtm } from '@gtm-support/vue-gtm'

const gtmId = 'GTM-MX9N9X2'

export default defineNuxtPlugin((nuxtApp) => {
  // add google tag manager, and add GA4 in gtag
  const gtm = createGtm({
    id: gtmId,
    // debug: import.meta.env.DEV,
  })
  nuxtApp.vueApp.use(gtm)
})
