import { makeLocalesTest } from '@digitranslab/platform'

it(
  'Locales are equale',
  makeLocalesTest((lang) => import(`../../lang/${lang}.json`))
)
