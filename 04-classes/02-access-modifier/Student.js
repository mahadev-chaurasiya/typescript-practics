var Student = /** @class */ (function () {
    function Student(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
    Object.defineProperty(Student.prototype, "fName", {
        get: function () {
            return this.firstName;
        },
        set: function (value) {
            this.firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "lName", {
        get: function () {
            return this.lastName;
        },
        set: function (value) {
            this.lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var myStudent = new Student("Mahadev", "Chaurasiya");
console.log(myStudent.fName);
console.log(myStudent.lName);
