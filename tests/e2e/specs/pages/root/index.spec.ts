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
  dynamic: {
    de: 'a_TrapPartys+Logo.,c_Default.takumi,description_TrapPartys+Online-Version.,title_Geburtstagsfeier,headline_Jonas+Thelemanns,p_Ii9kZSI,s_2MXC2MlfrvRqKHbJ.png',
    en: `a_TrapParty's+logo.,c_Default.takumi,description_TrapParty's+online+version.,title_Birthday+Bash,headline_Jonas+Thelemann's,s_Kq0NpNtPK6E7OQRL.png`,
  },
})
testPageLoad(PAGE_PATH)
// testVisualRegression(PAGE_PATH)
