const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    {
        type: "input",
        name: "managerName",
        message: `What is the team manager's name?`,
    },
    {
        type: "input",
        name: "managerId",
        message: `What is the team manager's Id?`,
    },
    {
        type: "input",
        name: "managerEmail",
        message: `What is the team manager's email?`,
    },
    {
        type: "input",
        name: "managerOfficeNo",
        message: `What is the team manager's office number?`,
    },
];

inquirer.prompt(questions);
    