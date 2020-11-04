// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");
class Engineer extends Employee {
    constructor(myname, idNum, email, github) {
        super(myname, idNum, email)

    this.github = github;
    }

    getRole() {
      return "Engineer";
    }
  
    // Accepts a user's guess
    getGithub() {
      return this.github;
  }

}
  module.exports = Engineer;