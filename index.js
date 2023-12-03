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

// In this section I've added an async function to get user input this is the part of my application that will interact with the user to collect input data. It will then use the inquirer library
async function getUserInput() {
    return inquirer.prompt([
        { type: 'input', name: 'text', message: 'Enter up to three characters for the text:', validate: (text) => text.length <= 3 },
        { type: 'input', name: 'textColor', message: 'Enter the text color (keyword or hex):', validate: Boolean },
        { type: 'list', name: 'shape', message: 'Choose a shape:', choices: ['circle', 'triangle', 'square'] },
        { type: 'input', name: 'shapeColor', message: 'Enter the shape color (keyword or hex):', validate: Boolean },
    ]);
}
// I have added this function so that it will save content to a file synchronously 
function saveToFile(filename, content) {
    fs.writeFileSync(filename, content);
}

//This section of my code is used for creating and saving coloured shapes as SVG images based on the users input.

async function main() {
  try {
    const { shape, shapeColor } = await getUserInput();

    const ShapeClass = shapeClasses[shape];
    if (!ShapeClass) {
      console.error('Invaild shape choice');
      return;
    }

    const shapeInstance = new ShapeClass();
    shapeInstance.setColor(shapeColor);

    const svgContent = `<svg width="300" height="200">${shapeInstance.render()}</svg>`;

    saveToFile('logo.svg' , svgContent);

    console.log('Generated logo.svg');
  }  catch (error) {
    console.error('Error:' , error.message);
  }
}
// I have added an asynchronous function that serves as a higher-level interface to coordinate user interaction in my application (High-level interfaces are designed to allow a programmer to write code in a shorter amount of time and to be less involved with the details of the software module that is performing the required service.)
async function promptUser() {
  await main();
}
// This section of code will allow me to call the promptUser function and therefore it will initiate the execution of the promptUser function.
promptUser();