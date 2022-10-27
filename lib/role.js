// CONSTRUCTOR FUNCTIONS ---------------------------------------------------------
// ROLE CONSTRUCTOR
class Role {

  constructor (id, title, salary, department_id) {

    this.id            = id;
    this.title         = title;
    this.salary        = salary;
    this.department_id = department_id
    this.category      = "Role";

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


// EXPORT BUILD ROLE FUNCTION ------------------------------------------------
module.exports = Role;