// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    baseURL: '/', // Ensures correct asset paths
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  modules: [
    'vuetify-nuxt-module'
  ],
  runtimeConfig: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
  nitro: {
    preset: "netlify",
    serveStatic: true,
  },
  css: ["leaflet/dist/leaflet.css"],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
    }
  }

})