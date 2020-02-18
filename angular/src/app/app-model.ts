export class UserData{
    constructor(
        public username:string,
        public password:string,
        public mail:string,
        public url:string,
        public gender:string,
    ){}
}

export class UpdateUserData{
    constructor(
        public id:string,
        public username:string,
        public password:string,
        public mail:string,
        public url:string,
        public gender:string,
    ){}
}

