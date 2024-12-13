//
// Copyright © 2024 Digitrans Inc.
//

import { type Builder } from '@digitranslab/model'
import core from '@digitranslab/model-core'
import view, { createAction } from '@digitranslab/model-view'
import presentation from '@digitranslab/model-presentation'

import print from './plugin'

export { printId } from '@digitranslab/print'
export * from './migration'
export default print

export function createModel (builder: Builder): void {
  createAction(
    builder,
    {
      action: print.actionImpl.Print,
      label: print.string.PrintToPDF,
      icon: print.icon.Print,
      category: view.category.General,
      input: 'focus', // NOTE: should only work for one doc for now, not bulk
      target: core.class.Doc,
      context: { mode: ['context', 'browser'], group: 'tools' },
      visibilityTester: print.function.CanPrint
    },
    print.action.Print
  )

  builder.createDoc(
    presentation.class.FilePreviewExtension,
    core.space.Model,
    {
      contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      alignment: 'float',
      component: print.component.DOCXViewer,
      extension: presentation.extension.FilePreviewExtension,
      availabilityChecker: print.function.CanConvert
    },
    print.previewExtension.DOCX
  )
}
