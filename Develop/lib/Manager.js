// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js")

class Manager extends Employee {
    constructor(name,email, idNumber, officeNumber, role) {
        super (name, email, idNumber)
        this.officeNumber = officeNumber;
        this.role = "Manager";
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
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;