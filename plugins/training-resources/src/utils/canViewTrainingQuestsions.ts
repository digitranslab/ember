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

import { checkMyPermission, permissionsStore } from '@digitranslab/view-resources'
import type { Training } from '@digitranslab/training'
import { get } from 'svelte/store'
import { canViewTraining } from './canViewTraining'
import { getCurrentEmployeeRef } from './getCurrentEmployeeRef'
import training from '../plugin'

export function canViewTrainingQuestions (object: Training): boolean {
  return (
    canViewTraining(object) &&
    (object.owner === getCurrentEmployeeRef() ||
      checkMyPermission(training.permission.ViewSomeoneElsesTrainingQuestions, object.space, get(permissionsStore)))
  )
}