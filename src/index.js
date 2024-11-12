// your code here

function handleDelete(event) {
  event.target.parentNode.remove()
}

function buildToDo(toDo) {
  let li = document.createElement('li')
  let deleteButton = document.createElement('button')
  deleteButton.textContent = "X"
  deleteButton.addEventListener('click', handleDelete)
  li.textContent = `${toDo} `
  li.appendChild(deleteButton)
  document.querySelector("#tasks").appendChild(li)
};

const form = document.querySelector("#create-task-form");
form.addEventListener('submit', function(e) {
  e.preventDefault()
  buildToDo(e.target.new_task_description.value)
  form.reset()
})

