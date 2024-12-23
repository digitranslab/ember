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

import core, {
  Doc,
  MeasureContext,
  Tx,
  TxCUD,
  TxProcessor,
  systemAccountEmail,
  type SessionData,
  TxApplyIf
} from '@digitranslab/core'
import platform, { PlatformError, Severity, Status } from '@digitranslab/platform'
import { BaseMiddleware, Middleware, TxMiddlewareResult, type PipelineContext } from '@digitranslab/server-core'
import { DOMAIN_USER_NOTIFY, DOMAIN_NOTIFICATION, DOMAIN_DOC_NOTIFY } from '@digitranslab/server-notification'

/**
 * @public
 */
export class NotificationsMiddleware extends BaseMiddleware implements Middleware {
  private readonly targetDomains = [DOMAIN_USER_NOTIFY, DOMAIN_NOTIFICATION, DOMAIN_DOC_NOTIFY]

  private constructor (context: PipelineContext, next?: Middleware) {
    super(context, next)
  }

  static async create (
    ctx: MeasureContext,
    context: PipelineContext,
    next: Middleware | undefined
  ): Promise<NotificationsMiddleware> {
    return new NotificationsMiddleware(context, next)
  }

  isTargetDomain (tx: Tx): boolean {
    if (TxProcessor.isExtendsCUD(tx._class)) {
      const txCUD = tx as TxCUD<Doc>
      const domain = this.context.hierarchy.getDomain(txCUD.objectClass)
      return this.targetDomains.includes(domain)
    }
    return false
  }

  processTx (ctx: MeasureContext<SessionData>, tx: Tx): void {
    let target: string[] | undefined
    if (this.isTargetDomain(tx)) {
      const account = ctx.contextData.account._id
      if (account !== tx.modifiedBy && account !== core.account.System) {
        throw new PlatformError(new Status(Severity.ERROR, platform.status.Forbidden, {}))
      }
      const modifiedByAccount = ctx.contextData.getAccount(tx.modifiedBy)
      target = [ctx.contextData.userEmail, systemAccountEmail]
      if (modifiedByAccount !== undefined && !target.includes(modifiedByAccount.email)) {
        target.push(modifiedByAccount.email)
      }
      ctx.contextData.broadcast.targets['checkDomain' + account] = (tx) => {
        if (this.isTargetDomain(tx)) {
          return target
        }
      }
    }
  }

  tx (ctx: MeasureContext<SessionData>, txes: Tx[]): Promise<TxMiddlewareResult> {
    for (const tx of txes) {
      if (this.context.hierarchy.isDerived(tx._class, core.class.TxApplyIf)) {
        for (const ttx of (tx as TxApplyIf).txes) {
          this.processTx(ctx, ttx)
        }
      } else {
        this.processTx(ctx, tx)
      }
    }

    return this.provideTx(ctx, txes)
  }

  isAvailable (ctx: MeasureContext<SessionData>, doc: Doc): boolean {
    const domain = this.context.hierarchy.getDomain(doc._class)
    if (!this.targetDomains.includes(domain)) return true
    const account = ctx.contextData.account._id
    return doc.createdBy === account || account === core.account.System
  }
}
