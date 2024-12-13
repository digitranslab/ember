//
// Copyright © 2021, 2023 Digitrans Inc.
//
//

import { Ref } from '@digitranslab/core'
import type { Metadata, Plugin, Resource } from '@digitranslab/platform'
import { plugin } from '@digitranslab/platform'
import { TriggerFunc } from '@digitranslab/server-core'
import { TodoDoneTester } from '@digitranslab/time'
import { GithubProject } from '@digitranslab/github'

/**
 * @public
 */
export const serverGithubId = 'server-github' as Plugin

/**
 * @public
 */
export default plugin(serverGithubId, {
  trigger: {
    OnProjectChanges: '' as Resource<TriggerFunc>
  },
  functions: {
    TodoDoneTester: '' as Resource<TodoDoneTester>
  },
  metadata: {
    GithubProjects: '' as Metadata<Set<Ref<GithubProject>>>
  }
})
