// IMPORT REQUIREMENTS ---------------------------------------------------------
const mysql    = require("mysql2");
const inquirer = require("inquirer");
const { db }   = require("../config/connection");


// FOR DEPARTMENT CONSTRUCTOR --------------------------------------------------
const buildDepartment = require("./department");
// FOR ROLE CONSTRUCTOR
const buildRole       = require("./role");
// FOR EMPLOYEE CONSTRUCTOR
const buildEmployee   = require("./employee");



// SET VARIABLES ---------------------------------------------------------------






// FUNCTION TO DETERMINE AND EXECUTE NEEDED ACTIONS ----------------------------
function determineAction (answers) {

    // DISPLAY ALL DEPARTMENTS
    if (answers.action === "View all Departments") {

        // const deptData = async () => {
        //     const data = await db.query(`
        //         SELECT id ID, name Department
        //         FROM department
        //         `);
        //     return data;
        // };

        // const viewDept = async () => {
        //     const data = await deptData();
        //     console.table(data);
        // };

        // viewDept;

    // DISPLAY ALL ROLES
    } else if (answers.action === "View all Roles") {

        console.table();

    // DISPLAY ALL EMPLOYEES
    } else if (answers.action === "View all Employees") {

        console.table();

    // ADD A DEPARTMENT
    } else if (answers.action === "Add a Department") {




    // ADD A ROLE
    } else if (answers.action === "Add a Role") {


    // ADD AN EMPLOYEE
    } else if (answers.action === "Add an Employee") {


        
    // UPDATE EMPLOYEE ROLE
    } else if (answers.action === "Update an Employee Role") {
        

    // ERROR
    } else {

        console.log("ERROR! answers.action does not equal anything from the list. It is: " + answers.action);
    }

}


// EXPORT BUILD EMPLOYEE FUNCTION ----------------------------------------------
module.exports = determineAction;