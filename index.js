// Inquirer (node package manager) import. This require method lets my application know that it needs to use the inquirer package to execute the code below. 
const inquirer = require('inquirer');
// This is the file system module (node package manager) import, it will allow me to import the built in 'fs' file system module. In node.js the 'fs' module provides and API for interacting with the files system.
const fs = require('fs');

// In this section I have used the constructer method to initialize an instance variable 'color' with an empty string. This variable will be stored and used to store the color of the shape.
class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return '';
    }
}

//This section of code defines JavaScript classes: Triangle, Circle and Square. Each of these classes extends a hypothetical shape class and I have added a method called render that returns an SVG representation of the respective shape.
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
// This section of code defines a JavaScript object named shapeClass. This object serves as a mapping between string keys (representing different shapes) and corresponding class constructers.
const shapeClass = {
    circle: Circle,
    triangle: Triangle,
    square: Square,
};

