//
// Copyright @ 2024 Digitrans Inc.
//

import { checkMyPermission, permissionsStore } from '@digitranslab/view-resources'
import type { TrainingRequest } from '@digitranslab/training'
import { get } from 'svelte/store'
import training from '../plugin'
import { getCurrentEmployeeRef } from './getCurrentEmployeeRef'

export function canChangeTrainingRequestOwner (request: TrainingRequest): boolean {
  return (
    request.owner === getCurrentEmployeeRef() ||
    checkMyPermission(training.permission.ChangeSomeoneElsesSentRequestOwner, request.space, get(permissionsStore))
  )
}
