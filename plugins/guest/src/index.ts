import { Class, Doc, Ref } from '@digitranslab/core'
import type { Asset, Plugin } from '@digitranslab/platform'
import { plugin } from '@digitranslab/platform'
import { AnyComponent, Location } from '@digitranslab/ui'

export * from './utils'

export interface PublicLink extends Doc {
  attachedTo: Ref<Doc>
  url: string
  location: Location
  restrictions: Restrictions
  revokable: boolean
}

export interface Restrictions {
  readonly: boolean
  disableComments: boolean
  disableNavigation: boolean
  disableActions: boolean
}

export const guestAccountEmail = '#guest@digitrans.lab'

export const guestId = 'guest' as Plugin
export default plugin(guestId, {
  class: {
    PublicLink: '' as Ref<Class<PublicLink>>
  },
  icon: {
    Link: '' as Asset
  },
  component: {
    GuestApp: '' as AnyComponent
  }
})
