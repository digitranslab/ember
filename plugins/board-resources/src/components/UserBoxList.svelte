<script lang="ts">
  import contact, { Employee } from '@digitranslab/contact'
  import { Ref } from '@digitranslab/core'

  import { Component } from '@digitranslab/ui'
  import board from '../plugin'

  export let value: Ref<Employee>[]
  export let readonly = false
</script>

<Component
  is={contact.component.UserBoxList}
  props={{ items: value, label: board.string.Members, readonly }}
  on:update
/>
