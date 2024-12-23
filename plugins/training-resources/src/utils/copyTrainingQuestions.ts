//
// Copyright @ 2024 Digitrans Inc.
//

import { copyQuestions } from '@digitranslab/questions-resources'
import type { Training } from '@digitranslab/training'
import { type Ref, type TxOperations } from '@digitranslab/core'

export async function copyTrainingQuestions (ops: TxOperations, from: Training, to: Ref<Training>): Promise<void> {
  await copyQuestions(ops, from, 'questions', to)
}
