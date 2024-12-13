<script lang="ts">
  import documents, { Document } from '@digitranslab/controlled-documents'
  import { Ref } from '@digitranslab/core'

  import { getClient } from '@digitranslab/presentation'
  import { Label } from '@digitranslab/ui'
  import view from '@digitranslab/view'

  export let value: Ref<Document> | undefined

  let document: Document | undefined = undefined
  const client = getClient()

  $: if (value) {
    client.findOne(documents.class.Document, { _id: value }).then((result) => {
      document = result
    })
  }
</script>

{#if document}
  {document.title}
{:else}
  <Label label={view.string.LabelNA} />
{/if}
