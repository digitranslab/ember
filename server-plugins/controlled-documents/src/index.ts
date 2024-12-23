//
// Copyright © 2023 Digitrans Inc.
//
//

import type { Plugin, Resource } from '@digitranslab/platform'
import { plugin } from '@digitranslab/platform'
import { TriggerFunc } from '@digitranslab/server-core'
import { Presenter } from '@digitranslab/server-notification'

/**
 * @public
 */
export const serverDocumentsId = 'server-documents' as Plugin

/**
 * @public
 */
export default plugin(serverDocumentsId, {
  trigger: {
    OnDocDeleted: '' as Resource<TriggerFunc>,
    OnDocPlannedEffectiveDateChanged: '' as Resource<TriggerFunc>,
    OnDocApprovalRequestApproved: '' as Resource<TriggerFunc>,
    OnDocHasBecomeEffective: '' as Resource<TriggerFunc>,
    OnWorkspaceOwnerAdded: '' as Resource<TriggerFunc>
  },
  function: {
    ControlledDocumentTextPresenter: '' as Resource<Presenter>
  }
})
