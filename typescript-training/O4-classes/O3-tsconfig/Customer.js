"use strict";
class Customer2 {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
//let's create an instance 
let myCustomer1 = new Customer2("Martin", "Dixon");
console.log(myCustomer1.firstName);
console.log(myCustomer1.lastName);
/*
below using in above by contructor
myCustomer.firstName="Martin";
myCustomer.lastName="Dixon";
*/
