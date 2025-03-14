let employees = [];

function addEmployee(id, name, position, salary) {
    employees.push({ id, name, position, salary });
    console.log(`Đã thêm nhân viên: ${name}`);
}

function deleteEmployee(id) {
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        const confirmDelete = confirm(`Bạn có chắc chắn muốn xóa nhân viên với ID: ${id}?`);
        if (confirmDelete) {
            employees.splice(index, 1);
            console.log(`Đã xóa nhân viên với ID: ${id}`);
        } else {
            console.log(`Hủy xóa nhân viên với ID: ${id}`);
        }
    } else {
        console.log(`Không tìm thấy nhân viên với ID: ${id}`);
    }
}

function updateSalary(id, newSalary) {
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
        employee.salary = newSalary;
        console.log(`Đã cập nhật lương cho nhân viên với ID: ${id}`);
    } else {
        console.log(`Không tìm thấy nhân viên với ID: ${id}`);
    }
}

function findEmployeeByName(name) {
    const foundEmployees = employees.filter(emp => emp.name.toLowerCase().includes(name.toLowerCase()));
    if (foundEmployees.length > 0) {
        console.log(`Nhân viên tìm thấy: ${JSON.stringify(foundEmployees)}`);
    } else {
        console.log(`Không tìm thấy nhân viên với tên: ${name}`);
    }
}



function main() {
    let choice;
    do {
        
        choice = +prompt(`
            1. Thêm nhân viên mới
            2. Xóa nhân viên theo ID
            3. Cập nhật mức lương của nhân viên theo ID
            4. Tìm kiếm nhân viên theo tên
            5. Thoát`);
        switch (choice) {
            case 1:
                const id = prompt("Nhập ID: ");
                const name = prompt("Nhập tên: ");
                const position = prompt("Nhập vị trí: ");
                const salary = prompt("Nhập lương: ");
                addEmployee(id, name, position, salary);
                break;
            case 2:
                const deleteId = prompt("Nhập ID nhân viên cần xóa: ");
                deleteEmployee(deleteId);
                break;
            case 3:
                const updateId = prompt("Nhập ID nhân viên cần cập nhật lương: ");
                const newSalary = prompt("Nhập lương mới: ");
                updateSalary(updateId, newSalary);
                break;
            
            case 4:
                const searchName = prompt("Nhập tên nhân viên cần tìm: ");
                findEmployeeByName(searchName);
                break;
            case 5:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    } while (choice !== '6');
}

main();