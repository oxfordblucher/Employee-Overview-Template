// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");
class Manager extends Employee {
    constructor(myname, idNum, email, office) {
        super(myname, idNum, email)

    this.officeNumber = office;
    }


    getRole() {
      return "Manager";
    }
  
    // Accepts a user's guess
    getOfficeNumber() {
      return this.officeNumber;
  }

}
  module.exports = Manager;