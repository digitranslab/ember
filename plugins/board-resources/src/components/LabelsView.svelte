<script lang="ts">
  import tags from '@digitranslab/tags'
  import { Component } from '@digitranslab/ui'
  import board from '../plugin'
</script>

<Component
  is={tags.component.TagsView}
  props={{
    targetClass: board.class.Card,
    title: board.string.Labels,
    icon: tags.icon.Tags,
    item: board.string.Labels,
    key: 'labels',
    сreateItemLabel: board.string.Labels
  }}
/>
