// Inquirer (node package manager) import This require method lets my application know that it needs to use the inquirer package to execute the code below. 
const inquirer = require('inquirer');
// This is the file system module (node package manager) import, it will allow me to import the built in 'fs' file system module. In node.js the 'fs' module provides and API for interacting with the files system.
const fs = require('fs');

// In this section I have used the constructer method to initialize an instance variable 'color' with an empty string. This variable will be stored and used to store the color of the shape.
class Shape {
    constructor() {
        this.color = '';
    }

    render() {
        return '';
    }
}


