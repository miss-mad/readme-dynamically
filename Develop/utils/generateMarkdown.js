// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GNU General Public License v 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "BSD 2-Clause Simplified License":
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    case "BSD 3-Clause New/Revised License":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "Boost Software License 1.0":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    case "Creative Commons Zero v 1.0 Universal":
      return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
    case "Eclipse Public License 2.0":
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    case "GNU Affero General Public License v 3.0":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    case "GNU General Public License v 2.0":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    case "GNU Lesser General Public License v 3.0":
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "The Unilicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";

    default:
      return "None";
  }
}

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
  email,
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
