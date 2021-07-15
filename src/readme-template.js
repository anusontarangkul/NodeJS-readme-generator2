module.exports = data => {
    const { title, description, installation, usage, contribution, test, license, github, email } = data;
    return `
    # ${title}

    ## Description

    ${description}

    ## Installation

    ${installation}

    ## Usage

    ${usage}

    ## Contribution

    ${contribution}

    ## Test

    ${test}

    ## License

    ${license}

    ## GitHub

    ${github}

    ## Email

    ${email}
    `
}