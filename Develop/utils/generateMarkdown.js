// this function returns a license badge based on which license the user chose

const { up } = require("inquirer/lib/utils/readline");

// if there is no license, it returns an empty string
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
      return "";
  }
}

// this function creates the README by populating all data from the inquirer.prompt questions into a long backticked section
// used object desctructuring to pull the properties out of the .prompt within the questions() function
// within this function, if the user doesn not enter an answer to some of the sections, that section heading will not be included in the final README (ternary operator)
const generateMarkdown = ({
  title,
  tagline,
  license,
  description,
  deployedApplicationLink,
  futureImprovements,
  installation,
  uploadScreenshots,
  contributing,
  tests,
  collaborators,
  resourceLinks,
  github,
  linkedIn,
  email,
}) => {
  console.log(installation);
  return `# ${title}
  ${tagline}
  
  ## License
  
  ${renderLicenseBadge(license)}
  
  ## Table of Contents
  
  - [License](#license)
  - [Description](#description)
  ${
    deployedApplicationLink.length > 0
      ? "- [Deployed Application](#deployed-application)"
      : ""
  }
  ${
    futureImprovements.length > 0
      ? "- [Future Improvements](#future-improvements)"
      : ""
  }
  ${installation.length > 0 ? "- [Installation](#installation)" : ""}
  - [Usage](#usage)
  ${contributing.length > 0 ? "- [Contributing](#contributing)" : ""}
  ${tests.length > 0 ? "- [Tests](#tests)" : ""}
  ${
    collaborators.length > 0 && resourceLinks > 0 ? "- [Credits](#credits)" : ""
  }
  - [Questions](#questions)
  - [License Information](#license-information)

  ## Description
  
  ${description}
  
  ${
    deployedApplicationLink.length > 0
      ? "## Deployed Application" + "\n     " + deployedApplicationLink
      : ""
  }

  ${
    futureImprovements.length > 0
      ? "## Future Improvements" + "\n     " + " * " + futureImprovements
      : ""
  }

  ${installation.length > 0 ? "## Installation" + "\n     " + installation : ""}
 
  ## Usage

  Below are screenshots of the ${title}:
  ${uploadScreenshots}

  ${
    contributing.length > 0
      ? "## Contributing" +
        "\n     " +
        "Thanks for contributing! Instructions to do so are detailed here: " +
        contributing
      : ""
  }
  
  ${tests.length > 0 ? "## Tests" + "\n     " + tests : ""}
  
  ${
    collaborators.length > 0
      ? "## Credits" + "\n     " + "Collaborators: " + collaborators
      : ""
  }
  
  ${
    resourceLinks.length > 0
      ? "List of resources used: " + "\n     " + resourceLinks
      : ""
  }
  
  ## Questions

  Any questions? I'd love to hear from you!
  Contact me at:
  ${github},
  ${linkedIn},
  or good old fashioned email ${email}.

  ## License Information

  Click on the license badge for more information about that license ${renderLicenseBadge(
    license
  )}
  
  ---`;
};

// exports this js file (makes this file available to wherever we require it)
module.exports = generateMarkdown;
