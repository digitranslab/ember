//
// Copyright © 2022 Digitrans Inc.
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

import {
  type Class,
  type Doc,
  type DocIndexState,
  type DocumentUpdate,
  type FullTextSearchContext,
  type Hierarchy,
  type ModelDb,
  type Ref
} from '@digitranslab/core'

/**
 * @public
 */
export interface FullTextPipeline {
  hierarchy: Hierarchy
  model: ModelDb
  contexts: Map<Ref<Class<Doc>>, FullTextSearchContext>

  cancelling: boolean
}

/**
 * @public
 */
export type DocUpdateHandler = (doc: DocIndexState, update: DocumentUpdate<DocIndexState>) => Promise<void>
