const inquirer = require('inquirer');
const generateREADME = require('./src/readme-template');
const writeREADME = require('./utils/generate-readme');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Please enter your title:"
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a description:"
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide installation instructions:"
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide 'usage' instructions:"
        },
        {
            type: "input",
            name: "contribution",
            message: "Please provide the contribution credit:"
        },
        {
            type: "input",
            name: "test",
            message: "Please provide tests:"
        },
        {
            type: "list",
            name: "license",
            message: "Please provide license:",
            choices: ["Apache", "BSD 3-Clause License", "GNU GPL v3", "MIT", "Mozilla"]
        },
        {
            type: "input",
            name: "github",
            message: "Please enter your GitHub username:"
        },
        {
            type: "input",
            name: "email",
            message: "Please provide your email:"

        }
    ])
}

promptUser()
    .then(inquirerData => {
        console.log(inquirerData)
        return generateREADME(inquirerData)
    })
    .then(templateData => {
        console.log(templateData)
        writeREADME(templateData)
    })
    .catch(err => {
        console.log(err)
    })