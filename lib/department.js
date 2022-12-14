// IMPORT REQUIREMENTS ---------------------------------------------------------
// const mysql    = require("mysql2");
// const inquirer = require("inquirer");
const { db }   = require("../config/connection");



// NEW CONSTANTS ---------------------------------------------------------------
const deptData = async () => {
  const data = await db.query(`
        SELECT id ID, name Department
        FROM department
        `);
  return data;
};


// ADD DEPARTMENT
function addDept(answers) {

  db.query(
    `
        INSERT INTO department (name)
        VALUES (?)
    `,
    answers.addDepartment.name
  );

  console.log("addDept ran");

};



// Exports functions needed to be called elsewhere.
module.exports = { deptData, addDept };