<!--
//
// Copyright © 2023 Digitrans Inc.
//
-->
<script lang="ts">
  import { WithLookup } from '@digitranslab/core'
  import { IssuePresenter } from '@digitranslab/tracker-resources'
  import github, { GithubPullRequest } from '@digitranslab/github'

  export let value: WithLookup<GithubPullRequest>
  export let disabled = false
  export let onClick: (() => void) | undefined = undefined
  export let shouldShowAvatar: boolean = false
  export let noUnderline = false
  export let inline = false
  export let kind: 'list' | undefined = undefined
</script>

<IssuePresenter
  {value}
  {disabled}
  {onClick}
  {shouldShowAvatar}
  {noUnderline}
  {inline}
  {kind}
  icon={github.icon.PullRequest}
/>
