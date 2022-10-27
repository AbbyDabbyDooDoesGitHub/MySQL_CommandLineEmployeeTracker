// CONSTRUCTOR FUNCTIONS ---------------------------------------------------------
// DEPARTMENT CONSTRUCTOR
class Department {

  constructor (id, name) {

    this.id    = id;
    this.name  = name;
    this.category  = "Department";

    // this.getId = () => {
    //   return this.id;
    // };

    // this.getName = () => {
    //   return this.name;
    // };

    // this.getCategory = () => {
    //   return this.role;
    // };

  }
}


// EXPORT BUILD DEPARTMENT FUNCTION ------------------------------------------------
module.exports = Department;