//
// Copyright © 2023 Digitrans Inc.
//

import {
  Plugin,
  addEventListener,
  addLocation,
  addStringsLoader,
  getMetadata,
  platformId,
  setMetadata
} from '@digitranslab/platform'

import { activityId } from '@digitranslab/activity'
import { attachmentId } from '@digitranslab/attachment'
import { boardId } from '@digitranslab/board'
import calendar, { calendarId } from '@digitranslab/calendar'
import { chunterId } from '@digitranslab/chunter'
import client, { clientId } from '@digitranslab/client'
import contactPlugin, { contactId } from '@digitranslab/contact'
import { documentId } from '@digitranslab/document'
import { driveId } from '@digitranslab/drive'
import gmail, { gmailId } from '@digitranslab/gmail'
import { hrId } from '@digitranslab/hr'
import { imageCropperId } from '@digitranslab/image-cropper'
import { inventoryId } from '@digitranslab/inventory'
import { leadId } from '@digitranslab/lead'
import login, { loginId } from '@digitranslab/login'
import notification, { notificationId } from '@digitranslab/notification'
import onboard, { onboardId } from '@digitranslab/onboard'
import { recruitId } from '@digitranslab/recruit'
import rekoni from '@digitranslab/rekoni'
import { requestId } from '@digitranslab/request'
import { settingId } from '@digitranslab/setting'
import { supportId } from '@digitranslab/support'
import { tagsId } from '@digitranslab/tags'
import { taskId } from '@digitranslab/task'
import telegram, { telegramId } from '@digitranslab/telegram'
import { templatesId } from '@digitranslab/templates'
import tracker, { trackerId } from '@digitranslab/tracker'
import uiPlugin, { getCurrentLocation, locationStorageKeyId, locationToUrl, navigate, parseLocation, setLocationStorageKey } from '@digitranslab/ui'
import { uploaderId } from '@digitranslab/uploader'
import { viewId } from '@digitranslab/view'
import workbench, { workbenchId } from '@digitranslab/workbench'
import { diffviewId } from '@digitranslab/diffview'
import { timeId } from '@digitranslab/time'
import { desktopPreferencesId } from '@digitranslab/desktop-preferences'
import guest, { guestId } from '@digitranslab/guest'
import { bitrixId } from '@digitranslab/bitrix'
import { productsId } from '@digitranslab/products'
import { questionsId } from '@digitranslab/questions'
import { trainingId } from '@digitranslab/training'
import { documentsId } from '@digitranslab/controlled-documents'
import aiBot, { aiBotId } from '@digitranslab/ai-bot'
import { testManagementId } from '@digitranslab/test-management'
import { surveyId } from '@digitranslab/survey'

import '@digitranslab/activity-assets'
import '@digitranslab/attachment-assets'
import '@digitranslab/bitrix-assets'
import '@digitranslab/board-assets'
import '@digitranslab/calendar-assets'
import '@digitranslab/chunter-assets'
import '@digitranslab/contact-assets'
import '@digitranslab/document-assets'
import '@digitranslab/drive-assets'
import '@digitranslab/gmail-assets'
import '@digitranslab/hr-assets'
import '@digitranslab/inventory-assets'
import '@digitranslab/lead-assets'
import '@digitranslab/login-assets'
import '@digitranslab/notification-assets'
import '@digitranslab/preference-assets'
import '@digitranslab/recruit-assets'
import '@digitranslab/request-assets'
import '@digitranslab/setting-assets'
import '@digitranslab/support-assets'
import '@digitranslab/tags-assets'
import '@digitranslab/task-assets'
import '@digitranslab/telegram-assets'
import '@digitranslab/templates-assets'
import '@digitranslab/tracker-assets'
import '@digitranslab/view-assets'
import '@digitranslab/workbench-assets'
import '@digitranslab/guest-assets'
import '@digitranslab/uploader-assets'
import '@digitranslab/diffview-assets'
import '@digitranslab/time-assets'
import '@digitranslab/desktop-preferences-assets'
import '@digitranslab/love-assets'
import '@digitranslab/print-assets'
import '@digitranslab/questions-assets'
import '@digitranslab/training-assets'
import '@digitranslab/products-assets'
import '@digitranslab/controlled-documents-assets'
import '@digitranslab/analytics-collector-assets'
import '@digitranslab/text-editor-assets'
import '@digitranslab/test-management-assets'
import '@digitranslab/survey-assets'

import { coreId } from '@digitranslab/core'
import presentation, { parsePreviewConfig, parseUploadConfig, presentationId } from '@digitranslab/presentation'
import textEditor, { textEditorId } from '@digitranslab/text-editor'
import love, { loveId } from '@digitranslab/love'
import print, { printId } from '@digitranslab/print'
import sign from '@digitranslab/sign'
import analyticsCollector, { analyticsCollectorId } from '@digitranslab/analytics-collector'

import { setDefaultLanguage, initThemeStore } from '@digitranslab/theme'
import { configureNotifications } from './notifications'
import { Config, IPCMainExposed, Branding } from './types'

import '@digitranslab/github-assets'
import github, { githubId } from '@digitranslab/github'
import { uiId } from '@digitranslab/ui/src/plugin'
import { preferenceId } from '@digitranslab/preference'

function configureI18n (): void {
  // Add localization
  addStringsLoader(platformId, async (lang: string) => await import(`@digitranslab/platform/lang/${lang}.json`))
  addStringsLoader(coreId, async (lang: string) => await import(`@digitranslab/core/lang/${lang}.json`))
  addStringsLoader(
    presentationId,
    async (lang: string) => await import(`@digitranslab/presentation/lang/${lang}.json`)
  )
  addStringsLoader(textEditorId, async (lang: string) => await import(`@digitranslab/text-editor-assets/lang/${lang}.json`))
  addStringsLoader(uiId, async (lang: string) => await import(`@digitranslab/ui/lang/${lang}.json`))
  addStringsLoader(uploaderId, async (lang: string) => await import(`@digitranslab/uploader-assets/lang/${lang}.json`))
  addStringsLoader(activityId, async (lang: string) => await import(`@digitranslab/activity-assets/lang/${lang}.json`))
  addStringsLoader(
    attachmentId,
    async (lang: string) => await import(`@digitranslab/attachment-assets/lang/${lang}.json`)
  )
  addStringsLoader(bitrixId, async (lang: string) => await import(`@digitranslab/bitrix-assets/lang/${lang}.json`))
  addStringsLoader(boardId, async (lang: string) => await import(`@digitranslab/board-assets/lang/${lang}.json`))
  addStringsLoader(calendarId, async (lang: string) => await import(`@digitranslab/calendar-assets/lang/${lang}.json`))
  addStringsLoader(chunterId, async (lang: string) => await import(`@digitranslab/chunter-assets/lang/${lang}.json`))
  addStringsLoader(contactId, async (lang: string) => await import(`@digitranslab/contact-assets/lang/${lang}.json`))
  addStringsLoader(driveId, async (lang: string) => await import(`@digitranslab/drive-assets/lang/${lang}.json`))
  addStringsLoader(gmailId, async (lang: string) => await import(`@digitranslab/gmail-assets/lang/${lang}.json`))
  addStringsLoader(hrId, async (lang: string) => await import(`@digitranslab/hr-assets/lang/${lang}.json`))
  addStringsLoader(
    inventoryId,
    async (lang: string) => await import(`@digitranslab/inventory-assets/lang/${lang}.json`)
  )
  addStringsLoader(leadId, async (lang: string) => await import(`@digitranslab/lead-assets/lang/${lang}.json`))
  addStringsLoader(loginId, async (lang: string) => await import(`@digitranslab/login-assets/lang/${lang}.json`))
  addStringsLoader(
    notificationId,
    async (lang: string) => await import(`@digitranslab/notification-assets/lang/${lang}.json`)
  )
  addStringsLoader(onboardId, async (lang: string) => await import(`@digitranslab/onboard-assets/lang/${lang}.json`))
  addStringsLoader(
    preferenceId,
    async (lang: string) => await import(`@digitranslab/preference-assets/lang/${lang}.json`)
  )
  addStringsLoader(recruitId, async (lang: string) => await import(`@digitranslab/recruit-assets/lang/${lang}.json`))
  addStringsLoader(requestId, async (lang: string) => await import(`@digitranslab/request-assets/lang/${lang}.json`))
  addStringsLoader(settingId, async (lang: string) => await import(`@digitranslab/setting-assets/lang/${lang}.json`))
  addStringsLoader(supportId, async (lang: string) => await import(`@digitranslab/support-assets/lang/${lang}.json`))
  addStringsLoader(tagsId, async (lang: string) => await import(`@digitranslab/tags-assets/lang/${lang}.json`))
  addStringsLoader(taskId, async (lang: string) => await import(`@digitranslab/task-assets/lang/${lang}.json`))
  addStringsLoader(telegramId, async (lang: string) => await import(`@digitranslab/telegram-assets/lang/${lang}.json`))
  addStringsLoader(
    templatesId,
    async (lang: string) => await import(`@digitranslab/templates-assets/lang/${lang}.json`)
  )
  addStringsLoader(trackerId, async (lang: string) => await import(`@digitranslab/tracker-assets/lang/${lang}.json`))
  addStringsLoader(viewId, async (lang: string) => await import(`@digitranslab/view-assets/lang/${lang}.json`))
  addStringsLoader(
    workbenchId,
    async (lang: string) => await import(`@digitranslab/workbench-assets/lang/${lang}.json`)
  )

  addStringsLoader(
    desktopPreferencesId,
    async (lang: string) => await import(`@digitranslab/desktop-preferences-assets/lang/${lang}.json`)
  )
  addStringsLoader(diffviewId, async (lang: string) => await import(`@digitranslab/diffview-assets/lang/${lang}.json`))
  addStringsLoader(documentId, async (lang: string) => await import(`@digitranslab/document-assets/lang/${lang}.json`))
  addStringsLoader(timeId, async (lang: string) => await import(`@digitranslab/time-assets/lang/${lang}.json`))
  addStringsLoader(githubId, async (lang: string) => await import(`@digitranslab/github-assets/lang/${lang}.json`))
  addStringsLoader(documentsId, async (lang: string) => await import(`@digitranslab/controlled-documents-assets/lang/${lang}.json`))
  addStringsLoader(productsId, async (lang: string) => await import(`@digitranslab/products-assets/lang/${lang}.json`))
  addStringsLoader(questionsId, async (lang: string) => await import(`@digitranslab/questions-assets/lang/${lang}.json`))
  addStringsLoader(trainingId, async (lang: string) => await import(`@digitranslab/training-assets/lang/${lang}.json`))
  addStringsLoader(guestId, async (lang: string) => await import(`@digitranslab/guest-assets/lang/${lang}.json`))
  addStringsLoader(loveId, async (lang: string) => await import(`@digitranslab/love-assets/lang/${lang}.json`))
  addStringsLoader(printId, async (lang: string) => await import(`@digitranslab/print-assets/lang/${lang}.json`))
  addStringsLoader(analyticsCollectorId, async (lang: string) => await import(`@digitranslab/analytics-collector-assets/lang/${lang}.json`))
  addStringsLoader(testManagementId, async (lang: string) => await import(`@digitranslab/test-management-assets/lang/${lang}.json`))
  addStringsLoader(surveyId, async (lang: string) => await import(`@digitranslab/survey-assets/lang/${lang}.json`))
}

export async function configurePlatform (): Promise<void> {
  configureI18n()

  const ipcMain = (window as any).electron as IPCMainExposed
  const config: Config = await ipcMain.config()
  const myBranding: Branding = await ipcMain.branding()
  // await (await fetch(devConfig? '/config-dev.json' : '/config.json')).json()
  console.log('loading configuration', config)
  console.log('loaded branding', myBranding)

  const title = myBranding.title ?? 'Ember Desktop'
  ipcMain.setTitle(title)

  setMetadata(login.metadata.AccountsUrl, config.ACCOUNTS_URL)
  setMetadata(login.metadata.DisableSignUp, config.DISABLE_SIGNUP === 'true')
  setMetadata(presentation.metadata.UploadURL, config.UPLOAD_URL)
  setMetadata(presentation.metadata.FilesURL, config.FILES_URL)
  setMetadata(presentation.metadata.CollaboratorUrl, config.COLLABORATOR_URL)
  setMetadata(presentation.metadata.PreviewConfig, parsePreviewConfig(config.PREVIEW_CONFIG))
  setMetadata(presentation.metadata.UploadConfig, parseUploadConfig(config.UPLOAD_CONFIG, config.UPLOAD_URL))
  setMetadata(presentation.metadata.FrontUrl, config.FRONT_URL)
  setMetadata(presentation.metadata.StatsUrl, config.STATS_URL)

  setMetadata(textEditor.metadata.Collaborator, config.COLLABORATOR ?? '')

  setMetadata(github.metadata.GithubApplication, config.GITHUB_APP ?? '')
  setMetadata(github.metadata.GithubClientID, config.GITHUB_CLIENTID ?? '')
  setMetadata(github.metadata.GithubURL, config.GITHUB_URL ?? '')

  if (config.MODEL_VERSION != null) {
    console.log('Minimal Model version requirement', config.MODEL_VERSION)
    setMetadata(presentation.metadata.ModelVersion, config.MODEL_VERSION)
  }
  if (config.VERSION != null) {
    console.log('Minimal version requirement', config.VERSION)
    setMetadata(presentation.metadata.FrontVersion, config.VERSION)
  }
  setMetadata(telegram.metadata.TelegramURL, config.TELEGRAM_URL ?? 'http://localhost:8086')
  setMetadata(telegram.metadata.BotUrl, config.TELEGRAM_BOT_URL ?? 'http://localhost:4020')
  setMetadata(gmail.metadata.GmailURL, config.GMAIL_URL ?? 'http://localhost:8087')
  setMetadata(calendar.metadata.CalendarServiceURL, config.CALENDAR_URL ?? 'http://localhost:8095')
  setMetadata(notification.metadata.PushPublicKey, config.PUSH_PUBLIC_KEY)

  setMetadata(rekoni.metadata.RekoniUrl, config.REKONI_URL)
  setMetadata(contactPlugin.metadata.LastNameFirst, myBranding.lastNameFirst === 'true' ?? false)
  setMetadata(love.metadata.ServiceEnpdoint, config.LOVE_ENDPOINT)
  setMetadata(love.metadata.WebSocketURL, config.LIVEKIT_WS)
  setMetadata(print.metadata.PrintURL, config.PRINT_URL)
  setMetadata(sign.metadata.SignURL, config.SIGN_URL)
  setMetadata(uiPlugin.metadata.DefaultApplication, login.component.LoginApp)
  setMetadata(analyticsCollector.metadata.EndpointURL, config.ANALYTICS_COLLECTOR_URL)
  setMetadata(aiBot.metadata.EndpointURL, config.AI_URL)

  const languages = myBranding.languages !== undefined && myBranding.languages !== '' ? myBranding.languages.split(',').map((l) => l.trim()) : ['en', 'ru', 'es', 'pt']

  setMetadata(uiPlugin.metadata.Languages, languages)

  setMetadata(
    uiPlugin.metadata.Routes,
    new Map([
      [workbenchId, workbench.component.WorkbenchApp],
      [loginId, login.component.LoginApp],
      [onboardId, onboard.component.OnboardApp],
      [calendarId, calendar.component.ConnectApp],
      [guestId, guest.component.GuestApp]
    ])
  )

  addLocation(coreId, async () => ({ default: async () => ({}) }))
  addLocation(presentationId, async () => ({ default: async () => ({}) }))

  addLocation(clientId, async () => await import('@digitranslab/client-resources'))
  addLocation(loginId, async () => await import('@digitranslab/login-resources'))
  addLocation(onboardId, async () => await import('@digitranslab/onboard-resources'))
  addLocation(workbenchId, async () => await import('@digitranslab/workbench-resources'))
  addLocation(viewId, async () => await import('@digitranslab/view-resources'))
  addLocation(taskId, async () => await import('@digitranslab/task-resources'))
  addLocation(contactId, async () => await import('@digitranslab/contact-resources'))
  addLocation(chunterId, async () => await import('@digitranslab/chunter-resources'))
  addLocation(recruitId, async () => await import('@digitranslab/recruit-resources'))
  addLocation(activityId, async () => await import('@digitranslab/activity-resources'))
  addLocation(settingId, async () => await import('@digitranslab/setting-resources'))
  addLocation(leadId, async () => await import('@digitranslab/lead-resources'))
  addLocation(telegramId, async () => await import('@digitranslab/telegram-resources'))
  addLocation(attachmentId, async () => await import('@digitranslab/attachment-resources'))
  addLocation(gmailId, async () => await import('@digitranslab/gmail-resources'))
  addLocation(imageCropperId, async () => await import('@digitranslab/image-cropper-resources'))
  addLocation(inventoryId, async () => await import('@digitranslab/inventory-resources'))
  addLocation(templatesId, async () => await import('@digitranslab/templates-resources'))
  addLocation(notificationId, async () => await import('@digitranslab/notification-resources'))
  addLocation(tagsId, async () => await import('@digitranslab/tags-resources'))
  addLocation(calendarId, async () => await import('@digitranslab/calendar-resources'))
  addLocation(analyticsCollectorId, async () => await import('@digitranslab/analytics-collector-resources'))
  addLocation(aiBotId, async () => await import('@digitranslab/ai-bot-resources'))

  addLocation(trackerId, async () => await import('@digitranslab/tracker-resources'))
  addLocation(boardId, async () => await import('@digitranslab/board-resources'))
  addLocation(hrId, async () => await import('@digitranslab/hr-resources'))
  addLocation(bitrixId, async () => await import('@digitranslab/bitrix-resources'))
  addLocation(requestId, async () => await import('@digitranslab/request-resources'))
  addLocation(driveId, async () => await import('@digitranslab/drive-resources'))
  addLocation(supportId, async () => await import('@digitranslab/support-resources'))
  addLocation(diffviewId, async () => await import('@digitranslab/diffview-resources'))
  addLocation(documentId, async () => await import('@digitranslab/document-resources'))
  addLocation(timeId, async () => await import('@digitranslab/time-resources'))
  addLocation(questionsId, async () => await import('@digitranslab/questions-resources'))
  addLocation(trainingId, async () => await import('@digitranslab/training-resources'))
  addLocation(productsId, async () => await import('@digitranslab/products-resources'))
  addLocation(documentsId, async () => await import('@digitranslab/controlled-documents-resources'))
  addLocation(uploaderId, async () => await import('@digitranslab/uploader-resources'))
  addLocation(githubId, async () => await import(/* webpackChunkName: "github" */ '@digitranslab/github-resources'))
  addLocation(
    desktopPreferencesId,
    async () => await import(/* webpackChunkName: "desktop-preferences" */ '@digitranslab/desktop-preferences-resources')
  )
  addLocation(guestId, () => import(/* webpackChunkName: "guest" */ '@digitranslab/guest-resources'))
  addLocation(loveId, () => import(/* webpackChunkName: "love" */ '@digitranslab/love-resources'))
  addLocation(printId, () => import(/* webpackChunkName: "print" */ '@digitranslab/print-resources'))
  addLocation(textEditorId, () => import(/* webpackChunkName: "text-editor" */ '@digitranslab/text-editor-resources'))
  addLocation(testManagementId, () => import(/* webpackChunkName: "test-management" */ '@digitranslab/test-management-resources'))
  addLocation(surveyId, () => import(/* webpackChunkName: "uploader" */ '@digitranslab/survey-resources'))

  setMetadata(client.metadata.FilterModel, 'ui')
  setMetadata(client.metadata.ExtraPlugins, ['preference' as Plugin])

  // Use binary response transfer for faster performance and small transfer sizes.
  setMetadata(client.metadata.UseBinaryProtocol, true)
  // Disable for now, since it causes performance issues on linux/docker/kubernetes boxes for now.
  setMetadata(client.metadata.UseProtocolCompression, true)

  setMetadata(uiPlugin.metadata.PlatformTitle, title)
  setMetadata(workbench.metadata.PlatformTitle, title)
  setDefaultLanguage(myBranding.defaultLanguage ?? 'en')
  setMetadata(workbench.metadata.DefaultApplication, myBranding.defaultApplication ?? 'tracker')
  setMetadata(workbench.metadata.DefaultSpace, myBranding.defaultSpace ?? tracker.project.DefaultProject)
  setMetadata(workbench.metadata.DefaultSpecial, myBranding.defaultSpecial ?? 'issues')

  initThemeStore()

  addEventListener(workbench.event.NotifyConnection, async (evt) => {
    await ipcMain.setFrontCookie(
      config.FRONT_URL,
      presentation.metadata.Token.replaceAll(':', '-'),
      getMetadata(presentation.metadata.Token) ?? ''
    )
  })

  configureNotifications()

  if (config.INITIAL_URL !== '') {
    setLocationStorageKey('uberflow_child')
  }

  const last = localStorage.getItem(locationStorageKeyId)

  if (config.INITIAL_URL !== '') {
    console.log('NAVIGATE', config.INITIAL_URL, getCurrentLocation())
    // NavigationExpandedDefault=false fills buggy:
    // — Navigator closes in unpredictable way
    // — Many sections of the have have no default central content so without
    // navigator is looks like something is broken
    // Should consifer if we want to fix this
    // setMetadata(workbench.metadata.NavigationExpandedDefault, false)
    navigate({
      path: config.INITIAL_URL.split('/')
    })
  } else if (last !== null) {
    navigate(JSON.parse(last))
  } else {
    navigate({ path: [] })
  }

  console.log('Initial location is: ', getCurrentLocation())
}
