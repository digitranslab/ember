import { Employee } from '@digitranslab/contact'
import { Ref, WorkspaceId } from '@digitranslab/core'
import { DocumentSpace } from '@digitranslab/controlled-documents'
import { StorageAdapter } from '@digitranslab/server-core'

import { HtmlConversionBackend } from './convert/convert'

export interface Config {
  doc: string
  token: string
  collaborator?: string
  collaboratorURL: string
  uploadURL: string
  workspaceId: WorkspaceId
  owner: Ref<Employee>
  backend: HtmlConversionBackend
  space: Ref<DocumentSpace>
  storageAdapter: StorageAdapter
  specFile?: string
}
