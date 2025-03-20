
let todoList = [
    { id: 1, task: 'Hit the gym', completed: false },
    { id: 2, task: 'Pay bills', completed: true },
    { id: 3, task: 'Meet George', completed: false },
    { id: 4, task: 'Buy eggs', completed: false },
    { id: 5, task: 'Read a book', completed: false },
    { id: 6, task: 'Organize office', completed: false },
  ];
  
  function displayTasks() {
    const ul = document.getElementById('myUL');
    ul.innerHTML = ''; 
    todoList.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.task;
 
      if (item.completed) {
        li.classList.add('checked');
      }
  
      li.addEventListener('click', function() {
        item.completed = !item.completed;
        displayTasks(); 
      });
  
      
      const closeBtn = document.createElement('span');
      closeBtn.textContent = '✖';
      closeBtn.className = 'close';
      closeBtn.onclick = function() {
        todoList = todoList.filter(t => t.id !== item.id);
        displayTasks(); 
      };
  
      li.appendChild(closeBtn);
      ul.appendChild(li);
    });
  }
  
  function addTask() {
    const input = document.getElementById('myInput');
    const newTask = input.value.trim();
  
    if (newTask) {
      const newTaskObject = {
        id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1,
        task: newTask,
        completed: false,
      };
      todoList.push(newTaskObject);
      input.value = ''; 
      displayTasks(); 
    }
  }

  document.querySelector('.addBtn').addEventListener('click', addTask);
  
  displayTasks();