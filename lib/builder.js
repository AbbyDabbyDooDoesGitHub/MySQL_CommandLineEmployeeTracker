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

    if (answers.action === "View all Departments") {

    } else if (answers.action === "View all Roles") {

    } else if (answers.action === "View all Employees") {

    } else if (answers.action === "Add a Department") {

    } else if (answers.action === "Add a Department") {

    } else if (answers.action === "Add a Role") {

    } else if (answers.action === "Add an Employee") {

        var role_id = answers.addEmployee.role;
        var manager_id = answers.addEmployee.manager;

        var newEmployee = buildEmployee(id, answers.addEmployee.firstName, answers.addEmployee.lastName, role_id, manager_id)

        employeeArray.push(newEmployee);
        
    } else if (answers.action === "Update an Employee Role") {
        
    } else {

        console.log("ERROR! answers.action does not equal anything from the list. It is: " + answers.action);
    }






    // if (answers.role === "Engineer") {

    //     const employee = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);

    //     return employee;

    // } else if (answers.role === "Intern") {

    //     const employee = new Intern(answers.name, answers.id, answers.email, answers.school);

    //     return employee;

    // } else {

    //     const employee = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);

    //     return employee;

    // }

}


// EXPORT BUILD EMPLOYEE FUNCTION ------------------------------------------------
module.exports = determineAction;