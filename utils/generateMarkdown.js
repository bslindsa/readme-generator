// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  switch (license) {
    case 'Apache 2.0':
      badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'Boost':
      badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
      break;
    case 'BSD 3':
      badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
      break;
    case 'BSD 2':
      badge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
      break;
    case 'None':
      break;
    default:
      badge = " ";
      break;
  }
  return badge;
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
  switch (license) {
    case 'Apache 2.0':
      link = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'Boost':
      link = 'https://www.boost.org/LICENSE_1_0.txt';
      break;
    case 'BSD 3': 
      link = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'BSD 2':
      link = 'https://opensource.org/licenses/BSD-2-Clause';
      break;
    case 'None':
      link = "";
      break;
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  else {
  return `This project is licensed under the ${license} license.`
}}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
// Render license badge to top of page.
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
   
<a name="installation"></a>
## Installation

${data.installation}

<a name="usage"></a>
## Usage

${data.usage}

<a name="license"></a>
## License

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

<a name="contributing"></a>
## Contributing

${data.contributing}

<a name="tests"></a>
## Tests
To run tests, use the following command:
\`\`\`
${data.tests}
\`\`\`

<a name="questions"></a>
## Questions

Github Username: ${data.githubUser} \n
Email: ${data.email}

`;
}

module.exports = generateMarkdown;
