//
// Copyright @ 2024 Digitrans Inc.
//

import type { TrainingRequest } from '@digitranslab/training'
import { getCurrentEmployeeRef } from './getCurrentEmployeeRef'

export function canUpdateTrainingRequest (request: TrainingRequest): boolean {
  return request.owner === getCurrentEmployeeRef()
}
