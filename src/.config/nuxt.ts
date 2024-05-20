import {
  JWT_NAME,
  VIO_NUXT_BASE_CONFIG,
  SITE_URL,
} from '@dargmuesli/nuxt-vio/utils/constants'
import { defu } from 'defu'

import { SITE_NAME, GET_CSP } from '../utils/constants'

export default defineNuxtConfig(
  defu(
    {
      extends: ['@dargmuesli/nuxt-vio'],
      modules: [
        '@pinia-plugin-persistedstate/nuxt',
        // nuxt-security: apply content security policy at build time
        (_options, nuxt) => {
          if (nuxt.options._generate) {
            if (nuxt.options.security.headers) {
              nuxt.options.security.headers.contentSecurityPolicy = defu(
                GET_CSP(SITE_URL),
                nuxt.options.security.headers.contentSecurityPolicy,
              )
            }
          }
        },
      ],
      vite: {
        optimizeDeps: {
          include: ['@dargmuesli/nuxt-vio/utils/constants', '@vuelidate/core'],
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
          ],
          optional: [],
        },
      },
      gtag: {
        id: 'G-K4R41W62BR',
      },
    },
    VIO_NUXT_BASE_CONFIG({
      siteName: SITE_NAME,
      stagingHost: 'jonas-thelemann.de',
    }),
  ),
)
