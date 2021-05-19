const addButton = document.querySelector('.todo-button')
const todoInput = document.querySelector('.todo-input')
const todoList = document.querySelector('.todo-list')

const addTodo = () => {
  if (todoInput.value === '') return
  // alert(`タスク追加:${todoInput.value}`)
  const newTodo = document.createElement('li')

  const todoContent = document.createElement('span')
  todoContent.innerText = todoInput.value
  todoContent.classList.add('todo-content')
  newTodo.appendChild(todoContent)

  todoList.appendChild(newTodo)
  const checkButton = document.createElement('button')
  checkButton.innerHTML = '□未着手'
  checkButton.classList.add('check-button')
  newTodo.appendChild(checkButton)

  const deleteButton = document.createElement('button')
  deleteButton.innerHTML = '削除'
  deleteButton.classList.add('delete-button')
  newTodo.appendChild(deleteButton)

  todoList.appendChild(newTodo)

  todoInput.value = ''
}

const switchStates = (e) => {
  alert('状態切り替え')
}

addButton.addEventListener('click', addTodo)
