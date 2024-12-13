<script lang="ts">
  import { Doc } from '@digitranslab/core'
  import { getClient } from '@digitranslab/presentation'
  import { ChunterExtension, ChunterExtensionPoint } from '@digitranslab/chunter'
  import { Component } from '@digitranslab/ui'

  import chunter from '../plugin'

  export let object: Doc
  export let point: ChunterExtensionPoint

  const client = getClient()

  let extensions: ChunterExtension[] = []

  $: extensions = client.getModel().findAllSync(chunter.class.ChunterExtension, { ofClass: object._class, point })
</script>

{#each extensions as extension}
  <Component is={extension.component} props={{ object }} />
{/each}
