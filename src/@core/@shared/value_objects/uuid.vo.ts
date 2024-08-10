import {v4, validate as uuidValidate} from 'uuid'

export class Uuid {
  public value: string
   constructor(value?:string){
    this.value = value ? value: v4()
   }

   public validate():void{
    if(uuidValidate(this.value)){
      throw new Error('Uuid invalido!')
    }
   }

}