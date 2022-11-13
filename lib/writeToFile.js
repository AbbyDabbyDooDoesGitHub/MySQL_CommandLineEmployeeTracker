// IMPORT REQUIREMENTS ---------------------------------------------------------
// deptArray ARRAY
const deptArray = require("../db/dept");
// roleArray ARRAY
const roleArray = require("../db/role");
// empArray ARRAY
const empArray = require("../db/emp");
// idsUsed ARRAY
const idsUsed = require("../db/idsUsed");

// WRITE README FILE -------------------------------------------------------------
// function writeToFile(fileName, codeToPrint) {
function writeToFile(fileCode, newVar, idsUsed) {
    
    console.log("writeToFile ran");
    // console.log(data);

    fs.writeFile(fileName, codeToPrint, (err) =>
      err ? console.log(err) : console.log('Successfully created file!')
    );

}

// EXPORT deptArray VAR --------------------------------------------------------
module.exports = writeToFile;