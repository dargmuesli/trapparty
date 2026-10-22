import {
  // testA11y,
  testOgImage,
  testPageLoad,
  // testVisualRegression,
} from '@dargmuesli/nuxt-vio-testing/e2e/utils/tests'

const PAGE_PATH = '/'

// TODO: mock graphql and reenable tests

// testA11y(PAGE_PATH)
testOgImage({
  de: '/de',
  en: PAGE_PATH,
})
testPageLoad(PAGE_PATH)
// testVisualRegression(PAGE_PATH)
