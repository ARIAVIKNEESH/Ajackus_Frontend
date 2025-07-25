const defaultEmployees = [
  { id: 'E001', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', department: 'HR', role: 'Manager' },
  { id: 'E002', firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', department: 'Engineering', role: 'Developer' },
  { id: 'E003', firstName: 'Michael', lastName: 'Brown', email: 'michael.brown@example.com', department: 'Sales', role: 'Executive' },
  { id: 'E004', firstName: 'Emily', lastName: 'Davis', email: 'emily.davis@example.com', department: 'Finance', role: 'Analyst' },
  { id: 'E005', firstName: 'David', lastName: 'Wilson', email: 'david.wilson@example.com', department: 'Engineering', role: 'Tester' },
  { id: 'E006', firstName: 'Sarah', lastName: 'Johnson', email: 'sarah.johnson@example.com', department: 'HR', role: 'Recruiter' },
  { id: 'E007', firstName: 'Chris', lastName: 'Lee', email: 'chris.lee@example.com', department: 'IT', role: 'Support' },
  { id: 'E008', firstName: 'Laura', lastName: 'Garcia', email: 'laura.garcia@example.com', department: 'Marketing', role: 'Coordinator' },
  { id: 'E009', firstName: 'Daniel', lastName: 'Martinez', email: 'daniel.martinez@example.com', department: 'IT', role: 'Engineer' },
  { id: 'E010', firstName: 'Olivia', lastName: 'Anderson', email: 'olivia.anderson@example.com', department: 'Finance', role: 'Clerk' },

  { id: 'E011', firstName: 'Matthew', lastName: 'Thomas', email: 'matthew.thomas@example.com', department: 'Engineering', role: 'Developer' },
  { id: 'E012', firstName: 'Sophia', lastName: 'Taylor', email: 'sophia.taylor@example.com', department: 'Sales', role: 'Executive' },
  { id: 'E013', firstName: 'James', lastName: 'Moore', email: 'james.moore@example.com', department: 'Engineering', role: 'Lead Developer' },
  { id: 'E014', firstName: 'Ava', lastName: 'Jackson', email: 'ava.jackson@example.com', department: 'HR', role: 'Coordinator' },
  { id: 'E015', firstName: 'Benjamin', lastName: 'White', email: 'benjamin.white@example.com', department: 'Engineering', role: 'Intern' },
  { id: 'E016', firstName: 'Mia', lastName: 'Harris', email: 'mia.harris@example.com', department: 'Marketing', role: 'Executive' },
  { id: 'E017', firstName: 'Alexander', lastName: 'Martin', email: 'alexander.martin@example.com', department: 'IT', role: 'Admin' },
  { id: 'E018', firstName: 'Isabella', lastName: 'Thompson', email: 'isabella.thompson@example.com', department: 'Sales', role: 'Trainee' },
  { id: 'E019', firstName: 'Henry', lastName: 'Garcia', email: 'henry.garcia@example.com', department: 'Finance', role: 'Accountant' },
  { id: 'E020', firstName: 'Grace', lastName: 'Martinez', email: 'grace.martinez@example.com', department: 'HR', role: 'Executive' },

  { id: 'E021', firstName: 'Logan', lastName: 'Robinson', email: 'logan.robinson@example.com', department: 'Engineering', role: 'Tester' },
  { id: 'E022', firstName: 'Ella', lastName: 'Clark', email: 'ella.clark@example.com', department: 'Marketing', role: 'Manager' },
  { id: 'E023', firstName: 'Lucas', lastName: 'Rodriguez', email: 'lucas.rodriguez@example.com', department: 'Finance', role: 'Lead' },
  { id: 'E024', firstName: 'Chloe', lastName: 'Lewis', email: 'chloe.lewis@example.com', department: 'Engineering', role: 'Intern' },
  { id: 'E025', firstName: 'Jackson', lastName: 'Lee', email: 'jackson.lee@example.com', department: 'IT', role: 'Support' },
  { id: 'E026', firstName: 'Amelia', lastName: 'Walker', email: 'amelia.walker@example.com', department: 'Sales', role: 'Consultant' },
  { id: 'E027', firstName: 'Sebastian', lastName: 'Hall', email: 'sebastian.hall@example.com', department: 'Finance', role: 'Analyst' },
  { id: 'E028', firstName: 'Lily', lastName: 'Allen', email: 'lily.allen@example.com', department: 'HR', role: 'Recruiter' },
  { id: 'E029', firstName: 'Jack', lastName: 'Young', email: 'jack.young@example.com', department: 'IT', role: 'Engineer' },
  { id: 'E030', firstName: 'Zoe', lastName: 'King', email: 'zoe.king@example.com', department: 'Marketing', role: 'Designer' },

  { id: 'E031', firstName: 'Owen', lastName: 'Wright', email: 'owen.wright@example.com', department: 'Engineering', role: 'Developer' },
  { id: 'E032', firstName: 'Natalie', lastName: 'Lopez', email: 'natalie.lopez@example.com', department: 'Sales', role: 'Executive' },
  { id: 'E033', firstName: 'Wyatt', lastName: 'Hill', email: 'wyatt.hill@example.com', department: 'Finance', role: 'Lead Accountant' },
  { id: 'E034', firstName: 'Hannah', lastName: 'Scott', email: 'hannah.scott@example.com', department: 'HR', role: 'Manager' },
  { id: 'E035', firstName: 'Julian', lastName: 'Green', email: 'julian.green@example.com', department: 'IT', role: 'Admin' },
  { id: 'E036', firstName: 'Aria', lastName: 'Baker', email: 'aria.baker@example.com', department: 'Marketing', role: 'Analyst' },
  { id: 'E037', firstName: 'Levi', lastName: 'Adams', email: 'levi.adams@example.com', department: 'Engineering', role: 'Tester' },
  { id: 'E038', firstName: 'Scarlett', lastName: 'Nelson', email: 'scarlett.nelson@example.com', department: 'Finance', role: 'Assistant' },
  { id: 'E039', firstName: 'Aaron', lastName: 'Carter', email: 'aaron.carter@example.com', department: 'IT', role: 'Engineer' },
  { id: 'E040', firstName: 'Nora', lastName: 'Mitchell', email: 'nora.mitchell@example.com', department: 'HR', role: 'Executive' }
];

const savedEmployees = JSON.parse(localStorage.getItem("employees")) || [];

const mergedEmployees = [...defaultEmployees];
savedEmployees.forEach(se => {
  if (!mergedEmployees.some(de => de.email === se.email)) {
    mergedEmployees.push(se);
  }
});

localStorage.setItem("employees", JSON.stringify(mergedEmployees));

var employees = mergedEmployees;
