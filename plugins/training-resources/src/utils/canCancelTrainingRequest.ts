//
// Copyright @ 2024 Digitrans Inc.
//

import type { TrainingRequest } from '@digitranslab/training'
import { getCurrentEmployeeRef } from './getCurrentEmployeeRef'

export function canCancelTrainingRequest (object: TrainingRequest): boolean {
  return object.canceledOn === null && object.owner === getCurrentEmployeeRef()
}
