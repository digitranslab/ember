//
// Copyright @ 2024 Digitrans Inc.
//

import contact, { type Employee, type PersonAccount } from '@digitranslab/contact'
import type { Training, TrainingRequest } from '@digitranslab/training'
import core, { type Account, type AttachedData, type Ref, type Role, type RolesAssignment } from '@digitranslab/core'
import { getClient } from '@digitranslab/presentation'
import { navigate } from '@digitranslab/ui'
import training from '../plugin'
import { trainingRequestRoute } from '../routing/routes/trainingRequestRoute'
import { getCurrentEmployeeRef } from './getCurrentEmployeeRef'

export type CreateTrainingRequestData = Required<
Omit<AttachedData<TrainingRequest>, 'owner' | 'attempts' | 'canceledOn' | 'canceledBy'> & { roles: Array<Ref<Role>> }
>

export async function createTrainingRequest (
  parent: Training,
  data: CreateTrainingRequestData
): Promise<Ref<TrainingRequest>> {
  const client = getClient()

  const { roles, ...attachedData } = data
  if (roles.length > 0) {
    const traineesMap = new Map<Ref<Employee>, boolean>(attachedData.trainees.map((employeeRef) => [employeeRef, true]))

    const space = await client.findOne(
      core.class.TypedSpace,
      {
        _id: parent.space
      },
      {
        lookup: {
          type: core.class.SpaceType
        }
      }
    )

    if (space === undefined) {
      throw new Error(`Space #${parent.space} not found`)
    }

    const spaceType = space.$lookup?.type

    if (spaceType === undefined) {
      throw new Error(`Space type #${space.type} not found`)
    }

    const mixin = client.getHierarchy().as(space, spaceType.targetClass) as unknown as RolesAssignment
    const accountRefs = roles.reduce<Array<Ref<Account>>>(
      (accountRefs, roleId) => [...accountRefs, ...(mixin[roleId] ?? [])],
      []
    )

    const personAccounts = await client.findAll(contact.class.PersonAccount, {
      _id: { $in: accountRefs as Array<Ref<PersonAccount>> }
    })

    const employeeRefs = personAccounts.map((personAccount) => personAccount.person as Ref<Employee>)
    const employees = await client.findAll(contact.mixin.Employee, {
      _id: { $in: employeeRefs }
    })

    for (const employee of employees) {
      traineesMap.set(employee._id, true)
    }

    attachedData.trainees = [...traineesMap.keys()]
  }

  const id = await client.addCollection(
    training.class.TrainingRequest,
    parent.space,
    parent._id,
    parent._class,
    'requests',
    {
      ...attachedData,
      owner: getCurrentEmployeeRef(),
      attempts: 0,
      canceledBy: null,
      canceledOn: null
    }
  )

  navigate(trainingRequestRoute.build({ id, tab: null }))

  return id
}
