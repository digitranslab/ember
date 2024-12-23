//
// Copyright © 2020, 2021 Anticrm Platform Contributors.
//
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

import { ChannelItem } from '@digitranslab/contact'
import type { Account, AttachedDoc, Class, Doc, Ref, Timestamp } from '@digitranslab/core'
import { NotificationProvider, NotificationType } from '@digitranslab/notification'
import type { IntlString, Metadata, Plugin } from '@digitranslab/platform'
import { plugin } from '@digitranslab/platform'
import type { Handler, IntegrationType } from '@digitranslab/setting'
import type { AnyComponent } from '@digitranslab/ui'

/**
 * @public
 */
export interface Message extends BaseMessage, ChannelItem {
  messageId: string
  from: string
  textContent: string
}

/**
 * @public
 */
export interface BaseMessage extends Doc {
  replyTo?: string
  to: string
  subject: string
  content: string
  copy?: string[]
  attachments?: number
}

/**
 * @public
 */
export interface NewMessage extends BaseMessage {
  status: 'new' | 'sent' | 'error'
  error?: string
  from?: Ref<Account>
}

export * from './analytics'

/**
 * @public
 */
export interface SharedMessage extends Doc {
  messageId: string
  subject: string
  content: string
  sender: string
  receiver: string
  incoming: boolean
  textContent: string
  attachments?: number
  copy?: string[]
  sendOn: Timestamp
}

/**
 * @public
 */
export interface SharedMessages extends AttachedDoc {
  messages: SharedMessage[]
}

/**
 * @public
 */
export const gmailId = 'gmail' as Plugin

export default plugin(gmailId, {
  component: {
    Main: '' as AnyComponent,
    Connect: '' as AnyComponent,
    IconGmail: '' as AnyComponent,
    NewMessages: '' as AnyComponent,
    Configure: '' as AnyComponent
  },
  string: {
    From: '' as IntlString,
    To: '' as IntlString,
    EmailNotificationsDescription: '' as IntlString
  },
  integrationType: {
    Gmail: '' as Ref<IntegrationType>
  },
  handler: {
    DisconnectHandler: '' as Handler
  },
  class: {
    Message: '' as Ref<Class<Message>>,
    NewMessage: '' as Ref<Class<NewMessage>>,
    SharedMessages: '' as Ref<Class<SharedMessages>>,
    SharedMessage: '' as Ref<Class<SharedMessage>>
  },
  ids: {
    EmailNotification: '' as Ref<NotificationType>
  },
  metadata: {
    GmailURL: '' as Metadata<string>
  },
  providers: {
    EmailNotificationProvider: '' as Ref<NotificationProvider>
  }
})
