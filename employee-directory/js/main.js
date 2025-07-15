let filteredEmployees = [...employees];
let currentPage = 1;
let itemsPerPage = 10;

// 👇 New: Extract unique departments and roles
const departmentsNew1 = [...new Set(employees.map(emp => emp.department))].sort();
const rolesNew1 = [...new Set(employees.map(emp => emp.role))].sort();

// 👇 New: Function to populate select options
const populateSelectOptionsNew1 = (selectId, options) => {
  const select = document.getElementById(selectId);
  select.innerHTML = `<option value="">All</option>`;
  options.forEach(opt => {
    const option = document.createElement("option");
    option.value = opt;
    option.textContent = opt;
    select.appendChild(option);
  });
};

// 👇 New: Populate on load
populateSelectOptionsNew1("filterDepartment", departmentsNew1);
populateSelectOptionsNew1("filterRole", rolesNew1);

// --------------------------------------
// Existing logic (unchanged as requested)
// --------------------------------------

const renderEmployees = () => {
  const list = document.getElementById("employeeList");
  list.innerHTML = '';

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const displayData = filteredEmployees.slice(start, end);

  displayData.forEach(emp => {
    const col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `
      <div class="employee-card p-3 border rounded shadow-sm mb-3">
        <h5>${emp.firstName} ${emp.lastName}</h5>
        <p><strong>Email:</strong> ${emp.email}</p>
        <p><strong>Department:</strong> ${emp.department}</p>
        <p><strong>Role:</strong> ${emp.role}</p>
        <div class="mt-2 d-flex gap-2">
          <a href="form.html" class="btn btn-sm btn-outline-primary">Edit</a>
          <button class="btn btn-sm btn-outline-danger" onclick="deleteEmployee('${emp.id}')">Delete</button>
        </div>
      </div>
    `;
    list.appendChild(col);
  });

  renderPagination();
};

const renderPagination = () => {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = '';
  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.className = `page-item ${i === currentPage ? 'active' : ''}`;
    li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    li.onclick = () => {
      currentPage = i;
      renderEmployees();
    };
    pagination.appendChild(li);
  }
};

const deleteEmployee = (id) => {
  const newList = employees.filter(emp => emp.id !== id);
  localStorage.setItem("employees", JSON.stringify(newList));
  location.reload();
};

const applyFilters = () => {
  const emailSearch = document.getElementById("navbarSearchEmail").value.toLowerCase();
  const nameSearch = document.getElementById("filterName")?.value?.toLowerCase() || '';
  const deptSearch = document.getElementById("filterDepartment")?.value?.toLowerCase() || '';
  const roleSearch = document.getElementById("filterRole")?.value?.toLowerCase() || '';
  const sortBy = document.getElementById("sortSelect").value;

  filteredEmployees = employees.filter(emp =>
    emp.email.toLowerCase().includes(emailSearch) &&
    emp.firstName.toLowerCase().includes(nameSearch) &&
    emp.department.toLowerCase().includes(deptSearch) &&
    emp.role.toLowerCase().includes(roleSearch)
  );

  filteredEmployees.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  currentPage = 1;
  renderEmployees();
};

const resetFilters = () => {
  document.getElementById("filterName").value = '';
  document.getElementById("filterDepartment").value = '';
  document.getElementById("filterRole").value = '';
  document.getElementById("navbarSearchEmail").value = '';
  document.getElementById("sortSelect").value = 'firstName';
  applyFilters();
};

document.getElementById("navbarSearchEmail").addEventListener("input", applyFilters);
document.getElementById("itemsPerPage").addEventListener("change", (e) => {
  itemsPerPage = parseInt(e.target.value);
  renderEmployees();
});
document.getElementById("sortSelect").addEventListener("change", applyFilters);
document.getElementById("applyFilterBtn").addEventListener("click", applyFilters);
document.getElementById("resetFilterBtn").addEventListener("click", resetFilters);

renderEmployees();
