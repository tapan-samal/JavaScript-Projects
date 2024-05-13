function addTask() {
  const inputTask = document.getElementById("inputTask").value;

  if (inputTask === "") {
    alert("Input field cannot be empty!");
    return false;
  }

  const taskList = document.getElementById("taskList");
  const newTask = document.createElement("li");
  taskList.appendChild(newTask);
  newTask.textContent = inputTask;

  document.getElementById("inputTask").value = "";
  deleteTask(newTask);
}

function deleteTask(newTask) {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  newTask.appendChild(deleteBtn);
  deleteBtn.onclick = function () {
    newTask.remove();
  };
}
