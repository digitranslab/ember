//
// Copyright @ 2024 Digitrans Inc.
//

import type { Training } from '@digitranslab/training'
import type { Location } from '@digitranslab/ui'
import { trainingRoute } from '../routing/routes/trainingRoute'

export async function trainingLinkProviderEncode (object: Training, _props: Record<string, any>): Promise<Location> {
  return trainingRoute.build({ id: object._id, tab: null })
}
