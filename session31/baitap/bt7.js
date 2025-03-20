let todoList = [
    {
      id: 1,
      task: 'Hit the gym',
      completed: false,
    },
    {
      id: 2,
      task: 'Pay bills',
      completed: true,
    },
    {
      id: 3,
      task: 'Meet George',
      completed: false,
    },
    {
      id: 4,
      task: 'Buy eggs',
      completed: false,
    },
    {
      id: 5,
      task: 'Read a book',
      completed: false,
    },
    {
      id: 6,
      task: 'Organize office',
      completed: false,
    },
  ];
  
  function renderList() {
    const ul = document.getElementById('myUL');
    ul.innerHTML = ''; 
    todoList.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.task;
      if (item.completed) {
        li.classList.add('checked');
      }
  
      li.addEventListener('click', () => {
        item.completed = !item.completed;
        renderList();
      });
  
      const closeBtn = document.createElement('span');
      closeBtn.className = 'close';
      closeBtn.textContent = '×';
      closeBtn.onclick = (event) => {
        event.stopPropagation(); 
        todoList = todoList.filter(t => t.id !== item.id);
        renderList();
      };
  
      li.appendChild(closeBtn);
      ul.appendChild(li);
    });
  }
  
  // const addButton = document.querySelector('.addBtn');
  // addButton.addEventListener('click', () => {
  //   const input = document.getElementById('myInput');
  //   const newTask = input.value.trim();
  //   if (newTask) {
  //     const newId = todoList.length ? todoList[todoList.length - 1].id + 1 : 1;
  //     todoList.push({ id: newId, task: newTask, completed: false });
  //     input.value = '';
  //     renderList(); 
  //   }
  // });
  renderList();