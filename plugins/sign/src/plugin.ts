//
// Copyright © 2024 Digitrans Inc.
//

import { type Plugin, plugin, Metadata } from '@digitranslab/platform'

export const signId = 'sign' as Plugin

export const sign = plugin(signId, {
  metadata: {
    SignURL: '' as Metadata<string>
  }
})

export default sign
