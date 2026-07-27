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
    // Paksa semua route halaman dan endpoint content jadi static.
    // Nuxt Content butuh /api/_content/query/*.json saat navigasi client-side.
    routeRules: {
      '/**': { prerender: true },
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
