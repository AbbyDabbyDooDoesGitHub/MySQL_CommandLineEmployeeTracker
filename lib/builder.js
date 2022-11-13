// IMPORT REQUIREMENTS ---------------------------------------------------------
// FOR DEPARTMENT CONSTRUCTOR
const buildDepartment = require("./department");
// FOR ROLE CONSTRUCTOR
const buildRole       = require("./role");
// FOR EMPLOYEE CONSTRUCTOR
const buildEmployee   = require("./employee");
// FOR ID GENERATION
const genId           = require("./idGen");
// FOR WTF
const writeToFile     = require("./writeToFile");

// deptArray ARRAY
const deptArray = require("../db/dept");
// roleArray ARRAY
const roleArray = require("../db/role");
// empArray ARRAY
const empArray = require("../db/emp");

    // "View all Departments",
    // "View all Roles",
    // "View all Employees",
    // "Add a Department",
    // "Add a Role",
    // "Add an Employee",
    // "Update an Employee Role",

// FUNCTION TO DETERMINE AND EXECUTE NEEDED ACTIONS ----------------------------
function determineAction (answers) {

    // DISPLAY ALL DEPARTMENTS
    if (answers.action === "View all Departments") {

    //     var values = [];
    //     Array.forEach(function(b, i) {
    //         values.push(
    //         {
    //             'Symbol': b.a,
    //             'BID': b.b,
    //             'CONVERT1': b.c,
    //             'Buy': b.d,
    //             'Sell': b.e,
    //             'Convert2': b.f
    //         });
    //     });

        console.table(deptArray);

    // DISPLAY ALL ROLES
    } else if (answers.action === "View all Roles") {

        console.table(roleArray);

    // DISPLAY ALL EMPLOYEES
    } else if (answers.action === "View all Employees") {

        console.table(empArray);

    // ADD A DEPARTMENT
    } else if (answers.action === "Add a Department") {

        var idResp    = genId("D");
        var idsUsed   = idResp[1];
        
        var dept_id   = idResp[0];
        var dept_name = answers.addDepartment.name;

        // CONSTRUCT NEW DEPARTMENT OBJECT
        var newDept   = buildDepartment(dept_id,dept_name);

        deptArray.push(newDept);



    // ADD A ROLE
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

    // ADD AN EMPLOYEE
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
        
    // UPDATE EMPLOYEE ROLE
    } else if (answers.action === "Update an Employee Role") {
        

    // ERROR
    } else {

        console.log("ERROR! answers.action does not equal anything from the list. It is: " + answers.action);
    }

}


// EXPORT BUILD EMPLOYEE FUNCTION ----------------------------------------------
module.exports = determineAction;