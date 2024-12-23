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

import { analyticsCollectorId } from '@digitranslab/analytics-collector'
import { calendarId } from '@digitranslab/calendar'
import { chunterId } from '@digitranslab/chunter'
import { contactId } from '@digitranslab/contact'
import { coreId } from '@digitranslab/core'
import { documentId } from '@digitranslab/document'
import { driveId } from '@digitranslab/drive'
import { hrId } from '@digitranslab/hr'
import { leadId } from '@digitranslab/lead'
import { loveId } from '@digitranslab/love'
import { notificationId } from '@digitranslab/notification'
import { preferenceId } from '@digitranslab/preference'
import { recruitId } from '@digitranslab/recruit'
import { settingId } from '@digitranslab/setting'
import { timeId } from '@digitranslab/time'
import { trackerId } from '@digitranslab/tracker'
import { viewId } from '@digitranslab/view'
import { workbenchId } from '@digitranslab/workbench'

import analyticsCollectorEn from '@digitranslab/analytics-collector-assets/lang/en.json'
import calendarEn from '@digitranslab/calendar-assets/lang/en.json'
import chunterEn from '@digitranslab/chunter-assets/lang/en.json'
import contactEn from '@digitranslab/contact-assets/lang/en.json'
import coreEng from '@digitranslab/core/lang/en.json'
import documentEn from '@digitranslab/document-assets/lang/en.json'
import driveEn from '@digitranslab/drive-assets/lang/en.json'
import hrEn from '@digitranslab/hr-assets/lang/en.json'
import leadEn from '@digitranslab/lead-assets/lang/en.json'
import loveEn from '@digitranslab/love-assets/lang/en.json'
import notificationEn from '@digitranslab/notification-assets/lang/en.json'
import platformEng from '@digitranslab/platform/lang/en.json'
import preferenceEn from '@digitranslab/preference-assets/lang/en.json'
import recruitEn from '@digitranslab/recruit-assets/lang/en.json'
import settingEn from '@digitranslab/setting-assets/lang/en.json'
import timeEn from '@digitranslab/time-assets/lang/en.json'
import trackerEn from '@digitranslab/tracker-assets/lang/en.json'
import viewEn from '@digitranslab/view-assets/lang/en.json'
import workbenchEn from '@digitranslab/workbench-assets/lang/en.json'

import { addStringsLoader, platformId } from '@digitranslab/platform'

export function registerLoaders (): void {
  addStringsLoader(coreId, async (lang: string) => coreEng)
  addStringsLoader(platformId, async (lang: string) => platformEng)

  addStringsLoader(analyticsCollectorId, async (lang: string) => analyticsCollectorEn)
  addStringsLoader(calendarId, async (lang: string) => calendarEn)
  addStringsLoader(chunterId, async (lang: string) => chunterEn)
  addStringsLoader(contactId, async (lang: string) => contactEn)
  addStringsLoader(documentId, async (lang: string) => documentEn)
  addStringsLoader(driveId, async (lang: string) => driveEn)
  addStringsLoader(hrId, async (lang: string) => hrEn)
  addStringsLoader(leadId, async (lang: string) => leadEn)
  addStringsLoader(loveId, async (lang: string) => loveEn)
  addStringsLoader(notificationId, async (lang: string) => notificationEn)
  addStringsLoader(preferenceId, async (lang: string) => preferenceEn)
  addStringsLoader(recruitId, async (lang: string) => recruitEn)
  addStringsLoader(settingId, async (lang: string) => settingEn)
  addStringsLoader(timeId, async (lang: string) => timeEn)
  addStringsLoader(trackerId, async (lang: string) => trackerEn)
  addStringsLoader(viewId, async (lang: string) => viewEn)
  addStringsLoader(workbenchId, async (lang: string) => workbenchEn)
}
