import { getRootHost } from '@dargmuesli/nuxt-vio/shared/utils/networking'
import { defu } from 'defu'

export const GET_CSP = ({ siteUrl }: { siteUrl: URL }) => {
  const domainTldPort = IS_IN_FRONTEND_DEVELOPMENT
    ? PRODUCTION_HOST
    : getRootHost(siteUrl.host)

  return defu({
    // TrapParty
    'connect-src': [`https://trapparty-postgraphile.${domainTldPort}/graphql`],
    'report-to': 'csp-endpoint',
    'report-uri':
      'https://o4507259039973376.ingest.de.sentry.io/api/4507260561653840/security/?sentry_key=1e53178c1dba9b39147de4a21853a3e3',
  })
}
