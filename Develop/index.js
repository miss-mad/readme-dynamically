// "require" is a way to target a file or package needed to create this readme generator app
// in the first two cases, "require" allows us to use certain packages within this js file
const inquirer = require("inquirer");
const fs = require("fs");
// in this case, information from another js file is imported so that we can use it in this one
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
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
      // ---- Help section ----
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
        message: "You're a pro! Press ENTER",
        name: "noHelpREADME",
        when: (answer) => answer.helpREADME === false,
      },
      // ---- end of Help section ----
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
        type: "input",
        message: "Describe your project",
        name: "description",
      },
      // returns project description in README
      // ---- Deployed App Link section ----
      {
        type: "confirm",
        message: "Does your project have a deployed application link?",
        name: "deployedApplicationLinkConfirm",
      },
      {
        type: "input",
        message: "Paste your deployed application link here:",
        name: "deployedApplicationLink",
        when: (answer) => answer.deployedApplicationLinkConfirm === true,
      },
      {
        type: "input",
        message: "If no deployed application link, press ENTER",
        name: "noDeployedApplicationLink",
        when: (answer) => answer.deployedApplicationLinkConfirm === false,
      },
      // checks if project has a deployed application link; if so, then returns deployed application link in README, if not, user moves on
      // ---- end of Deployed App Link section ----
      {
        type: "input",
        message: "Detail how to install this app, step-by-step",
        name: "installation",
      },
      // returns app installation instructions in README
      // ---- Screenshots section ----
      {
        type: "confirm",
        message:
          "Do you have screenshots of your project that you would like to include?",
        name: "usageScreenshotsConfirm",
      },
      {
        type: "input",
        message:
          "First upload screenshots to appropriate folder within project, then create their path here with this syntax: ![<Project title> screenshot 1](<relative path to screenshot>)",
        name: "uploadScreenshots",
        when: (answer) => answer.usageScreenshotsConfirm === true,
      },
      {
        type: "input",
        message: "If no screenshots, press ENTER",
        name: "noScreenshots",
        when: (answer) => answer.usageScreenshotsConfirm === false,
      },
      // checks if project has accompanying screenshots; if so, then requests a certain syntax (for markdown) and returns dynamically created screenshots in README, if not, user moves on
      // ---- end of Screenshots section ----
      {
        type: "input",
        message: "What improvements would you make to this app in the future?",
        name: "futureImprovements",
      },
      // returns suggestions for the project's future betterment in README
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
          return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
            email
          );
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
        console.log("Success! (but no README generated)");
      }
    });
}

// TODO: Create a function to write README file
function writeToFile(answers) {
  // "fs" stands for "file-system" and is something built into node.js to allow us to read and write files. in this case, we're writing (creating) a new README.md file and then calling the generateMarkdown() function to populate the file with the format and information we want.
  fs.writeFile("README.md", generateMarkdown(answers), (err) => {
    // another error-catcher
    err ? console.log(err) : console.log("README successfully created!");
  });
}

// TODO: Create a function to initialize app
// this function calls the questions() function to start the whole thing off
function init() {
  questions();
}
// and of course, we need to call the function that starts everything off
init();

// GIVEN a command-line application that accepts user input

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
