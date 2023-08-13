var Customer2 = /** @class */ (function () {
    function Customer2(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer2.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer2.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer2;
}());
//let's create an instance 
var myCustomer1 = new Customer2("Martin", "Dixon");
console.log(myCustomer1.firstName);
console.log(myCustomer1.lastName);
/*
below using in above by contructor
myCustomer.firstName="Martin";
myCustomer.lastName="Dixon";
*/
