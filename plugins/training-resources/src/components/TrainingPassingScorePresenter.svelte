<!--
  Copyright @ 2024 Digitrans Inc.
-->

<script lang="ts">
  import type { Question } from '@digitranslab/questions'
  import type { Training } from '@digitranslab/training'
  import { createQuery } from '@digitranslab/presentation'
  import { calculateAnswersToPass, queryQuestions } from '@digitranslab/questions-resources'
  import { Loading } from '@digitranslab/ui'
  import Score from './Score.svelte'

  export let value: Training

  let questions: Question<unknown>[] = []
  const query = createQuery()
  $: {
    queryQuestions(query, value, 'questions', (result) => {
      questions = result
    })
  }

  let total: number | null = null
  let needed: number | null = null
  $: {
    const calculated = calculateAnswersToPass(questions, value.passingScore)
    total = calculated.assessmentsTotal
    needed = calculated.answersNeeded
  }
</script>

{#if total === null || needed === null}
  <Loading size="small" />
{:else}
  <Score count={needed} {total} score={value.passingScore} />
{/if}
