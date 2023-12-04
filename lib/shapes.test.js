// This is my import statement.
const { Shape, Circle, Triangle, Square } = require('./shapes');
// This section of my code is a test to check if the shape class can be successfully created. (Therefore if my code for creating a Shape is working as expected the test will pass.)
describe('Shape Class', () => {
    test('should create a Shape instance', () => {
        const shape = new Shape();
        expect(shape).toBeInstanceOf(Shape);
    });

  
});
//This test will verfiy that when you create a new instance of the Circle class.
describe('Circle Class', () => {
    test('should create a Circle instance', () => {
        const circle = new Circle();
        expect(circle).toBeInstanceOf(Circle);
    });
//This section of my code is testing whether the render method for a circle object when it's color is set to red and generates the correct SVG content with expected attributes.
    test('render method should return the expected SVG content with the specified color', () => {
        const circle = new Circle();
        circle.setColor('red');
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });


});
// This test will verify that when you create a new instance of the Triangle class.
describe('Triangle Class', () => {
    test('should create a Triangle instance', () => {
        const triangle = new Triangle();
        expect(triangle).toBeInstanceOf(Triangle);
    });
//This section of my code is is testing whether the render method for a Triangle object when it's color is set to green.
    test('render method should return the expected SVG content with the specified color', () => {
        const triangle = new Triangle();
        triangle.setColor('green');
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
    });


});

describe('Square Class', () => {
    test('should create a Square instance', () => {
        const square = new Square();
        expect(square).toBeInstanceOf(Square);
    });
//This section of my code is testing whether the render method for a triangle object when it's color is set to blue.
    test('render method should return the expected SVG content with the specified color', () => {
        const square = new Square();
        square.setColor('blue');
        expect(square.render()).toEqual('<rect x="56" y="56" width="188" height="188" fill="blue" />');
    });

  
});
