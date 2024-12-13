//
// Copyright @ 2024 Digitrans Inc.
//

import { type TrainingAttemptState, trainingAttemptStateOrder } from '@digitranslab/training'
import { type TxOperations } from '@digitranslab/core'

export async function trainingAttemptStateSort (
  _: TxOperations,
  states: TrainingAttemptState[]
): Promise<TrainingAttemptState[]> {
  return states
    .slice()
    .sort((state1, state2) => trainingAttemptStateOrder.indexOf(state2) - trainingAttemptStateOrder.indexOf(state1))
}
