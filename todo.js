const addButton = document.querySelector('.todo-button')
const todoInput = document.querySelector('.todo-input')
const todoList = document.querySelector('.todo-list')

const addTodo = () => {
  if (todoInput.value === '') return

  const newTodo = document.createElement('li')

  const todoContent = document.createElement('span')
  todoContent.innerText = todoInput.value
  todoContent.addEventListener('click', editTodo)
  todoContent.classList.add('todo-content')
  newTodo.appendChild(todoContent)

  todoList.appendChild(newTodo)
  const checkButton = document.createElement('button')
  checkButton.addEventListener('click', switchState)
  checkButton.innerHTML = '□未着手'
  checkButton.classList.add('check-button')
  newTodo.appendChild(checkButton)

  const deleteButton = document.createElement('button')
  deleteButton.addEventListener('click', deleteTodo)
  deleteButton.innerHTML = '削除'
  deleteButton.classList.add('delete-button')
  newTodo.appendChild(deleteButton)

  todoList.appendChild(newTodo)

  todoInput.value = ''
}

const switchState = (e) => {
  let checkButton = e.target

  if (!checkButton.classList.contains('complete')) {
    checkButton.innerHTML = '完了'
    checkButton.classList.add('complete')
  } else {
    checkButton.innerHTML = '□未着手'
    checkButton.classList.remove('complete')
  }
}

const deleteTodo = (e) => {
  const todoList = e.target.closest('li')
  todoList.remove()
}

const saveTodoContent = (e) => {
  const itemToSave = e.target
  const textValue = itemToSave.value
  if (textValue !== '') {
    itemToSave.parentNode.textContent = textValue
  }
}

const editTodo = (e) => {
  const itemToEdit = e.target

  const input = document.createElement('input')
  input.setAttribute('type', 'text')
  input.classList.add('editbox')
  input.setAttribute('value', itemToEdit.textContent)
  itemToEdit.textContent = ''
  itemToEdit.appendChild(input)

  const editContent = itemToEdit.querySelector('.editbox')
  editContent.addEventListener('blur', saveTodoContent)
}

addButton.addEventListener('click', addTodo)
