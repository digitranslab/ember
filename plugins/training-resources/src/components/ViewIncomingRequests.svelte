<!--
  Copyright @ 2024 Digitrans Inc.
-->

<script lang="ts">
  import type { TrainingRequest } from '@digitranslab/training'
  import { DocumentQuery } from '@digitranslab/core'
  import { SpecialView } from '@digitranslab/workbench-resources'
  import type { ComponentProps } from 'svelte'
  import { getCurrentEmployeeRef } from '../utils'

  type $$Props = ComponentProps<SpecialView>
  $: ({ baseQuery, ...rest } = $$props as $$Props)

  let extendedBaseQuery: DocumentQuery<TrainingRequest>
  $: extendedBaseQuery = {
    ...((baseQuery ?? {}) as DocumentQuery<TrainingRequest>),
    trainees: getCurrentEmployeeRef(),
    canceledOn: null
  }
</script>

<SpecialView {...rest} baseQuery={extendedBaseQuery} />
