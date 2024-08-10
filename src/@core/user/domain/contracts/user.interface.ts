import { UserEntity } from "../entities/user.entity";

export interface IUserRepository {
  store: (userEntity: UserEntity) => Promise<void>
  update: (userEntity: UserEntity) => Promise<void>
  show: (entity_id: string) => Promise<UserEntity | null>
  index: () => Promise<UserEntity[]>
}