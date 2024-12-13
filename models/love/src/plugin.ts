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

import { type Client, type Doc, type Ref } from '@digitranslab/core'
import { type NotificationType, type NotificationGroup } from '@digitranslab/notification'
import { type Resource, mergeIds } from '@digitranslab/platform'
import { type AnyComponent } from '@digitranslab/ui'
import { type ActionCategory, type ViewAction } from '@digitranslab/view'
import { loveId } from '@digitranslab/love'
import love from '@digitranslab/love-resources/src/plugin'

export default mergeIds(loveId, love, {
  component: {
    Main: '' as AnyComponent,
    WorkbenchExtension: '' as AnyComponent,
    Settings: '' as AnyComponent,
    LoveWidget: '' as AnyComponent,
    MeetingWidget: '' as AnyComponent,
    WidgetSwitcher: '' as AnyComponent,
    RoomLanguageEditor: '' as AnyComponent
  },
  app: {
    Love: '' as Ref<Doc>
  },
  category: {
    Office: '' as Ref<ActionCategory>
  },
  actionImpl: {
    ToggleMic: '' as ViewAction,
    ToggleVideo: '' as ViewAction,
    ShowRoomSettings: '' as ViewAction,
    CopyGuestLink: '' as ViewAction
  },
  ids: {
    Settings: '' as Ref<Doc>,
    LoveNotificationGroup: '' as Ref<NotificationGroup>,
    MeetingMinutesChatNotification: '' as Ref<NotificationType>
  },
  function: {
    MeetingMinutesTitleProvider: '' as Resource<(client: Client, ref: Ref<Doc>, doc?: Doc) => Promise<string>>
  }
})