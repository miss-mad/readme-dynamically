// "require" is a way to target a file or package needed to create this readme generator app
const inquirer = require("inquirer");
const fs = require("fs");
// const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

// inquirer guide
// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

function questions() {
  inquirer
    .prompt([
      // index from const questions?
      {
        type: "input",
        message: "What is the title of your project?",
        name: "projectTitle",
      },
      {
        type: "input",
        message: "What is your project tagline?",
        name: "projectTagline",
      },
      {
        type: "input",
        message: "What is your project description?",
        name: "projectDescription",
      },
      // {
      //   type: "input",
      //   message: "What is your preferred method of communication?",
      //   choices: ["SMS", "email", "call"],
      //   name: "communication",
      // },
    ])

    .then((answers) => {
      console.log(answers);
      writeToFile(answers);
    })

    .catch((error) => {
      if (error.isTtyError) {
        console.log(error);
      } else {
        console.log("Success!");
      }
    });
}

// TODO: Create a function to write README file
function writeToFile(answers) {
  console.log("writeToFile is working");
  fs.writeFile("README.md", JSON.stringify(answers, null, "  "), (err) => {
    err ? console.log(err) : console.log("README successfully created!");
  });
}

// TODO: Create a function to initialize app
function init() {
  questions();
  // writeToFile(answers);
  // generateMarkdown();
}
// Function call to initialize app
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
