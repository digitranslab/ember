<script lang="ts">
  import { DateRangeMode, Timestamp, TypeDate } from '@digitranslab/core'
  import { ticker, tooltip } from '@digitranslab/ui'
  import { DateEditor } from '@digitranslab/view-resources'
  import EmployeeStatusDueDatePopup from './EmployeeStatusDueDatePopup.svelte'
  import { formatDate } from '../utils'
  import { createEventDispatcher } from 'svelte'

  export let statusDueDate: Timestamp | undefined

  $: isOverdue = statusDueDate && statusDueDate < $ticker
  $: formattedDate = statusDueDate && formatDate(statusDueDate)

  const dispatch = createEventDispatcher()
  const type = { mode: DateRangeMode.DATETIME, withShift: true } as unknown as TypeDate
</script>

<div
  class="clear-mins"
  use:tooltip={{ direction: 'top', component: EmployeeStatusDueDatePopup, props: { formattedDate, isOverdue } }}
>
  <DateEditor
    value={statusDueDate}
    {type}
    onChange={(v) => {
      statusDueDate = v
      dispatch('change', v)
    }}
  />
</div>
