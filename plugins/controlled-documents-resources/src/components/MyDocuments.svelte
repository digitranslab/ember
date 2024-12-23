<script lang="ts">
  import { Document } from '@digitranslab/controlled-documents'
  import { Employee, PersonAccount } from '@digitranslab/contact'
  import { DocumentQuery, Ref, getCurrentAccount } from '@digitranslab/core'
  import DocumentsContainer from './DocumentsContainer.svelte'

  import documents from '../plugin'
  import { IntlString } from '@digitranslab/platform'
  import { createEventDispatcher } from 'svelte'

  export let query: DocumentQuery<Document> = {}
  export let config: [string, IntlString, object][] = []

  const dispatch = createEventDispatcher()
  const currentEmployee = (getCurrentAccount() as PersonAccount).person as Ref<Employee>

  $: resultQuery = {
    ...query,
    owner: currentEmployee
  }
</script>

<DocumentsContainer
  query={resultQuery}
  icon={documents.icon.Document}
  title={documents.string.MyDocuments}
  {config}
  on:action={(event) => dispatch('action', event.detail)}
/>
