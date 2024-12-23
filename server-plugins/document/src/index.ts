//
// Copyright © 2023 Digitrans Inc.
//
//

import { Doc } from '@digitranslab/core'
import type { Plugin, Resource } from '@digitranslab/platform'
import { plugin } from '@digitranslab/platform'
import { ObjectDDParticipantFunc } from '@digitranslab/server-core'
import { Presenter } from '@digitranslab/server-notification'

/**
 * @public
 */
export const serverDocumentId = 'server-document' as Plugin

/**
 * @public
 */
export default plugin(serverDocumentId, {
  function: {
    DocumentHTMLPresenter: '' as Resource<Presenter>,
    DocumentTextPresenter: '' as Resource<Presenter>,
    DocumentLinkIdProvider: '' as Resource<(doc: Doc) => Promise<string>>,
    FindChildDocuments: '' as Resource<ObjectDDParticipantFunc>
  }
})
