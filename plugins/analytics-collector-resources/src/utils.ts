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

import { type InlineButtonAction } from '@digitranslab/chunter'
import analyticsCollector from '@digitranslab/analytics-collector'
import { getMetadata } from '@digitranslab/platform'
import presentation from '@digitranslab/presentation'
import { concatLink } from '@digitranslab/core'

export const AnalyticsCollectorInlineAction: InlineButtonAction = async (
  button,
  messageId,
  channelId
): Promise<void> => {
  const url = getMetadata(analyticsCollector.metadata.EndpointURL) ?? ''
  const token = getMetadata(presentation.metadata.Token) ?? ''

  if (url === '' || token === '') {
    return
  }

  try {
    await fetch(concatLink(url, 'action'), {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ _id: button._id, name: button.name, messageId, channelId })
    })
  } catch (e) {
    console.error(e)
  }
}
