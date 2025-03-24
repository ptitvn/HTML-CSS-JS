

// Lấy dữ liệu từ Local Storage hoặc khởi tạo mảng rỗng
let courses = JSON.parse(localStorage.getItem('courses')) || [];

// Hàm hiển thị danh sách công việc
function renderCourses() {
    const tbody = document.querySelector('.content1 tbody');
    tbody.innerHTML = ''; // Xóa nội dung cũ

    courses.forEach((course, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${course.content}</td>
            <td>${course.dueDate}</td>
            <td>${course.status}</td>
            <td>${course.assignedTo}</td>
            <td>
                <button onclick="editCourse(${index})">Sửa</button>
                <button onclick="deleteCourse(${index})">Xóa</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Hàm thêm công việc mới
document.getElementById('submitBtn').addEventListener('click', () => {
    const content = document.getElementById('taskContent').value;
    const dueDate = document.getElementById('taskDate').value;
    const status = document.getElementById('taskStatus').value;
    const assignedTo = document.getElementById('taskAssignedTo').value;

    if (content && dueDate && status !== 'Choose status' && assignedTo) {
        const newCourse = {
            content,
            dueDate,
            status,
            assignedTo,
        };
        courses.push(newCourse);
        localStorage.setItem('courses', JSON.stringify(courses));
        renderCourses();
        clearInputs();
    } else {
        alert('Vui lòng điền đầy đủ thông tin!');
    }
});

// Hàm xóa công việc
function deleteCourse(index) {
    courses.splice(index, 1);
    localStorage.setItem('courses', JSON.stringify(courses));
    renderCourses();
}

// Hàm sửa công việc
function editCourse(index) {
    const course = courses[index];
    document.getElementById('taskContent').value = course.content;
    document.getElementById('taskDate').value = course.dueDate;
    document.getElementById('taskStatus').value = course.status;
    document.getElementById('taskAssignedTo').value = course.assignedTo;

    // Xóa công việc cũ để có thể thêm lại sau khi sửa
    deleteCourse(index);
}

// Hàm xóa các input
function clearInputs() {
    document.getElementById('taskContent').value = '';
    document.getElementById('taskDate').value = '';
    document.getElementById('taskStatus').value = 'Choose status';
    document.getElementById('taskAssignedTo').value = '';
}

// Hiển thị danh sách công việc khi tải trang
renderCourses();