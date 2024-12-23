//
// Copyright © 2023 Digitrans Inc.
//

import { type Builder } from '@digitranslab/model'

import core from '@digitranslab/core'
import serverCore from '@digitranslab/server-core'
import serverGithub from '@digitranslab/server-github'
import time from '@digitranslab/time'

export { serverGithubId } from '@digitranslab/server-github'

export function createModel (builder: Builder): void {
  builder.createDoc(serverCore.class.Trigger, core.space.Model, {
    trigger: serverGithub.trigger.OnProjectChanges,
    isAsync: true
  })

  // We should skip activity github mixin stuff.
  builder.createDoc(time.class.TodoAutomationHelper, core.space.Model, {
    onDoneTester: serverGithub.functions.TodoDoneTester
  })
}
