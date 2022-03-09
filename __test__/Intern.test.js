const intern = require('../lib/Intern');

describe('intern', () => {

    const empIntern = new intern('John', 1, 'john@test.com', 'Georgia Tech');
    //Test 1: Verify if the new object has all the inherited properties of employee class and intern class
    describe('Initialization', () => {
        it("should create a new object with 'name, 'id', email' and 'school", () => {
            expect(empIntern).toEqual({name: 'John', id: 1, email: 'john@test.com', school: 'Georgia Tech'});
        });
    });

    // Test 2: Check if function getSchool returns name of school
    describe('getSchoolName', () => {
        it("should return the school name of intern", () => {
            let empSchool = empIntern.getSchool();
            expect(empSchool).toEqual('Georgia Tech');
        });
    });

    // Test 3: Check if function getRole returns the role as 'Intern'
    describe('getRole', () => {
        it("should return the role as Intern", () => {
            let empRole = empIntern.getRole();
            expect(empRole).toEqual('Intern');
        });
    });
});