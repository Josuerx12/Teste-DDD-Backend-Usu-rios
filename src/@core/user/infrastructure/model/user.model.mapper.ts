import { UserEntity } from "../../domain/entities/user.entity";
import UserModel from "./user.model";

export class UserModelMapper {

  static toModel(entity: UserEntity){
    return {
      id: entity.id.value,
      name: entity.name,
      email: entity.email,
      password: entity.password
    }
  }

  static toEntity(model:UserModel){
    return new UserEntity({
      id: model.id,
      name: model.name,
      email: model.email,
      confirm_password: model.password,
      password: model.password
    })
  }
}