import { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'

export const CHART_DIRECTION_BREAKPOINT = 768
export const I18N_COOKIE_NAME = 'i18n_r'
export const EVENT_DESCRIPTION_MAXIMUM = 10000
export const EVENT_NAME_MAXIMUM = 100
export const EVENT_PLACE_MAXIMUM = 300
export const EVENT_SLUG_MAXIMUM = 100
export const ITEMS_PER_PAGE = 8
export const JWT_NAME = () =>
  `${process.env.NODE_ENV === 'production' ? '__Secure-' : ''}jwt`
export const LOCALES: LocaleObject[] = [
  {
    code: 'en',
    file: 'en.json',
    name: 'English',
    iso: 'en', // Will be used as catchall locale by default.
  },
  {
    code: 'de',
    file: 'de.json',
    name: 'Deutsch',
    iso: 'de',
  },
]
export const PASSWORD_LENGTH_MINIMUM = 8
export const REGEX_SLUG = /^[-A-Za-z0-9]+$/
export const REGEX_UUID =
  /^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$/
export const SITE_NAME = 'TrapParty'

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never
