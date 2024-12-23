<!--
// Copyright © 2022 Digitrans Inc.
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
  import contact, { Employee } from '@digitranslab/contact'
  import { EmployeePresenter } from '@digitranslab/contact-resources'
  import { FindOptions } from '@digitranslab/core'
  import { getEmbeddedLabel } from '@digitranslab/platform'
  import presentation, { Card } from '@digitranslab/presentation'
  import tracker, { TimeSpendReport } from '@digitranslab/tracker'
  import { TableBrowser } from '@digitranslab/view-resources'

  export let reports: TimeSpendReport[]
  export let employee: Employee

  export function canClose (): boolean {
    return true
  }
  const options: FindOptions<TimeSpendReport> = {
    lookup: {
      attachedTo: tracker.class.Issue,
      employee: contact.mixin.Employee
    },
    sort: {
      date: -1
    }
  }
</script>

<Card
  label={getEmbeddedLabel('Reports')}
  canSave={true}
  on:close
  on:changeContent
  okAction={() => {}}
  okLabel={presentation.string.Ok}
  on:changeContent
>
  <svelte:fragment slot="header">
    <EmployeePresenter value={employee} disabled />
  </svelte:fragment>
  <TableBrowser
    _class={tracker.class.TimeSpendReport}
    query={{ _id: { $in: reports.map((it) => it._id) } }}
    config={['$lookup.attachedTo', '$lookup.attachedTo.title', '', 'employee', 'date']}
    {options}
  />
</Card>
