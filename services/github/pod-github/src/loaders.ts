import { coreId } from '@digitranslab/core'

import { activityId } from '@digitranslab/activity'
import { attachmentId } from '@digitranslab/attachment'
import { bitrixId } from '@digitranslab/bitrix'
import { boardId } from '@digitranslab/board'
import { calendarId } from '@digitranslab/calendar'
import { chunterId } from '@digitranslab/chunter'
import { contactId } from '@digitranslab/contact'
import { driveId } from '@digitranslab/drive'
import { gmailId } from '@digitranslab/gmail'
import { hrId } from '@digitranslab/hr'
import { inventoryId } from '@digitranslab/inventory'
import { leadId } from '@digitranslab/lead'
import { loginId } from '@digitranslab/login'
import { notificationId } from '@digitranslab/notification'
import { preferenceId } from '@digitranslab/preference'
import { recruitId } from '@digitranslab/recruit'
import { requestId } from '@digitranslab/request'
import { settingId } from '@digitranslab/setting'
import { supportId } from '@digitranslab/support'
import { tagsId } from '@digitranslab/tags'
import { taskId } from '@digitranslab/task'
import { telegramId } from '@digitranslab/telegram'
import { templatesId } from '@digitranslab/templates'
import { trackerId } from '@digitranslab/tracker'
import { viewId } from '@digitranslab/view'
import { workbenchId } from '@digitranslab/workbench'
import { documentId } from '@digitranslab/document'
import { githubId } from '@digitranslab/github'

import activityEn from '@digitranslab/activity-assets/lang/en.json'
import attachmentEn from '@digitranslab/attachment-assets/lang/en.json'
import bitrixEn from '@digitranslab/bitrix-assets/lang/en.json'
import boardEn from '@digitranslab/board-assets/lang/en.json'
import calendarEn from '@digitranslab/calendar-assets/lang/en.json'
import chunterEn from '@digitranslab/chunter-assets/lang/en.json'
import contactEn from '@digitranslab/contact-assets/lang/en.json'
import coreEng from '@digitranslab/core/lang/en.json'
import driveEn from '@digitranslab/drive-assets/lang/en.json'
import gmailEn from '@digitranslab/gmail-assets/lang/en.json'
import hrEn from '@digitranslab/hr-assets/lang/en.json'
import inventoryEn from '@digitranslab/inventory-assets/lang/en.json'
import leadEn from '@digitranslab/lead-assets/lang/en.json'
import loginEng from '@digitranslab/login-assets/lang/en.json'
import platformEng from '@digitranslab/platform/lang/en.json'
import notificationEn from '@digitranslab/notification-assets/lang/en.json'
import { addStringsLoader, platformId } from '@digitranslab/platform'
import preferenceEn from '@digitranslab/preference-assets/lang/en.json'
import recruitEn from '@digitranslab/recruit-assets/lang/en.json'
import requestEn from '@digitranslab/request-assets/lang/en.json'
import settingEn from '@digitranslab/setting-assets/lang/en.json'
import supportEn from '@digitranslab/support-assets/lang/en.json'
import tagsEn from '@digitranslab/tags-assets/lang/en.json'
import taskEn from '@digitranslab/task-assets/lang/en.json'
import telegramEn from '@digitranslab/telegram-assets/lang/en.json'
import templatesEn from '@digitranslab/templates-assets/lang/en.json'
import trackerEn from '@digitranslab/tracker-assets/lang/en.json'
import viewEn from '@digitranslab/view-assets/lang/en.json'
import workbenchEn from '@digitranslab/workbench-assets/lang/en.json'
import documentEn from '@digitranslab/document-assets/lang/en.json'
import githubEn from '@digitranslab/github-assets/lang/en.json'

export function registerLoaders (): void {
  addStringsLoader(coreId, async (lang: string) => coreEng)
  addStringsLoader(loginId, async (lang: string) => loginEng)
  addStringsLoader(platformId, async (lang: string) => platformEng)

  addStringsLoader(taskId, async (lang: string) => taskEn)
  addStringsLoader(viewId, async (lang: string) => viewEn)
  addStringsLoader(chunterId, async (lang: string) => chunterEn)
  addStringsLoader(attachmentId, async (lang: string) => attachmentEn)
  addStringsLoader(contactId, async (lang: string) => contactEn)
  addStringsLoader(recruitId, async (lang: string) => recruitEn)
  addStringsLoader(activityId, async (lang: string) => activityEn)
  addStringsLoader(settingId, async (lang: string) => settingEn)
  addStringsLoader(telegramId, async (lang: string) => telegramEn)
  addStringsLoader(leadId, async (lang: string) => leadEn)
  addStringsLoader(gmailId, async (lang: string) => gmailEn)
  addStringsLoader(workbenchId, async (lang: string) => workbenchEn)
  addStringsLoader(inventoryId, async (lang: string) => inventoryEn)
  addStringsLoader(templatesId, async (lang: string) => templatesEn)
  addStringsLoader(notificationId, async (lang: string) => notificationEn)
  addStringsLoader(tagsId, async (lang: string) => tagsEn)
  addStringsLoader(calendarId, async (lang: string) => calendarEn)
  addStringsLoader(trackerId, async (lang: string) => trackerEn)
  addStringsLoader(boardId, async (lang: string) => boardEn)
  addStringsLoader(preferenceId, async (lang: string) => preferenceEn)
  addStringsLoader(hrId, async (lang: string) => hrEn)
  addStringsLoader(documentId, async (lang: string) => documentEn)
  addStringsLoader(bitrixId, async (lang: string) => bitrixEn)
  addStringsLoader(requestId, async (lang: string) => requestEn)
  addStringsLoader(supportId, async (lang: string) => supportEn)
  addStringsLoader(githubId, async (lang: string) => githubEn)
  addStringsLoader(driveId, async (lang: string) => driveEn)
}
