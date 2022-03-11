const fs = require('fs');
const inquirer = require('inquirer');
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const createTeam = require('./team');
const { inherits } = require('util');

// Varibale declaration
var managerDet;
const engArr = [];
const internArr = [];

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

// Function to start questions for Manager info
function init() {
    inquirer.prompt(managerQues).then((answers) => {
        let name = answers.managerName;
        let id = answers.managerId;
        let email = answers.managerEmail;
        let officeNum = answers.managerOfficeNo;
        // create a manager object with above details
        managerDet = new manager(name, id, email, officeNum);
        console.log(managerDet);
        addMemberQ();
    });
}

// Function to ask if user wants to add more questions
function addMemberQ() {
    inquirer.prompt(commonQues).then((answers) => {
        let questionSet;
        let memberType = answers.teamMember;
        if(memberType === "Engineer") {
            questionSet = engineerQues;
            askEmpDetails(memberType, questionSet);
        }
        else if(memberType === "Intern") {
            questionSet = internQues;
            askEmpDetails(memberType, questionSet);
        }
        else {
            console.log("Team members added succesfully!");
            module.exports = {managerDet, engArr, internArr};
            createTeam();
        }
    });
}

// Function to prompt questions based on 'Engineer' or 'Intern'
function askEmpDetails(memberType, questionSet) {
    inquirer.prompt(questionSet).then((answers) => {
        if(memberType === "Engineer") {
            let name = answers.engName;
            let id = answers.engId;
            let email = answers.engEmail;
            let gitHub = answers.engGithub;
            
            // Add the engineer details to an array of objects
            const newEngDet = new engineer(name, id, email, gitHub);
            engArr.push(newEngDet);
            console.log(engArr);
        }
        else {
            let name = answers.internName;
            let id = answers.internId;
            let email = answers.internEmail;
            let school = answers.internSchool;
            
            // Add the intern details to an array of objects
            const newIntDet = new intern(name, id, email, school);
            internArr.push(newIntDet);
            console.log(internArr);
        }
        addMemberQ();
    });
}

// Call function to begin question prompts
init();