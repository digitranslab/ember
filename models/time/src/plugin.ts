//
// Copyright © 2023 Digitrans Inc.
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
import { type Application } from '@digitranslab/model-workbench'
import { type IntlString, mergeIds, type Resource } from '@digitranslab/platform'
import type { AnyComponent } from '@digitranslab/ui'
import { type Action, type ActionCategory } from '@digitranslab/view'
import { timeId } from '@digitranslab/time'
import time from '@digitranslab/time-resources/src/plugin'
import { type NotificationGroup, type NotificationType } from '@digitranslab/notification'
import { type ExtensionCreator } from '@digitranslab/text-editor'

export default mergeIds(timeId, time, {
  action: {
    EditToDo: '' as Ref<Action<Doc, any>>,
    CreateToDo: '' as Ref<Action<Doc, any>>,
    DeleteToDo: '' as Ref<Action<Doc, any>>,
    CreateToDoGlobal: '' as Ref<Action<Doc, any>>
  },
  string: {
    EditToDo: '' as IntlString,
    GotoTimePlaning: '' as IntlString,
    GotoTimeTeamPlaning: '' as IntlString,
    Priority: '' as IntlString,
    MarkedAsDone: '' as IntlString
  },
  category: {
    Time: '' as Ref<ActionCategory>
  },
  component: {
    IssuePresenter: '' as AnyComponent,
    DocumentPresenter: '' as AnyComponent,
    ApplicantPresenter: '' as AnyComponent,
    CardPresenter: '' as AnyComponent,
    LeadPresenter: '' as AnyComponent,
    WorkSlotElement: '' as AnyComponent,
    EditWorkSlot: '' as AnyComponent,
    CreateToDoPopup: '' as AnyComponent,
    NotificationToDoPresenter: '' as AnyComponent,
    PriorityEditor: '' as AnyComponent
  },
  app: {
    Me: '' as Ref<Application>,
    Team: '' as Ref<Application>
  },
  ids: {
    TimeNotificationGroup: '' as Ref<NotificationGroup>,
    ToDoCreated: '' as Ref<NotificationType>
  },
  function: {
    ToDoTitleProvider: '' as Resource<(client: Client, ref: Ref<Doc>, doc?: Doc) => Promise<string>>,
    CreateTodoItemExtension: '' as Resource<ExtensionCreator>,
    CreateTodoListExtension: '' as Resource<ExtensionCreator>
  }
})
