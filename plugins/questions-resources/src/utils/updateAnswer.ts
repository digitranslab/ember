//
// Copyright @ 2024 Digitrans Inc.
//

import type { Answer, Question } from '@digitranslab/questions'
import type { DocumentUpdate, TxOperations } from '@digitranslab/core'

export async function updateAnswer<A extends Answer<Question<unknown>, unknown>> (
  client: TxOperations,
  answer: A,
  update: DocumentUpdate<A>
): Promise<void> {
  // TODO: Add check?
  await client.updateCollection(
    answer._class,
    answer.space,
    answer._id,
    answer.attachedTo,
    answer.attachedToClass,
    answer.collection,
    update
  )
}
