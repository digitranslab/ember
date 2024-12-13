//
// Copyright @ 2024 Digitrans Inc.
//

import type { Question } from '@digitranslab/questions'
import { getCurrentEmployeeRef } from './getCurrentEmployeeRef'

export function canUpdateQuestion (object: Question<unknown>): boolean {
  return (object.releasedOn === null || object.releasedOn > Date.now()) && object.owner === getCurrentEmployeeRef()
}
