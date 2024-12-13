//
// Copyright @ 2024 Digitrans Inc.
//

import {
  type QuestionInitFunction,
  type QuestionInitFunctionResult,
  type OrderingQuestion
} from '@digitranslab/questions'
import { type Hierarchy } from '@digitranslab/core'
import { translate } from '@digitranslab/platform'
import type { ThemeOptions } from '@digitranslab/theme'
import questions from '../plugin'

export const OrderingQuestionInit: QuestionInitFunction<OrderingQuestion> = async (
  language: ThemeOptions['language'],
  hierarchy: Hierarchy
): Promise<QuestionInitFunctionResult<OrderingQuestion>> => {
  return {
    title: await translate(questions.string.Ordering, {}, language),
    questionData: {
      options: [{ label: '' }]
    }
  }
}
