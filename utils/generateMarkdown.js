// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// takes in the license name and converts to a badge URL, if there is no license selected, returns an empty string
function renderLicenseBadge(license) {
  const address = license.replace(' ', '%20');
  return (license === 'No License' ? '' : `![License](https://img.shields.io/badge/License-${address}-blue)`);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// Created an object of license links with the keys of the license name. Takes in the license name chosen and returns the link for that license.
function renderLicenseLink(license) {
  const licenseLinks = {
    'GNU AGPLv3': 'https://opensource.org/licenses/AGPL-3.0',
    'GNU GPLv3': 'https://opensource.org/licenses/GPL-3.0',
    'GNU LGPLv3': 'https://opensource.org/licenses/LGPL-3.0',
    Mozilla: 'https://opensource.org/licenses/MPL-2.0',
    Apache: 'https://www.apache.org/licenses/LICENSE-2.0',
    MIT: 'https://opensource.org/licenses/MIT',
    Boost: 'https://opensource.org/licenses/BSL-1.0',
    'The Unlicense': 'https://unlicense.org/',
    'No License': ''
  }
  return licenseLinks[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// utilizes the renderLicenseLink function to return a template literal with the license name and link. If no license is chosen, returns an empty string.
function renderLicenseSection(license) {
  const links = renderLicenseLink(license);
  
  return (license === 'No License' ? '' : `This application is covered under the ${license} license. For more information, please see: [${license}](${links})`)
}

// TODO: Create a function to generate markdown for README

// takes in the inquirer data and returns a template literal utilizing that data. This will become the README file.
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  const badge = renderLicenseBadge(data.license);

  return `# ${data.title}
  
  ${badge}

  ## Description

  ${data.description}

  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Tests](#tests)
  7. [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${licenseSection}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  My GitHub username is: [${data.username}](https://github.com/${data.username})

  If you have additional questions, you can reach me at my e-mail any time. ${data.email}
`;
}

module.exports = generateMarkdown;
