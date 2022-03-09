const engineer = require('../lib/Engineer');

describe('engineer', () => {

    const empEngineer = new engineer('John', 1, 'john@test.com', 'johnGit');
    // Test 1 : Verify if the new object created has all properties of engineer class and emplyee class
    describe('Initialization', () => {
        it("should create a new object with 'name', id', 'email' and 'github", () => {
            expect(empEngineer).toEqual({name: 'John', id: 1, email: 'john@test.com', github: 'johnGit'});
        });
    });

    // Test 2: Check if function getGithub returns github username of employee
    describe('Get github', () => {
        it("should return the github username of employee",() => {
            let empGithub = empEngineer.getGithub();
            expect(empGithub).toEqual('johnGit');
        });
    });

    // Test 3: Check if function getRole is overriden and returns 'Engineer'
    describe('Get role',() => {
        it("should return the role as Engineer", () => {
            let empRole = empEngineer.getRole();
            expect(empRole).toEqual('Engineer');
        });
    });
});