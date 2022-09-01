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
  deployedApplicationLink,
  installation,
  uploadScreenshots,
  futureImprovements,
  contributing,
  tests,
  collaborators,
  resourceLinks,
  github,
  linkedIn,
  email
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
  - [Future Improvements](#future-improvements)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Credits](#credits)
  - [Questions](#questions)

  ## Description
  
  ${description}
  
  ## Deployed Application
  
  ${deployedApplicationLink}

  ## Installation
  
 ${installation}
 
  ## Usage
  
  Below are screenshots of the ${title}.
  
  ${uploadScreenshots}

  ## Future Improvements

  * ${futureImprovements}
  
  ## Contributing

  Thanks for contributing! Instructions to do so are detailed here:

  ${contributing}

  ## Tests

  ${tests}
  
  ## Credits
  
  ${collaborators}
  
  List of resources used:
  
  ${resourceLinks}
  
  ## Questions

  Any questions? I'd love to hear from you!
  Contact me at:
  ${github}, ${linkedIn}, or good old fashioned ${email}.
  
  ---
`;
};

module.exports = generateMarkdown;
