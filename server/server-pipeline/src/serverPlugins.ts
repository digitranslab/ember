import { addLocation } from '@digitranslab/platform'
import { serverActivityId } from '@digitranslab/server-activity'
import { serverAttachmentId } from '@digitranslab/server-attachment'
import { serverCalendarId } from '@digitranslab/server-calendar'
import { serverChunterId } from '@digitranslab/server-chunter'
import { serverCollaborationId } from '@digitranslab/server-collaboration'
import { serverContactId } from '@digitranslab/server-contact'
import { serverDocumentsId } from '@digitranslab/server-controlled-documents'
import { serverDocumentId } from '@digitranslab/server-document'
import { serverDriveId } from '@digitranslab/server-drive'
import { serverGithubId } from '@digitranslab/server-github'
import { serverGmailId } from '@digitranslab/server-gmail'
import { serverGuestId } from '@digitranslab/server-guest'
import { serverHrId } from '@digitranslab/server-hr'
import { serverInventoryId } from '@digitranslab/server-inventory'
import { serverLeadId } from '@digitranslab/server-lead'
import { serverLoveId } from '@digitranslab/server-love'
import { serverNotificationId } from '@digitranslab/server-notification'
import { serverRecruitId } from '@digitranslab/server-recruit'
import { serverRequestId } from '@digitranslab/server-request'
import { serverSettingId } from '@digitranslab/server-setting'
import { serverTagsId } from '@digitranslab/server-tags'
import { serverTaskId } from '@digitranslab/server-task'
import { serverTelegramId } from '@digitranslab/server-telegram'
import { serverTimeId } from '@digitranslab/server-time'
import { serverTrackerId } from '@digitranslab/server-tracker'
import { serverTrainingId } from '@digitranslab/server-training'
import { serverViewId } from '@digitranslab/server-view'
import { serverAiBotId } from '@digitranslab/server-ai-bot'
import { serverFulltextId } from '@digitranslab/server-fulltext'

export function registerServerPlugins (): void {
  addLocation(serverActivityId, () => import('@digitranslab/server-activity-resources'))
  addLocation(serverAttachmentId, () => import('@digitranslab/server-attachment-resources'))
  addLocation(serverCollaborationId, () => import('@digitranslab/server-collaboration-resources'))
  addLocation(serverContactId, () => import('@digitranslab/server-contact-resources'))
  addLocation(serverNotificationId, () => import('@digitranslab/server-notification-resources'))
  addLocation(serverSettingId, () => import('@digitranslab/server-setting-resources'))
  addLocation(serverChunterId, () => import('@digitranslab/server-chunter-resources'))
  addLocation(serverInventoryId, () => import('@digitranslab/server-inventory-resources'))
  addLocation(serverLeadId, () => import('@digitranslab/server-lead-resources'))
  addLocation(serverRecruitId, () => import('@digitranslab/server-recruit-resources'))
  addLocation(serverTaskId, () => import('@digitranslab/server-task-resources'))
  addLocation(serverTrackerId, () => import('@digitranslab/server-tracker-resources'))
  addLocation(serverTagsId, () => import('@digitranslab/server-tags-resources'))
  addLocation(serverCalendarId, () => import('@digitranslab/server-calendar-resources'))
  addLocation(serverGmailId, () => import('@digitranslab/server-gmail-resources'))
  addLocation(serverTelegramId, () => import('@digitranslab/server-telegram-resources'))
  addLocation(serverRequestId, () => import('@digitranslab/server-request-resources'))
  addLocation(serverViewId, () => import('@digitranslab/server-view-resources'))
  addLocation(serverHrId, () => import('@digitranslab/server-hr-resources'))
  addLocation(serverLoveId, () => import('@digitranslab/server-love-resources'))
  addLocation(serverGuestId, () => import('@digitranslab/server-guest-resources'))
  addLocation(serverDocumentId, () => import('@digitranslab/server-document-resources'))
  addLocation(serverTimeId, () => import('@digitranslab/server-time-resources'))
  addLocation(serverDriveId, () => import('@digitranslab/server-drive-resources'))
  addLocation(serverDocumentsId, () => import('@digitranslab/server-controlled-documents-resources'))
  addLocation(serverTrainingId, () => import('@digitranslab/server-training-resources'))
  addLocation(serverGithubId, () => import('@digitranslab/server-github-resources'))
  addLocation(serverAiBotId, () => import('@digitranslab/server-ai-bot-resources'))
  addLocation(serverFulltextId, () => import('@digitranslab/server-fulltext-resources'))
}
