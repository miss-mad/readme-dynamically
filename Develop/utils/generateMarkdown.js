// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.tagline}
  
  ## Table of Contents
  
  - [Description](#description)
  - [Deployed Application](#deployed-application)
  - [Future Improvements](#future-improvements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Description
  
  ${data.description}
  
  ## Deployed Application
  
  ${data.deployedApplicationLink}
  
  ## Future Improvements
  
  * ${data.futureImprovements}
  
  ## Installation
  
 ${data.installationInstructions}
  
  ## Usage
  
  Below are screenshots of the ${data.title}.
  
  ![Professional README Generator screenshot 1]()
  ![Professional README Generator screenshot 2]()
  
  ## Credits
  
  ${data.collaborators}
  
   - fellow bootcamper
  
  List of resources used:
  
  ${data.resourceLinks}
  
  ## License
  
  ${data.license}
  
  ---
`;
}

module.exports = generateMarkdown;
