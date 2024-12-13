//
// Copyright @ 2024 Digitrans Inc.
//

import type { TrainingAttempt } from '@digitranslab/training'
import type { Location } from '@digitranslab/ui'
import { trainingAttemptRoute } from '../routing/routes/trainingAttemptRoute'

export async function trainingAttemptLinkProviderEncode (
  object: TrainingAttempt,
  _props: Record<string, any>
): Promise<Location> {
  return trainingAttemptRoute.build({ id: object._id, tab: null })
}
