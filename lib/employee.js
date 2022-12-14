// IMPORT REQUIREMENTS ---------------------------------------------------------
// const mysql    = require("mysql2");
// const inquirer = require("inquirer");
const { db }   = require("../config/connection");



// NEW CONSTANTS ---------------------------------------------------------------
const empData = async () => {
  const data = await db.query(`
    SELECT e.id ID, e.first_name FirstName, e.last_name LastName, r.title Title, d.name AS Department, r.salary Salary, CONCAT(e2.first_name, ' ', e2.last_name) Manager
    FROM employee e
    JOIN role r ON e.role_id = r.id
    JOIN department d ON r.department_id = d.id
    LEFT JOIN employee e2 ON e.manager_id = e2.id
  `);
  return data;
};


// ADD EMPLOYEE
function addEmp(answers) {

  db.query(
    `
        INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES (?, ?, ?, ?)
    `,
    [ answers.addEmployee.firstName , answers.addEmployee.lastName, answers.addEmployee.role, answers.addEmployee.manager ]
  );

  console.log("addEmp ran");

};



// UPDATE EMPLOYEE
function updateEmpRole(answers) {

  db.query(
    `
        UPDATE employee
        SET role_id = ?
        WHERE id = ?
    `,
    [ answers.updateEmployeeRole.newRole, answers.updateEmployeeRole.employee ]
  );

  console.log("addEmp ran");

};
  


// Exports functions needed to be called elsewhere.
module.exports = { empData, addEmp, updateEmpRole };