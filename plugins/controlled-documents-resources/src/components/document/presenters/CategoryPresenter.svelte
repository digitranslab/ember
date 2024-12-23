<script lang="ts">
  import documents, { DocumentCategory } from '@digitranslab/controlled-documents'
  import { Ref } from '@digitranslab/core'

  import { getClient } from '@digitranslab/presentation'
  import { Label } from '@digitranslab/ui'
  import view from '@digitranslab/view'

  export let value: Ref<DocumentCategory> | undefined

  let category: DocumentCategory | undefined = undefined
  const client = getClient()

  $: if (value) {
    client.findOne(documents.class.DocumentCategory, { _id: value }).then((result) => {
      category = result
    })
  }
</script>

{#if category}
  {category.title}
{:else}
  <Label label={view.string.LabelNA} />
{/if}
