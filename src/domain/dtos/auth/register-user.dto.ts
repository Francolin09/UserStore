import { regularExps } from "../../../config";


export class RegisterUserDto {

    constructor(
        public name :string,
        public email:string,
        public password:string,
    ){}
   

    static create (object:{[key:string]:any}) : [string?,RegisterUserDto?]{
        const {name, email, password} = object;

        if(!name) return ['Missing name' ];
        if(!email) return ['Missing email' ];
        if(!regularExps.email.test(email)) return ['Email not valido ', ];
        if(!password) return ['Missing password' ];
        if(password.lenght < 6) return ['password too cortita' ];

        return [undefined,new RegisterUserDto(name, email, password)]; 
       

    }
}