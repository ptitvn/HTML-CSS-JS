let tasks = [];
function main(){
    let choice = 0;
do {
    choice = +prompt(`
        1.Thêm công việc mới.
        2.Hiển thị tất cả các công việc.
        3.Cập nhật trạng thái công việc theo id.
        4.Lọc các công việc theo trạng thái hoàn thành, chưa hoàn thành.
        5.Sắp xếp các công việc theo trạng thái công việc.
        6.Thoát.`)  
      switch (choice) {
          case 1:
            let id = +prompt("Mời bạn nhập id");
            let name = prompt("Mời bạn nhập tên công việc");
            let describe = prompt("mô tả công việc");
            let time = prompt("nhập thời gian bắt đầu");
            let condition = prompt("Nhập trạng thái");
            addTask(id, name,describe, time, condition);
              break;
          case 2:
                displayTasks();
              break;
          case 3:
            let upid = +prompt("Mời bạn nhập id");
            let updatecondition = prompt("Mời bạn nhập trạng thái");
            updateTaskStatus(upid,updatecondition);
                
              break;
          case 4:
              let appear = prompt("Mời bạn nhập trạng thái");
              console.log(filterTasksByStatus(appear));
              break;
          case 5:
            sortTasksByStatus();
              break;
          case 6:
              break;
          default:
              console.log("Không hợp lệ")
              break;
      }
  } while (choice !=0);
}
main();

// Kiểm tra ID có bị trùng hay không
function isDuplicateId(id) {
    return tasks.some(task => task.id === id);
}

// Thêm công việc mới
function addTask(id, name, description, startTime, status) {
    if (isDuplicateId(id)) {
        console.log("ID công việc đã tồn tại.");
        return;
    }
    const newTask = { id, name, description, startTime, status };
    tasks.push(newTask);
}

// Hiển thị tất cả các công việc
function displayTasks() {
    console.log(tasks);
}

// Cập nhật trạng thái công việc theo ID
function updateTaskStatus(id, newStatus) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.status = newStatus;
    } else {
        console.log("Không tìm thấy công việc với ID này.");
    }
}

// Lọc các công việc theo trạng thái
function filterTasksByStatus(status) {
    return tasks.filter(task => task.status === status);
}

// Sắp xếp các công việc theo trạng thái
function sortTasksByStatus() {
    tasks.sort((a, b) => a.status.localeCompare(b.status));
}