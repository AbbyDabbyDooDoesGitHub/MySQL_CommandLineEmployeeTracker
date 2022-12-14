// PACKAGES REQUIRED -------------------------------------------------------------
// FOR IN TEMINAL QUESTIONS
const inquirer = require("inquirer");
const initQs = require("./lib/questions");

const { deptData, addDept } = require('./lib/department');



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

      console.table();

  // DISPLAY ALL EMPLOYEES
  } else if (answers.action === "View all Employees") {

      console.table();

  // ADD A DEPARTMENT
  } else if (answers.action === "Add a Department") {

    addDept(answers);

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