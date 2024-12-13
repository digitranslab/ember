//
// Copyright © 2022 Digitrans Inc.
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

import { type Builder } from '@digitranslab/model'

import contact from '@digitranslab/contact'
import core, { type Class, type Doc } from '@digitranslab/core'
import gmail from '@digitranslab/gmail'
import notification from '@digitranslab/notification'
import serverCore, { type ObjectDDParticipant } from '@digitranslab/server-core'
import serverGmail from '@digitranslab/server-gmail'
import serverNotification from '@digitranslab/server-notification'
export { serverGmailId } from '@digitranslab/server-gmail'

export function createModel (builder: Builder): void {
  builder.mixin<Class<Doc>, ObjectDDParticipant>(
    contact.class.Channel,
    core.class.Class,
    serverCore.mixin.ObjectDDParticipant,
    {
      collectDocs: serverGmail.function.FindMessages
    }
  )

  builder.createDoc(serverNotification.class.NotificationProviderResources, core.space.Model, {
    provider: gmail.providers.EmailNotificationProvider,
    fn: serverGmail.function.SendEmailNotifications
  })

  builder.createDoc(serverCore.class.Trigger, core.space.Model, {
    trigger: serverGmail.trigger.OnMessageCreate,
    txMatch: {
      _class: core.class.TxCreateDoc,
      objectClass: gmail.class.Message
    }
  })

  builder.mixin(gmail.ids.EmailNotification, notification.class.NotificationType, serverNotification.mixin.TypeMatch, {
    func: serverGmail.function.IsIncomingMessageTypeMatch
  })
}
