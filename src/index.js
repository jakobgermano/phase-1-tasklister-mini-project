
  const newTaskForm = document.querySelector('form');
  const inputBox = document.getElementsByTagName('new-task-description');
  const listBox = document.querySelector('ul#tasks');

newTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let newTask = document.createElement('li')
  listBox.appendChild(newTask)
  newTask.innerText = inputBox
})


