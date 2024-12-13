//
// Copyright @ 2024 Digitrans Inc.
//

import { findQuestions, updateQuestion } from '@digitranslab/questions-resources'
import type { Training } from '@digitranslab/training'
import type { Employee } from '@digitranslab/contact'
import type { Ref } from '@digitranslab/core'
import { getClient } from '@digitranslab/presentation'
import { canChangeTrainingOwner } from './canChangeTrainingOwner'

export async function changeTrainingOwner (training: Training, owner: Ref<Employee>): Promise<void> {
  if (!canChangeTrainingOwner(training)) {
    return
  }
  const ops = getClient().apply()

  await ops.updateDoc(training._class, training.space, training._id, {
    owner
  })

  const trainingQuestions = await findQuestions(training, 'questions')
  await Promise.all(
    trainingQuestions.map(async (question) => {
      await updateQuestion(ops, question, { owner })
    })
  )

  await ops.commit()
}
