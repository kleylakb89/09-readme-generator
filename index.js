// TODO: Include packages needed for this application
const {prompt} = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is your project description?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are your installation instructions?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'What license would you like to choose?',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla', 'Apache', 'MIT', 'Boost', 'The Unlicense', 'No License'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'What are your test instructions?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your e-mail?',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => err ? console.log(err) : console.log('Your README is complete!'));
}

// TODO: Create a function to initialize app
const init = async () => {
    const data = await prompt(questions);
    writeToFile('generatedREADME.md', data);
}

// Function call to initialize app
init();
