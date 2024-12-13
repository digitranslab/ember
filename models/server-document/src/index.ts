//
// Copyright © 2023 Digitrans Inc.
//
//

import { type Builder } from '@digitranslab/model'

import core, { type Class, type Doc } from '@digitranslab/core'
import document from '@digitranslab/document'
import serverCore, { type ObjectDDParticipant } from '@digitranslab/server-core'
import serverDocument from '@digitranslab/server-document'
import serverNotification from '@digitranslab/server-notification'
import serverView from '@digitranslab/server-view'

export { serverDocumentId } from '@digitranslab/server-document'

export function createModel (builder: Builder): void {
  builder.mixin(document.class.Document, core.class.Class, serverNotification.mixin.HTMLPresenter, {
    presenter: serverDocument.function.DocumentHTMLPresenter
  })

  builder.mixin(document.class.Document, core.class.Class, serverNotification.mixin.TextPresenter, {
    presenter: serverDocument.function.DocumentTextPresenter
  })

  builder.mixin(document.class.Document, core.class.Class, serverView.mixin.ServerLinkIdProvider, {
    encode: serverDocument.function.DocumentLinkIdProvider
  })

  builder.mixin(document.class.Document, core.class.Class, serverCore.mixin.SearchPresenter, {
    iconConfig: {
      component: document.component.DocumentSearchIcon,
      fields: [['icon'], ['color']]
    },
    title: [['title']]
  })

  builder.mixin<Class<Doc>, ObjectDDParticipant>(
    document.class.Document,
    core.class.Class,
    serverCore.mixin.ObjectDDParticipant,
    {
      collectDocs: serverDocument.function.FindChildDocuments
    }
  )
}
