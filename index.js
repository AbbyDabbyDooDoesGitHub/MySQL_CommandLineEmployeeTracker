// PACKAGES REQUIRED -------------------------------------------------------------
// FOR IN TEMINAL QUESTIONS
const inquirer = require("inquirer");
const initQs = require("./lib/questions");

const { deptData, addDept } = require("./lib/department");
const { empData, addEmp, updateEmpRole } = require("./lib/employee");
const { roleData, addRole } = require("./lib/role");



// RUN ON LOAD -------------------------------------------------------------------
init();



// QUESTION FUNCTIONS ------------------------------------------------------------
// INITIALIZE APP & TRIGGER Q's 
function init() {

    // ASK QUESTION ARRAY
    inquirer.prompt(initQs)
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



// FUNCTION TO DETERMINE AND EXECUTE NEEDED ACTIONS ----------------------------
function determineAction (answers) {

  // DISPLAY ALL DEPARTMENTS
  if (answers.action === "View all Departments") {

    console.table(deptData);

  // DISPLAY ALL ROLES
  } else if (answers.action === "View all Roles") {

    console.table(roleData);

  // DISPLAY ALL EMPLOYEES
  } else if (answers.action === "View all Employees") {

    console.table(empData);

  // ADD A DEPARTMENT
  } else if (answers.action === "Add a Department") {

    addDept(answers);

  // ADD A ROLE
  } else if (answers.action === "Add a Role") {

    addRole(answers);

  // ADD AN EMPLOYEE
  } else if (answers.action === "Add an Employee") {

    addEmp(answers);
      
  // UPDATE EMPLOYEE ROLE
  } else if (answers.action === "Update an Employee Role") {
      
    updateEmpRole(answers);

  // ERROR
  } else {
    console.log("ERROR! answers.action does not equal anything from the list. It is: " + answers.action);
  }

}