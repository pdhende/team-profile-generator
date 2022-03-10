const fs = require('fs');
const inquirer = require('inquirer');
const manager = require('./lib/Manager');
const { inherits } = require('util');
const Manager = require('./lib/Manager');

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

// Array of questions to get intern info
const internQues = [
    {
        type: "input",
        name: "internName",
        message: `What is the intern's name?`,
    },
    {
        type: "number",
        name: "internId",
        message: `What is the intern's Id?`,
    },
    {
        type: "input",
        name: "internEmail",
        message: `What is the intern's email?`,
    },
    {
        type: "input",
        name: "internSchool",
        message: `What is the intern's school name?`,
    }
];

// Function to ask if user wants to add more questions
function askCommonQues() {
    inquirer.prompt(commonQues).then((answers) => {
        let questionSet;
        if(answers.teamMember === "Engineer") {
            questionSet = engineerQues;
            askEmpDetails(questionSet);
        }
        else if(answers.teamMember === "Intern") {
            questionSet = internQues;
            askEmpDetails(questionSet);
        }
        else {
            console.log("Team members added succesfully!");
        }
    });
}

// Function to prompt questions based on 'Engineer' or 'Intern'
function askEmpDetails(questionSet) {
    inquirer.prompt(questionSet).then((answers) => {
        askCommonQues();
    });
}

// Function to start questions for Manager info
function init() {
    inquirer.prompt(managerQues).then((answers) => {
        let name = answers.managerName;
        let id = answers.managerId;
        let email = answers.managerEmail;
        let officeNum = answers.managerOfficeNo;
        const managerDet = new Manager(name, id, email, officeNum);
        console.log(managerDet);
        askCommonQues();
    });
}

init();