

import { CustomError } from "../errors/custom.error";



export class UserEntity {
    constructor(
     public name :string,   
     public email :string,   
     public emailValidated:boolean, 
     public password:string,      
     public role :string,
     public img?:string,   
    ){}

    
    static fromObject( object :{[key:string]:any}) { 
        const {id, _id, name, email, emailValidated, password, role, img} = object;

        if(!_id && !id){
            throw CustomError.badRequest('Missing id');
        };

        if(!name) throw CustomError.badRequest('Missing namee')
        if(!email) throw CustomError.badRequest('Missing emaaail')
        if(emailValidated === undefined) throw CustomError.badRequest('Missing emaaailValidation') 
        if(!password) throw CustomError.badRequest('Missing password') 
        if(!role) throw CustomError.badRequest('Missing role')
            
        return new UserEntity(_id ||id, name,emailValidated,password,role,img)    
    }

}