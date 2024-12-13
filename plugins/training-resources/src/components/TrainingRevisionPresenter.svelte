<!--
  Copyright @ 2024 Digitrans Inc.
-->

<script lang="ts">
  import type { Training } from '@digitranslab/training'
  import { getClient } from '@digitranslab/presentation'
  import { Label } from '@digitranslab/ui'

  export let value: Training

  const label = getClient().getHierarchy().getAttribute(value._class, 'revision').label
</script>

<span>
  <Label {label} />
  {value.revision}
</span>
