// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");
class Intern extends Employee {
    constructor(myname, idNum, email, school) {
        super(myname, idNum, email)

    this.school = school;
    }

    getRole() {
      return "Intern";
    }
  
    // Accepts a user's guess
    getSchool() {
      return this.school;
  }

}
  module.exports = Intern;