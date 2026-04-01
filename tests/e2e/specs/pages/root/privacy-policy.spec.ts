import {
  testA11y,
  testOgImage,
  testPageLoad,
  testVisualRegression,
} from '@dargmuesli/nuxt-vio-testing/e2e/utils/tests'

const PAGE_PATH = '/privacy-policy'

testA11y(PAGE_PATH)
testPageLoad(PAGE_PATH)
testOgImage({
  dynamic: {
    de: 'a_TrapPartys+Logo.,c_Default.takumi,description_TrapPartys+Online-Version.,title_~RGF0ZW5zY2h1dHplcmtsw6RydW5n,p_Ii9kZS9wcml2YWN5LXBvbGljeSI.png',
    en: `a_TrapParty's+logo.,c_Default.takumi,description_TrapParty's+online+version.,title_Privacy+Policy,p_Ii9wcml2YWN5LXBvbGljeSI.png`,
  },
})
testVisualRegression(PAGE_PATH)
