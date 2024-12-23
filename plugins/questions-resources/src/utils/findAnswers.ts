//
// Copyright @ 2024 Digitrans Inc.
//

import questions, { type Answer, type Question } from '@digitranslab/questions'
import { type Doc, SortingOrder } from '@digitranslab/core'
import { getClient } from '@digitranslab/presentation'

export async function findAnswers<Parent extends Doc, Collection extends Extract<keyof Parent, string> | string> (
  from: Parent,
  collection: Collection
): Promise<Array<Answer<Question<unknown>, unknown>>> {
  return await getClient().findAll(
    questions.class.Answer,
    {
      space: from.space,
      attachedToClass: from._class,
      attachedTo: from._id,
      collection
    },
    {
      sort: { rank: SortingOrder.Ascending }
    }
  )
}
