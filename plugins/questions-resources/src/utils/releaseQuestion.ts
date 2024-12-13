//
// Copyright @ 2024 Digitrans Inc.
//

import type { Question } from '@digitranslab/questions'
import { type TxOperations } from '@digitranslab/core'
import { getCurrentEmployeeRef } from './getCurrentEmployeeRef'
import { updateQuestion } from './updateQuestion'

export async function releaseQuestion (client: TxOperations, question: Question<unknown>): Promise<void> {
  await updateQuestion(client, question, {
    releasedBy: question.releasedBy ?? getCurrentEmployeeRef(),
    releasedOn: question.releasedOn ?? Date.now()
  })
}
