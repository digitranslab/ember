<!--
// Copyright © 2023 Digitrans Inc.
//
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
-->
<script lang="ts">
  import { getCurrentAccount, SortingOrder } from '@digitranslab/core'
  import { createQuery } from '@digitranslab/presentation'
  import { Scroller } from '@digitranslab/ui'
  import activity, { ActivityMessage } from '@digitranslab/activity'
  import { PersonAccount } from '@digitranslab/contact'
  import { ActivityMessagePresenter } from '@digitranslab/activity-resources'
  import notification from '@digitranslab/notification'
  import attachment from '@digitranslab/attachment'

  import chunter from '../../plugin'
  import Header from '../Header.svelte'
  import { openMessageFromSpecial } from '../../navigation'

  const threadsQuery = createQuery()
  const me = getCurrentAccount() as PersonAccount

  let threads: ActivityMessage[] = []

  $: threadsQuery.query(
    activity.class.ActivityMessage,
    {
      replies: { $exists: true },
      [`${notification.mixin.Collaborators}.collaborators`]: me._id
    },
    (res) => {
      threads = res.filter(({ replies }) => (replies ?? 0) > 0)
    },
    {
      sort: { modifiedOn: SortingOrder.Descending },
      lookup: {
        _id: {
          attachments: attachment.class.Attachment,
          reactions: activity.class.Reaction
        }
      }
    }
  )
</script>

<Header icon={chunter.icon.Thread} intlLabel={chunter.string.Threads} titleKind={'breadcrumbs'} />

<Scroller padding="0.75rem 0.5rem">
  {#each threads as thread}
    <ActivityMessagePresenter value={thread} onClick={() => openMessageFromSpecial(thread)} withShowMore={false} />
  {/each}
</Scroller>
