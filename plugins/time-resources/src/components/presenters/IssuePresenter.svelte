<script lang="ts">
  import { Issue } from '@digitranslab/tracker'
  import { DocReferencePresenter } from '@digitranslab/view-resources'

  export let value: Issue
</script>

<DocReferencePresenter {value} on:click>
  <slot />
</DocReferencePresenter>
