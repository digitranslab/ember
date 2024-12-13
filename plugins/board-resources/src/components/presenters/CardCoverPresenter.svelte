<script lang="ts">
  import { CardCover } from '@digitranslab/board'

  import ColorPresenter from './ColorPresenter.svelte'
  export let value: CardCover
</script>

<ColorPresenter value={value.color} size={value.size} on:click />
