# README Dynamically: A Professional README Generator
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

Within this repo is a handy tool that lets anyone dynamically create a beautiful yet informational README for any project. Using node.js in the terminal, the user answers a series of questions to create a thorough portrait of their project. Once complete, a perfectly functional README is generated and ready to be added to their project.

This README Generator includes a feature that makes it even more dynamic. If the user does not answer a question, the heading for that section in the README will be omitted, creating a less cluttered and more efficient README. The table of contents is also dynamically adjusted to omit the corresponding section. This feature only applies to certain sections, as some will be needed for the majority of any user's projects.

## Deployed Application

This challenge does not include a deployed application. Instead, a screen-recorded video is submitted alongside the github repo link.

Video links:

This video demonstrates the app's full functionality: https://app.castify.com/view/66f572db-21e0-4a2d-ac24-fc18483a8722

This video demonstrates the app's dynamic feature in which, if the user doesn't answer certain sections, that section and its corresponding table of contents link is omitted: https://app.castify.com/view/d1cb6d8a-38ce-4710-bdd1-4976fddad4e9

## Future Improvements

 * Validation: I received help from a TA in class to use Regex for validating the user input email and URL. For the most part, I got the validation to work, but for the URL I couldn't quite get the Regex code to check for "github.com" or "linkedin.com" specifically, just that it contained "http" or "https."
 * Spacing: When I added the ternary operators to the section headers and table of contents section within the generateMarkdown() function, I noticed that some of the spacing is off when the README generated. The spacing issue doesn't show as much in the README preview, though, which is good.
 * Strange misspellings? When practicing to screen-record my project, I pasted multiple lines of text from my sample README into the terminal to answer each question quickly in the video. I noticed that in the generated README, some words were missing letters and those letters would appear later on. It seems to be a bug within the integrated terminal in VSCode. Curiously, it did not give me misspellings when running the app through GitBash.
 * Licenses: Add an option for no license

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