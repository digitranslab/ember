//
// Copyright © 2023 Digitrans Inc.
//
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

import { Analytics } from '@digitranslab/analytics'
import { configureAnalytics, SplitLogger } from '@digitranslab/analytics-service'
import { startCollaborator } from '@digitranslab/collaborator'
import { MeasureMetricsContext, newMetrics } from '@digitranslab/core'
import { initStatisticsContext } from '@digitranslab/server-core'
import { join } from 'path'

configureAnalytics(process.env.SENTRY_DSN, {})
Analytics.setTag('application', 'collaborator')

const metricsContext = initStatisticsContext('collaborator', {
  factory: () =>
    new MeasureMetricsContext(
      'collaborator',
      {},
      {},
      newMetrics(),
      new SplitLogger('collaborator', {
        root: join(process.cwd(), 'logs'),
        enableConsole: (process.env.ENABLE_CONSOLE ?? 'true') === 'true'
      })
    )
})

void startCollaborator(metricsContext, () => {})