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
const generateMarkdown = ({
  title,
  tagline,
  description,
}) => {
  // console.log("generateMarkdown is working");
  return `# ${title}
  ${tagline}
  
  ## License
  
  ${renderLicenseBadge()}
  ${renderLicenseLink()}
  ${renderLicenseSection()}
  
  ## Table of Contents
  
  - [License](#license)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Credits](#credits)
  - [Questions](#questions)

  ## Description
  
  ${description}
  

`;
};

module.exports = generateMarkdown;
