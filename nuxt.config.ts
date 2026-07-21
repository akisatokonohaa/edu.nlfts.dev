// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['..'],

  // Static Site Generation
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      // Route yang tidak punya halaman sama sekali — cegah crawl
      ignore: [
        '/sign-in',
        '/get-started',
        '/pricing',
        '/docs',
        '/webinars',
      ],
      failOnError: false,
    },
  },

  // Semua halaman di-prerender sebagai static HTML
  // Kecuali /api/contact yang tetap sebagai serverless function
  routeRules: {
    '/**': { prerender: true },
    '/api/contact': { prerender: false },
    // Route yang tidak ada halamannya — kembalikan 404 static, jangan prerender
    '/sign-in': { prerender: false },
    '/get-started': { prerender: false },
    '/pricing': { prerender: false },
    '/docs': { prerender: false },
    '/webinars': { prerender: false },
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
