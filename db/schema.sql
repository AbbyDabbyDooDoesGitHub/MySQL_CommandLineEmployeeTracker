-- CREATE A DATABASE AND AVOID DUPLICATES
DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;
USE tracker_db;



-- DEPARTMENT TABLE SETUP
CREATE TABLE department (

    -- id: INT PRIMARY KEY
    id INT NOT NULL AUTO_INCREMENT,

    -- name: VARCHAR(30) to hold department name
    name VARCHAR(30) NOT NULL,

    PRIMARY KEY (id)

);



-- ROLE TABLE SETUP
CREATE TABLE role (

    -- id: INT PRIMARY KEY
    id INT NOT NULL AUTO_INCREMENT,

    -- title: VARCHAR(30) to hold role title
    title VARCHAR(30) NOT NULL,

    -- salary: DECIMAL to hold role salary

    -- department_id: INT to hold reference to department role belongs to



    PRIMARY KEY (id)

);



-- EMPLOYEE TABLE SETUP
CREATE TABLE employee (

    -- id: INT PRIMARY KEY
    id INT NOT NULL AUTO_INCREMENT,

    -- first_name: VARCHAR(30) to hold employee first name
    first_name VARCHAR(30) NOT NULL,

    -- last_name: VARCHAR(30) to hold employee last name
    last_name VARCHAR(30) NOT NULL,

    -- role_id: INT to hold reference to employee role

    -- manager_id: INT to hold reference to another employee that is the manager of the current employee (null if the employee has no manager)





    PRIMARY KEY (id)

);


