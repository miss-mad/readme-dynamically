# Professional README Generator
A README for a README!

## Table of Contents

- [Description](#description)
- [Deployed Application](#deployed-application)
- [Future Improvements](#future-improvements)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Description

Within this repo is a handy tool that lets anyone dynamically create a beautiful yet informational README for any project. Using node.js in the terminal, the user simply enters a thorough walkthrough of their project from top to bottom, and then a perfectly functional README is generated and ready to be added to their project.

## Deployed Application

This challenge does not include a deployed application. Instead, a screen-recorded video is submitted alongside the github repo link.

Video link: 

## Future Improvements

 * Validation: I received help from a TA in class to use Regex for validating the user input email and URL. For the most part, I got the validation to work, but for the URL I couldn't quite get the Regex code to check for github.com or linkedin.com specifically, just that it contained "http" or "https."

 * Even more dynamic: I'd like to find a way to create an ever more dynamic README in which, if the user says no to the question, that section of the README is omitted entirely. For example, if they do not have a deployed application link of the project that they'd like to add, they would say N to the Y/N confirm question type in the inquirer.prompt function, and then when the README is generated there would be no deployed application link README section at all.

## Installation

To operate this app, follow these instructions:

1] Fork this repository to create a copy in your own Github
2] Clone it down to your computer with either the SSH key (if you have that set up, or the HTTPS link)
3] Open your computer's version of the terminal (GitBash, iTerm, etc.)
4] Within the terminal, navigate (cd) into the new local repo you have just created
5] Enter "npm install" or "npm i" in the terminal to install the necessary node modules for this project
6] Enter "node index.js" to run the app.
7] The app should ask you a series of questions about your project, then create a README for you to take with you!

## Usage

Below is a screenshot of the Professional README Generator.

![Professional README Generator screenshot 1](./Develop/assets/images/Professional_README_Generator_screenshot_1.JPG)

## Credits

Collaborators:

Andres Jimenez - TA

[Terry Kim](https://github.com/TeryKing) - Fellow bootcamper

[Melissa Stan](https://github.com/mstan19) - Fellow bootcamper

List of resources used:

https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide

https://www.npmjs.com/package/inquirer

https://choosealicense.com/

https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide

## License

No licenses (default copyright laws apply).

---