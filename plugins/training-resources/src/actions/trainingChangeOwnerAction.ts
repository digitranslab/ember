//
// Copyright @ 2024 Digitrans Inc.
//

import { focusActionWithAvailability } from '@digitranslab/questions-resources'
import type { Training } from '@digitranslab/training'
import { showPopup } from '@digitranslab/ui'
import TrainingChangeOwnerPopup from '../components/TrainingChangeOwnerPopup.svelte'
import { canChangeTrainingOwner } from '../utils'

export const trainingChangeOwnerAction = focusActionWithAvailability<Training>(
  async (object: Training) => {
    return canChangeTrainingOwner(object)
  },
  async (object: Training) => {
    await new Promise((resolve) => {
      showPopup(
        TrainingChangeOwnerPopup,
        {
          object
        },
        'top',
        resolve
      )
    })
  }
)
