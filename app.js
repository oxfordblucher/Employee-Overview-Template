const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { type } = require("os");
const Employee = require("./lib/Employee");

const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your employee's name?"
    },
    {
        type: "number",
        name: "id",
        message: "What is their employee ID#?"
    },
    {
        type: "input",
        name: "email",
        message: "What is their email?"
    },
    {
        type: "list",
        name: "role",
        message: "What is their role?",
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: "number",
        name: "officeNumber",
        message: "Which office do they manage?",
        when: (answers) => answers.role === 'Manager'
    },
    {
        type: "input",
        name: "school",
        message: "What school do they attend?",
        when: (answers) => answers.role === 'Intern'
    },
    {
        type: "input",
        name: "github",
        message: "What is their github?",
        when: (answers) => answers.role === 'Engineer'
    },
    {
        type: "confirm",
        name: "more",
        message: "Enter another employee?"
    }
]

const employeeList = []
let teamMembers = []

async function addEmployee() {
    await inquirer.prompt(questions).then(function(data) {
        const employeeInfo = {
            name: data.name,
            id: data.id,
            email: data.email,
            role: data.role,
            github: data.github,
            office: data.officeNumber,
            school: data.school
        }
        employeeList.push(employeeInfo)
        if (data.more) {
            addEmployee();
        } else {
            for (let i = 0; i < employeeList.length; i++) {
                let employee = employeeList[i]

                switch (employee.role) {
                    case "Manager":
                        const manager = new Manager (employee.name, parseInt(employee.id), employee.email, parseInt(employee.office))
                        teamMembers.push(manager)
                        break;
                    case "Engineer":
                        const engineer = new Engineer (employee.name, parseInt(employee.id), employee.email, employee.github)
                        teamMembers.push(engineer)
                        break;
                    case "Intern":
                        const intern = new Intern (employee.name, parseInt(employee.id), employee.email, employee.school)
                        teamMembers.push(intern)
                        break;
                }
            }
            let teamHTML = render(teamMembers);
            fs.writeFileSync(outputPath, teamHTML);
        }
    })
}

addEmployee();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
