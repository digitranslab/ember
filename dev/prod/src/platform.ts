//
// Copyright © 2022, 2023 Digitrans Inc.
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

import platform, { type Plugin, addLocation, addStringsLoader, platformId } from '@digitranslab/platform'

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
import guest, { guestId } from '@digitranslab/guest'
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
import { timeId } from '@digitranslab/time'
import tracker, { trackerId } from '@digitranslab/tracker'
import uiPlugin from '@digitranslab/ui'
import { viewId } from '@digitranslab/view'
import workbench, { workbenchId } from '@digitranslab/workbench'
import love, { loveId } from '@digitranslab/love'
import print, { printId } from '@digitranslab/print'
import sign from '@digitranslab/sign'
import { desktopPreferencesId } from '@digitranslab/desktop-preferences'
import { diffviewId } from '@digitranslab/diffview'
import { productsId } from '@digitranslab/products'
import { questionsId } from '@digitranslab/questions'
import { trainingId } from '@digitranslab/training'
import { documentsId } from '@digitranslab/controlled-documents'
import textEditor, { textEditorId } from '@digitranslab/text-editor'
import analyticsCollector, {analyticsCollectorId} from '@digitranslab/analytics-collector'
import { uploaderId } from '@digitranslab/uploader'
import aiBot, { aiBotId } from '@digitranslab/ai-bot'
import { testManagementId } from '@digitranslab/test-management'
import { surveyId } from '@digitranslab/survey'

import { bitrixId } from '@digitranslab/bitrix'

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
import '@digitranslab/guest-assets'
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
import '@digitranslab/time-assets'
import '@digitranslab/tracker-assets'
import '@digitranslab/view-assets'
import '@digitranslab/workbench-assets'
import '@digitranslab/love-assets'
import '@digitranslab/print-assets'
import '@digitranslab/desktop-preferences-assets'
import '@digitranslab/diffview-assets'
import '@digitranslab/questions-assets'
import '@digitranslab/training-assets'
import '@digitranslab/products-assets'
import '@digitranslab/controlled-documents-assets'
import '@digitranslab/analytics-collector-assets'
import '@digitranslab/text-editor-assets'
import '@digitranslab/uploader-assets'
import '@digitranslab/test-management-assets'
import '@digitranslab/survey-assets'

import github, { githubId } from '@digitranslab/github'
import '@digitranslab/github-assets'

import { coreId } from '@digitranslab/core'
import presentation, {
  loadServerConfig,
  parsePreviewConfig,
  parseUploadConfig,
  presentationId
} from '@digitranslab/presentation'

import { setMetadata } from '@digitranslab/platform'
import { setDefaultLanguage, initThemeStore } from '@digitranslab/theme'

import { preferenceId } from '@digitranslab/preference'
import { uiId } from '@digitranslab/ui/src/plugin'
import { configureAnalytics } from './analytics'
import { Analytics } from '@digitranslab/analytics'

export interface Config {
  ACCOUNTS_URL: string
  UPLOAD_URL: string
  FILES_URL: string
  MODEL_VERSION: string
  VERSION: string
  COLLABORATOR_URL: string
  COLLABORATOR?: string
  REKONI_URL: string
  TELEGRAM_URL: string
  GMAIL_URL: string
  CALENDAR_URL: string
  PUSH_PUBLIC_KEY: string
  APP_PROTOCOL?: string
  GITHUB_APP?: string
  GITHUB_CLIENTID?: string
  GITHUB_URL: string
  SENTRY_DSN?: string
  LOVE_ENDPOINT?: string
  LIVEKIT_WS?: string
  SIGN_URL?: string
  PRINT_URL?: string
  POSTHOG_API_KEY?: string
  POSTHOG_HOST?: string
  ANALYTICS_COLLECTOR_URL?:string
  BRANDING_URL?: string
  TELEGRAM_BOT_URL?: string
  AI_URL?:string
  DISABLE_SIGNUP?: string
  // Could be defined for dev environment
  FRONT_URL?: string
  PREVIEW_CONFIG?: string
  UPLOAD_CONFIG?: string
  STATS_URL?: string
}

export interface Branding {
  title?: string
  links?: {
    rel: string
    href: string
    type?: string
    sizes?: string
  }[]
  languages?: string
  lastNameFirst?: string
  defaultLanguage?: string
  defaultApplication?: string
  defaultSpace?: string
  defaultSpecial?: string
  initWorkspace?: string
}

export type BrandingMap = Record<string, Branding>

const devConfig = process.env.CLIENT_TYPE === 'dev-production'
const devConfigEmber = process.env.CLIENT_TYPE === 'dev-ember'
const devConfigBold = process.env.CLIENT_TYPE === 'dev-bold'

function configureI18n(): void {
   //Add localization
   addStringsLoader(platformId, async (lang: string) => await import(`@digitranslab/platform/lang/${lang}.json`))
   addStringsLoader(coreId, async (lang: string) => await import(`@digitranslab/core/lang/${lang}.json`))
   addStringsLoader(presentationId, async (lang: string) => await import(`@digitranslab/presentation/lang/${lang}.json`))
   addStringsLoader(textEditorId, async (lang: string) => await import(`@digitranslab/text-editor-assets/lang/${lang}.json`))
   addStringsLoader(uiId, async (lang: string) => await import(`@digitranslab/ui/lang/${lang}.json`))
   addStringsLoader(uploaderId, async (lang: string) => await import(`@digitranslab/uploader-assets/lang/${lang}.json`))
   addStringsLoader(activityId, async (lang: string) => await import(`@digitranslab/activity-assets/lang/${lang}.json`))
   addStringsLoader(attachmentId, async (lang: string) => await import(`@digitranslab/attachment-assets/lang/${lang}.json`))
   addStringsLoader(bitrixId, async (lang: string) => await import(`@digitranslab/bitrix-assets/lang/${lang}.json`))
   addStringsLoader(boardId, async (lang: string) => await import(`@digitranslab/board-assets/lang/${lang}.json`))
   addStringsLoader(calendarId, async (lang: string) => await import(`@digitranslab/calendar-assets/lang/${lang}.json`))
   addStringsLoader(chunterId, async (lang: string) => await import(`@digitranslab/chunter-assets/lang/${lang}.json`))
   addStringsLoader(contactId, async (lang: string) => await import(`@digitranslab/contact-assets/lang/${lang}.json`))
   addStringsLoader(driveId, async (lang: string) => await import(`@digitranslab/drive-assets/lang/${lang}.json`))
   addStringsLoader(gmailId, async (lang: string) => await import(`@digitranslab/gmail-assets/lang/${lang}.json`))
   addStringsLoader(hrId, async (lang: string) => await import(`@digitranslab/hr-assets/lang/${lang}.json`))
   addStringsLoader(inventoryId, async (lang: string) => await import(`@digitranslab/inventory-assets/lang/${lang}.json`))
   addStringsLoader(leadId, async (lang: string) => await import(`@digitranslab/lead-assets/lang/${lang}.json`))
   addStringsLoader(loginId, async (lang: string) => await import(`@digitranslab/login-assets/lang/${lang}.json`))
   addStringsLoader(notificationId, async (lang: string) => await import(`@digitranslab/notification-assets/lang/${lang}.json`))
   addStringsLoader(onboardId, async (lang: string) => await import(`@digitranslab/onboard-assets/lang/${lang}.json`))
   addStringsLoader(preferenceId, async (lang: string) => await import(`@digitranslab/preference-assets/lang/${lang}.json`))
   addStringsLoader(recruitId, async (lang: string) => await import(`@digitranslab/recruit-assets/lang/${lang}.json`))
   addStringsLoader(requestId, async (lang: string) => await import(`@digitranslab/request-assets/lang/${lang}.json`))
   addStringsLoader(settingId, async (lang: string) => await import(`@digitranslab/setting-assets/lang/${lang}.json`))
   addStringsLoader(supportId, async (lang: string) => await import(`@digitranslab/support-assets/lang/${lang}.json`))
   addStringsLoader(tagsId, async (lang: string) => await import(`@digitranslab/tags-assets/lang/${lang}.json`))
   addStringsLoader(taskId, async (lang: string) => await import(`@digitranslab/task-assets/lang/${lang}.json`))
   addStringsLoader(telegramId, async (lang: string) => await import(`@digitranslab/telegram-assets/lang/${lang}.json`))
   addStringsLoader(templatesId, async (lang: string) => await import(`@digitranslab/templates-assets/lang/${lang}.json`))
   addStringsLoader(trackerId, async (lang: string) => await import(`@digitranslab/tracker-assets/lang/${lang}.json`))
   addStringsLoader(viewId, async (lang: string) => await import(`@digitranslab/view-assets/lang/${lang}.json`))
   addStringsLoader(workbenchId, async (lang: string) => await import(`@digitranslab/workbench-assets/lang/${lang}.json`))

   addStringsLoader(desktopPreferencesId, async (lang: string) => await import(`@digitranslab/desktop-preferences-assets/lang/${lang}.json`))
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

export async function configurePlatform() {
  setMetadata(platform.metadata.LoadHelper, async (loader) => {
    for (let i = 0; i < 5; i++) {
      try {
        return loader()
      } catch (err: any) {
        if (err.message.includes('Loading chunk') && i != 4) {
          continue
        }
        Analytics.handleError(err)
        location.reload()
      }
    }
  })
  configureI18n()

  const config: Config = await loadServerConfig(
    devConfigEmber
      ? '/config-ember.json' : (
        devConfigBold ? '/config-bold.json' : ( 
          devConfig ? '/config-dev.json' : '/config.json'))
  )
  const branding: BrandingMap = config.BRANDING_URL !== undefined ? await (await fetch(config.BRANDING_URL)).json() : {}
  const myBranding = branding[window.location.host] ?? {}

  console.log('loading configuration', config)
  console.log('loaded branding', myBranding)

  const title = myBranding.title ?? 'Platform'

  // apply branding
  window.document.title = title

  const links = myBranding.links ?? []
  if (links.length > 0) {
    // remove the default favicon
    // it's only needed for Safari which cannot use dynamically added links for favicons
    document.getElementById('default-favicon')?.remove()

    for (const link of links) {
      const htmlLink = document.createElement('link')
      htmlLink.rel = link.rel
      htmlLink.href = link.href

      if (link.type !== undefined) {
        htmlLink.type = link.type
      }

      if (link.sizes !== undefined) {
        htmlLink.setAttribute('sizes', link.sizes)
      }

      document.head.appendChild(htmlLink)
    }
  }

  configureAnalytics(config)
  // tryOpenInDesktopApp(config.APP_PROTOCOL ?? 'ember://')

  setMetadata(login.metadata.AccountsUrl, config.ACCOUNTS_URL)
  setMetadata(login.metadata.DisableSignUp, config.DISABLE_SIGNUP === 'true')
  setMetadata(presentation.metadata.FilesURL, config.FILES_URL)
  setMetadata(presentation.metadata.UploadURL, config.UPLOAD_URL)
  setMetadata(presentation.metadata.CollaboratorUrl, config.COLLABORATOR_URL)

  setMetadata(presentation.metadata.FrontUrl, config.FRONT_URL)
  setMetadata(presentation.metadata.PreviewConfig, parsePreviewConfig(config.PREVIEW_CONFIG))
  setMetadata(presentation.metadata.UploadConfig, parseUploadConfig(config.UPLOAD_CONFIG, config.UPLOAD_URL))
  setMetadata(presentation.metadata.StatsUrl, config.STATS_URL)

  setMetadata(textEditor.metadata.Collaborator, config.COLLABORATOR)

  if (config.MODEL_VERSION != null) {
    console.log('Minimal Model version requirement', config.MODEL_VERSION)
    setMetadata(presentation.metadata.ModelVersion, config.MODEL_VERSION)
  }
  if (config.VERSION != null) {
    console.log('Minimal version requirement', config.VERSION)
    setMetadata(presentation.metadata.FrontVersion, config.VERSION)
  }
  setMetadata(telegram.metadata.TelegramURL, config.TELEGRAM_URL ?? 'http://localhost:8086')
  setMetadata(telegram.metadata.BotUrl, config.TELEGRAM_BOT_URL)
  setMetadata(gmail.metadata.GmailURL, config.GMAIL_URL ?? 'http://localhost:8087')
  setMetadata(calendar.metadata.CalendarServiceURL, config.CALENDAR_URL ?? 'http://localhost:8095')
  setMetadata(notification.metadata.PushPublicKey, config.PUSH_PUBLIC_KEY)
  setMetadata(analyticsCollector.metadata.EndpointURL, config.ANALYTICS_COLLECTOR_URL)
  setMetadata(aiBot.metadata.EndpointURL, config.AI_URL)

  setMetadata(github.metadata.GithubApplication, config.GITHUB_APP ?? '')
  setMetadata(github.metadata.GithubClientID, config.GITHUB_CLIENTID ?? '')
  setMetadata(github.metadata.GithubURL, config.GITHUB_URL)

  setMetadata(rekoni.metadata.RekoniUrl, config.REKONI_URL)

  setMetadata(uiPlugin.metadata.DefaultApplication, login.component.LoginApp)
  setMetadata(contactPlugin.metadata.LastNameFirst, myBranding.lastNameFirst === 'true' ?? false)
  setMetadata(love.metadata.ServiceEnpdoint, config.LOVE_ENDPOINT)
  setMetadata(love.metadata.WebSocketURL, config.LIVEKIT_WS)
  setMetadata(print.metadata.PrintURL, config.PRINT_URL)
  setMetadata(sign.metadata.SignURL, config.SIGN_URL)

  const languages = myBranding.languages ? (myBranding.languages as string).split(',').map((l) => l.trim()) : ['en', 'ru', 'es', 'pt', 'zh']

  setMetadata(uiPlugin.metadata.Languages, languages)

  setMetadata(
    uiPlugin.metadata.Routes,
    new Map([
      [workbenchId, workbench.component.WorkbenchApp],
      [loginId, login.component.LoginApp],
      [onboardId, onboard.component.OnboardApp],
      [githubId, github.component.ConnectApp],
      [calendarId, calendar.component.ConnectApp],
      [guestId, guest.component.GuestApp]
    ])
  )

  addLocation(coreId, async () => ({ default: async () => ({}) }))
  addLocation(presentationId, async () => ({ default: async () => ({}) }))

  addLocation(clientId, () => import(/* webpackChunkName: "client" */ '@digitranslab/client-resources'))
  addLocation(loginId, () => import(/* webpackChunkName: "login" */ '@digitranslab/login-resources'))
  addLocation(onboardId, () => import(/* webpackChunkName: "onboard" */ '@digitranslab/onboard-resources'))
  addLocation(workbenchId, () => import(/* webpackChunkName: "workbench" */ '@digitranslab/workbench-resources'))
  addLocation(viewId, () => import(/* webpackChunkName: "view" */ '@digitranslab/view-resources'))
  addLocation(taskId, () => import(/* webpackChunkName: "task" */ '@digitranslab/task-resources'))
  addLocation(contactId, () => import(/* webpackChunkName: "contact" */ '@digitranslab/contact-resources'))
  addLocation(chunterId, () => import(/* webpackChunkName: "chunter" */ '@digitranslab/chunter-resources'))
  addLocation(recruitId, () => import(/* webpackChunkName: "recruit" */ '@digitranslab/recruit-resources'))
  addLocation(activityId, () => import(/*webpackChunkName: "activity" */ '@digitranslab/activity-resources'))
  addLocation(settingId, () => import(/* webpackChunkName: "setting" */ '@digitranslab/setting-resources'))
  addLocation(leadId, () => import(/* webpackChunkName: "lead" */ '@digitranslab/lead-resources'))
  addLocation(telegramId, () => import(/* webpackChunkName: "telegram" */ '@digitranslab/telegram-resources'))
  addLocation(attachmentId, () => import(/* webpackChunkName: "attachment" */ '@digitranslab/attachment-resources'))
  addLocation(gmailId, () => import(/* webpackChunkName: "gmail" */ '@digitranslab/gmail-resources'))
  addLocation(imageCropperId, () => import(/* webpackChunkName: "image-cropper" */ '@digitranslab/image-cropper-resources'))
  addLocation(inventoryId, () => import(/* webpackChunkName: "inventory" */ '@digitranslab/inventory-resources'))
  addLocation(templatesId, () => import(/* webpackChunkName: "templates" */ '@digitranslab/templates-resources'))
  addLocation(notificationId, () => import(/* webpackChunkName: "notification" */ '@digitranslab/notification-resources'))
  addLocation(tagsId, () => import(/* webpackChunkName: "tags" */ '@digitranslab/tags-resources'))
  addLocation(calendarId, () => import(/* webpackChunkName: "calendar" */ '@digitranslab/calendar-resources'))
  addLocation(diffviewId, () => import(/* webpackChunkName: "diffview" */ '@digitranslab/diffview-resources'))
  addLocation(timeId, () => import(/* webpackChunkName: "time" */ '@digitranslab/time-resources'))
  addLocation(desktopPreferencesId, () => import(/* webpackChunkName: "desktop-preferences" */ '@digitranslab/desktop-preferences-resources'))
  addLocation(analyticsCollectorId, async () => await import('@digitranslab/analytics-collector-resources'))
  addLocation(aiBotId, async () => await import('@digitranslab/ai-bot-resources'))

  addLocation(trackerId, () => import(/* webpackChunkName: "tracker" */ '@digitranslab/tracker-resources'))
  addLocation(boardId, () => import(/* webpackChunkName: "board" */ '@digitranslab/board-resources'))
  addLocation(hrId, () => import(/* webpackChunkName: "hr" */ '@digitranslab/hr-resources'))
  addLocation(bitrixId, () => import(/* webpackChunkName: "bitrix" */ '@digitranslab/bitrix-resources'))
  addLocation(requestId, () => import(/* webpackChunkName: "request" */ '@digitranslab/request-resources'))
  addLocation(driveId, () => import(/* webpackChunkName: "drive" */ '@digitranslab/drive-resources'))
  addLocation(supportId, () => import(/* webpackChunkName: "support" */ '@digitranslab/support-resources'))

  addLocation(documentId, () => import(/* webpackChunkName: "document" */ '@digitranslab/document-resources'))
  addLocation(githubId, () => import(/* webpackChunkName: "github" */ '@digitranslab/github-resources'))
  addLocation(questionsId, () => import(/* webpackChunkName: "training" */ '@digitranslab/questions-resources'))
  addLocation(trainingId, () => import(/* webpackChunkName: "training" */ '@digitranslab/training-resources'))
  addLocation(productsId, () => import(/* webpackChunkName: "products" */ '@digitranslab/products-resources'))
  addLocation(documentsId, () => import(/* webpackChunkName: "documents" */ '@digitranslab/controlled-documents-resources'))
  addLocation(guestId, () => import(/* webpackChunkName: "guest" */ '@digitranslab/guest-resources'))
  addLocation(loveId, () => import(/* webpackChunkName: "love" */ '@digitranslab/love-resources'))
  addLocation(printId, () => import(/* webpackChunkName: "print" */ '@digitranslab/print-resources'))
  addLocation(textEditorId, () => import(/* webpackChunkName: "text-editor" */ '@digitranslab/text-editor-resources'))
  addLocation(uploaderId, () => import(/* webpackChunkName: "uploader" */ '@digitranslab/uploader-resources'))
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
}
