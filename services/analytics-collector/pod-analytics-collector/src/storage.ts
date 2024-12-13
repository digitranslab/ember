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

import { MongoClientReference, getMongoClient } from '@digitranslab/mongo'
import { MongoClient } from 'mongodb'

import config from './config'

const clientRef: MongoClientReference = getMongoClient(config.MongoUrl)
let client: MongoClient | undefined

export const getDB = (() => {
  return async () => {
    if (client === undefined) {
      client = await clientRef.getClient()
    }

    return client.db(config.MongoDb)
  }
})()

export const closeDB: () => Promise<void> = async () => {
  clientRef.close()
}