
export class User{

    name: string = '';
    surname: string = '';
    password: string = '';
    email: string = ''; 
    phoneNum: string = ''; 
    userType: any = null;
    userRank: any = null;
    

    public constructor(obj?: any) {
        if (obj) {
            this.name = obj.name;
            this.surname = obj.lastname;
            this.userType = obj.userType;
            this.userRank = obj.userRank;
            this.password = obj.password;
            this.email = obj.email;
            this.phoneNum = obj.phoneNum;
            
        }
    }
}
