// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla', 'Apache', 'MIT', 'Boost', 'The Unlicense', 'No License']
// https://img.shields.io/badge/license-${license}-blue
function renderLicenseBadge(license) {
  const address = license.replace(' ', '%20');
  return (license === 'No License' ? '' : `https://img.shields.io/badge/License-${address}-blue`);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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
function renderLicenseSection(license) {
  const links = renderLicenseLink(license);
  
  return (license === 'No License' ? '' : `This application is covered under the ${license} license. For more information, please see: [${license}](${links})`)
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  const badge = renderLicenseBadge(data.license);

  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
