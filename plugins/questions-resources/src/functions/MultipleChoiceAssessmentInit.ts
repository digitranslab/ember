//
// Copyright @ 2024 Digitrans Inc.
//

import {
  type QuestionInitFunction,
  type QuestionInitFunctionResult,
  type MultipleChoiceAssessment
} from '@digitranslab/questions'
import { type Hierarchy } from '@digitranslab/core'
import type { ThemeOptions } from '@digitranslab/theme'
import { MultipleChoiceQuestionInit } from './MultipleChoiceQuestionInit'

export const MultipleChoiceAssessmentInit: QuestionInitFunction<MultipleChoiceAssessment> = async (
  language: ThemeOptions['language'],
  hierarchy: Hierarchy
): Promise<QuestionInitFunctionResult<MultipleChoiceAssessment>> => {
  return {
    ...(await MultipleChoiceQuestionInit(language, hierarchy)),
    assessmentData: {
      correctIndices: [0]
    }
  }
}
