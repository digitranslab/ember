//
// Copyright @ 2024 Digitrans Inc.
//

import { focusActionWithAvailability } from '@digitranslab/questions-resources'
import type { TrainingRequest } from '@digitranslab/training'
import { getClient } from '@digitranslab/presentation'
import { canCancelTrainingRequest, getCurrentEmployeeRef } from '../utils'

export const trainingRequestCancelAction = focusActionWithAvailability<TrainingRequest>(
  async (object: TrainingRequest) => {
    return canCancelTrainingRequest(object)
  },
  async (object: TrainingRequest) => {
    await getClient().update(object, {
      canceledOn: Date.now(),
      canceledBy: getCurrentEmployeeRef()
    })
  }
)
