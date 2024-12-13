import { coreId } from '@digitranslab/core'
import { addStringsLoader, platformId } from '@digitranslab/platform'
import { activityId } from '@digitranslab/activity'
import { attachmentId } from '@digitranslab/attachment'
import { bitrixId } from '@digitranslab/bitrix'
import { boardId } from '@digitranslab/board'
import { calendarId } from '@digitranslab/calendar'
import { chunterId } from '@digitranslab/chunter'
import { contactId } from '@digitranslab/contact'
import { documentsId } from '@digitranslab/controlled-documents'
import { documentId } from '@digitranslab/document'
import { driveId } from '@digitranslab/drive'
import { githubId } from '@digitranslab/github'
import { gmailId } from '@digitranslab/gmail'
import { hrId } from '@digitranslab/hr'
import { inventoryId } from '@digitranslab/inventory'
import { leadId } from '@digitranslab/lead'
import { loginId } from '@digitranslab/login'
import { loveId } from '@digitranslab/love'
import { notificationId } from '@digitranslab/notification'
import { onboardId } from '@digitranslab/onboard'
import { preferenceId } from '@digitranslab/preference'
import { productsId } from '@digitranslab/products'
import { recruitId } from '@digitranslab/recruit'
import { requestId } from '@digitranslab/request'
import { settingId } from '@digitranslab/setting'
import { supportId } from '@digitranslab/support'
import { tagsId } from '@digitranslab/tags'
import { taskId } from '@digitranslab/task'
import { telegramId } from '@digitranslab/telegram'
import { templatesId } from '@digitranslab/templates'
import { trackerId } from '@digitranslab/tracker'
import { trainingId } from '@digitranslab/training'
import { viewId } from '@digitranslab/view'
import { workbenchId } from '@digitranslab/workbench'
import { timeId } from '@digitranslab/time'
import { surveyId } from '@digitranslab/survey'
import coreEng from '@digitranslab/core/lang/en.json'
import loginEng from '@digitranslab/login-assets/lang/en.json'
import platformEng from '@digitranslab/platform/lang/en.json'
import activityEn from '@digitranslab/activity-assets/lang/en.json'
import attachmentEn from '@digitranslab/attachment-assets/lang/en.json'
import bitrixEn from '@digitranslab/bitrix-assets/lang/en.json'
import boardEn from '@digitranslab/board-assets/lang/en.json'
import calendarEn from '@digitranslab/calendar-assets/lang/en.json'
import chunterEn from '@digitranslab/chunter-assets/lang/en.json'
import contactEn from '@digitranslab/contact-assets/lang/en.json'
import documentsEn from '@digitranslab/controlled-documents-assets/lang/en.json'
import documentEn from '@digitranslab/document-assets/lang/en.json'
import driveEn from '@digitranslab/drive-assets/lang/en.json'
import githubEn from '@digitranslab/github-assets/lang/en.json'
import gmailEn from '@digitranslab/gmail-assets/lang/en.json'
import hrEn from '@digitranslab/hr-assets/lang/en.json'
import inventoryEn from '@digitranslab/inventory-assets/lang/en.json'
import leadEn from '@digitranslab/lead-assets/lang/en.json'
import loveEn from '@digitranslab/love-assets/lang/en.json'
import notificationEn from '@digitranslab/notification-assets/lang/en.json'
import onboardEn from '@digitranslab/onboard-assets/lang/en.json'
import preferenceEn from '@digitranslab/preference-assets/lang/en.json'
import productsEn from '@digitranslab/products-assets/lang/en.json'
import recruitEn from '@digitranslab/recruit-assets/lang/en.json'
import requestEn from '@digitranslab/request-assets/lang/en.json'
import settingEn from '@digitranslab/setting-assets/lang/en.json'
import supportEn from '@digitranslab/support-assets/lang/en.json'
import tagsEn from '@digitranslab/tags-assets/lang/en.json'
import taskEn from '@digitranslab/task-assets/lang/en.json'
import telegramEn from '@digitranslab/telegram-assets/lang/en.json'
import templatesEn from '@digitranslab/templates-assets/lang/en.json'
import trackerEn from '@digitranslab/tracker-assets/lang/en.json'
import trainingEn from '@digitranslab/training-assets/lang/en.json'
import viewEn from '@digitranslab/view-assets/lang/en.json'
import workbenchEn from '@digitranslab/workbench-assets/lang/en.json'
import timeEn from '@digitranslab/time-assets/lang/en.json'
import surveyEn from '@digitranslab/survey-assets/lang/en.json'

export function registerStringLoaders (): void {
  addStringsLoader(coreId, async (lang: string) => coreEng)
  addStringsLoader(loginId, async (lang: string) => loginEng)
  addStringsLoader(onboardId, async (lang: string) => onboardEn)
  addStringsLoader(platformId, async (lang: string) => platformEng)

  addStringsLoader(taskId, async (lang: string) => taskEn)
  addStringsLoader(viewId, async (lang: string) => viewEn)
  addStringsLoader(chunterId, async (lang: string) => chunterEn)
  addStringsLoader(attachmentId, async (lang: string) => attachmentEn)
  addStringsLoader(contactId, async (lang: string) => contactEn)
  addStringsLoader(recruitId, async (lang: string) => recruitEn)
  addStringsLoader(activityId, async (lang: string) => activityEn)
  addStringsLoader(settingId, async (lang: string) => settingEn)
  addStringsLoader(supportId, async (lang: string) => supportEn)
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
  addStringsLoader(loveId, async (lang: string) => loveEn)
  addStringsLoader(driveId, async (lang: string) => driveEn)
  addStringsLoader(documentsId, async (lang: string) => documentsEn)
  addStringsLoader(productsId, async (lang: string) => productsEn)
  addStringsLoader(trainingId, async (lang: string) => trainingEn)
  addStringsLoader(githubId, async (lang: string) => githubEn)
  addStringsLoader(timeId, async (lang: string) => timeEn)
  addStringsLoader(surveyId, async (lang: string) => surveyEn)
}
