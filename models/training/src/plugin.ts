//
// Copyright © 2024 Digitrans Inc.
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

import type { NotificationGroup, NotificationType } from '@digitranslab/notification'
import { trainingId } from '@digitranslab/training'
import training from '@digitranslab/training-resources/src/plugin'
import { mergeIds, type Resource } from '@digitranslab/platform'
import { type Doc, type Ref } from '@digitranslab/core'
import { type Location, type ResolvedLocation } from '@digitranslab/ui'
import { type Application } from '@digitranslab/workbench'
import { type ActionCategory } from '@digitranslab/view'

export default mergeIds(trainingId, training, {
  app: {
    Training: '' as Ref<Application>
  },
  actionCategory: {
    Training: '' as Ref<ActionCategory>
  },
  notification: {
    TrainingGroup: '' as Ref<NotificationGroup>,
    TrainingRequest: '' as Ref<NotificationType>
  },

  // TODO: Move function resources declarations to plugins/*-resources
  //  Currently, dependencies look like this:
  //    models/*/src/index.ts
  //      → models/*/src/plugin.ts
  //        → plugins/*-resources/src/plugin.ts
  //          → plugins/*/src/plugin.ts
  //  For unknown reasons in plugins/*-resources we can declare component resources that depend on Svelte,
  //  but not function (incl. location resolver) resources that depend on UI (particularly on Location and ResolvedLocation).
  //  The build fails saying:
  //    > The inferred type of 'default' cannot be named without a reference to '[..]/node_modules/@digitranslab/ui/src'.
  //    > This is likely not portable. A type annotation is necessary.

  function: {
    TrainingAttemptLinkProviderEncode: '' as Resource<(doc: Doc, props: Record<string, any>) => Promise<Location>>,
    TrainingLinkProviderEncode: '' as Resource<(doc: Doc, props: Record<string, any>) => Promise<Location>>,
    TrainingRequestLinkProviderEncode: '' as Resource<(doc: Doc, props: Record<string, any>) => Promise<Location>>
  },
  resolver: {
    Location: '' as Resource<(location: Location) => Promise<ResolvedLocation | undefined>>
  }
})
