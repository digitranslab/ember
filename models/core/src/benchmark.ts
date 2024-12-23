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

import type { BenchmarkDoc } from '@digitranslab/core'
import { DOMAIN_BENCHMARK } from '@digitranslab/core'
import { Model, UX } from '@digitranslab/model'
import { getEmbeddedLabel } from '@digitranslab/platform'
import core from './component'
import { TDoc } from './core'

// B E N C H M A R K

@Model(core.class.BenchmarkDoc, core.class.Doc, DOMAIN_BENCHMARK)
@UX(getEmbeddedLabel('Benchmark'), undefined, undefined, undefined, 'name')
export class TBenchmarkDoc extends TDoc implements BenchmarkDoc {}
