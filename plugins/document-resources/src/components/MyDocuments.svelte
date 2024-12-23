<script lang="ts">
  import { Employee, PersonAccount } from '@digitranslab/contact'
  import { Ref, getCurrentAccount } from '@digitranslab/core'
  import Documents from './Documents.svelte'

  const currentUser = (getCurrentAccount() as PersonAccount).person as Ref<Employee>
</script>

<Documents query={{ authors: currentUser }} />
