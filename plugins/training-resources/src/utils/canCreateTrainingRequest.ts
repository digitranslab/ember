//
// Copyright @ 2024 Digitrans Inc.
//

import { checkMyPermission, permissionsStore } from '@digitranslab/view-resources'
import { type Training, TrainingState } from '@digitranslab/training'
import { get } from 'svelte/store'
import training from '../plugin'
import { getCurrentEmployeeRef } from './getCurrentEmployeeRef'

export function canCreateTrainingRequest (parent: Training): boolean {
  return (
    parent.state === TrainingState.Released &&
    (checkMyPermission(training.permission.CreateRequestOnSomeoneElsesTraining, parent.space, get(permissionsStore)) ||
      parent.owner === getCurrentEmployeeRef())
  )
}
