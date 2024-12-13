//
// Copyright @ 2024 Digitrans Inc.
//

import { type MigrateOperation, type MigrationClient, type MigrationUpgradeClient } from '@digitranslab/model'

export const questionsOperation: MigrateOperation = {
  async migrate (client: MigrationClient): Promise<void> {},

  async upgrade (state: Map<string, Set<string>>, client: () => Promise<MigrationUpgradeClient>): Promise<void> {}
}
