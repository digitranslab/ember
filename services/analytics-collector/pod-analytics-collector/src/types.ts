import { ChatMessage, InlineButton, Channel } from '@digitranslab/chunter'
import { Ref } from '@digitranslab/core'
import { OnboardingChannel } from '@digitranslab/analytics-collector'

export interface Action {
  _id: Ref<InlineButton>
  name: string
  messageId: Ref<ChatMessage>
  channelId: Ref<Channel>
}

export enum MessageActions {
  Accept = 'accept'
}

export interface OnboardingMessage {
  messageId: Ref<ChatMessage>
  channelId: Ref<OnboardingChannel>
}
