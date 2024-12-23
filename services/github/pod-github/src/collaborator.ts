//
// Copyright © 2024 Digitrans Inc.
//
//

import { CollaboratorClient, getClient as getCollaboratorClient } from '@digitranslab/collaborator-client'
import { WorkspaceId } from '@digitranslab/core'
import { generateToken } from '@digitranslab/server-token'
import config from './config'

/**
 * @public
 */
export function createCollaboratorClient (workspaceId: WorkspaceId): CollaboratorClient {
  const token = generateToken(config.SystemEmail, workspaceId, { mode: 'github' })
  return getCollaboratorClient(workspaceId, token, config.CollaboratorURL)
}
