<script lang="ts">
  import { Person, PersonAccount } from '@digitranslab/contact'
  import {
    EmployeePresenter,
    SystemAvatar,
    personAccountByIdStore,
    personByIdStore
  } from '@digitranslab/contact-resources'
  import Avatar from '@digitranslab/contact-resources/src/components/Avatar.svelte'
  import core, { Ref, getDisplayTime } from '@digitranslab/core'
  import { MessageViewer } from '@digitranslab/presentation'
  import { Label } from '@digitranslab/ui'
  import { GithubReviewComment } from '@digitranslab/github'

  export let comment: GithubReviewComment

  $: personAccount = $personAccountByIdStore.get((comment?.createdBy ?? comment?.modifiedBy) as Ref<PersonAccount>)
  $: person = $personByIdStore.get(personAccount?.person as Ref<Person>)
</script>

{#if comment}
  <div>
    <div class="flex-row-center">
      <div class="min-w-6 mt-1">
        {#if $$slots.icon}
          <slot name="icon" />
        {:else if person}
          <Avatar size="tiny" {person} name={person.name} />
        {:else}
          <SystemAvatar size="tiny" />
        {/if}
      </div>
      <div class="header clear-mins flex-row-center">
        {#if person}
          <EmployeePresenter value={person} shouldShowAvatar={false} />
        {:else}
          <div class="strong">
            <Label label={core.string.System} />
          </div>
        {/if}

        <span class="text-sm ml-2">{getDisplayTime(comment.createdOn ?? 0)}</span>
      </div>
    </div>
    <div class="customContent p-2">
      <MessageViewer message={comment.body} />
    </div>
  </div>
{/if}

<style lang="scss">
  .customContent {
    display: flex;
    flex-wrap: wrap;
    column-gap: 0.625rem;
    row-gap: 0.625rem;
  }
</style>
