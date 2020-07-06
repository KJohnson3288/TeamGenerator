const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { eventNames } = require("process");


let teamMembers = [];


const startQuestion = [
    {
        type: "list",
        message: "Would you like to add a member or generate current team.",
        name: "Add",
        choices:["Add Member", "Generate Team"]
    }
]

const questions = [
    {
        type: "list",
        message: "What is your Role",
        name: "role",
        choices: ["Intern", "Engineer", "Manager"]
    },
    {
        type: "input",
        message: "Please enter your name",
        name:"name"
    },
    {
        type: "input",
        message: "What is your id Number?",
        name: "idNumber"
    },
    {
        type: "input",
        message: "What is your email?",
        name:"email"
    }

]

const questionsManager = [
    {    
        type: "input",
        message: "What is your office number?",
        name:"officeNumber"
    }
]

const questionsEngineer = [
    {    
        type: "input",
        message: "What is your Github account?",
        name:"github"
    }
]

const questionsIntern = [
    {    
        type: "input",
        message: "What is school are you internning from?",
        name:"school"
    }
]

startApp()


function startApp() {
    inquirer.prompt(startQuestion).then((choices) => {
        if (choices.Add === "Add Member") {
            
            addMember();
        } else {
            createHTML();
        }
    })
}

function addMember() {

    inquirer.prompt(questions).then(({role, name, idNumber, email}) => {
        if (role === "Engineer") {
            inquirer.prompt(questionsEngineer).then(({github}) => {
                engineer = new Engineer({name, role, idNumber, email, github});
                teamMembers.push(engineer);  
                console.log(engineer);
                startApp()
            })
        } else if (role === "Intern") {
            inquirer.prompt(questionsIntern).then((school) => {
                intern = new Intern(name, role, idNumber, email, school);
                teamMembers.push(intern);
                console.log(intern);  
                startApp()
            })
        } else if (role === "Manager") {
            inquirer.prompt(questionsManager).then(() => {
                manager = new Manager(name, role, idNumber, email, officeNumber);
                teamMembers.push(manager); 
                console.log(manager);
                startApp()
            })
        }

})
}

console.log(teamMembers)



function createHTML() {

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8")
}
