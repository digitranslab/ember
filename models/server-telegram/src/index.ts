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
import serverCore, { type ObjectDDParticipant } from '@digitranslab/server-core'
import serverTelegram from '@digitranslab/server-telegram'
import telegram from '@digitranslab/telegram'
import notification from '@digitranslab/notification'
import serverNotification from '@digitranslab/server-notification'
import serverTemplates from '@digitranslab/server-templates'
import templates from '@digitranslab/templates'

export { serverTelegramId } from '@digitranslab/server-telegram'

export function createModel (builder: Builder): void {
  builder.mixin<Class<Doc>, ObjectDDParticipant>(
    contact.class.Channel,
    core.class.Class,
    serverCore.mixin.ObjectDDParticipant,
    {
      collectDocs: serverTelegram.function.FindMessages
    }
  )

  builder.createDoc(serverNotification.class.NotificationProviderResources, core.space.Model, {
    provider: telegram.providers.TelegramNotificationProvider,
    fn: serverTelegram.function.SendTelegramNotifications
  })

  builder.createDoc(serverCore.class.Trigger, core.space.Model, {
    trigger: serverTelegram.trigger.OnMessageCreate,
    txMatch: {
      _class: core.class.TxCreateDoc,
      objectClass: telegram.class.Message
    }
  })

  builder.mixin(
    telegram.ids.NewMessageNotification,
    notification.class.NotificationType,
    serverNotification.mixin.TypeMatch,
    {
      func: serverTelegram.function.IsIncomingMessageTypeMatch
    }
  )

  builder.mixin(
    telegram.templateField.CurrentEmployeeTelegram,
    templates.class.TemplateField,
    serverTemplates.mixin.ServerTemplateField,
    {
      serverFunc: serverTelegram.function.GetCurrentEmployeeTG
    }
  )

  builder.mixin(
    telegram.templateField.IntegrationOwnerTG,
    templates.class.TemplateField,
    serverTemplates.mixin.ServerTemplateField,
    {
      serverFunc: serverTelegram.function.GetIntegrationOwnerTG
    }
  )
}
