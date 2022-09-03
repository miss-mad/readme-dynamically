// "require" is a way to target a file or package needed to create this readme generator app
// in the first two cases, "require" allows us to use certain packages within this js file
const inquirer = require("inquirer");
const fs = require("fs");
// in this case, information from another js file is imported so that we can use it in this one
const generateMarkdown = require("./utils/generateMarkdown");

function questions() {
  inquirer
    // the following are the list of questions for the user
    .prompt([
      // Possible type values:
      // input (string)
      // number (must have # or returns NaN)
      // confirm (Y/N and returns true/false)
      // list (choose one from a list)
      // rawlist (choose one from a list - more primitive looking)
      // expand (??)
      // checkbox (check one or multiple from a list complicated selection process)
      // password (hides whatever you type)
      // editor (launches user's preferred text editor (notepad) and then displays the content as the result)
      // -------------- HELP SECTION -------------
      {
        type: "confirm",
        message:
          "You're about to create the README of your life. First, do you want some help?",
        name: "helpREADME",
      },
      {
        type: "input",
        message:
          "Follow this link: https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide and then press ENTER",
        name: "helpREADMELink",
        when: (answer) => answer.helpREADME === true,
      },
      {
        type: "input",
        message: "You're a pro! Press ENTER to continue",
        name: "noHelpREADME",
        when: (answer) => answer.helpREADME === false,
      },
      // ----------- END OF HELP SECTION -----------
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
      },
      // returns project title in README
      {
        type: "input",
        message:
          "What is your project tagline? (A short phrase or slogan to summarize the project)",
        name: "tagline",
      },
      // returns project tagline in README
      {
        type: "list",
        message: "Choose a license.",
        choices: [
          "Apache License 2.0",
          "GNU General Public License v 3.0",
          "MIT License",
          "BSD 2-Clause Simplified License",
          "BSD 3-Clause New/Revised License",
          "Boost Software License 1.0",
          "Creative Commons Zero v 1.0 Universal",
          "Eclipse Public License 2.0",
          "GNU Affero General Public License v 3.0",
          "GNU General Public License v 2.0",
          "GNU Lesser General Public License v 3.0",
          "Mozilla Public License 2.0",
          "The Unilicense",
        ],
        name: "license",
      },
      // after the user chooses a license, their choice will go to the renderLicenseBadgeAndLink() function in generateMarkdown.js which will print the correct license name, badge and link to the README
      {
        type: "input",
        message: "Describe your project",
        name: "description",
      },
      // returns project description in README
      // ------- DEPLOYED APP LINK SECTION -------
      // {
      //   type: "confirm",
      //   message: "Does your project have a deployed application link?",
      //   name: "deployedApplicationLinkConfirm",
      // },
      {
        type: "input",
        message: "Paste your deployed application link here:",
        name: "deployedApplicationLink",
        // when: (answer) => answer.deployedApplicationLinkConfirm === true,
      },
      // {
      //   type: "input",
      //   message: "If no deployed application link, press ENTER to continue",
      //   name: "noDeployedApplicationLink",
      //   when: (answer) => answer.deployedApplicationLinkConfirm === false,
      //   default: (answer) => {
      //     if (answer.deployedApplicationLinkConfirm === false) {
      //       return "";
      //     }
      //   },
      // },
      // checks if project has a deployed application link; if so, then returns deployed application link in README, if not, user moves on
      // ----- END OF DEPLOYED APP LINK SECTION -----
      {
        type: "input",
        message: "What improvements would you make to this app in the future?",
        name: "futureImprovements",
      },
      // returns suggestions for the project's future betterment in README
      {
        type: "input",
        message: "Detail how to install this app, step-by-step",
        name: "installation",
      },
      // returns app installation instructions in README
      // ----------- SCREENSHOTS SECTION -----------
      // {
      //   type: "confirm",
      //   message:
      //     "Do you have screenshots of your project that you would like to include?",
      //   name: "usageScreenshotsConfirm",
      // },
      {
        type: "input",
        message:
          "Add screenshots to README. First upload screenshots to appropriate folder within project, then create their path here with this syntax: ![<Project title> screenshot 1](<relative path to screenshot>)",
        name: "uploadScreenshots",
        // when: (answer) => answer.usageScreenshotsConfirm === true,
      },
      // {
      //   type: "input",
      //   message: "If no screenshots, press ENTER to continue",
      //   name: "noScreenshots",
      //   when: (answer) => answer.usageScreenshotsConfirm === false,
      //   default: (answer) => {
      //     if (answer.usageScreenshotsConfirm === false) {
      //       return noScreenshots();
      //     }
      //   },
      // },
      // checks if project has accompanying screenshots; if so, then requests a certain syntax (for markdown) and returns dynamically created screenshots in README, if not, user moves on
      // -------- END OF SCREENSHOTS SECTION --------
      {
        type: "input",
        message: "How to contribute:",
        name: "contributing",
      },
      // returns step-by-step contribution instructions in README
      {
        type: "input",
        message: "What tests can be performed with this app?",
        name: "tests",
      },
      // returns test information in README
      {
        type: "input",
        message: "List any collaborators (with links to their Githubs)",
        name: "collaborators",
      },
      // returns names of project collaborators in README
      {
        type: "input",
        message: "List any resource links used in making this project",
        name: "resourceLinks",
      },
      // returns links to resources or tutorials in README
      {
        type: "input",
        message:
          "What is your Github URL? Paste it here. (Be sure to include the URL's scheme and subdomain as well as domain (https://github.com/)",
        name: "github",
        validate: function (github) {
          // Regex validation
          if (/^(ftp|http|https):\/\/[^ "]+$/.test(github) === true) {
            return /^(ftp|http|https):\/\/[^ "]+$/.test(github);
          } else {
            return console.log(" Please enter a valid Github URL.");
          }
        },
      },
      // validates the user entered a Github URL, then returns the user's Github URL in README
      {
        type: "input",
        message:
          "What is your LinkedIn URL? Paste it here. (Be sure to include the URL's scheme and subdomain as well as domain (https://linkedin.com/)",
        name: "linkedIn",
        validate: function (linkedIn) {
          // Regex validation
          if (/^(ftp|http|https):\/\/[^ "]+$/.test(linkedIn) === true) {
            return /^(ftp|http|https):\/\/[^ "]+$/.test(linkedIn);
          } else {
            return console.log(" Please enter a valid LinkedIn URL.");
          }
        },
      },
      // validates the user entered a LinkedIn URL, then returns the user's linkedin URL in README
      {
        type: "input",
        message: "What is your email?",
        name: "email",
        validate: function (email) {
          // Regex validation
          if (
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
              email
            ) === true
          ) {
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
              email
            );
          } else {
            return console.log(" Please enter a valid email.");
          }
        },
      },
      // validates the user entered an email, then returns the user's email in README
    ])

    // the .prompt returns answers and .then catches those answers
    .then((answers) => {
      console.log(answers);
      // then calls the writeToFile() function to write answers into a newly created README.md file
      writeToFile(answers);
    })

    // if there are any errors, the function should log the error to the console; otherwise, shout, "success!"
    .catch((error) => {
      if (error.isTtyError) {
        console.log(error);
      } else {
        console.log(
          "Success! (but no README generated - something is probably missing from the generateMarkdown)",
          error
        );
      }
    });
}

function writeToFile(answers) {
  // "fs" stands for "file-system" and is something built into node.js to allow us to read and write files. in this case, we're writing (creating) a new README.md file and then calling the generateMarkdown() function to populate the file with the format and information we want.
  fs.writeFile("README.md", generateMarkdown(answers), (err) => {
    // another error-catcher
    err ? console.log(err) : console.log("README successfully created!");
  });
}

// this function calls the questions() function to start the whole thing off
function init() {
  questions();
}
// and of course, we need to call the function that starts everything off
init();
