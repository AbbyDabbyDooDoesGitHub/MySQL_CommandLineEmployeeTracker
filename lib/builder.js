// IMPORT REQUIREMENTS ---------------------------------------------------------
// FOR DEPARTMENT CONSTRUCTOR
const buildDepartment = require("./department");
// FOR ROLE CONSTRUCTOR
const buildRole       = require("./role");
// FOR EMPLOYEE CONSTRUCTOR
const buildEmployee   = require("./employee");
// FOR ID GENERATION
const genId           = require("./idGen");

  
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

        var idResp    = genId("D");
        var idsUsed   = idResp[1];
        
        var dept_id   = idResp[0];
        var dept_name = answers.addDepartment.name;

        // CONSTRUCT NEW DEPARTMENT OBJECT
        var newDept   = buildDepartment(dept_id,dept_name);

        deptArray.push(newDept);

    } else if (answers.action === "Add a Role") {

        var idResp    = genId("F");
        var idsUsed   = idResp[1];
        
        var role_id   = idResp[0];
        var salary    = answers.addRole.salary;

        // NEED TO BE PARSED
        var department_id     = answers.addRole.department;

        // CONSTRUCT NEW ROLE OBJECT
        var newDept   = buildRole(role_id, title, salary, department_id);

        deptArray.push(newDept);

    } else if (answers.action === "Add an Employee") {

        var role_id = answers.addEmployee.role;
        var manager_id = answers.addEmployee.manager;

        var idResp     = genId("E");
        var idsUsed    = idResp[1];

        var emp_id     = idResp[0];
        var first_name = answers.addEmployee.firstName;
        var last_name  = answers.addEmployee.lastName;

        // NEED TO BE PARSED
        var role_id    = answers.addEmployee.role;
        var manager_id = answers.addEmployee.manager;

        // CONSTRUCT NEW EMPLOYEE OBJECT
        var newEmployee = buildEmployee(emp_id, first_name, last_name, role_id, manager_id);

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