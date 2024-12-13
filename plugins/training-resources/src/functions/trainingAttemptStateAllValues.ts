//
// Copyright @ 2024 Digitrans Inc.
//

import { type TrainingAttemptState, trainingAttemptStateOrder } from '@digitranslab/training'

export async function trainingAttemptStateAllValues (): Promise<TrainingAttemptState[]> {
  return [...trainingAttemptStateOrder]
}
