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

import calendar from '@digitranslab/calendar'
import core, { type Class, type Doc } from '@digitranslab/core'
import serverNotification from '@digitranslab/server-notification'
import serverCalendar from '@digitranslab/server-calendar'
import serverCore, { type ObjectDDParticipant } from '@digitranslab/server-core'
import contact from '@digitranslab/contact'

export { serverCalendarId } from '@digitranslab/server-calendar'

export function createModel (builder: Builder): void {
  builder.mixin(calendar.class.Event, core.class.Class, serverNotification.mixin.HTMLPresenter, {
    presenter: serverCalendar.function.ReminderHTMLPresenter
  })

  builder.mixin(calendar.class.Event, core.class.Class, serverNotification.mixin.TextPresenter, {
    presenter: serverCalendar.function.ReminderTextPresenter
  })

  builder.createDoc(serverCore.class.Trigger, core.space.Model, {
    trigger: serverCalendar.trigger.OnPersonAccountCreate,
    txMatch: {
      _class: core.class.TxCreateDoc,
      objectClass: contact.class.PersonAccount
    }
  })

  builder.createDoc(serverCore.class.Trigger, core.space.Model, {
    trigger: serverCalendar.trigger.OnEvent,
    txMatch: {
      objectClass: calendar.class.Event
    }
  })

  builder.mixin<Class<Doc>, ObjectDDParticipant>(
    core.class.Doc,
    core.class.Class,
    serverCore.mixin.ObjectDDParticipant,
    {
      collectDocs: serverCalendar.function.FindReminders
    }
  )
}
