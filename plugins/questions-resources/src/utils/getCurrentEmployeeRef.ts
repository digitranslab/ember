//
// Copyright © 2023 Digitrans Inc.
//

import { getCurrentAccount, type Ref } from '@digitranslab/core'
import { type Employee, type PersonAccount } from '@digitranslab/contact'

export function getCurrentEmployeeRef (): Ref<Employee> {
  return (getCurrentAccount() as PersonAccount).person as Ref<Employee>
}
