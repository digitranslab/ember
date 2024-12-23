//
// Copyright @ 2024 Digitrans Inc.
//

import { questionsId } from '@digitranslab/questions'
import questions from '@digitranslab/questions-resources/src/plugin'
import type { Ref } from '@digitranslab/core'
import { mergeIds } from '@digitranslab/platform'
import type { ActionCategory } from '@digitranslab/view'

export default mergeIds(questionsId, questions, {
  actionCategory: {
    Questions: '' as Ref<ActionCategory>
  }
})
