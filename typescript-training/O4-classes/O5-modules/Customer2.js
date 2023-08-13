"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer2 = void 0;
class Customer2 {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
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
exports.Customer2 = Customer2;
//let's create an instance 
let myCustomer1 = new Customer2("Martin", "Dixon");
console.log(myCustomer1.firstName);
console.log(myCustomer1.lastName);
/*
below using in above by contructor
myCustomer.firstName="Martin";
myCustomer.lastName="Dixon";
*/
