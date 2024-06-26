const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: "Enter text for your graphic, up to three characters.",
        },
        {
            type: 'input',
            name: 'color',
            message: "Enter a color keyword or hexadecimal number for your graphic.",
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape for your graphic, from the following:',
            choices: ['Circle', 'Triangle,', 'Square']
        },
    ])