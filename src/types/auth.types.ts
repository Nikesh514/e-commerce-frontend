export interface ILogin {
    email:string;
    password:string
}

export interface IRegister {
    first_name:string;
    last_name:string;
    email:string;
    password:string;
    confirm_password:string;
    phone?:string;
}