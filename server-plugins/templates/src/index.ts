//
// Copyright © 2020, 2021 Anticrm Platform Contributors.
// Copyright © 2021, 2022 Digitrans Inc.
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

import { Ref, Mixin, Doc } from '@digitranslab/core'
import type { Plugin, Resource } from '@digitranslab/platform'
import { plugin } from '@digitranslab/platform'
import { type TriggerControl } from '@digitranslab/server-core'
import { TemplateField } from '@digitranslab/templates'

export type TemplateFieldServerFunc = (
  control: TriggerControl,
  context: Record<string, Doc>
) => Promise<string | undefined>

export interface ServerTemplateField extends TemplateField {
  serverFunc: Resource<TemplateFieldServerFunc>
}

/**
 * @public
 */
export const serverTemplatesId = 'server-templates' as Plugin

/**
 * @public
 */
export default plugin(serverTemplatesId, {
  mixin: {
    ServerTemplateField: '' as Ref<Mixin<ServerTemplateField>>
  }
})