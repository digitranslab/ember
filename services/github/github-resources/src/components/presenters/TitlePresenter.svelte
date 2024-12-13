<!--
//
// Copyright © 2023 Digitrans Inc.
//
-->
<script lang="ts">
  import { WithLookup } from '@digitranslab/core'
  import { TitlePresenter } from '@digitranslab/tracker-resources'
  import { GithubPullRequest } from '@digitranslab/github'

  export let value: WithLookup<GithubPullRequest>
  export let shouldUseMargin: boolean = false
  export let showParent = true
  export let kind: 'list' | undefined = undefined
  export let onClick: (() => void) | undefined = undefined
  export let disabled = false
</script>

{#if value}
  <TitlePresenter {value} {shouldUseMargin} {showParent} {kind} {onClick} {disabled} />
{/if}
