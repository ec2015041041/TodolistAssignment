const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function() {
  const task = taskInput.value;
  if (task.trim() === "") {
    alert("Please enter a task.");
  } else {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    taskList.appendChild(li);
    taskInput.value = "";
  }
});

taskList.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("completed");
  }
});
