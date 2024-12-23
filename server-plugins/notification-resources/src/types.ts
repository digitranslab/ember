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
import { BaseNotificationType, DocNotifyContext, NotificationProvider } from '@digitranslab/notification'
import { Ref } from '@digitranslab/core'

/**
 * @public
 */
export interface Content {
  text: string
  html: string
  subject: string
}

/**
 * @public
 */
export type NotifyResult = Map<Ref<NotificationProvider>, BaseNotificationType[]>

export interface NotifyParams {
  isOwn: boolean
  isSpace: boolean
  shouldUpdateTimestamp: boolean
}

export const ContextsCacheKey = 'DocNotifyContexts'
export interface ContextsCache {
  contexts: Map<string, Ref<DocNotifyContext>>
}
