<script lang="ts">
  import { Event } from '@digitranslab/calendar'
  import { calendarByIdStore } from '@digitranslab/calendar-resources'
  import { PersonAccount } from '@digitranslab/contact'
  import { IdMap, getCurrentAccount } from '@digitranslab/core'
  import { ToDo, WorkSlot } from '@digitranslab/time'
  import { groupTeamData } from '../utils'
  import PlanPerson from './PlanPerson.svelte'

  export let slots: WorkSlot[]
  export let events: Event[]
  export let showAssignee: boolean = false

  export let personAccounts: PersonAccount[]
  export let todos: IdMap<ToDo>

  const me = (getCurrentAccount() as PersonAccount).person

  $: grouped = groupTeamData(slots, todos, events, personAccounts, me, $calendarByIdStore)
</script>

<div class="container flex-col background-comp-header-color">
  {#each grouped as gitem, i}
    {#if i}
      <div class="divider" />
    {/if}
    <PlanPerson {gitem} {showAssignee} />
  {/each}
</div>

<style lang="scss">
  .divider {
    border-top: 1px solid var(--theme-table-border-color);
  }

  .container {
    margin-top: 0.75rem;
    border: 1px solid var(--theme-table-border-color);
    border-radius: 0.5rem;
  }
</style>
