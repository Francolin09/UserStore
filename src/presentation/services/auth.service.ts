//9 acá es donde nos encargaremos de crear. validar y todas esas cuestiones 

import { UserModel } from "../../data";
import { CustomError, RegisterUserDto } from "../../domain";

export class AuthService { 

    constructor(){}

    public async registerUser(registerUserDto: RegisterUserDto){ 
        const existUser = await UserModel.findOne({email: registerUserDto.email}); 
        if (existUser) throw CustomError.badRequest('Email already existe') 
        //1 acá comenzaremos la creación, cuando se quiere trabajar con base de datos lo ideal es usar try catch
     try {
        const user = new UserModel(registerUserDto); //2 creamos el usuario usando el UserModel y pasandole el dto del user
        await user.save(); //3 guardamos 
        //4 hasta acá todo bien pero en el controlador nos falta definir el catch en la promesa por si falla asi que vamo
        return user;
     } catch (error) {
        throw CustomError.internalServer(`${error}`)
     }     
      
     return 'todo okeys'
           
       

    }
}