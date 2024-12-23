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

import { ObjectId } from 'mongodb'
import { Account, Class, Doc, Ref } from '@digitranslab/core'
import { ChatMessage } from '@digitranslab/chunter'

export interface HistoryRecord {
  _id?: ObjectId
  workspace: string
  message: string
  objectId: Ref<Doc>
  objectClass: Ref<Class<Doc>>
  role: string
  user: Ref<Account>
  tokens: number
  timestamp: number
}

export interface AIReplyTransferData {
  messageClass: Ref<Class<ChatMessage>>
  email: string
  fromWorkspace: string
  originalMessageId: Ref<ChatMessage>
  originalParent?: Ref<ChatMessage>
}
