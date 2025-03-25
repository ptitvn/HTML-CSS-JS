const employeesPerPage = 3;
let currentPage = 1;

function loadEmployees() {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const tableBody = document.querySelector('#employeeTable tbody');
    tableBody.innerHTML = '';

    const start = (currentPage - 1) * employeesPerPage;
    const end = start + employeesPerPage;
    const currentEmployees = employees.slice(start, end);

    currentEmployees.forEach((employee, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${start + index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.position}</td>
        `;
        tableBody.appendChild(row);
    });

    updatePagination(employees.length);
}

function addEmployee() {
    const nameInput = document.getElementById('name').value;
    const positionInput = document.getElementById('position').value;
    
    if (!nameInput || !positionInput) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push({ name: nameInput, position: positionInput });
    localStorage.setItem('employees', JSON.stringify(employees));

    document.getElementById('name').value = '';
    document.getElementById('position').value = '';
    loadEmployees();
}

function updatePagination(totalEmployees) {
    const paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = '';

    const pageCount = Math.ceil(totalEmployees / employeesPerPage);

    for (let i = 1; i <= pageCount; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.onclick = () => {
            currentPage = i;
            loadEmployees();
        };
        paginationDiv.appendChild(button);
    }
    const prevButton = document.createElement('button');
    prevButton.innerText = 'Previous';
    prevButton.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            loadEmployees();
        }
    };

    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next';
    nextButton.onclick = () => {
        if (currentPage < pageCount) {
            currentPage++;
            loadEmployees();
        }
    };

    paginationDiv.prepend(prevButton);
    paginationDiv.appendChild(nextButton);
}

document.addEventListener('DOMContentLoaded', loadEmployees);