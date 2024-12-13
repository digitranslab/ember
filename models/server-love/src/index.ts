//
// Copyright © 2024 Digitrans Inc.
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

import contact from '@digitranslab/contact'
import core from '@digitranslab/core'
import { type Builder } from '@digitranslab/model'
import serverCore from '@digitranslab/server-core'
import love from '@digitranslab/love'
import serverLove from '@digitranslab/server-love'
import serverNotification from '@digitranslab/server-notification'

export { serverLoveId } from '@digitranslab/server-love'

export function createModel (builder: Builder): void {
  builder.mixin(love.class.MeetingMinutes, core.class.Class, serverNotification.mixin.HTMLPresenter, {
    presenter: serverLove.function.MeetingMinutesHTMLPresenter
  })

  builder.mixin(love.class.MeetingMinutes, core.class.Class, serverNotification.mixin.TextPresenter, {
    presenter: serverLove.function.MeetingMinutesTextPresenter
  })

  builder.createDoc(serverCore.class.Trigger, core.space.Model, {
    trigger: serverLove.trigger.OnEmployee,
    txMatch: {
      _class: core.class.TxMixin,
      objectClass: contact.class.Person,
      mixin: contact.mixin.Employee,
      'attributes.active': { $exists: true }
    }
  })

  builder.createDoc(serverCore.class.Trigger, core.space.Model, {
    trigger: serverLove.trigger.OnUserStatus,
    txMatch: {
      objectClass: core.class.UserStatus
    },
    isAsync: true
  })

  builder.createDoc(serverCore.class.Trigger, core.space.Model, {
    trigger: serverLove.trigger.OnParticipantInfo,
    txMatch: {
      objectClass: love.class.ParticipantInfo
    }
  })

  builder.createDoc(serverCore.class.Trigger, core.space.Model, {
    trigger: serverLove.trigger.OnKnock,
    txMatch: {
      objectClass: love.class.JoinRequest,
      _class: core.class.TxCreateDoc
    }
  })

  builder.createDoc(serverCore.class.Trigger, core.space.Model, {
    trigger: serverLove.trigger.OnInvite,
    txMatch: {
      objectClass: love.class.Invite,
      _class: core.class.TxCreateDoc
    }
  })
}