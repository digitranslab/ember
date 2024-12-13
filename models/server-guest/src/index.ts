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

import { type Builder } from '@digitranslab/model'

import core from '@digitranslab/core'
import guest from '@digitranslab/guest'
import serverCore from '@digitranslab/server-core'
import serverGuest from '@digitranslab/server-guest'

export { serverGuestId } from '@digitranslab/server-guest'

export function createModel (builder: Builder): void {
  builder.createDoc(serverCore.class.Trigger, core.space.Model, {
    trigger: serverGuest.trigger.OnPublicLinkCreate,
    txMatch: {
      _class: core.class.TxCreateDoc,
      objectClass: guest.class.PublicLink,
      'attributes.url': ''
    }
  })
}
