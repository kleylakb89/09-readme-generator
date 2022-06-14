// TODO: Include packages needed for this application

// including inquirer for prompts, fs for writing files, and generateMarkdown for code
const {prompt} = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

// These questions gather data to fill out the generated README. If nothing is entered, an error message will display.
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
        validate: answer => (answer.length === 0) ? 'Please input something' : true
    },
    {
        type: 'input',
        message: 'What is your project description?',
        name: 'description',
        validate: answer => (answer.length === 0) ? 'Please input something' : true
    },
    {
        type: 'input',
        message: 'What are your installation instructions?',
        name: 'installation',
        validate: answer => (answer.length === 0) ? 'Please input something' : true
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage',
        validate: answer => (answer.length === 0) ? 'Please input something' : true
    },
    {
        type: 'rawlist',
        message: 'What license would you like to choose?',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla', 'Apache', 'MIT', 'Boost', 'The Unlicense', 'No License'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contributing',
        validate: answer => (answer.length === 0) ? 'Please input something' : true
    },
    {
        type: 'input',
        message: 'What are your test instructions?',
        name: 'tests',
        validate: answer => (answer.length === 0) ? 'Please input something' : true
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
        validate: answer => (answer.length === 0) ? 'Please input something' : true
    },
    {
        type: 'input',
        message: 'What is your e-mail?',
        name: 'email',
        validate: answer => (answer.length === 0) ? 'Please input something' : true
    }
];

// TODO: Create a function to write README file

// writes a README file to the directory
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => err ? console.log(err) : console.log('Your README is complete!'));
}

// TODO: Create a function to initialize app

// init prompts inquirer questions and then writes the README with those answers
const init = async () => {
    const data = await prompt(questions);
    writeToFile('./output/README.md', data);
}

// Function call to initialize app
init();
