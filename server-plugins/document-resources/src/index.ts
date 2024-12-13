//
// Copyright © 2024 Digitrans Inc.
//
//

import { Class, Doc, DocumentQuery, FindOptions, FindResult, Hierarchy, Ref, concatLink } from '@digitranslab/core'
import document, { Document, documentId } from '@digitranslab/document'
import { getMetadata } from '@digitranslab/platform'
import { workbenchId } from '@digitranslab/workbench'
import serverCore, { TriggerControl } from '@digitranslab/server-core'
import slugify from 'slugify'

function getDocumentId (doc: Document): string {
  const slug = slugify(doc.title, { lower: true })
  return `${slug}-${doc._id}`
}

/**
 * @public
 */
export async function documentHTMLPresenter (doc: Doc, control: TriggerControl): Promise<string> {
  const document = doc as Document
  const front = control.branding?.front ?? getMetadata(serverCore.metadata.FrontUrl) ?? ''
  const path = `${workbenchId}/${control.workspace.workspaceUrl}/${documentId}/${getDocumentId(document)}`
  const link = concatLink(front, path)
  return `<a href="${link}">${document.title}</a>`
}

export async function documentLinkIdProvider (doc: Document): Promise<string> {
  return getDocumentId(doc)
}

/**
 * @public
 */
export async function documentTextPresenter (doc: Doc): Promise<string> {
  const document = doc as Document
  return document.title
}

/**
 * @public
 */
export async function findChildDocuments (
  doc: Doc,
  hiearachy: Hierarchy,
  findAll: <T extends Doc>(
    clazz: Ref<Class<T>>,
    query: DocumentQuery<T>,
    options?: FindOptions<T>
  ) => Promise<FindResult<T>>
): Promise<Doc[]> {
  return await findAll(document.class.Document, { parent: doc._id as Ref<Document> })
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async () => ({
  function: {
    DocumentHTMLPresenter: documentHTMLPresenter,
    DocumentTextPresenter: documentTextPresenter,
    DocumentLinkIdProvider: documentLinkIdProvider,
    FindChildDocuments: findChildDocuments
  }
})