// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //return `## Cris' ${license}`;
  if(license !== "undefined") {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`
  }
};
//if(readMeData.license == 'MIT') {
  //    var licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  //  }
  // [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
  // [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
  //}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "undefined") {
    return `https://opensource.org/licenses/${license}`
}
};

// https://opensource.org/licenses/MIT
//https://opensource.org/licenses/BSD-3-Clause
//https://www.gnu.org/licenses/gpl-3.0

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.readMeTitle}
  ${renderLicenseBadge(data.license)}

  ## Description 
    * ${data.description}
  ## Table of Contents (Optional)
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation
    * To install: ${data.installation}
  
  ## Usage 
    * Use this program by: ${data.usage}
  
  ![alt text](assets/images/ss.png)
  
  
  ## Credits
   * The following folks helped with this project: ${data.credits}
  
  ## License
   * This project uses this license: ${renderLicenseLink(data.license)}
  
  ## Badges
  
  * ${renderLicenseBadge(data.license)}
  
  ## Features
    * The project has the following features: ${data.features}
  
  ## Contributing
    * If you'd contribute to this project, consider the following: ${data.contribution} 
  ## Tests
    *${data.tests}

  ## Questions?
  * Reach out to the repository owner ${data.github}, ${data.link}, or email at ${data.email}

`;
}

module.exports = generateMarkdown;
