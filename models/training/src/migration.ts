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

import { TxOperations, type Ref, type TypedSpace } from '@digitranslab/core'
import {
  tryUpgrade,
  type MigrateOperation,
  type MigrationClient,
  type MigrationUpgradeClient
} from '@digitranslab/model'
import core from '@digitranslab/model-core'
import training, { trainingId, type Sequence } from '@digitranslab/training'

export const trainingOperation: MigrateOperation = {
  async migrate (client: MigrationClient): Promise<void> {},
  async upgrade (state: Map<string, Set<string>>, client: () => Promise<MigrationUpgradeClient>): Promise<void> {
    await tryUpgrade(state, client, trainingId, [
      {
        state: 'create-defaults',
        func: async (client) => {
          const tx = new TxOperations(client, core.account.System)
          await ensureTypedSpace(tx)
          await ensureSequence(tx)
        }
      }
    ])
  }
}

async function ensureTypedSpace (tx: TxOperations): Promise<Ref<TypedSpace>> {
  const existing = await tx.findOne(core.class.TypedSpace, {
    _id: training.space.Trainings
  })

  if (existing !== undefined) {
    return existing._id
  }

  return await tx.createDoc(
    core.class.TypedSpace,
    core.space.Space,
    {
      name: 'Trainings',
      description: 'Space for all trainings',
      private: false,
      archived: false,
      autoJoin: true,
      members: [],
      type: training.spaceType.Trainings
    },
    training.space.Trainings
  )
}

async function ensureSequence (tx: TxOperations): Promise<Ref<Sequence>> {
  const existing = await tx.findOne(training.class.Sequence, {
    attachedTo: training.class.Training
  })

  if (existing !== undefined) {
    return existing._id
  }

  return await tx.createDoc(training.class.Sequence, training.space.Trainings, {
    attachedTo: training.class.Training,
    sequence: 0
  })
}
