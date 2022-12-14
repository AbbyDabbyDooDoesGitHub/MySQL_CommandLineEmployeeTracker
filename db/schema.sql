-- CREATE A DATABASE AND AVOID DUPLICATES
DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;
USE tracker_db;



-- DEPARTMENT TABLE SETUP
CREATE TABLE department (

    -- id: INT PRIMARY KEY
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,

    -- name: VARCHAR(30) to hold department name
    name VARCHAR(30) NOT NULL

);



-- ROLE TABLE SETUP
CREATE TABLE role (

    -- id: INT PRIMARY KEY
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,

    -- title: VARCHAR(30) to hold role title
    title VARCHAR(30) NOT NULL,

    -- salary: DECIMAL to hold role salary
    salary DECIMAL NOT NULL,

    -- department_id: INT to hold reference to department role belongs to
    department_id INT NOT NULL,


    CONSTRAINT department_id FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE

);



-- EMPLOYEE TABLE SETUP
CREATE TABLE employee (

    -- id: INT PRIMARY KEY
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,

    -- first_name: VARCHAR(30) to hold employee first name
    first_name VARCHAR(30) NOT NULL,

    -- last_name: VARCHAR(30) to hold employee last name
    last_name VARCHAR(30) NOT NULL,

    -- role_id: INT to hold reference to employee role
    role_id INT,

    -- manager_id: INT to hold reference to another employee that is the manager of the current employee (null if the employee has no manager)
    manager_id INT,

    CONSTRAINT role_id FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
    
    CONSTRAINT manager_id FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE CASCADE

);
