//
// Copyright @ 2024 Digitrans Inc.
//

import type { Doc } from '@digitranslab/core'
import { getClient } from '@digitranslab/presentation'
import { getPanelURI } from '@digitranslab/ui'
import view, { type ObjectPanel } from '@digitranslab/view'

export function getPanelFragment<T extends Doc> (object: Pick<T, '_class' | '_id'>): string {
  const hierarchy = getClient().getHierarchy()
  const objectPanelMixin = hierarchy.classHierarchyMixin<Doc, ObjectPanel>(object._class, view.mixin.ObjectPanel)
  const component = objectPanelMixin?.component ?? view.component.EditDoc
  return getPanelURI(component, object._id, object._class, 'content')
}
