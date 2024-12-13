//
// Copyright © 2023 Digitrans Inc.
//
import { serveAccount } from '@digitranslab/account-service'
import { Analytics } from '@digitranslab/analytics'
import { configureAnalytics, SplitLogger } from '@digitranslab/analytics-service'
import { MeasureMetricsContext, newMetrics } from '@digitranslab/core'
import { initStatisticsContext, loadBrandingMap } from '@digitranslab/server-core'
import { join } from 'path'

configureAnalytics(process.env.SENTRY_DSN, {})
Analytics.setTag('application', 'account')

const metricsContext = initStatisticsContext('account', {
  factory: () =>
    new MeasureMetricsContext(
      'account',
      {},
      {},
      newMetrics(),
      new SplitLogger('account', {
        root: join(process.cwd(), 'logs'),
        enableConsole: (process.env.ENABLE_CONSOLE ?? 'true') === 'true'
      })
    )
})

const brandingPath = process.env.BRANDING_PATH

serveAccount(metricsContext, loadBrandingMap(brandingPath), () => {})
