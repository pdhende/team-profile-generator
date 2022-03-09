const intern = require('../lib/Intern');

describe('intern', () => {

    const empIntern = new intern('John', 1, 'john@test.com', 'Georgia Tech');
    //Test 1: Verify if the new object has all the inherited properties of employee class and intern class
    describe('Initialization', () => {
        it("should create a new object with 'name, 'id', email' and 'school", () => {
            expect(empIntern).toEqual({name: 'John', id: 1, email: 'john@test.com', school: 'Georgia Tech'});
        });
    });
});