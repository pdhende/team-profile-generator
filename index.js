const fs = require('fs');
const inquirer = require('inquirer');
const { inherits } = require('util');

// Array of questions to get manager info
const managerQues = [
    {
        type: "input",
        name: "managerName",
        message: `What is the team manager's name?`,
    },
    {
        type: "number",
        name: "managerId",
        message: `What is the team manager's Id?`,
    },
    {
        type: "input",
        name: "managerEmail",
        message: `What is the team manager's email?`,
    },
    {
        type: "number",
        name: "managerOfficeNo",
        message: `What is the team manager's office number?`,
    }
];

const commonQues = [
    {
        type: "list",
        name: "teamMember",
        message: `Which type of team member would you like to add?`,
        choices: ['Engineer', 'Intern', 'Done adding all team members'],
    }
];

// Array of questions to get engineer info
const engineerQues = [
    {
        type: "input",
        name: "engName",
        message: `What is the engineer's name?`,
    },
    {
        type: "number",
        name: "engId",
        message: `What is the engineer's Id?`,
    },
    {
        type: "input",
        name: "engEmail",
        message: `What is the engineer's email?`,
    },
    {
        type: "input",
        name: "engGithub",
        message: `What is the engineer's GitHub username?`,
    }
];

function askCommonQues() {
    inquirer.prompt(commonQues).then((answers) => {
        let questionSet;
        if(answers.teamMember === "Engineer") {
            questionSet = engineerQues;
            // console.log(questionSet);
            askEmpDetails(questionSet);
        }
        else if(answers.teamMember === "Intern") {
            questionSet = 'internQues';
            // console.log(questionSet);
            askEmpDetails(questionSet);
        }
        else {
            console.log("Team members added succesfully!");
        }
    });
}

function askEmpDetails(questionSet) {
    // console.log(questionSet);
    inquirer.prompt(questionSet).then((answers) => {
        askCommonQues();
    });
}

function init() {
        inquirer.prompt(managerQues).then((answers) => {
            askCommonQues();
    });
}

init();