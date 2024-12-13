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

import { addLocation } from '@digitranslab/platform'

import login, { loginId } from '@digitranslab/login'
import workbench, { workbenchId } from '@digitranslab/workbench'
import uiPlugin from '@digitranslab/ui'
import { viewId } from '@digitranslab/view'
import { taskId } from '@digitranslab/task'
import contact, { contactId } from '@digitranslab/contact'
import { chunterId } from '@digitranslab/chunter'
import { activityId } from '@digitranslab/activity'
import { settingId } from '@digitranslab/setting'
import telegram, { telegramId } from '@digitranslab/telegram'
import { attachmentId } from '@digitranslab/attachment'
import client, { clientId } from '@digitranslab/client'
import gmail, { gmailId } from '@digitranslab/gmail'
import { imageCropperId } from '@digitranslab/image-cropper'
import { templatesId } from '@digitranslab/templates'
import { notificationId } from '@digitranslab/notification'
import { calendarId } from '@digitranslab/calendar'
import { trackerId } from '@digitranslab/tracker'

import '@digitranslab/login-assets'
import '@digitranslab/task-assets'
import '@digitranslab/view-assets'
import '@digitranslab/chunter-assets'
import '@digitranslab/attachment-assets'
import '@digitranslab/contact-assets'
import '@digitranslab/activity-assets'
import '@digitranslab/setting-assets'
import '@digitranslab/telegram-assets'
import '@digitranslab/gmail-assets'
import '@digitranslab/workbench-assets'
import '@digitranslab/templates-assets'
import '@digitranslab/notification-assets'
import '@digitranslab/preference-assets'
import '@digitranslab/tracker-assets'
import presentation, { presentationId } from '@digitranslab/presentation'
import { coreId } from '@digitranslab/core'
import { textEditorId } from '@digitranslab/text-editor'

import { setMetadata } from '@digitranslab/platform'

export async function configurePlatform() {
  const config = await (await fetch('/config.json')).json()
  console.log('loading configuration', config)
  setMetadata(login.metadata.AccountsUrl, config.ACCOUNTS_URL)

  if (config.MODEL_VERSION != null) {
    console.log('Minimal Model version requirement', config.MODEL_VERSION)
    setMetadata(presentation.metadata.RequiredVersion, config.MODEL_VERSION)
  }
  setMetadata(telegram.metadata.TelegramURL, process.env.TELEGRAM_URL ?? 'http://localhost:8086')
  setMetadata(telegram.metadata.BotUrl, process.TELEGRAM_BOT_URL ?? 'http://localhost:4020')
  setMetadata(gmail.metadata.GmailURL, process.env.GMAIL_URL ?? 'http://localhost:8087')

  setMetadata(uiPlugin.metadata.DefaultApplication, workbench.component.WorkbenchApp)
  setMetadata(workbench.metadata.ExcludedApplications, [contact.app.Contacts])

  setMetadata(
    uiPlugin.metadata.Routes,
    new Map([
      [workbenchId, workbench.component.WorkbenchApp],
      [loginId, login.component.LoginApp]
    ])
  )

  addLocation(coreId, async () => ({ default: async () => ({}) }))
  addLocation(presentationId, async () => ({ default: async () => ({}) }))

  addLocation(clientId, () => import(/* webpackChunkName: "client" */ '@digitranslab/client-resources'))
  addLocation(loginId, () => import(/* webpackChunkName: "login" */ '@digitranslab/login-resources'))
  addLocation(workbenchId, () => import(/* webpackChunkName: "workbench" */ '@digitranslab/workbench-resources'))
  addLocation(viewId, () => import(/* webpackChunkName: "view" */ '@digitranslab/view-resources'))
  addLocation(taskId, () => import(/* webpackChunkName: "task" */ '@digitranslab/task-resources'))
  addLocation(contactId, () => import(/* webpackChunkName: "contact" */ '@digitranslab/contact-resources'))
  addLocation(chunterId, () => import(/* webpackChunkName: "chunter" */ '@digitranslab/chunter-resources'))
  addLocation(activityId, () => import(/*webpackChunkName: "activity" */ '@digitranslab/activity-resources'))
  addLocation(settingId, () => import(/* webpackChunkName: "setting" */ '@digitranslab/setting-resources'))
  addLocation(telegramId, () => import(/* webpackChunkName: "telegram" */ '@digitranslab/telegram-resources'))
  addLocation(attachmentId, () => import(/* webpackChunkName: "attachment" */ '@digitranslab/attachment-resources'))
  addLocation(gmailId, () => import(/* webpackChunkName: "gmail" */ '@digitranslab/gmail-resources'))
  addLocation(imageCropperId, () => import(/* webpackChunkName: "image-cropper" */ '@digitranslab/image-cropper-resources'))
  addLocation(templatesId, () => import(/* webpackChunkName: "templates" */ '@digitranslab/templates-resources'))
  addLocation(notificationId, () => import(/* webpackChunkName: "notification" */ '@digitranslab/notification-resources'))
  addLocation(calendarId, () => import(/* webpackChunkName: "calendar" */ '@digitranslab/calendar-resources'))

  addLocation(trackerId, () => import(/* webpackChunkName: "tracker" */ '@digitranslab/tracker-resources'))
  addLocation(textEditorId, () => import(/* webpackChunkName: "text-editor" */ '@digitranslab/text-editor-resources'))
  setMetadata(uiPlugin.metadata.PlatformTitle, 'Tracker')
  setMetadata(workbench.metadata.PlatformTitle, 'Tracker')

  setMetadata(client.metadata.FilterModel, 'ui')
}
