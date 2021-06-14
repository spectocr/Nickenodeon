// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if(readMeData.license == 'MIT') {
  //   var licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  // }
  //[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
  //[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
// https://opensource.org/licenses/MIT
//https://opensource.org/licenses/BSD-3-Clause
//https://www.gnu.org/licenses/gpl-3.0
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = readMeContent => {
  return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', readMeContent, err => {
          // if there is an error, reject the Promise and send the error to the Promises '.catch()' method.
          if (err) {
              reject(err);
              // return out of the function here to make sure the Promise doesn't execute the resolve funciton as well
              return;
          }
          // if everything went well, resolve the Promise and send the successful data to the '.then()' method
          resolve({
              ok: true,
              message: 'File created!'
          });
      });
  });
};

module.exports = {generateMarkdown};