//
// Copyright @ 2024 Digitrans Inc.
//

import { isEnum } from '@digitranslab/core'
import { trainingId, TrainingSpecialIds } from '@digitranslab/training'
import { getCurrentLocation, type Location } from '@digitranslab/ui'
import type { Route, RouteParams } from '../utils/Route'

export enum MyResultsRouteTab {
  Draft = 'draft',
  Passed = 'passed',
  Failed = 'failed',
  All = 'all'
}

export interface MyResultsRouteParams extends RouteParams {
  tab: MyResultsRouteTab | null
}

export const myResultsRoute: Route<MyResultsRouteParams> = {
  build (params: MyResultsRouteParams): Location {
    const location = getCurrentLocation()
    return {
      ...location,
      path: [
        location.path[0],
        location.path[1],
        trainingId,
        TrainingSpecialIds.MyResults,
        ...(params.tab === null ? [] : [params.tab])
      ]
    }
  },

  match: (location: Location) =>
    location.path[2] === trainingId && location.path[3] === TrainingSpecialIds.MyResults
      ? { tab: isEnum(MyResultsRouteTab)(location.path[4]) ? location.path[4] : null }
      : null,

  resolve: async () => null
}
