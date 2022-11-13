// PACKAGES REQUIRED -------------------------------------------------------------
// FOR IN TEMINAL QUESTIONS
const inquirer = require("inquirer");
// FOR CREATING FILES
const fs = require("fs");
// FOR EMPLOYEE CONSTRUCTOR
const determineAction = require("./lib/builder");


// RUN ON LOAD -------------------------------------------------------------------
var employeeArray = [];


// QUESTION ARRAYS ---------------------------------------------------------------
// STARTER QUESTIONS ON LOAD
// WHEN I start the application THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
const initQuestions = [
  {
    type: "list",
    name: "action",
    message: "Welcome to the Employee Tracker Application!\n  You can exit this menu at any time with Ctrl+C \n  What would you like to do?",
    choices: [
        "View all Departments",
        "View all Roles",
        "View all Employees",
        "Add a Department",
        "Add a Role",
        "Add an Employee",
        "Update an Employee Role",
    ],
    
  },

  // WHEN I choose to add a department
  // THEN I am prompted to enter the name of the department and that department is added to the database
  {
    type: "input",
    name: "addDepartment.name",
    message: "Okay! Enter the name of the new department: ",

    when(answers) {
        return answers.action === "Add a Department"
    }
  },

  // WHEN I choose to add a role
  // THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
  {
    type: "input",
    name: "addRole.name",
    message: "Okay! Enter the name of the new role: ",

    when(answers) {
        return answers.action === "Add a Role"
    }
  },
  {
    type: "input",
    name: "addRole.salary",
    message: "Enter the annual salary for the new role: ",

    when(answers) {
        return answers.action === "Add a Role"
    }
  },
  {
    type: "list",
    name: "addRole.department",
    message: "What department should this role be under?\n  Don't see the department you need? Restart the app and add a new department.",
    choices: [
      "test dept",
    ],

    when(answers) {
        return answers.action === "Add a Role"
    }
  },

  // WHEN I choose to add an employee
  // THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
  {
    type: "input",
    name: "addEmployee.firstName",
    message: "Okay! Enter the employee's first name: ",

    when(answers) {
        return answers.action === "Add an Employee"
    }
  },
  {
    type: "input",
    name: "addEmployee.lastName",
    message: "Enter the employee's last name: ",

    when(answers) {
        return answers.action === "Add an Employee"
    }
  },
  {
    type: "list",
    name: "addEmployee.role",
    message: "What role should this new employee have?\n  Don't see the role you need? Restart the app and add a new role.",
    choices: [
      "test role",
    ],

    when(answers) {
        return answers.action === "Add an Employee"
    }
  },
  {
    type: "list",
    name: "addEmployee.manager",
    message: "Who is this new employee's manager?\n  Don't see the employee you need? Restart the app and add a new employee.",
    choices: [
      "test employee",
    ],

    when(answers) {
        return answers.action === "Add an Employee"
    }
  },


  // WHEN I choose to update an employee role
  // THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
  {
    type: "list",
    name: "updateEmployeeRole.employee",
    message: "Okay! Which employee needs their role to be updated? ",
    choices: [
      "test employee",
    ],

    when(answers) {
        return answers.action === "Update an Employee Role"
    }
  },
  {
    type: "list",
    name: "updateEmployeeRole.newRole",
    message: "What should their role be updated to? ",
    choices: [
      "test role",
    ],

    when(answers) {
        return answers.action === "Update an Employee Role"
    }
  },
]


// RUN ON LOAD -------------------------------------------------------------------
init();

// QUESTION FUNCTIONS ------------------------------------------------------------
// INITIALIZE APP & TRIGGER Q's 
function init() {

    // ASK QUESTION ARRAY
    inquirer.prompt(initQuestions)
    .then((answers) => {

        console.log(answers);

        // DETERMINE HOW TO USE DATA
        determineAction(answers);

    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Your console environment is not supported!")
        } else {
            console.log(error)
        }
    });

}