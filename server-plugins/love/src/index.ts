import type { Plugin, Resource } from '@digitranslab/platform'
import { plugin } from '@digitranslab/platform'
import { TriggerFunc } from '@digitranslab/server-core'
import { Presenter } from '@digitranslab/server-notification'

/**
 * @public
 */
export const serverLoveId = 'server-love' as Plugin

/**
 * @public
 */
export default plugin(serverLoveId, {
  function: {
    MeetingMinutesHTMLPresenter: '' as Resource<Presenter>,
    MeetingMinutesTextPresenter: '' as Resource<Presenter>
  },
  trigger: {
    OnEmployee: '' as Resource<TriggerFunc>,
    OnUserStatus: '' as Resource<TriggerFunc>,
    OnParticipantInfo: '' as Resource<TriggerFunc>,
    OnInvite: '' as Resource<TriggerFunc>,
    OnKnock: '' as Resource<TriggerFunc>
  }
})
