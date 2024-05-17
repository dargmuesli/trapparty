import {
  JWT_NAME,
  VIO_NUXT_BASE_CONFIG,
} from '@dargmuesli/nuxt-vio/utils/constants'
import { defu } from 'defu'

import { SITE_NAME } from '../utils/constants'

export default defineNuxtConfig(
  defu(
    {
      extends: ['@dargmuesli/nuxt-vio'],
      modules: ['@pinia-plugin-persistedstate/nuxt'],
      vite: {
        optimizeDeps: {
          include: ['@dargmuesli/nuxt-vio/utils/constants'],
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
      security: {
        headers: {
          contentSecurityPolicy: {
            'connect-src': [
              'https://trapparty-postgraphile.jonas-thelemann.de', // TODO: use `getDomainTldPort(stagingHostOrHost)` (https://github.com/Baroshem/nuxt-security/pull/233)
            ],
            'report-to': 'csp-endpoint',
            'report-uri':
              'https://o4507259039973376.ingest.sentry.io/api/4507260561653840/security/?sentry_key=1e53178c1dba9b39147de4a21853a3e3',
          },
        },
      },
    },
    VIO_NUXT_BASE_CONFIG({
      siteName: SITE_NAME,
      stagingHost: 'jonas-thelemann.de',
    }),
  ),
)
