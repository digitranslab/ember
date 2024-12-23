//
// Copyright © 2024 Digitrans Inc
//

import { type AnalyticProvider, Analytics } from "@digitranslab/analytics"
import { AnalyticsCollectorProvider } from './analytics/analyticsCollector'
import { PosthogAnalyticProvider } from "./analytics/posthog"
import { SentryAnalyticProvider } from "./analytics/sentry"
import { type Config } from "./platform"

export function configureAnalytics (config: Config) {
  const providers: AnalyticProvider[] = [
    new SentryAnalyticProvider,
    new PosthogAnalyticProvider,
    new AnalyticsCollectorProvider
  ]
  for (const provider of providers) {
    Analytics.init(provider, config)
  }
}