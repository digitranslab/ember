import type { Ref } from '@digitranslab/core'
import type { DisplayInboxNotification, DocNotifyContext } from '@digitranslab/notification'
import type { IntlString } from '@digitranslab/platform'

export type InboxNotificationsFilter = 'all' | 'unread'

export type InboxData = Map<Ref<DocNotifyContext>, DisplayInboxNotification[]>

export interface SettingItem {
  id: string
  on: boolean
  label: IntlString
  onToggle: () => void
}
