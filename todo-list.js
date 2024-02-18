const todoList = [];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';
  todoList.forEach((todoObj, index) => {
    const { name, dueDate, checked } = todoObj;
    const checkboxId = `checkbox-${index}`;
    const checkedAttribute = checked ? 'checked' : ''; 
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
      <label>
        <input type="checkbox" id="${checkboxId}" ${checkedAttribute}>
        <span></span>  
      </label>
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
          todoList.splice(index, 1);
          renderTodoList();
        })
    });

    document.querySelectorAll('input[type="checkbox"]')
    .forEach((checkbox, index) => {
      checkbox.addEventListener('change', () => {
        todoList[index].checked = checkbox.checked;
      });
    });
};

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
});


function addTodo(){
  const inputElem = document.querySelector('.js-name-input');
  const name = inputElem.value;

  const dateInputElem = document.querySelector('.js-due-date-input');  
  const dueDate = dateInputElem.value;

  todoList.push({
    //name : name,
    //dueDate : dueDate,
    name,
    dueDate
  });
  inputElem.value = '';

  renderTodoList();
};