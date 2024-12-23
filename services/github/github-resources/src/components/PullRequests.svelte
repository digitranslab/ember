<!--
// Copyright © 2023 Digitrans Inc.
//
-->
<script lang="ts">
  import { DocumentQuery, Ref } from '@digitranslab/core'
  import { createEventDispatcher } from 'svelte'

  import { IntlString } from '@digitranslab/platform'
  import { createQuery } from '@digitranslab/presentation'
  import tracker, { Issue, Project } from '@digitranslab/tracker'
  import { IModeSelector, resolvedLocationStore } from '@digitranslab/ui'

  import task from '@digitranslab/task'
  import { GithubProject, GithubPullRequest } from '@digitranslab/github'
  import PullRequestsView from './PullRequestsView.svelte'

  export let currentSpace: Ref<GithubProject> | undefined = undefined
  export let baseQuery: DocumentQuery<GithubPullRequest> = {}
  export let title: IntlString
  export let config: [string, IntlString, object][]

  const dispatch = createEventDispatcher()
  let query: DocumentQuery<GithubPullRequest> | undefined = undefined
  let modeSelectorProps: IModeSelector | undefined = undefined

  const archivedProjectQuery = createQuery()
  let archived: Ref<Project>[] = []

  archivedProjectQuery.query(
    tracker.class.Project,
    { archived: true },
    (res) => {
      archived = res.map((it) => it._id)
    },
    { projection: { _id: 1 } }
  )

  $: spaceQuery = currentSpace ? { space: currentSpace } : { space: { $nin: archived as Ref<GithubProject>[] } }

  const activeStatusQuery = createQuery()
  let active: DocumentQuery<Issue>

  $: all = { ...spaceQuery }
  $: activeStatusQuery.query(
    tracker.class.IssueStatus,
    {
      category: { $nin: [task.statusCategory.Won, task.statusCategory.Lost] }
    },
    (result) => {
      active = { status: { $in: result.map(({ _id }) => _id) }, ...spaceQuery }
    }
  )

  const closedStatusQuery = createQuery()
  let closed: DocumentQuery<GithubPullRequest> = {}
  $: closedStatusQuery.query(
    tracker.class.IssueStatus,
    { category: { $in: [task.statusCategory.Won, task.statusCategory.Lost] } },
    (result) => {
      closed = { status: { $in: result.map(({ _id }) => _id) }, ...spaceQuery }
    }
  )

  $: queries = { all, active, closed }
  $: mode = $resolvedLocationStore.query?.mode ?? undefined
  $: if (mode === undefined || (queries as any)[mode] === undefined) {
    ;[[mode]] = config
  }
  $: if (mode !== undefined) {
    query = { ...((queries as any)[mode] ?? {}) }
    modeSelectorProps = {
      config,
      mode,
      onChange: (newMode: string) => dispatch('action', { mode: newMode })
    }
  }
</script>

{#if query !== undefined && modeSelectorProps !== undefined}
  {#key query && currentSpace}
    <PullRequestsView {query} space={currentSpace} {title} {modeSelectorProps} />
  {/key}
{/if}
