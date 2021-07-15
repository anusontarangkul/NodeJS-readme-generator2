const inquirer = require('inquirer')

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your app?"
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a description."
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide installation instructions."
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide 'usage' instructions."
        },
        {
            type: "input",
            name: "contribution",
            message: "Please provide the contribution credit."
        },
        {
            type: "input",
            name: "test",
            message: "Please provide tests"
        },
        {
            type: "input",
            name: "license",
            message: "Please provide license"
        },
        {
            type: "input",
            name: "github",
            message: "Please enter your GitHub username."
        },
        {
            type: "input",
            name: "email",
            message: "Please provide your email."
        }
    ])
}