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

import { Channel } from '@digitranslab/chunter'

export enum AnalyticEventType {
  SetUser = 'setUser',
  SetTag = 'setTag',
  Navigation = 'navigation',
  Error = 'error',
  CustomEvent = 'customEvent'
}

export interface AnalyticEvent {
  event: AnalyticEventType
  params: Record<string, any>
  timestamp: number
}

export interface OnboardingChannel extends Channel {
  workspaceId: string
  workspaceName: string
  workspaceUrl: string
  email: string
  userName: string
  disableAIReplies: boolean
  showAIReplies: boolean
}
