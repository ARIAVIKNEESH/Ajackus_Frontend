document.getElementById("employeeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }

  const newEmployee = {
    id: `E${Math.floor(1000 + Math.random() * 9000)}`,
    firstName: form.firstName.value.trim(),
    lastName: form.lastName.value.trim(),
    email: form.email.value.trim(),
    department: form.department.value,
    role: form.role.value.trim(),
  };

  console.log("New Employee Submitted:", newEmployee);
  alert("Employee added successfully (console log only, no backend)");

  form.reset();
  form.classList.remove("was-validated");
});
