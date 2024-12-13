//
// Copyright @ 2024 Digitrans Inc.
//

import {
  type QuestionInitFunction,
  type QuestionInitFunctionResult,
  type OrderingAssessment
} from '@digitranslab/questions'
import { type Hierarchy } from '@digitranslab/core'
import type { ThemeOptions } from '@digitranslab/theme'
import { OrderingQuestionInit } from './OrderingQuestionInit'

export const OrderingAssessmentInit: QuestionInitFunction<OrderingAssessment> = async (
  language: ThemeOptions['language'],
  hierarchy: Hierarchy
): Promise<QuestionInitFunctionResult<OrderingAssessment>> => {
  return {
    ...(await OrderingQuestionInit(language, hierarchy)),
    assessmentData: {
      correctOrder: [1]
    }
  }
}
