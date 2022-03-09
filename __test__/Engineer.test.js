const engineer = require('../lib/Engineer');

describe('engineer', () => {

    const empEngineer = new engineer('John', 1, 'john@test.com', 'johnGit');
    // Test 1 : Verify if the new object created has all properties of engineer class and emplyee class
    describe('Initialization', () => {
        it("should create a new object with 'name', id', 'email' and 'github", () => {
            expect(empEngineer).toEqual({name: 'John', id: 1, email: 'john@test.com', github: 'johnGit'});
        });
    });
});