import { getRootHost } from '@dargmuesli/nuxt-vio/shared/utils/networking'
import { defu } from 'defu'

export const GET_CSP = ({ siteUrl }: { siteUrl: URL }) => {
  const domainTldPort = IS_IN_FRONTEND_DEVELOPMENT
    ? PRODUCTION_HOST
    : getRootHost(siteUrl.host)
  const sentryConfig = useRuntimeConfig().public.sentry

  return defu(
    {
      // TrapParty
      'connect-src': [
        `https://trapparty-postgraphile.${domainTldPort}/graphql`,
      ],
      'font-src': ["'self'"], // og-image
      'report-to': 'sentry',
    },
    {
      // Sentry (vio only wires this in automatically for static builds)
      ...(sentryConfig.host && sentryConfig.project.id
        ? {
            'connect-src': [
              `https://${sentryConfig.host}/api/${sentryConfig.project.id}/envelope/`,
            ],
            'worker-src': ['blob:'],
          }
        : {}),
    },
  )
}
