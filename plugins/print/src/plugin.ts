//
// Copyright © 2024 Digitrans Inc.
//

import { type Doc } from '@digitranslab/core'
import { type IntlString, type Metadata, type Plugin, plugin, type Asset, type Resource } from '@digitranslab/platform'
import { type AnyComponent } from '@digitranslab/ui'

export const printId = 'print' as Plugin

export const print = plugin(printId, {
  string: {
    PrintToPDF: '' as IntlString
  },
  component: {
    PrintToPDF: '' as AnyComponent,
    DOCXViewer: '' as AnyComponent
  },
  icon: {
    Print: '' as Asset
  },
  metadata: {
    PrintURL: '' as Metadata<string>
  },
  function: {
    CanPrint: '' as Resource<(doc?: Doc | Doc[]) => Promise<boolean>>,
    CanConvert: '' as Resource<() => Promise<boolean>>
  }
})

export default print
