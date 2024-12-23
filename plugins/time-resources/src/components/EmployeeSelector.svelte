<script lang="ts">
  import { Employee, PersonAccount, getName } from '@digitranslab/contact'
  import { Avatar, employeeByIdStore, personAccountByIdStore } from '@digitranslab/contact-resources'
  import { Account, IdMap, Ref } from '@digitranslab/core'
  import { createQuery, getClient } from '@digitranslab/presentation'
  import task, { Project } from '@digitranslab/task'
  import { Button, Scroller } from '@digitranslab/ui'

  export let value: Ref<Project>
  export let selected: Ref<Employee>

  let space: Project | undefined = undefined

  const client = getClient()

  const query = createQuery()
  $: query.query(task.class.Project, { _id: value }, (res) => {
    space = res[0]
  })

  let employees: Employee[] = []

  function getEmployee (
    _id: Ref<Account>,
    personAccountByIdStore: IdMap<PersonAccount>,
    employeeByIdStore: IdMap<Employee>
  ): Employee | undefined {
    const employee = personAccountByIdStore.get(_id as Ref<PersonAccount>)
    return employee ? employeeByIdStore.get(employee.person as Ref<Employee>) : undefined
  }

  function getEmployees (
    space: Project | undefined,
    personAccountByIdStore: IdMap<PersonAccount>,
    employeeByIdStore: IdMap<Employee>
  ): void {
    employees = []
    if (space === undefined) return
    for (const member of space.members) {
      const emp = getEmployee(member, personAccountByIdStore, employeeByIdStore)
      if (emp) employees.push(emp)
    }
    employees.sort((a, b) => getName(client.getHierarchy(), a).localeCompare(getName(client.getHierarchy(), b)))
    employees = employees
  }

  $: getEmployees(space, $personAccountByIdStore, $employeeByIdStore)
</script>

{#if space}
  <Scroller padding={'.25rem'} gap={'gap-2'} contentDirection={'horizontal'} noFade={false}>
    {#each employees as employee}
      <Button size={'x-large'} selected={employee._id === selected} on:click={() => (selected = employee._id)}>
        <svelte:fragment slot="content">
          <Avatar person={employee} name={employee.name} size={'smaller'} />
          <span class="ml-2">{getName(client.getHierarchy(), employee)}</span>
        </svelte:fragment>
      </Button>
    {/each}
  </Scroller>
{/if}
