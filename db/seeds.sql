-- ! SEED DATA FOR INITIAL DATA POPULATION 

-- DEPARTMENT SEEDS
INSERT INTO department (id, name)
VALUES (1, "Management"),
       (2, "Finance"),
       (3, "Sales"),
       (4, "Warehouse");

-- ROLE SEEDS
-- Initial roles for the database.
INSERT INTO role (id, title, salary, department_id)
VALUES (1, "CEO", 60000, 1),
       (2, "HR", 50000, 1),
       (3, "Operations Manager", 50000, 1),
       (4, "Accountant", 40000, 2),
       (5, "Store Manager", 50000, 3),
       (6, "Salesperson", 35000, 3),
       (7, "Warehouse Lead", 40000, 4),
       (8, "Delivery Driver", 35000, 4),
       (9, "Warehouse Worker", 30000, 4);

-- EMPLOYEE SEEDS
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, Nathan, Chet, 1, ),
       (2, Rae, Lynn, 2, 1),
       (3, Bob, Hoss, 3, 1),
       (4, Matt, Harr, 4, 3),
       (5, Matt, Good, 5, 1),
       (6, Mo, Shmo, 5, 5),
       (7, Sydney, Madi, 6, 6),
       (8, Daniel, Roth, 7, 3),
       (9, Jason, Haye, 8, 8),
       (10, Gavin, Moon, 9, 8);
