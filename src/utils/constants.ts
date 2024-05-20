import { getDomainTldPort } from '@dargmuesli/nuxt-vio/utils/networking'
import { defu } from 'defu'

export const CHART_DIRECTION_BREAKPOINT = 768
export const GET_CSP = (siteUrl: string) => {
  const siteUrlParsed = new URL(siteUrl)

  return defu({
    // TrapParty
    'connect-src': [
      `https://trapparty-postgraphile.${getDomainTldPort(siteUrlParsed.host)}/graphql`,
    ],
    'report-to': 'csp-endpoint',
    'report-uri':
      'https://o4507259039973376.ingest.sentry.io/api/4507260561653840/security/?sentry_key=1e53178c1dba9b39147de4a21853a3e3',
  })
}
export const SITE_NAME = 'TrapParty'
