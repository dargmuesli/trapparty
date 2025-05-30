import { expect } from '@playwright/test'
import type { Page } from 'playwright-core'

export const COOKIE_CONTROL_CONSENT_COOKIE_DEFAULT = 'actga'
export const TIMEZONE_DEFAULT = 'Europe/Berlin'
export const PAGE_READY = async ({
  page,
  options,
}: {
  page: Page
  options?: {
    cookieControl?: boolean
    devTools?: boolean
    isLoading?: boolean
  }
}) => {
  if (!options || options.cookieControl !== false) {
    await expect(
      page.getByRole('button', { name: 'Cookie control' }),
    ).toBeVisible()
  }

  // if (
  //   process.env.NODE_ENV === 'development' &&
  //   (!options || options.devTools !== false)
  // ) {
  //   await expect(
  //     page.getByRole('button', { name: 'Toggle Nuxt DevTools' }),
  //   ).toBeVisible()
  // }

  if (!options || options.isLoading !== false) {
    await expect(page.getByTestId('is-loading')).toHaveAttribute(
      'data-is-loading',
      'false',
    )
  }
}
