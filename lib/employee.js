// CONSTRUCTOR FUNCTIONS ---------------------------------------------------------
// EMPLOYEE CONSTRUCTOR
class Employee {

  constructor (id, first_name, last_name, role_id, manager_id) {

    this.id         = id;
    this.first_name = first_name;
    this.last_name  = last_name;
    this.role_id    = role_id;
    this.manager_id = manager_id;
    this.category   = "Employee";

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


// EXPORT BUILD EMPLOYEE FUNCTION ------------------------------------------------
module.exports = Employee;