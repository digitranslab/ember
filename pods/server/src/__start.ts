//
// Copyright © 2023 Digitrans Inc
//

// Add this to the VERY top of the first file loaded in your app
import { Analytics } from '@digitranslab/analytics'
import { SplitLogger, configureAnalytics } from '@digitranslab/analytics-service'
import contactPlugin from '@digitranslab/contact'
import { MeasureMetricsContext, newMetrics, setOperationLogProfiling } from '@digitranslab/core'
import notification from '@digitranslab/notification'
import { setMetadata } from '@digitranslab/platform'
import { serverConfigFromEnv } from '@digitranslab/server'
import serverAiBot from '@digitranslab/server-ai-bot'
import serverCore, {
  type ConnectionSocket,
  type Session,
  type StorageConfiguration,
  type UserStatistics,
  type Workspace,
  type WorkspaceStatistics,
  initStatisticsContext,
  loadBrandingMap
} from '@digitranslab/server-core'
import serverNotification from '@digitranslab/server-notification'
import { storageConfigFromEnv } from '@digitranslab/server-storage'
import serverTelegram from '@digitranslab/server-telegram'
import serverToken from '@digitranslab/server-token'
import { startHttpServer } from '@digitranslab/server-ws'
import { join } from 'path'
import { start } from '.'
import { profileStart, profileStop } from './inspector'

configureAnalytics(process.env.SENTRY_DSN, {})
Analytics.setTag('application', 'transactor')

let getUsers: () => WorkspaceStatistics[] = () => {
  return []
}
// Force create server metrics context with proper logging
const metricsContext = initStatisticsContext('transactor', {
  getUsers: (): WorkspaceStatistics[] => {
    return getUsers()
  },
  factory: () =>
    new MeasureMetricsContext(
      'server',
      {},
      {},
      newMetrics(),
      new SplitLogger('server', {
        root: join(process.cwd(), 'logs'),
        enableConsole: (process.env.ENABLE_CONSOLE ?? 'true') === 'true'
      })
    )
})

setOperationLogProfiling(process.env.OPERATION_PROFILING === 'true')

const config = serverConfigFromEnv()
const storageConfig: StorageConfiguration = storageConfigFromEnv()

const lastNameFirst = process.env.LAST_NAME_FIRST === 'true'
setMetadata(contactPlugin.metadata.LastNameFirst, lastNameFirst)
setMetadata(serverCore.metadata.FrontUrl, config.frontUrl)
setMetadata(serverCore.metadata.FilesUrl, config.filesUrl)
setMetadata(serverToken.metadata.Secret, config.serverSecret)
setMetadata(serverNotification.metadata.SesUrl, config.sesUrl ?? '')
setMetadata(notification.metadata.PushPublicKey, config.pushPublicKey)
setMetadata(serverNotification.metadata.PushPrivateKey, config.pushPrivateKey)
setMetadata(serverNotification.metadata.PushSubject, config.pushSubject)
setMetadata(serverCore.metadata.ElasticIndexVersion, 'v1')
setMetadata(serverTelegram.metadata.BotUrl, process.env.TELEGRAM_BOT_URL)
setMetadata(serverAiBot.metadata.SupportWorkspaceId, process.env.SUPPORT_WORKSPACE)
setMetadata(serverAiBot.metadata.EndpointURL, process.env.AI_BOT_URL)

const { shutdown, sessionManager } = start(metricsContext, config.dbUrl, {
  fulltextUrl: config.fulltextUrl,
  storageConfig,
  port: config.serverPort,
  serverFactory: startHttpServer,
  brandingMap: loadBrandingMap(config.brandingPath),
  accountsUrl: config.accountsUrl,
  enableCompression: config.enableCompression,
  profiling: {
    start: profileStart,
    stop: profileStop
  },
  mongoUrl: config.mongoUrl
})

const entryToUserStats = (session: Session, socket: ConnectionSocket): UserStatistics => {
  return {
    current: session.current,
    mins5: session.mins5,
    userId: session.getUser(),
    sessionId: socket.id,
    total: session.total,
    data: socket.data
  }
}

const workspaceToWorkspaceStats = (ws: Workspace): WorkspaceStatistics => {
  return {
    clientsTotal: new Set(Array.from(ws.sessions.values()).map((it) => it.session.getUser())).size,
    sessionsTotal: ws.sessions.size,
    workspaceName: ws.workspaceName,
    wsId: ws.workspaceId.name,
    sessions: Array.from(ws.sessions.values()).map((it) => entryToUserStats(it.session, it.socket))
  }
}

getUsers = () => {
  return Array.from(sessionManager.workspaces.values()).map((it) => workspaceToWorkspaceStats(it))
}

const close = (): void => {
  console.trace('Exiting from server')
  console.log('Shutdown request accepted')
  void shutdown().then(() => {
    process.exit(0)
  })
}

process.on('unhandledRejection', (reason, promise) => {
  metricsContext.error('Unhandled Rejection at:', { origin, promise })
})

global.process.on('uncaughtException', (error, origin) => {
  metricsContext.error('Uncaught Exception at:', { origin, error })
})

process.on('SIGINT', close)
process.on('SIGTERM', close)
