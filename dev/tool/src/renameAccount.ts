import {
  type Account,
  type AccountDB,
  changeEmail,
  getAccount,
  listWorkspacesPure,
  type Workspace
} from '@digitranslab/account'
import core, { getWorkspaceId, type MeasureContext, systemAccountEmail, TxOperations } from '@digitranslab/core'
import contact from '@digitranslab/model-contact'
import { getTransactorEndpoint } from '@digitranslab/server-client'
import { generateToken } from '@digitranslab/server-token'
import { connect } from '@digitranslab/server-tool'

export async function renameAccount (
  ctx: MeasureContext,
  db: AccountDB,
  accountsUrl: string,
  oldEmail: string,
  newEmail: string
): Promise<void> {
  const account = await getAccount(db, oldEmail)
  if (account == null) {
    throw new Error("Account does'n exists")
  }

  const newAccount = await getAccount(db, newEmail)
  if (newAccount != null) {
    throw new Error('New Account email already exists:' + newAccount?.email + ' ' + newAccount?._id?.toString())
  }

  await changeEmail(ctx, db, account, newEmail)

  await fixWorkspaceEmails(account, db, accountsUrl, oldEmail, newEmail)
}

export async function fixAccountEmails (
  ctx: MeasureContext,
  db: AccountDB,
  transactorUrl: string,
  oldEmail: string,
  newEmail: string
): Promise<void> {
  const account = await getAccount(db, newEmail)
  if (account == null) {
    throw new Error("Account does'n exists")
  }

  await fixWorkspaceEmails(account, db, transactorUrl, oldEmail, newEmail)
}
async function fixWorkspaceEmails (
  account: Account,
  db: AccountDB,
  accountsUrl: string,
  oldEmail: string,
  newEmail: string
): Promise<void> {
  const accountWorkspaces = account.workspaces.map((it) => it.toString())
  // We need to update all workspaces
  const workspaces = await listWorkspacesPure(db)
  for (const ws of workspaces) {
    if (!accountWorkspaces.includes(ws._id.toString())) {
      continue
    }
    console.log('checking workspace', ws.workspaceName, ws.workspace)

    const wsid = getWorkspaceId(ws.workspace)
    const endpoint = await getTransactorEndpoint(generateToken(systemAccountEmail, wsid))

    // Let's connect and update account information.
    await fixEmailInWorkspace(endpoint, ws, oldEmail, newEmail)
  }
}

async function fixEmailInWorkspace (
  transactorUrl: string,
  ws: Workspace,
  oldEmail: string,
  newEmail: string
): Promise<void> {
  const connection = await connect(transactorUrl, { name: ws.workspace }, undefined, {
    mode: 'backup',
    model: 'upgrade', // Required for force all clients reload after operation will be complete.
    admin: 'true'
  })
  try {
    const personAccount = await connection.findOne(contact.class.PersonAccount, { email: oldEmail })

    if (personAccount !== undefined) {
      console.log('update account in ', ws.workspace)
      const ops = new TxOperations(connection, core.account.ConfigUser)
      await ops.update(personAccount, { email: newEmail })
    }
  } catch (err: any) {
    console.error(err)
  } finally {
    await connection.close()
  }
}
