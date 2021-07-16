const generateLicense = (license) => {
    "Apache", "BSD 3-Clause License", "GNU", "MIT", "Mozilla"
    switch (license) {
        case "Apache":
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        case "BSD 3-Clause License":
            return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause`;
        case "GNU GPL v3":
            return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
        case "MIT":
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT`;
        case "Mozilla":
            return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    }

}


module.exports = data => {
    const { title, description, installation, usage, contribution, test, license, github, email } = data;
    return `
# ${title}

${generateLicense(license)}

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

