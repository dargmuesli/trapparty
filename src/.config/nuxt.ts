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
            'report-uri': ['https://dargmuesli.report-uri.com/r/d/csp/enforce'],
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
