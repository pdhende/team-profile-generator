const employee = require("../lib/Employee");

describe('employee', () => {

    const emp = new employee('John', 1, 'john@test.com');

    // Test 1 : Verify that the new object has all employee properties
    describe('Initialization', () => {
        it("should create an object with 'name', 'id' and 'email'", () => {
            expect(emp).toEqual({name: 'John', id: 1, email: 'john@test.com'});
        });
    });

    // Test 2 : Check if function getName() returns name of employee
    describe('Get Name', () => {
        it("should return the name of the employee", () => {
            let empName = emp.getName();
            expect(empName).toEqual('John');
        });
    });

    // Test 2 : Check if function getId() returns Id of employee
    describe('Get Id', () => {
        it("should return the id of the employee", () => {
            let empId = emp.getId();
            expect(empId).toEqual(1);
        });
    });

    // Test 3 : Check if function getEmail() returns email of employee
    describe('Get email', () => {
        it("should return the email of the employee", () => {
            let empEmail = emp.getEmail();
            expect(empEmail).toEqual('john@test.com');
        });
    });

    // Test 4 : Check if function getRole() returns role of employee
    describe('Get role', () => {
        it("should return the role of the employee", () => {
            let empRole = emp.getRole();
            expect(empRole).toEqual('Employee');
        });
    });
});