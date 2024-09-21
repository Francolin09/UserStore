import { Request, Response } from "express";
import { CustomError, RegisterUserDto } from "../../domain";
import { AuthService } from "../services/auth.service";



export class AuthController {
    
    constructor(
        public readonly authService: AuthService,
    ){}

    //5 creamos la variable que contendrá al error  
    private handleError = (error: unknown, res: Response) => {
        if ( error instanceof CustomError){
            return res.status(error.statusCode).json({error: error.message});
        }

        res.status(500).json({error:'Error interno, no sé que pasa '})
    }
    
    
    registerUser = (req: Request, res:Response) => {

        
        const [error, registerDto] = RegisterUserDto.create(req.body);
        
      
        if(error) return res.status(400).json()


        this.authService.registerUser(registerDto!) 
        .then((user) => res.json(user))
        .catch(error => this.handleError(error,res)); //6 acá ahora le pasamos el error en caso de que falle 
         //7 en este punto podemos probar enviando dos usuarios con el mismo mail 

    }
   

    
    loginUser = (req: Request, res:Response) => {

        res.json('LoginUseeer')
    }

    validateEmail = (req: Request, res:Response) => {

        res.json('ValidateEmaiiil')
    }
}