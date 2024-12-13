//
// Copyright @ 2024 Digitrans Inc.
//

import type { Assessment, Question, QuestionDataOf } from '@digitranslab/questions'
import type { Class, Ref } from '@digitranslab/core'
import { getClient } from '@digitranslab/presentation'
import questions from '../plugin'

export function isAssessmentClassRef<Q extends Question<any>, A extends Assessment<QuestionDataOf<Q>, any>> (
  classRef: Ref<Class<Q>> | Ref<Class<A>>
): classRef is Ref<Class<A>> {
  return getClient().getHierarchy().isDerived(classRef, questions.class.Assessment)
}

export function isAssessment<Q extends Question<any>, A extends Assessment<QuestionDataOf<Q>, any>> (
  object: Q | A
): object is A {
  return isAssessmentClassRef(object._class)
}