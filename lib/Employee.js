// TODO: Write code to define and export the Employee class
class Employee {
    constructor(myname, idNum, email) {
      this.name = myname;
      this.id = idNum;
      this.email = email;
     
    }

    getName() {
      return this.name;
    }
  
    getRole() {
      return "Employee";
    }
  
    getEmail() {
      return this.email;
  }

  getId() {
      return this.id;
  }
}
  module.exports = Employee; 