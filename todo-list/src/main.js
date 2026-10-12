import "./style.css";

// Get elements from HTML
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Function to add a task
function addTask() {

  const taskText = taskInput.value.trim();

  // Check if input is empty
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.classList.add("task");

  // Create checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Create task text
  const span = document.createElement("span");
  span.textContent = taskText;
  span.classList.add("task-text");

  // Create delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");

  // Mark task as completed
  checkbox.addEventListener("change", function () {
    span.classList.toggle("completed");
  });

  // Delete task
  deleteButton.addEventListener("click", function () {
    li.remove();
  });

  // Add elements to list item
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteButton);

  // Add list item to task list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";

  // Put cursor back in input
  taskInput.focus();
}

// Add task when button is clicked
addButton.addEventListener("click", addTask);