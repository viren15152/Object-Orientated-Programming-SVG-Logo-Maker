// This section will import the classes to be tested
const { Shape, Circle, Triangle, Square } = require('lib/shapes.js');  

// This section is the test cases for the Shape Class
describe('Shape Class', () => {
    test('should create a Shape instance', () => {
        const shape = new Shape();
        expect(shape).toBeInstanceOf(Shape);
    });
});
