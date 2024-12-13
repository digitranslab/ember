import { type Person } from '@digitranslab/contact'
import { type Ref } from '@digitranslab/core'
import { type IntlString } from '@digitranslab/platform'

/**
 * @public
 */
export interface AssigneeCategory {
  label: IntlString
  func: (val: Array<Ref<Person>>) => Promise<Array<Ref<Person>>>
}
