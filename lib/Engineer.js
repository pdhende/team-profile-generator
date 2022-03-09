const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }

    // Method to get the github username of employee
    getGithub() {}
    // Method to get the role 'Engineer' of employee
    getRole() {}
}


module.exports = Engineer;