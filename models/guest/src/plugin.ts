import { type Account, type Doc, type Ref } from '@digitranslab/core'
import { guestId } from '@digitranslab/guest'
import guest from '@digitranslab/guest-resources/src/plugin'
import { mergeIds } from '@digitranslab/platform'
import { type AnyComponent } from '@digitranslab/ui'
import { type Action, type ActionCategory } from '@digitranslab/view'

export default mergeIds(guestId, guest, {
  account: {
    Guest: '' as Ref<Account>
  },
  action: {
    CreatePublicLink: '' as Ref<Action<Doc, any>>
  },
  category: {
    Guest: '' as Ref<ActionCategory>
  },
  component: {
    CreatePublicLink: '' as AnyComponent
  }
})
