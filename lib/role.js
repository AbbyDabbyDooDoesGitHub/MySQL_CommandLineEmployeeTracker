// IMPORT REQUIREMENTS ---------------------------------------------------------
const mysql    = require("mysql2");
const inquirer = require("inquirer");
const { db }   = require("../config/connection");

const { deptList } = require("./department");



// NEW CONSTANTS ---------------------------------------------------------------
const roleData = async () => {
  const data = await db.query(`
    SELECT r.id ID, r.title Title, d.name Department, r.salary Salary
    FROM role r
    JOIN department d ON r.department_id = d.id
  `);
  return data;
};


// ADD DEPARTMENT
function addRole(answers) {

  db.query(
    `
        INSERT INTO role (title, salary, department_id, is_manager)
        VALUES (?, ?, ?, ?)
    `,
    [ answers.addRole.name, answers.addRole.salary, answers.addRole.department, answers.addRole.salary ]
  );

  console.log("addDept ran");

};



// Exports functions needed to be called elsewhere.
module.exports = { roleData, addRole };