//
// Copyright © 2024 Digitrans Inc.
//

import core, { Doc, TxOperations } from '@digitranslab/core'
import { type Location } from '@digitranslab/ui'

import guest from './index'

export async function createPublicLink (
  client: TxOperations,
  object: Doc,
  location: Location,
  revokable: boolean = true
): Promise<void> {
  await client.createDoc(guest.class.PublicLink, core.space.Workspace, {
    attachedTo: object._id,
    location,
    revokable,
    restrictions: {
      readonly: true,
      disableNavigation: true,
      disableActions: true,
      disableComments: true
    },
    url: ''
  })
}
