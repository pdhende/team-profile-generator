const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    // Method to return school name of intern
    getSchool(){
        return this.school;
    }

    // Method to get role as Intern
    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;