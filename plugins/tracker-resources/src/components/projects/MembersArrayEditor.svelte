<script lang="ts">
  import { AccountArrayEditor } from '@digitranslab/contact-resources'
  import contact from '@digitranslab/contact-resources/src/plugin'
  import { getClient } from '@digitranslab/presentation'
  import { Project } from '@digitranslab/tracker'
  export let value: Project
</script>

<AccountArrayEditor
  label={contact.string.Members}
  value={value.members}
  onChange={(evt) => {
    void getClient().diffUpdate(value, { members: evt })
  }}
/>
