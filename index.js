const inquirer = require('inquirer');
const fs = require('fs');

// Prompts the user for questions about their desired logo.
function userPrompt() {
    inquirer
     .prompt([
        {
            type: 'input',
            name: 'text',
            message: "Enter text for your graphic, up to three characters.",
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
     });
}

// Initializes the prompt function.
userPrompt();