const employee = require('../lib/Employee');
const manager = require('../lib/Manager');

describe('Initialization', () => {
    
    // Test 1: Verify the new object has inherited employee poperties and has its own property
    it("should create an object with 'name', 'id', 'email' and 'officeNumber'", () => {
        const empManager = new manager('John', 1, 'john@test.com', 10);
        expect(empManager).toEqual({name: 'John', id: 1, email: 'john@test.com', officeNumber: 10});
    });
});