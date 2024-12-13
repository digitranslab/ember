//
// Copyright © 2024 Digitrans Inc.
//

import type { AttachedData } from '@digitranslab/core'
import { getClient } from '@digitranslab/presentation'
import type { Question } from '@digitranslab/questions'
import { LexoRank } from 'lexorank'
import { canUpdateQuestion, findNextQuestion, getCurrentEmployeeRef, isAssessment } from '../utils'
import { focusActionWithAvailability } from './ActionWithAvailability'

export const questionDuplicateAction = focusActionWithAvailability<Question<unknown>>(
  async (object: Question<unknown>) => {
    return canUpdateQuestion(object)
  },
  async (object: Question<unknown>) => {
    const nextQuestion = await findNextQuestion(object)

    const prevLexoRank = LexoRank.parse(object.rank)
    const nextLexoRank = nextQuestion === undefined ? LexoRank.max() : LexoRank.parse(nextQuestion.rank)
    const rank = prevLexoRank.between(nextLexoRank).toString()

    const owner = getCurrentEmployeeRef()
    const data: AttachedData<typeof object> = {
      rank,
      title: object.title,
      questionData: object.questionData,
      owner,
      releasedOn: null,
      releasedBy: null,
      ...(isAssessment(object) ? { assessmentData: object.assessmentData } : {})
    }

    await getClient().addCollection(
      object._class,
      object.space,
      object.attachedTo,
      object.attachedToClass,
      object.collection,
      data
    )
  }
)
