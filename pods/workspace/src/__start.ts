//
// Copyright © 2023 Digitrans Inc.
//
import { Analytics } from '@digitranslab/analytics'
import { configureAnalytics, SplitLogger } from '@digitranslab/analytics-service'
import { MeasureMetricsContext, newMetrics, type Tx } from '@digitranslab/core'
import builder, { getModelVersion, migrateOperations } from '@digitranslab/model-all'
import { initStatisticsContext, loadBrandingMap } from '@digitranslab/server-core'
import { serveWorkspaceAccount } from '@digitranslab/workspace-service'
import { join } from 'path'

const enabled = (process.env.MODEL_ENABLED ?? '*').split(',').map((it) => it.trim())
const disabled = (process.env.MODEL_DISABLED ?? '').split(',').map((it) => it.trim())

const txes = JSON.parse(JSON.stringify(builder(enabled, disabled).getTxes())) as Tx[]

configureAnalytics(process.env.SENTRY_DSN, {})
Analytics.setTag('application', 'workspace')

// Force create server metrics context with proper logging
const metricsContext = initStatisticsContext('workspace', {
  factory: () =>
    new MeasureMetricsContext(
      'workspace',
      {},
      {},
      newMetrics(),
      new SplitLogger('workspace', {
        root: join(process.cwd(), 'logs'),
        enableConsole: (process.env.ENABLE_CONSOLE ?? 'true') === 'true'
      })
    )
})

const brandingPath = process.env.BRANDING_PATH

serveWorkspaceAccount(
  metricsContext,
  getModelVersion(),
  txes,
  migrateOperations,
  loadBrandingMap(brandingPath),
  () => {}
)
