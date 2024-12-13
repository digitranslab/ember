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

import { plugin, type Plugin, type Resource } from '@digitranslab/platform'
import { type Presenter, TypeMatchFunc } from '@digitranslab/server-notification'
import type { TrainingRequest } from '@digitranslab/training'

/**
 * @public
 */
export const serverTrainingId = 'server-training' as Plugin

/**
 * @public
 */
export default plugin(serverTrainingId, {
  function: {
    TrainingRequestHTMLPresenter: '' as Resource<Presenter<TrainingRequest>>,
    TrainingRequestNotificationTypeMatch: '' as TypeMatchFunc,
    TrainingRequestTextPresenter: '' as Resource<Presenter<TrainingRequest>>
  }
})