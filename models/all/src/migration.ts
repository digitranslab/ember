//
// Copyright © 2020 Anticrm Platform Contributors.
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

// Import migrate operations.
import { type MigrateOperation } from '@digitranslab/model'
import { activityOperation } from '@digitranslab/model-activity'
import { attachmentOperation } from '@digitranslab/model-attachment'
import { bitrixOperation } from '@digitranslab/model-bitrix'
import { boardOperation } from '@digitranslab/model-board'
import { calendarOperation } from '@digitranslab/model-calendar'
import { chunterOperation } from '@digitranslab/model-chunter'
import { contactOperation } from '@digitranslab/model-contact'
import { coreOperation } from '@digitranslab/model-core'
import { documentOperation } from '@digitranslab/model-document'
import { driveOperation } from '@digitranslab/model-drive'
import { gmailOperation } from '@digitranslab/model-gmail'
import { guestOperation } from '@digitranslab/model-guest'
import { hrOperation } from '@digitranslab/model-hr'
import { inventoryOperation } from '@digitranslab/model-inventory'
import { leadOperation } from '@digitranslab/model-lead'
import { notificationOperation } from '@digitranslab/model-notification'
import { preferenceOperation } from '@digitranslab/model-preference'
import { recruitOperation } from '@digitranslab/model-recruit'
import { activityServerOperation } from '@digitranslab/model-server-activity'
import { settingOperation } from '@digitranslab/model-setting'
import { tagsOperation } from '@digitranslab/model-tags'
import { taskOperation } from '@digitranslab/model-task'
import { telegramOperation } from '@digitranslab/model-telegram'
import { templatesOperation } from '@digitranslab/model-templates'
import { timeOperation } from '@digitranslab/model-time'
import { trackerOperation } from '@digitranslab/model-tracker'
import { viewOperation } from '@digitranslab/model-view'
import { textEditorOperation } from '@digitranslab/model-text-editor'
import { githubOperation, githubOperationPreTime } from '@digitranslab/model-github'
import { loveId, loveOperation } from '@digitranslab/model-love'
import { questionsOperation } from '@digitranslab/model-questions'
import { trainingOperation } from '@digitranslab/model-training'
import { documentsOperation } from '@digitranslab/model-controlled-documents'
import { productsOperation } from '@digitranslab/model-products'
import { requestOperation } from '@digitranslab/model-request'
import { analyticsCollectorOperation } from '@digitranslab/model-analytics-collector'
import { workbenchOperation } from '@digitranslab/model-workbench'
import { testManagementOperation } from '@digitranslab/model-test-management'
import { surveyOperation } from '@digitranslab/model-survey'
import { aiBotId, aiBotOperation } from '@digitranslab/model-ai-bot'

export const migrateOperations: [string, MigrateOperation][] = [
  ['core', coreOperation],
  ['activity', activityOperation],
  ['chunter', chunterOperation],
  ['calendar', calendarOperation],
  ['gmail', gmailOperation],
  ['templates', templatesOperation],
  ['telegram', telegramOperation],
  ['task', taskOperation],
  ['attachment', attachmentOperation],
  ['lead', leadOperation],
  ['preference', preferenceOperation],
  ['recruit', recruitOperation],
  ['view', viewOperation],
  ['contact', contactOperation],
  ['guest', guestOperation],
  ['tags', tagsOperation],
  ['setting', settingOperation],
  ['tracker', trackerOperation],
  ['documents', documentsOperation],
  ['questions', questionsOperation],
  ['training', trainingOperation],
  ['request', requestOperation],
  ['products', productsOperation],
  ['board', boardOperation],
  ['hr', hrOperation],
  ['document', documentOperation],
  ['drive', driveOperation],
  ['bitrix', bitrixOperation],
  ['inventiry', inventoryOperation],
  ['github', githubOperation],
  ['pre-time', githubOperationPreTime],
  ['time', timeOperation],
  [loveId, loveOperation],
  ['activityServer', activityServerOperation],
  ['textEditorOperation', textEditorOperation],
  // We should call notification migration after activityServer and chunter
  ['notification', notificationOperation],
  ['analyticsCollector', analyticsCollectorOperation],
  ['workbench', workbenchOperation],
  ['testManagement', testManagementOperation],
  ['survey', surveyOperation],
  [aiBotId, aiBotOperation]
]
