// IMPORT REQUIREMENTS ---------------------------------------------------------
// FOR CREATING FILES
const fs = require("fs");

// WRITE FILE -------------------------------------------------------------
// function writeToFile(fileName, codeToPrint) {
function writeToFile(fileCode, newArray) {

    console.log("writeToFile ran");
    // console.log(JSON.parse.newArray.name);
    // console.log(Object.entries(newArray));

    var whatDidIDo   = "";
    var fileName_obj = "";
    var codeToPrint_obj;


    // DEPT CODE
    if (fileCode === "D") {

        whatDidIDo   = "department array";
        fileName_obj = "./db/dept.js";

    // ROLE CODE
    } else if (fileCode === "F") {

        whatDidIDo   = "role array";
        fileName_obj = "./db/role.js";

    // EMP CODE
    } else if (fileCode === "E") {

        whatDidIDo   = "employee array";
        fileName_obj = "./db/emp.js";

    } else {
        console.log ("ERROR: WTF - DATA MAY NOT BE PROPERLY SAVED");
        return;
    }

    codeToPrint_obj = `
    var roleArray = ${newArray};

    // EXPORT roleArray VAR --------------------------------------------------------
    module.exports = roleArray;`;


    all_WTF(fileName_obj, codeToPrint_obj, whatDidIDo);


}



// ACTUAL WTF FUNCTION
function all_WTF(fileName, codeToPrint, whatDidIDo) {

    fs.writeFile(fileName, codeToPrint, (err) =>
        err ? console.log(err) : console.log("Successfully created the " + whatDidIDo + " file!")
    );

}



// EXPORT WTF FUNCTION ---------------------------------------------------------
module.exports = writeToFile;