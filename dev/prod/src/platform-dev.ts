//
// Copyright © 2020 Anticrm Platform Contributors.
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

import { devModelId } from '@digitranslab/devmodel'
import { PresentationClientHook } from '@digitranslab/devmodel-resources'
import login from '@digitranslab/login'
import { addLocation, setMetadata } from '@digitranslab/platform'
import presentation from '@digitranslab/presentation'

export function configurePlatformDevServer() {  
  // Set devmodel to hook client to be able to present all activity
  enableDevModel()
}

function enableDevModel() {
  setMetadata(presentation.metadata.ClientHook, new PresentationClientHook())
  addLocation(devModelId, () => import(/* webpackChunkName: "devmodel" */ '@digitranslab/devmodel-resources'))
}