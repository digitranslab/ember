<!--
//
// Copyright © 2023 Digitrans Inc.
//
-->
<script lang="ts">
  import { Ref } from '@digitranslab/core'
  import { getEmbeddedLabel } from '@digitranslab/platform'
  import { ButtonKind, ButtonSize } from '@digitranslab/ui'
  import { HyperlinkEditor } from '@digitranslab/view-resources'
  import github, { GithubIntegrationRepository } from '@digitranslab/github'
  import { integrationRepositories } from './utils'

  export let value: Ref<GithubIntegrationRepository>
  export let kind: ButtonKind | undefined = undefined
  export let size: ButtonSize = 'small'
  export let justify: 'left' | 'center' = 'center'
  export let width: string | undefined = 'fit-content'

  $: repository = $integrationRepositories.get(value)
</script>

<HyperlinkEditor
  value={repository?.repository?.html_url}
  placeholder={getEmbeddedLabel(repository?.name ?? '')}
  title={repository?.name ?? ''}
  readonly
  icon={github.icon.Github}
  {kind}
  {size}
  {justify}
  {width}
/>
