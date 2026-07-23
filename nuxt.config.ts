// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['..'],

  // Full Static Site Generation — semua halaman di-prerender saat build
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      failOnError: false,
    },
    // Paksa semua route halaman jadi static HTML, kecuali API
    routeRules: {
      '/**': { prerender: true },
      '/api/**': { prerender: false },
    },
  },

  i18n: {
    defaultLocale: 'id',
    locales: [
      {
        code: 'id',
        name: 'Bahasa Indonesia',
        language: 'id-ID',
      },
    ],
  },
  content: {
    highlight: {
      langs: ['mdc', 'mermaid', 'tsx'],
    },
  },
  compatibilityDate: '2025-05-13',
});
