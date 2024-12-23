<script lang="ts">
  import { type Drawing } from '@digitranslab/attachment'
  import core, { DateRangeMode } from '@digitranslab/core'
  import { DatePresenter, IconScribble } from '@digitranslab/ui'
  import { ObjectPresenter } from '@digitranslab/view-resources'

  export let value: Drawing
</script>

<div class="flex-presenter flex-gap-3">
  <DatePresenter value={value.createdOn} mode={DateRangeMode.DATETIME} kind="list" icon={IconScribble} />
  <ObjectPresenter objectId={value.createdBy} _class={core.class.Account} shouldShowName={false} />
</div>
