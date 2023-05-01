class Customer {
  firstname: string;
  lastname: string;
  constructor(fName: string, lName: string) {
    this.firstname = fName;
    this.lastname = lName;
  }
}
let myCustomer = new Customer("Mahadev","Chaurasiya");
console.log(myCustomer.firstname);
console.log(myCustomer.lastname);
