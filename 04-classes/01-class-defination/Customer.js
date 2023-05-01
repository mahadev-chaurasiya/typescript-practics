var Customer = /** @class */ (function () {
    function Customer(fName, lName) {
        this.firstname = fName;
        this.lastname = lName;
    }
    return Customer;
}());
var myCustomer = new Customer("Mahadev", "Chaurasiya");
console.log(myCustomer.firstname);
console.log(myCustomer.lastname);
