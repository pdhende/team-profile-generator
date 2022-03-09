const employee = require("../lib/Employee");

describe('employee', () => {

    // Test 1 : Verify that the new object has all employee properties
    describe('Initialization', () => {
        it("should create an object with 'name', 'id' and 'email'", () => {
            const emp = new employee('John', 1, 'john@test.com');
            
            expect(emp).toEqual({name: 'John', id: 1, email: 'john@test.com'});
        });
    });

    // Test 2 : Check if function getName() returns name of employee
    describe('Get Name', () => {
        it("should return the name of the employee", () => {
            const emp = new employee('John', 1, 'john@test.com');
            let empName = emp.getName();
            expect(empName).toEqual('John');
        });
    });

});