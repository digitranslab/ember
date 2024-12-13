//
// Copyright © 2023 Digitrans Inc.
//
//

import client, { ClientSocket } from '@digitranslab/client'
import clientResources from '@digitranslab/client-resources'
import { Client, ClientConnectEvent } from '@digitranslab/core'
import { setMetadata } from '@digitranslab/platform'
import { getTransactorEndpoint } from '@digitranslab/server-client'
import serverToken, { generateToken } from '@digitranslab/server-token'
import WebSocket from 'ws'
import config from './config'

/**
 * @public
 */
export async function createPlatformClient (
  workspace: string,
  timeout: number,
  reconnect?: (event: ClientConnectEvent, data: any) => Promise<void>
): Promise<Client> {
  setMetadata(client.metadata.ClientSocketFactory, (url) => {
    return new WebSocket(url, {
      headers: {
        'User-Agent': config.ServiceID
      }
    }) as never as ClientSocket
  })

  setMetadata(serverToken.metadata.Secret, config.ServerSecret)
  const token = generateToken(
    config.SystemEmail,
    {
      name: workspace
    },
    { mode: 'github' }
  )
  setMetadata(client.metadata.ConnectionTimeout, timeout)
  setMetadata(client.metadata.FilterModel, 'client')
  const endpoint = await getTransactorEndpoint(token)
  const connection = await (
    await clientResources()
  ).function.GetClient(token, endpoint, {
    onConnect: reconnect
  })

  return connection
}
