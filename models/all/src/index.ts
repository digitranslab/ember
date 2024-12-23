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

import core, { coreId, type Data, type PluginConfiguration, type Ref, type Tx, type Version } from '@digitranslab/core'

import { Builder } from '@digitranslab/model'
import { activityId, createModel as activityModel } from '@digitranslab/model-activity'
import { attachmentId, createModel as attachmentModel } from '@digitranslab/model-attachment'
import bitrix, { bitrixId, createModel as bitrixModel } from '@digitranslab/model-bitrix'
import board, { boardId, createModel as boardModel } from '@digitranslab/model-board'
import calendar, { calendarId, createModel as calendarModel } from '@digitranslab/model-calendar'
import chunter, { chunterId, createModel as chunterModel } from '@digitranslab/model-chunter'
import contact, { contactId, createModel as contactModel } from '@digitranslab/model-contact'
import { createModel as coreModel } from '@digitranslab/model-core'
import gmail, { gmailId, createModel as gmailModel } from '@digitranslab/model-gmail'
import { guestId, createModel as guestModel } from '@digitranslab/model-guest'
import hr, { hrId, createModel as hrModel } from '@digitranslab/model-hr'
import inventory, { inventoryId, createModel as inventoryModel } from '@digitranslab/model-inventory'
import lead, { leadId, createModel as leadModel } from '@digitranslab/model-lead'
import notification, { notificationId, createModel as notificationModel } from '@digitranslab/model-notification'
import { preferenceId, createModel as preferenceModel } from '@digitranslab/model-preference'
import presentation, { presentationId, createModel as presentationModel } from '@digitranslab/model-presentation'
import recruit, { recruitId, createModel as recruitModel } from '@digitranslab/model-recruit'
import { requestId, createModel as requestModel } from '@digitranslab/model-request'
import { aiBotId, createModel as aiBotModel } from '@digitranslab/model-ai-bot'
import { serverActivityId, createModel as serverActivityModel } from '@digitranslab/model-server-activity'
import { serverAttachmentId, createModel as serverAttachmentModel } from '@digitranslab/model-server-attachment'
import { serverCalendarId, createModel as serverCalendarModel } from '@digitranslab/model-server-calendar'
import { serverChunterId, createModel as serverChunterModel } from '@digitranslab/model-server-chunter'
import {
  serverCollaborationId,
  createModel as serverCollaborationModel
} from '@digitranslab/model-server-collaboration'
import { serverContactId, createModel as serverContactModel } from '@digitranslab/model-server-contact'
import { serverCoreId, createModel as serverCoreModel } from '@digitranslab/model-server-core'
import { serverDriveId, createModel as serverDriveModel } from '@digitranslab/model-server-drive'
import { serverGmailId, createModel as serverGmailModel } from '@digitranslab/model-server-gmail'
import { serverGuestId, createModel as serverGuestModel } from '@digitranslab/model-server-guest'
import { serverHrId, createModel as serverHrModel } from '@digitranslab/model-server-hr'
import { serverInventoryId, createModel as serverInventoryModel } from '@digitranslab/model-server-inventory'
import { serverLeadId, createModel as serverLeadModel } from '@digitranslab/model-server-lead'
import { serverNotificationId, createModel as serverNotificationModel } from '@digitranslab/model-server-notification'
import { serverRecruitId, createModel as serverRecruitModel } from '@digitranslab/model-server-recruit'
import { serverRequestId, createModel as serverRequestModel } from '@digitranslab/model-server-request'
import { serverSettingId, createModel as serveSettingModel } from '@digitranslab/model-server-setting'
import { serverTagsId, createModel as serverTagsModel } from '@digitranslab/model-server-tags'
import { serverTaskId, createModel as serverTaskModel } from '@digitranslab/model-server-task'
import { serverTelegramId, createModel as serverTelegramModel } from '@digitranslab/model-server-telegram'
import { serverTemplatesId, createModel as serverTemplatesModel } from '@digitranslab/model-server-templates'
import { serverTrackerId, createModel as serverTrackerModel } from '@digitranslab/model-server-tracker'
import { serverViewId, createModel as serverViewModel } from '@digitranslab/model-server-view'
import { serverAiBotId, createModel as serverAiBotModel } from '@digitranslab/model-server-ai-bot'
import setting, { settingId, createModel as settingModel } from '@digitranslab/model-setting'
import { driveId, createModel as driveModel } from '@digitranslab/model-drive'
import { supportId, createModel as supportModel } from '@digitranslab/model-support'
import { tagsId, createModel as tagsModel } from '@digitranslab/model-tags'
import { taskId, createModel as taskModel } from '@digitranslab/model-task'
import telegram, { telegramId, createModel as telegramModel } from '@digitranslab/model-telegram'
import { templatesId, createModel as templatesModel } from '@digitranslab/model-templates'
import { textEditorId, createModel as textEditorModel } from '@digitranslab/model-text-editor'
import { timeId, createModel as timeModel } from '@digitranslab/model-time'
import tracker, { trackerId, createModel as trackerModel } from '@digitranslab/model-tracker'
import { uploaderId, createModel as uploaderModel } from '@digitranslab/model-uploader'
import view, { viewId, createModel as viewModel } from '@digitranslab/model-view'
import workbench, { workbenchId, createModel as workbenchModel } from '@digitranslab/model-workbench'
import { desktopPreferencesId, createModel as desktopPreferencesModel } from '@digitranslab/model-desktop-preferences'

import document, { documentId, createModel as documentModel } from '@digitranslab/model-document'
import { serverDocumentId, createModel as serverDocumentModel } from '@digitranslab/model-server-document'

import github, { githubId, createModel as githubModel } from '@digitranslab/model-github'
import { serverGithubId, createModel as serverGithubModel } from '@digitranslab/server-github-model'

import { serverTimeId, createModel as serverTimeModel } from '@digitranslab/model-server-time'
import love, { loveId, createModel as loveModel } from '@digitranslab/model-love'
import { printId, createModel as printModel } from '@digitranslab/model-print'
import { analyticsCollectorId, createModel as analyticsCollectorModel } from '@digitranslab/model-analytics-collector'
import { serverLoveId, createModel as serverLoveModel } from '@digitranslab/model-server-love'

import { questionsId, createModel as questionsModel } from '@digitranslab/model-questions'
import trainings, { trainingId, createModel as trainingModel } from '@digitranslab/model-training'
import documents, { documentsId, createModel as documentsModel } from '@digitranslab/model-controlled-documents'
import products, { productsId, createModel as productsModel } from '@digitranslab/model-products'
import { serverProductsId, createModel as serverProductsModel } from '@digitranslab/model-server-products'
import { serverTrainingId, createModel as serverTrainingModel } from '@digitranslab/model-server-training'
import testManagement, {
  testManagementId,
  createModel as testManagementModel
} from '@digitranslab/model-test-management'

import {
  serverDocumentsId,
  createModel as serverDocumentsModel
} from '@digitranslab/model-server-controlled-documents'
import { serverFulltextId, createModel as serverFulltextModel } from '@digitranslab/model-server-fulltext'
import { surveyId, createModel as surveyModel } from '@digitranslab/model-survey'

import { type Plugin } from '@digitranslab/platform'

interface ConfigurablePlugin extends Omit<Data<PluginConfiguration>, 'pluginId' | 'transactions'> {}

type BuilderConfig = [(b: Builder) => void, Plugin] | [(b: Builder) => void, Plugin, ConfigurablePlugin | undefined]

export function getModelVersion (): Data<Version> {
  const rawVersion = (process.env.MODEL_VERSION ?? '0.6.0').replace('"', '').trim().replace('v', '').split('.')
  if (rawVersion.length === 3) {
    return {
      major: parseInt(rawVersion[0]),
      minor: parseInt(rawVersion[1]),
      patch: parseInt(rawVersion[2])
    }
  }
  return { major: 0, minor: 6, patch: 0 }
}

export type { MigrateOperation } from '@digitranslab/model'

/**
 * @public
 * @param enabled - a set of enabled plugins
 * @param disabled  - a set of disabled plugins
 * @returns
 */
export default function buildModel (enabled: string[] = ['*'], disabled: string[] = []): Builder {
  const builder = new Builder()

  const defaultFilter = [
    workbench.class.Application,
    presentation.class.ComponentPointExtension,
    presentation.class.ObjectSearchCategory,
    notification.class.NotificationGroup,
    view.class.Action,
    contact.class.ChannelProvider,
    setting.class.IntegrationType
  ]

  const builders: BuilderConfig[] = [
    [coreModel, coreId],
    [activityModel, activityId],
    [attachmentModel, attachmentId],
    [guestModel, guestId],
    [tagsModel, tagsId],
    [viewModel, viewId],
    [workbenchModel, workbenchId],
    [
      contactModel,
      contactId,
      {
        label: contact.string.ConfigLabel,
        description: contact.string.ConfigDescription,
        enabled: true,
        beta: false,
        icon: contact.icon.ContactApplication,
        classFilter: defaultFilter
      }
    ],
    [
      chunterModel,
      chunterId,
      {
        label: chunter.string.ConfigLabel,
        description: chunter.string.ConfigDescription,
        enabled: true,
        beta: false,
        icon: chunter.icon.Chunter,
        classFilter: [workbench.class.Application]
      }
    ],
    [taskModel, taskId],
    [
      calendarModel,
      calendarId,
      {
        label: calendar.string.ConfigLabel,
        description: calendar.string.ConfigDescription,
        enabled: true,
        beta: true,
        icon: calendar.icon.Calendar,
        classFilter: defaultFilter
      }
    ],
    [
      recruitModel,
      recruitId,
      {
        label: recruit.string.ConfigLabel,
        description: recruit.string.ConfigDescription,
        enabled: true,
        beta: false,
        icon: recruit.icon.RecruitApplication,
        classFilter: defaultFilter
      }
    ],
    [settingModel, settingId],
    [
      telegramModel,
      telegramId,
      {
        label: telegram.string.ConfigLabel,
        description: telegram.string.ConfigDescription,
        enabled: true,
        beta: false,
        classFilter: defaultFilter
      }
    ],
    [
      leadModel,
      leadId,
      {
        label: lead.string.ConfigLabel,
        description: lead.string.ConfigDescription,
        enabled: false,
        beta: true,
        icon: lead.icon.LeadApplication,
        classFilter: defaultFilter
      }
    ],
    [
      gmailModel,
      gmailId,
      {
        label: gmail.string.ConfigLabel,
        description: gmail.string.ConfigDescription,
        enabled: true,
        beta: false,
        classFilter: defaultFilter
      }
    ],
    [
      inventoryModel,
      inventoryId,
      {
        label: inventory.string.ConfigLabel,
        description: inventory.string.ConfigDescription,
        enabled: false,
        beta: true,
        icon: inventory.icon.InventoryApplication,
        classFilter: defaultFilter
      }
    ],
    [presentationModel, presentationId],
    [templatesModel, templatesId],
    [textEditorModel, textEditorId],
    [uploaderModel, uploaderId],
    [notificationModel, notificationId],
    [preferenceModel, preferenceId],
    [
      analyticsCollectorModel,
      analyticsCollectorId,
      {
        label: inventory.string.ConfigLabel,
        description: inventory.string.ConfigDescription,
        enabled: true,
        beta: false,
        classFilter: defaultFilter
      }
    ],
    [
      hrModel,
      hrId,
      {
        label: hr.string.ConfigLabel,
        description: hr.string.ConfigDescription,
        enabled: true,
        beta: false,
        icon: hr.icon.Structure,
        classFilter: defaultFilter
      }
    ],
    [
      trackerModel,
      trackerId,
      {
        label: tracker.string.ConfigLabel,
        description: tracker.string.ConfigDescription,
        enabled: true,
        beta: false,
        icon: tracker.icon.TrackerApplication,
        classFilter: defaultFilter
      }
    ],
    [
      documentModel,
      documentId,
      {
        label: document.string.ConfigLabel,
        description: document.string.ConfigDescription,
        enabled: true,
        beta: false,
        icon: document.icon.DocumentApplication,
        classFilter: defaultFilter
      }
    ],
    [
      boardModel,
      boardId,
      {
        label: board.string.ConfigLabel,
        description: board.string.ConfigDescription,
        enabled: false,
        beta: true,
        icon: board.icon.Board,
        classFilter: defaultFilter
      }
    ],
    [
      bitrixModel,
      bitrixId,
      {
        label: bitrix.string.ConfigLabel,
        description: bitrix.string.ConfigDescription,
        enabled: false,
        beta: true,
        icon: bitrix.icon.Bitrix,
        classFilter: defaultFilter
      }
    ],
    [
      requestModel,
      requestId,
      {
        // label: request.string.ConfigLabel,
        // description: request.string.ConfigDescription,
        enabled: false,
        beta: false,
        classFilter: defaultFilter
      }
    ],
    [timeModel, timeId],
    [supportModel, supportId],
    [desktopPreferencesModel, desktopPreferencesId],

    [
      githubModel,
      githubId,
      {
        label: github.string.ConfigLabel,
        description: github.string.ConfigDescription,
        enabled: true,
        beta: false,
        icon: github.icon.Github
      }
    ],
    [
      loveModel,
      loveId,
      {
        label: love.string.Office,
        description: love.string.LoveDescription,
        enabled: true,
        beta: true,
        icon: love.icon.Love,
        classFilter: defaultFilter
      }
    ],
    [printModel, printId],
    [aiBotModel, aiBotId],
    [driveModel, driveId],
    [
      documentsModel,
      documentsId,
      {
        label: documents.string.ConfigLabel,
        description: documents.string.ConfigDescription,
        enabled: false,
        beta: false,
        classFilter: defaultFilter
      }
    ],
    [
      questionsModel,
      questionsId,
      {
        enabled: false,
        beta: false,
        classFilter: defaultFilter
      }
    ],
    [
      trainingModel,
      trainingId,
      {
        label: trainings.string.ConfigLabel,
        description: trainings.string.ConfigDescription,
        enabled: false,
        beta: false,
        classFilter: defaultFilter
      }
    ],
    [
      productsModel,
      productsId,
      {
        label: products.string.ConfigLabel,
        description: products.string.ConfigDescription,
        enabled: false,
        beta: false,
        classFilter: defaultFilter
      }
    ],
    [
      testManagementModel,
      testManagementId,
      {
        label: testManagement.string.ConfigLabel,
        description: testManagement.string.ConfigDescription,
        enabled: true,
        beta: true,
        classFilter: defaultFilter
      }
    ],
    [surveyModel, surveyId],

    [serverCoreModel, serverCoreId],
    [serverAttachmentModel, serverAttachmentId],
    [serverCollaborationModel, serverCollaborationId],
    [serverContactModel, serverContactId],
    [serveSettingModel, serverSettingId],
    [serverChunterModel, serverChunterId],
    [serverInventoryModel, serverInventoryId],
    [serverLeadModel, serverLeadId],
    [serverTagsModel, serverTagsId],
    [serverTaskModel, serverTaskId],
    [serverTrackerModel, serverTrackerId],
    [serverCalendarModel, serverCalendarId],
    [serverRecruitModel, serverRecruitId],
    [serverGmailModel, serverGmailId],
    [serverTemplatesModel, serverTemplatesId],
    [serverTelegramModel, serverTelegramId],
    [serverHrModel, serverHrId],
    [serverNotificationModel, serverNotificationId],
    [serverRequestModel, serverRequestId],
    [serverViewModel, serverViewId],
    [serverActivityModel, serverActivityId],
    [serverDocumentModel, serverDocumentId],
    [serverGithubModel, serverGithubId],
    [serverLoveModel, serverLoveId],
    [serverTimeModel, serverTimeId],
    [serverGuestModel, serverGuestId],
    [serverDriveModel, serverDriveId],
    [serverProductsModel, serverProductsId],
    [serverTrainingModel, serverTrainingId],
    [serverDocumentsModel, serverDocumentsId],
    [serverAiBotModel, serverAiBotId],
    [serverFulltextModel, serverFulltextId]
  ]

  for (const [b, id, config] of builders) {
    const txes: Tx[] = []
    builder.onTx = (tx) => {
      txes.push(tx)
    }
    b(builder)
    builder.createDoc(
      core.class.PluginConfiguration,
      core.space.Model,
      {
        pluginId: id,
        transactions: txes.map((it) => it._id),
        ...config,
        enabled:
          config?.label === undefined ||
          ((config?.enabled ?? true) && (enabled.includes(id) || enabled.includes('*')) && !disabled.includes(id)),
        beta: config?.beta ?? false
      },
      ('plugin-configuration-' + id) as Ref<PluginConfiguration>
    )
    builder.onTx = undefined
  }

  builder.createDoc(core.class.Version, core.space.Model, getModelVersion(), core.version.Model)
  return builder
}

// Export upgrade procedures
export { migrateOperations } from './migration'
