const employee = require('../lib/Employee');
const manager = require('../lib/Manager');

describe('manager', () => {

    const empManager = new manager('John', 1, 'john@test.com', 10);
// Test 1: Verify the new object has inherited employee poperties and has its own property
    describe('Initialization', () => {
        it("should create an object with 'name', 'id', 'email' and 'officeNumber'", () => {
            expect(empManager).toEqual({name: 'John', id: 1, email: 'john@test.com', officeNumber: 10});
        });
    });

    // Test 2: Check if class method getRole is overriden and returns 'Manager'
    describe('Get Role', () => {
        it("should return the role as Manager", () => {
            let empRole = empManager.getRole();
            expect(empRole).toEqual('Manager');
        });
    });
});