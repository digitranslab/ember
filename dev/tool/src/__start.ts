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

import { prepareTools as prepareToolsRaw } from '@digitranslab/server-tool'

import { type Data, type Tx, type Version } from '@digitranslab/core'
import { type MigrateOperation } from '@digitranslab/model'
import builder, { getModelVersion, migrateOperations } from '@digitranslab/model-all'
import { devTool } from '.'

import { addLocation } from '@digitranslab/platform'
import { serverActivityId } from '@digitranslab/server-activity'
import { serverAttachmentId } from '@digitranslab/server-attachment'
import { serverCalendarId } from '@digitranslab/server-calendar'
import { serverChunterId } from '@digitranslab/server-chunter'
import { serverCollaborationId } from '@digitranslab/server-collaboration'
import { serverContactId } from '@digitranslab/server-contact'
import { serverDriveId } from '@digitranslab/server-drive'
import { serverDocumentId } from '@digitranslab/server-document'
import { serverGmailId } from '@digitranslab/server-gmail'
import { serverGuestId } from '@digitranslab/server-guest'
import { serverHrId } from '@digitranslab/server-hr'
import { serverInventoryId } from '@digitranslab/server-inventory'
import { serverLeadId } from '@digitranslab/server-lead'
import { serverNotificationId } from '@digitranslab/server-notification'
import { serverRecruitId } from '@digitranslab/server-recruit'
import { serverRequestId } from '@digitranslab/server-request'
import { serverSettingId } from '@digitranslab/server-setting'
import { serverTagsId } from '@digitranslab/server-tags'
import { serverTaskId } from '@digitranslab/server-task'
import { serverTelegramId } from '@digitranslab/server-telegram'
import { serverTimeId } from '@digitranslab/server-time'
import { serverTrackerId } from '@digitranslab/server-tracker'
import { serverViewId } from '@digitranslab/server-view'
import { serverAiBotId } from '@digitranslab/server-ai-bot'

addLocation(serverActivityId, () => import('@digitranslab/server-activity-resources'))
addLocation(serverAttachmentId, () => import('@digitranslab/server-attachment-resources'))
addLocation(serverCollaborationId, () => import('@digitranslab/server-collaboration-resources'))
addLocation(serverContactId, () => import('@digitranslab/server-contact-resources'))
addLocation(serverNotificationId, () => import('@digitranslab/server-notification-resources'))
addLocation(serverChunterId, () => import('@digitranslab/server-chunter-resources'))
addLocation(serverInventoryId, () => import('@digitranslab/server-inventory-resources'))
addLocation(serverLeadId, () => import('@digitranslab/server-lead-resources'))
addLocation(serverRecruitId, () => import('@digitranslab/server-recruit-resources'))
addLocation(serverSettingId, () => import('@digitranslab/server-setting-resources'))
addLocation(serverTaskId, () => import('@digitranslab/server-task-resources'))
addLocation(serverTrackerId, () => import('@digitranslab/server-tracker-resources'))
addLocation(serverTagsId, () => import('@digitranslab/server-tags-resources'))
addLocation(serverCalendarId, () => import('@digitranslab/server-calendar-resources'))
addLocation(serverGmailId, () => import('@digitranslab/server-gmail-resources'))
addLocation(serverTelegramId, () => import('@digitranslab/server-telegram-resources'))
addLocation(serverHrId, () => import('@digitranslab/server-hr-resources'))
addLocation(serverRequestId, () => import('@digitranslab/server-request-resources'))
addLocation(serverViewId, () => import('@digitranslab/server-view-resources'))
addLocation(serverDocumentId, () => import('@digitranslab/server-document-resources'))
addLocation(serverTimeId, () => import('@digitranslab/server-time-resources'))
addLocation(serverGuestId, () => import('@digitranslab/server-guest-resources'))
addLocation(serverDriveId, () => import('@digitranslab/server-drive-resources'))
addLocation(serverAiBotId, () => import('@digitranslab/server-ai-bot-resources'))

function prepareTools (): {
  dbUrl: string
  txes: Tx[]
  version: Data<Version>
  migrateOperations: [string, MigrateOperation][]
} {
  const enabled = (process.env.MODEL_ENABLED ?? '*').split(',').map((it) => it.trim())
  const disabled = (process.env.MODEL_DISABLED ?? '').split(',').map((it) => it.trim())

  return { ...prepareToolsRaw(builder(enabled, disabled).getTxes()), version: getModelVersion(), migrateOperations }
}

export function getMongoDBUrl (): string {
  const url = process.env.MONGO_URL
  if (url === undefined) {
    console.error('please provide mongo DB URL')
    process.exit(1)
  }
  return url
}

export function getAccountDBUrl (): string {
  const url = process.env.ACCOUNT_DB_URL
  if (url === undefined) {
    console.error('please provide mongo ACCOUNT_DB_URL')
    process.exit(1)
  }
  return url
}

devTool(prepareTools)
