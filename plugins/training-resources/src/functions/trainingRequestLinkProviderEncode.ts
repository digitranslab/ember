//
// Copyright @ 2024 Digitrans Inc.
//

import type { TrainingRequest } from '@digitranslab/training'
import type { Location } from '@digitranslab/ui'
import { trainingRequestRoute } from '../routing/routes/trainingRequestRoute'

export async function trainingRequestLinkProviderEncode (
  object: TrainingRequest,
  _props: Record<string, any>
): Promise<Location> {
  return trainingRequestRoute.build({
    id: object._id,
    tab: null
  })
}
