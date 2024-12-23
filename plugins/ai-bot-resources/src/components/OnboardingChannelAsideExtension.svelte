<script lang="ts">
  import { ModernButton } from '@digitranslab/ui'
  import aiBot, { OnboardingEvent, type OnboardingEventRequest, OpenChatInSidebarData } from '@digitranslab/ai-bot'
  import { getMetadata } from '@digitranslab/platform'
  import { concatLink } from '@digitranslab/core'
  import presentation from '@digitranslab/presentation'
  import { OnboardingChannel } from '@digitranslab/analytics-collector'
  import chunter from '@digitranslab/chunter'

  export let object: OnboardingChannel

  async function handleClick (): Promise<void> {
    const url = getMetadata(aiBot.metadata.EndpointURL) ?? ''
    const token = getMetadata(presentation.metadata.Token) ?? ''

    if (url === '' || token === '') {
      return undefined
    }

    try {
      const req: OnboardingEventRequest<OpenChatInSidebarData> = {
        event: OnboardingEvent.OpenChatInSidebar,
        data: {
          email: object.email,
          workspace: object.workspaceId
        }
      }
      await fetch(concatLink(url, '/onboarding'), {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
      })
    } catch (error) {
      console.error(error)
      return undefined
    }
  }
</script>

<div class="root">
  <ModernButton label={chunter.string.OpenChatInSidebar} size="small" on:click={handleClick} />
</div>

<style lang="scss">
  .root {
    padding: var(--spacing-1) var(--spacing-2);
  }
</style>
