let currentPage = 1;
let itemsPerPage = 10;
let filteredEmployees = [...employees];

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
      <div class="employee-card">
        <h5>${emp.firstName} ${emp.lastName}</h5>
        <p><strong>Email:</strong> ${emp.email}</p>
        <p><strong>Department:</strong> ${emp.department}</p>
        <p><strong>Role:</strong> ${emp.role}</p>
        <div class="mt-3 d-flex gap-2">
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
  const index = employees.findIndex(emp => emp.id === id);
  if (index > -1) {
    employees.splice(index, 1);
    filteredEmployees = [...employees];
    renderEmployees();
  }
};

const applyFilters = () => {
  const emailSearch = document.getElementById("navbarSearchEmail").value.toLowerCase();
  const sortBy = document.getElementById("sortSelect").value;

  filteredEmployees = employees.filter(emp =>
    emp.email.toLowerCase().includes(emailSearch)
  );

  filteredEmployees.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  currentPage = 1;
  renderEmployees();
};

document.getElementById("navbarSearchEmail").addEventListener("input", applyFilters);
document.getElementById("itemsPerPage").addEventListener("change", (e) => {
  itemsPerPage = parseInt(e.target.value);
  applyFilters();
});
document.getElementById("sortSelect").addEventListener("change", applyFilters);

renderEmployees();
