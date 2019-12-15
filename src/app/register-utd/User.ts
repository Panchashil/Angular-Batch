export class User {
    uname: string;
    password: {
        pwd: string;
        cpwd: string;
    }
    gender: string;
    terms: boolean;

    constructor(value:object = {}){
        Object.assign(this,value);
    }
}