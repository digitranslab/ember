<!--
// Copyright © 2024 Digitrans Inc.
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
  import { personAccountByIdStore } from '@digitranslab/contact-resources'
  import contact, { PersonAccount } from '@digitranslab/contact'
  import { getCurrentAccount, Ref } from '@digitranslab/core'
  import { DisplayDocUpdateMessage, DocAttributeUpdates } from '@digitranslab/activity'
  import notification from '@digitranslab/notification'
  import { BaseMessagePreview } from '@digitranslab/activity-resources'
  import { Action, Icon, Label } from '@digitranslab/ui'

  export let message: DisplayDocUpdateMessage
  export let actions: Action[] = []

  const me = getCurrentAccount()._id

  $: attributeUpdates = message.attributeUpdates ?? { added: [], removed: [], set: [] }

  $: isMeAdded = includeMe(attributeUpdates.added.length > 0 ? attributeUpdates.added : attributeUpdates.set)

  function includeMe (values: DocAttributeUpdates['removed' | 'added' | 'set']): boolean {
    return values.some((value) => {
      const account = $personAccountByIdStore.get(value as Ref<PersonAccount>)

      return account?._id === me
    })
  }
</script>

<BaseMessagePreview {actions} {message} on:click>
  <span class="overflow-label flex-presenter flex-gap-1-5">
    <Icon icon={contact.icon.Person} size="small" />
    <Label
      label={isMeAdded ? notification.string.YouAddedCollaborators : notification.string.YouRemovedCollaborators}
    />
  </span>
</BaseMessagePreview>
