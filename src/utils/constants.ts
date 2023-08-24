export const BASE_URL =
  'https://trapparty.' +
  (process.env.NUXT_PUBLIC_STACK_DOMAIN ||
    `${process.env.HOST || 'localhost'}:${
      !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
        ? '3000'
        : '3001'
    }`)
export const CHART_DIRECTION_BREAKPOINT = 768
export const SITE_NAME = 'TrapParty'
