import { test, expect } from '@playwright/test'

import { COOKIE_CONTROL_DEFAULT } from '../../../utils/constants'

test.beforeEach(async ({ context }) => {
  await context.addCookies([
    {
      name: 'ncc_c',
      value: COOKIE_CONTROL_DEFAULT,
      domain: 'localhost',
      path: '/',
    },
  ])
})

test.describe('page load', () => {
  test('loads the page successfully', async ({ request }) => {
    const resp = await request.get('/privacy-policy')
    expect(resp.status()).toBe(200)
  })
})

test.describe('visual regression', () => {
  test('looks as before', async ({ page }) => {
    await page.goto('/privacy-policy')
    await expect(page.getByTestId('is-loading')).toHaveAttribute(
      'data-is-loading',
      'false'
    )
    await page.getByRole('button', { name: 'Cookie control' }).isVisible()
    await expect(page).toHaveScreenshot({ fullPage: true })
  })
})
