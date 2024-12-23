//
// Copyright @ 2024 Digitrans Inc.
//

import { focusActionWithAvailability } from '@digitranslab/questions-resources'
import type { TrainingRequest } from '@digitranslab/training'
import { showPopup } from '@digitranslab/ui'
import TrainingRequestChangeOwnerPopup from '../components/TrainingRequestChangeOwnerPopup.svelte'
import { canChangeTrainingRequestOwner } from '../utils'

export const trainingRequestChangeOwnerAction = focusActionWithAvailability<TrainingRequest>(
  async (object: TrainingRequest) => {
    return canChangeTrainingRequestOwner(object)
  },
  async (object: TrainingRequest) => {
    await new Promise((resolve) => {
      showPopup(
        TrainingRequestChangeOwnerPopup,
        {
          object
        },
        'top',
        resolve
      )
    })
  }
)
