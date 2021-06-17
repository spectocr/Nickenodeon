// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const readMeQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your GitHub username!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your contact email? (Required)',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter your email!');
                return false;
              }
            }
          },
        {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'readMeTitle',
        message: 'What is your projects title? (Required)',
        validate: readMeTitleInput => {
          if (readMeTitleInput) {
            return true;
          } else {
            console.log('Please enter your projects title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is your projects description? (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter your projects description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'features',
        message: 'What is your projects features? (Required)',
        validate: featuresInput => {
          if (featuresInput) {
            return true;
          } else {
            console.log('Please enter your projects features!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Who helped make this project? (Required)',
        validate: creditsInput => {
          if (creditsInput) {
            return true;
          } else {
            console.log('Please enter your projects helpers!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What is your projects installation instructions? (Required)',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('Please enter your projects installation instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is your projects usage information? (Required)',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('Please enter your projects usage information!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What is your projects contribution guidelines? (Required)',
        validate: guidelinesInput => {
          if (guidelinesInput) {
            return true;
          } else {
            console.log('Please enter your projects contribution guidelines!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What is your projects test instructions? (Required)',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('Please enter your projects test instructions!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'License (Check what applies)',
        choices: ['None', 'BSD-3-Clause', 'MIT', 'GPL-3.0']
      },
      
    ])
    .then((readMeContent) => {
        console.log(JSON.stringify(readMeContent, null, ''))
        writeToFile('README.md', generateMarkdown(readMeContent))
        
    });
    };
 

// TODO: Create a function to write README file
function writeToFile(fileName, readMeContent) {
   fs.writeFile('./dist/README.md', readMeContent, function (err) {
    if (err) {
      return console.log(err);
    }
  
    console.log("Done!");
  });
}

// TODO: Create a function to initialize app
function init()  {
readMeQuestions()
};


// Function call to initialize app
init();
