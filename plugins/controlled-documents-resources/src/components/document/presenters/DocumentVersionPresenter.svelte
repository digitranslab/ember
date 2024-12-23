<script lang="ts">
  import { WithLookup } from '@digitranslab/core'
  import { Document } from '@digitranslab/controlled-documents'
  import { Label } from '@digitranslab/ui'
  import document from '../../../plugin'

  export let value: WithLookup<Document> | undefined
</script>

{#if value}
  <Label label={document.string.VersionValue} params={{ major: value.major, minor: value.minor }} />
{/if}
