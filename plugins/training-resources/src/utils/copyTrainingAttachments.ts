//
// Copyright @ 2024 Digitrans Inc.
//

import type { Training } from '@digitranslab/training'
import attachment, { type Attachment } from '@digitranslab/attachment'
import type { Ref, TxOperations } from '@digitranslab/core'

/**
 * Copy attachments metadata, not files. It should only be detached on remove rather than deleted.
 */
export async function copyTrainingAttachments (ops: TxOperations, from: Training, to: Ref<Training>): Promise<void> {
  const attachments = await ops.findAll<Attachment>(attachment.class.Attachment, {
    attachedTo: from._id,
    attachedToClass: from._class,
    space: from.space,
    collection: 'attachments'
  })

  await Promise.all(
    attachments.map(
      async (attachment) =>
        await ops.addCollection(
          attachment._class,
          attachment.space,
          to,
          attachment.attachedToClass,
          attachment.collection,
          {
            name: attachment.name,
            file: attachment.file,
            type: attachment.type,
            size: attachment.size,
            lastModified: attachment.lastModified
          }
        )
    )
  )
}
