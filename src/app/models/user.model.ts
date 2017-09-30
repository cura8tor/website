export interface UserModel{
    displayName:string;
    photoURL?:string;
    name?:string;
    about?:string;
    skills?:any;
    social?:any;
    location?:any;
    email?:string;
    uid:string;
    emailVerified:boolean;
}

export class User {
    constructor (
        public uid:string,
        public emailVerified:boolean,
        public displayName:string,
        public email?:string,
        public photoURL?:string,
        public name?:string,
        public about?:string,
        public skills?:any,
        public social?:any,
        public location?:any
    ){}
}