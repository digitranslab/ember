<!--
// Copyright © 2023 Digitrans Inc.
//
-->
<script lang="ts">
  import { GithubPullRequest } from '@digitranslab/github'
  import PullRequestDiff from './PullRequestDiff.svelte'

  export let object: GithubPullRequest
  export let embedded = false
</script>

<div class="mt-6">
  <PullRequestDiff pullRequest={object} />
</div>
