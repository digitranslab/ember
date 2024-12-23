//
// Copyright @ 2024 Digitrans Inc.
//

import type { AnswerDataAssessFunction, OrderingAssessment, OrderingAssessmentAnswer } from '@digitranslab/questions'

/** @public */
export const OrderingAssessmentAssess: AnswerDataAssessFunction<OrderingAssessment, OrderingAssessmentAnswer> = async (
  answerData,
  assessmentData
) => {
  return {
    score: answerData.order.join('~') === assessmentData.correctOrder.join('~') ? 100 : 0
  }
}
