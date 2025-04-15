CREATE TABLE Departments (
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(100)
);

CREATE TABLE Employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    hire_date DATE,
    salary DECIMAL(10, 2),
    department_id INT,
    job_title VARCHAR(100),
    manager_id INT,
    FOREIGN KEY (department_id) REFERENCES Departments(department_id),
    FOREIGN KEY (manager_id) REFERENCES Employees(employee_id)
);

CREATE TABLE Projects (
    project_id INT PRIMARY KEY AUTO_INCREMENT,
    project_name VARCHAR(100),
    start_date DATE,
    end_date DATE,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES Departments(department_id)
);

CREATE TABLE Tasks (
    task_id INT PRIMARY KEY AUTO_INCREMENT,
    project_id INT,
    task_name VARCHAR(100),
    assigned_to INT,
    status ENUM('Pending', 'In Progress', 'Completed'),
    due_date DATE,
    FOREIGN KEY (project_id) REFERENCES Projects(project_id),
    FOREIGN KEY (assigned_to) REFERENCES Employees(employee_id)
);

CREATE TABLE Work_Hours (
    work_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    date DATE,
    hours_worked DECIMAL(5, 2),
    FOREIGN KEY (employee_id) REFERENCES Employees(employee_id)
);

CREATE TABLE Performance_Evaluations (
    evaluation_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    evaluation_date DATE,
    performance_rating INT CHECK (performance_rating BETWEEN 1 AND 5),
    feedback TEXT,
    FOREIGN KEY (employee_id) REFERENCES Employees(employee_id)
);

-- Insertion de données

INSERT INTO Departments (department_name) VALUES 
('Sales'), 
('Marketing'), 
('Engineering');

INSERT INTO Employees (first_name, last_name, email, hire_date, salary, department_id, job_title, manager_id) VALUES 
('John', 'Doe', 'john.doe@example.com', '2020-01-15', 60000, 1, 'Sales Manager', NULL),
('Jane', 'Smith', 'jane.smith@example.com', '2019-07-20', 50000, 1, 'Sales Associate', 1),
('Bob', 'Johnson', 'bob.johnson@example.com', '2021-03-10', 70000, 2, 'Marketing Specialist', NULL),
('Alice', 'Brown', 'alice.brown@example.com', '2022-05-01', 80000, 3, 'Software Engineer', NULL),
('Tom', 'White', 'tom.white@example.com', '2023-01-01', 75000, 3, 'DevOps Engineer', 4);

INSERT INTO Projects (project_name, start_date, end_date, department_id) VALUES 
('Website Redesign', '2024-01-01', '2024-06-30', 2), 
('Product Launch', '2024-02-01', '2024-09-01', 1),
('ERP Migration', '2024-03-01', '2024-12-31', 3);

INSERT INTO Tasks (project_id, task_name, assigned_to, status, due_date) VALUES 
(1, 'Design homepage', 3, 'In Progress', '2024-03-15'),
(1, 'Content writing', 2, 'Pending', '2024-04-01'),
(2, 'Plan campaign', 1, 'Completed', '2024-02-20'),
(3, 'Setup infrastructure', 5, 'In Progress', '2024-05-30'),
(3, 'Data migration', 4, 'Pending', '2024-06-30');

INSERT INTO Work_Hours (employee_id, date, hours_worked) VALUES 
(1, '2024-01-10', 8),
(2, '2024-01-10', 7),
(3, '2024-01-11', 8),
(4, '2024-01-11', 9),
(5, '2024-01-12', 6);

INSERT INTO Performance_Evaluations (employee_id, evaluation_date, performance_rating, feedback) VALUES 
(1, '2024-12-01', 5, 'Excellent sales results.'),
(2, '2024-12-01', 3, 'Needs improvement in customer service.'),
(3, '2024-12-01', 4, 'Good contribution to marketing strategy.'),
(4, '2024-12-01', 5, 'Outstanding technical skills.'),
(5, '2024-12-01', 4, 'Solid performance.');

-- Requêtes SQL 

-- a. Employés ayant travaillé le plus d'heures
SELECT e.first_name, e.last_name, SUM(w.hours_worked) AS total_hours
FROM Employees e
JOIN Work_Hours w ON e.employee_id = w.employee_id
GROUP BY e.employee_id
ORDER BY total_hours DESC;

-- b. Avancement des projets
SELECT p.project_name, COUNT(t.task_id) AS total_tasks,
       SUM(CASE WHEN t.status = 'Completed' THEN 1 ELSE 0 END) AS completed_tasks
FROM Projects p
JOIN Tasks t ON p.project_id = t.project_id
GROUP BY p.project_id;

-- c. Meilleures évaluations de performance
SELECT e.first_name, e.last_name, AVG(pe.performance_rating) AS avg_rating
FROM Employees e
JOIN Performance_Evaluations pe ON e.employee_id = pe.employee_id
GROUP BY e.employee_id
ORDER BY avg_rating DESC
LIMIT 5;

-- d. Répartition des employés par département
SELECT d.department_name, COUNT(e.employee_id) AS total_employees
FROM Departments d
JOIN Employees e ON d.department_id = e.department_id
GROUP BY d.department_id;

-- e. Salaire total par département
SELECT d.department_name, SUM(e.salary) AS total_salary
FROM Departments d
JOIN Employees e ON d.department_id = e.department_id
GROUP BY d.department_id;
