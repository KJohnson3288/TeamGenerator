// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name,email, idNumber, github, role) {
        super (name, email, idNumber)
        this.github = github;
        this.role = "Engineer";
    }

    getId() {
        return this.idNumber;
    }
    
    getName() {
        return this.name;
    }
    
    getEmail() {
        return this.email;
    }
    getRole(){
        return this.role;
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;
