import { db } from "../../../@shared/infrastructure/db";
import { IUserRepository } from "../../domain/contracts/user.interface";
import { UserEntity } from "../../domain/entities/user.entity";
import { UserModelMapper } from "../model/user.model.mapper";

export class UserRepository implements IUserRepository{
  index: () => Promise<UserEntity[]>;
 async store(entity:UserEntity):Promise<void> {
  await db.user.create({
    data: UserModelMapper.toModel(entity)
  })
 }
  async update (entity: UserEntity) {
    await db.user.update({
      where: {id: entity.id.value},
      data: UserModelMapper.toModel(entity)
    })
  }
  async show (entity_id: string) {
    const entity = await db.user.findUnique({
      where: {id: entity_id}
    })

    return entity ? UserModelMapper.toEntity(entity) : null
  }
  

}