const inquirer = require('inquirer');
const generateREADME = require('./src/readme-template');


// questions for user
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
            type: "input",
            name: "license",
            message: "Please provide license:"
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
    })
    .catch(err => {
        console.log(err)
    })