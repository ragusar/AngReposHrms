export class emp{
    id:number;
    imageUrl?:string|null;
    firstName?:string|null;
    lastName?:string|null;
    email?:string|null;
    contactNumber?:string|null;
    age?:number|undefined;
    dob?:string|null;
    salary?:number|undefined;
    address?:string|null;
    

    constructor(id:number,imageUrl:string,firstName:string,lastName:string,email:string,contactNumber:string,age:number,dob:string,salary:number,address:string){
        this.id=id;
        this.imageUrl=imageUrl;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.contactNumber=contactNumber;
        this.age=age;
        this.dob=dob;
        this.salary=salary;
        this.address=address;
        

    }




}