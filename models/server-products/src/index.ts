//
// Copyright © 2024 Digitrans Inc.
//
//

import type { Plugin } from '@digitranslab/platform'
import products from '@digitranslab/products'

import core from '@digitranslab/core'
import { type Builder } from '@digitranslab/model'
import serverCore from '@digitranslab/server-core'

export const serverProductsId = 'server-products' as Plugin

export function createModel (builder: Builder): void {
  builder.mixin(products.class.Product, core.class.Class, serverCore.mixin.SearchPresenter, {
    iconConfig: {
      component: products.component.ProductSearchIcon,
      fields: [['icon'], ['color']]
    },
    title: [['name']]
  })
}
