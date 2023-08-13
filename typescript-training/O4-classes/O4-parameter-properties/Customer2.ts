class Customer2{      

    constructor( private _firstName:string,  private _lastName:string){    
    }

    public get firstName(): string{
        return this._firstName;
    }

    public set firstName(value: string){
        this._firstName=value;
    }
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

}


//let's create an instance 

let myCustomer1 =new Customer2("Martin","Dixon");

console.log(myCustomer1.firstName);
console.log(myCustomer1.lastName);

/*
below using in above by contructor
myCustomer.firstName="Martin";
myCustomer.lastName="Dixon";
*/

