//
// Copyright @ 2024 Digitrans Inc.
//

import type {
  AnswerDataAssessFunction,
  SingleChoiceAssessment,
  SingleChoiceAssessmentAnswer
} from '@digitranslab/questions'

/** @public */
export const SingleChoiceAssessmentAssess: AnswerDataAssessFunction<
SingleChoiceAssessment,
SingleChoiceAssessmentAnswer
> = async (answerData, assessmentData) => {
  return {
    score: answerData.selectedIndex === assessmentData.correctIndex ? 100 : 0
  }
}
