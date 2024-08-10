import {v4 as uuidv4} from 'uuid'
import { Uuid } from '../../../@shared/value_objects/uuid.vo';
import { IsEmail, IsString, IsStrongPassword } from 'class-validator';
export type UserEntityConstructor = {
  id?: string;
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export type UserEntityCreateCommand = {

  name: string;
  email: string;
  password: string;
  confirm_password: string;
}


export class UserEntity {
   id: Uuid;

   @IsString({groups: ['name']})
   name: string;

   @IsEmail({}, {groups: ['email']})
   email: string

   @IsStrongPassword({minSymbols: 1, minLength: 8, minUppercase: 1, minLowercase: 1, minNumbers: 1}, {groups: ['password']})
   password: string;

   confirm_password: string;

   constructor(props:UserEntityConstructor){
    this.id = new Uuid(props.id)
    this.name = props.name
    this.email = props.email
    this.password = props.password
    this.confirm_password = props.confirm_password

    this.validate()
   }

  static create(props: UserEntityCreateCommand){

    return new this(props)
  }

  toJSON() {
    return {
      id: this.id.value,
      name: this.name,
      email: this.email,
      password: this.password,
      confirm_password: this.confirm_password
    }
  }

  validate(){
    if(this.password !== this.confirm_password){
      throw new Error('Password and confirm password must be equals.')
    }
  }
}