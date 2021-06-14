module.exports = templateData => {
  const { projects, about, ...header } = templateData;
  return `
  # Your Project Title
  * ${readMeTitle}
  ## Description 
    * ${description}
  ## Table of Contents (Optional)
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
    * To install: ${installation}
  
  ## Usage 
    * Use this program by: ${usage}
  
  ![alt text](assets/images/ss.png)
  
  
  ## Credits
   * The following folks helped with this project: ${credits}
  
  ## License
   *${lincense}
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  
  ## Features
    * The project has the following features: ${features}
  
  ## Contributing
    * If you'd contribute to this project, consider the following: ${contribute} 
  ## Tests
  ${tests}

  ## Questions?
  * Reach out to the repository owner ${github}, ${link}
`;
};