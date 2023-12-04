// Shape class utilizes constructer to define what it means to be a shape (The constructer method is a special method of a class for creating and initiazling an object instance of that class.)
class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
// This section is a method for rendering SVG
    render() {
        return '';
    }
}
//In this section of my code the Triangle Class inherits properties defined in Shape Class
class Triangle extends Shape {
    render() {
        // This section will return polygon with color input
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="56" y="56" width="188" height="188" fill="${this.color}" />`;
    }
}

module.exports = { Shape, Triangle, Circle, Square };

//In Node.js as each file is treated as a module the `module.exports` object is used to expose functionality or data from that module to other parts of my program.