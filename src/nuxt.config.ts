import { JWT_NAME, LOCALES, SITE_NAME } from './utils/constants'

const BASE_URL =
  'https://trapparty.' +
  (process.env.NUXT_PUBLIC_STACK_DOMAIN ||
    `${process.env.HOST || 'localhost'}:${
      !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
        ? '3000'
        : '3001'
    }`)

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en', // fallback data to prevent invalid html at generation
      },
      titleTemplate: `%s`,
      title: SITE_NAME, // fallback data to prevent invalid html at generation
    },
    pageTransition: {
      name: 'layout',
    },
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@dargmuesli/nuxt-cookie-control',
    '@nuxtjs/color-mode',
    '@nuxtjs/html-validator',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-seo-kit-module',
  ],
  nitro: {
    compressPublicAssets: true,
  },
  postcss: {
    plugins: { tailwindcss: {}, autoprefixer: {} },
  },
  runtimeConfig: {
    public: {
      googleAnalyticsId: '', // set via environment variable `NUXT_PUBLIC_GOOGLE_ANALYTICS_ID` only
      i18n: {
        baseUrl: BASE_URL,
      },
      isInProduction: process.env.NODE_ENV === 'production',
      isTesting: false,
      stagingHost:
        process.env.NODE_ENV !== 'production' &&
        !process.env.NUXT_PUBLIC_STACK_DOMAIN
          ? 'jonas-thelemann.de'
          : undefined,
    },
  },
  typescript: {
    shim: false,
    strict: true,
    tsConfig: {
      compilerOptions: {
        // esModuleInterop: true,
        // noErrorTruncation: true,
      },
    },
  },

  // modules
  cookieControl: {
    cookies: {
      necessary: [
        {
          description: {
            de: 'Dieser Cookie von uns speichert Berechtigungen für den Datenbankzugriff dieser Webseite.',
            en: "This cookie of ours stores permissions for this website's database access.",
          },
          id: 'a',
          name: {
            de: 'Authentifizierungsdaten',
            en: 'Authentication Data',
          },
          targetCookieIds: [JWT_NAME()],
        },
        {
          description: {
            de: 'Dieser Cookie von uns speichert die Einstellungen, die in diesem Dialog getroffen werden.',
            en: 'This cookie of ours stores the settings made in this dialog.',
          },
          id: 'c',
          name: {
            de: 'Cookie-Präferenzen',
            en: 'Cookie Preferences',
          },
          targetCookieIds: ['ncc_c', 'ncc_e'],
        },
        {
          description: {
            de: 'Dieser Cookie von uns speichert die Sprache, in der diese Webseite angezeigt wird.',
            en: "This cookie of ours stores the language that's used to display this website.",
          },
          id: 'l',
          name: {
            de: 'Sprache',
            en: 'Language',
          },
          targetCookieIds: ['i18n_redirected'],
        },
      ],
      optional: [
        {
          description: {
            de: 'Die Cookies vom Drittanbieter Google ermöglichen die Analyse von Nutzerverhalten. Diese Analyse hilft uns unsere Dienste zu verbessern, indem wir verstehen, wie diese Webseite genutzt wird.',
            en: 'The third-party cookies by Google enable the analysis of user behavior. This analysis helps us to improve our services by understanding how this website is used.',
          },
          id: 'ga',
          links: {
            'https://policies.google.com/privacy': 'Google Privacy Policy',
            'https://policies.google.com/terms': 'Google Terms of Service',
          },
          name: 'Analytics',
          targetCookieIds: ['_ga', '_ga_K4R41W62BR'],
        },
      ],
    },
    locales: ['en', 'de'],
  },
  colorMode: {
    classSuffix: '',
  },
  htmlValidator: {
    failOnError: true,
    logLevel: 'warning',
  },
  i18n: {
    defaultLocale: 'de', // Must be set for the default prefix_except_default prefix strategy.
    detectBrowserLanguage: {
      cookieSecure: true,
    },
    langDir: 'locales',
    lazy: true,
    locales: LOCALES,
  },
  seoKit: {
    splash: false,
  },
  site: {
    debug: process.env.NODE_ENV === 'development',
    name: SITE_NAME,
    url: BASE_URL,
  },
})
