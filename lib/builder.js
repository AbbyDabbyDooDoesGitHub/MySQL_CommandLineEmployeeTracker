// IMPORT REQUIREMENTS ---------------------------------------------------------
// FOR DEPARTMENT CONSTRUCTOR
const buildDepartment = require("./lib/department");
// FOR ROLE CONSTRUCTOR
const buildRole = require("./lib/role");
// FOR EMPLOYEE CONSTRUCTOR
const buildEmployee = require("./lib/employee");

  
// CREATE EMPLOYEE OBJECT ------------------------------------------------------
// FUNCTION TO BUILD EMPLOYEE
function determineAction (answers) {

    // "View all Departments",
    // "View all Roles",
    // "View all Employees",
    // "Add a Department",
    // "Add a Role",
    // "Add an Employee",
    // "Update an Employee Role",

    if (answers.action = "View all Departments") {

    }

    var newEmployee = buildEmployee(answers);

    employeeArray.push(newEmployee);

    askEmployeeQs(answers);




    if (answers.role === "Engineer") {

        const employee = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);

        return employee;

    } else if (answers.role === "Intern") {

        const employee = new Intern(answers.name, answers.id, answers.email, answers.school);

        return employee;

    } else {

        const employee = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);

        return employee;

    }

}


// EXPORT BUILD EMPLOYEE FUNCTION ------------------------------------------------
module.exports = builder;