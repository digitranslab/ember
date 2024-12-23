//
// Copyright @ 2024 Digitrans Inc.
//

import type { TrainingRequest } from '@digitranslab/training'
import type { Employee } from '@digitranslab/contact'
import type { Ref } from '@digitranslab/core'
import { getClient } from '@digitranslab/presentation'
import { canChangeTrainingRequestOwner } from './canChangeTrainingRequestOwner'

export async function changeTrainingRequestOwner (request: TrainingRequest, owner: Ref<Employee>): Promise<void> {
  if (canChangeTrainingRequestOwner(request)) {
    await getClient().update(request, { owner })
  }
}
