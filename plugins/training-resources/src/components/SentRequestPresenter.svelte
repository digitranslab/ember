<!--
  Copyright @ 2024 Digitrans Inc.
-->

<script lang="ts">
  import type { TrainingRequest } from '@digitranslab/training'
  import type { WithLookup } from '@digitranslab/core'
  import { DocNavLink } from '@digitranslab/view-resources'

  export let value: WithLookup<TrainingRequest>
  export let disabled: boolean = false
</script>

{#if value.$lookup?.attachedTo}
  <div class="content-halfcontent-color">
    <DocNavLink object={value} {disabled} noOverflow accent>
      <span class="whitespace-nowrap fs-bold">
        {value.$lookup.attachedTo.code}
      </span>
    </DocNavLink>
  </div>
{/if}
