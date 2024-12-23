//
// Copyright @ 2022 Digitrans Inc.
//
import { type Builder } from '@digitranslab/model'

import training from '@digitranslab/model-training'
import serverTraining from '@digitranslab/server-training'
import core from '@digitranslab/core'
import notification from '@digitranslab/notification'
import serverNotification from '@digitranslab/server-notification'

export { serverTrainingId } from '@digitranslab/server-training/src/index'

export function createModel (builder: Builder): void {
  builder.mixin(
    training.notification.TrainingRequest,
    notification.class.NotificationType,
    serverNotification.mixin.TypeMatch,
    {
      func: serverTraining.function.TrainingRequestNotificationTypeMatch
    }
  )

  builder.mixin(training.class.TrainingRequest, core.class.Class, serverNotification.mixin.TextPresenter, {
    presenter: serverTraining.function.TrainingRequestTextPresenter
  })

  builder.mixin(training.class.TrainingRequest, core.class.Class, serverNotification.mixin.HTMLPresenter, {
    presenter: serverTraining.function.TrainingRequestHTMLPresenter
  })
}
