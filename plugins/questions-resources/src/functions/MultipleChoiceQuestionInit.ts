//
// Copyright @ 2024 Digitrans Inc.
//

import {
  type QuestionInitFunction,
  type QuestionInitFunctionResult,
  type MultipleChoiceQuestion
} from '@digitranslab/questions'
import { type Hierarchy } from '@digitranslab/core'
import { translate } from '@digitranslab/platform'
import type { ThemeOptions } from '@digitranslab/theme'
import questions from '../plugin'

export const MultipleChoiceQuestionInit: QuestionInitFunction<MultipleChoiceQuestion> = async (
  language: ThemeOptions['language'],
  hierarchy: Hierarchy
): Promise<QuestionInitFunctionResult<MultipleChoiceQuestion>> => {
  return {
    title: await translate(questions.string.MultipleChoice, {}, language),
    questionData: {
      options: [{ label: '' }]
    }
  }
}
