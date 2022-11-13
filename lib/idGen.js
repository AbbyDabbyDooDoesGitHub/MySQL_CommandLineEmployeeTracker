// IMPORT REQUIREMENTS ---------------------------------------------------------
// idsUsed ARRAY
const idsUsed = require("../db/idsUsed");

// VARIABLES
var chars   = ["A","B","C","D","E","F","0","1","2","3","4","5","6","7","8","9"];
var newId   = "";


//FUNCTION TO GET A RANDOM ITEM FROM AN ARRAY
function get_random () {
    return chars[Math.floor((Math.random()*chars.length))]; 
}

function genId (typeLetter) {

    var finalId = genString(newId, typeLetter);

    idsUsed     = idsUsed.push(finalId);

    return (finalId,idsUsed); 

}

function genString (typeLetter) {

    newId = typeLetter + get_random() + get_random() + get_random() + get_random() + get_random();

    for (let i = 0; i < idsUsed.length; i++) {
        if(newId === idsUsed[i]) {

            genString (typeLetter);

        }
    }

    var finalId = newId;

    return (finalId); 

}

// EXPORT BUILD DEPARTMENT FUNCTION ------------------------------------------------
module.exports = genId;

