const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require("./lib/shapes");

// Prompts the user for questions about their desired logo.
function userPrompt() {
    inquirer
     .prompt([
        {
            type: 'input',
            name: 'text',
            message: "Enter text for your graphic, up to three characters.",
            validate: (answer) => {
                if (answer.length > 3) {
                    return console.log("\n Text must be three characters or less! Please try again");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: "Enter a color keyword or hexadecimal number for your text.",
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape for your graphic, from the following:',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color keyword or hexadecimal number for your logo shape.',
        }
     ])
     .then((answers) => {
       //Generate svg logo based on answers
       let shape;
       switch (answers.shape) {
        case 'Circle':
            shape = new Circle();
            break;
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Square':
            shape = new Square();
            break;
       }

       shape.setColor(answers.shapeColor);

       const svgString = 
       `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
        </svg>`


       fs.writeFile('logo.svg', svgString, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('SVG logo generated successfully!');
        }
    });
     });
}

// Initializes the prompt function.
userPrompt();