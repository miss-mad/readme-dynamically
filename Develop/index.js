// "require" is a way to target a file or package needed to create this readme generator app
// in the first two cases, "require" allows us to use certain packages within this js file
const inquirer = require("inquirer");
const fs = require("fs");
// in this case, information from another js file is imported so that we can use it in this one
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
function questions() {
  inquirer
    .prompt([

      // Possible type values: input (string), number (must have # or returns NaN), confirm (Y/N and returns false), list (choose one from a list), rawlist (choose one from a list - more primitive looking), expand (??), checkbox (check one or multiple from a list; complicated selection process), password (hides whatever you type), editor (launches user's preferred text editor (notepad) and then displays the content as the result)
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
      },
      {
        type: "input",
        message: "What is your project tagline? (A short phrase or slogan to summarize the project)",
        name: "tagline",
      },
      {
        type: "input",
        message: "What is your project description?",
        name: "description",
      },
      // {
      //   type: "confirm",
      //   message: "Does your project have a deployed application link?",
      //   name: "deployedApplicationLink",
      // },
      {
        type: "input",
        message: "What is your project description?",
        name: "description",
      },

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
