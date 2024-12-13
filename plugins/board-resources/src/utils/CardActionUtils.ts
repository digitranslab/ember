import type { Action } from '@digitranslab/view'
import view from '@digitranslab/view'
import { type Client, type DocumentQuery } from '@digitranslab/core'

export const getCardActions = async (client: Client, query?: DocumentQuery<Action>): Promise<Action[]> => {
  return await client.findAll(view.class.Action, query ?? {})
}
