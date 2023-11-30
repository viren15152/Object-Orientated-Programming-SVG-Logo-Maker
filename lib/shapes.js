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
class Trinagle extends Shape {
    render() {
        // This section will return polygon with color input
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}