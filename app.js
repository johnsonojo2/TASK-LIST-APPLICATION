// document.getElementById()

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';
// const li = document.createElement("li");

// const link = document.createElement("a");
// const ifr = document.createElement("i");
// //   .classList.add("delete-item,secondary-content");
// document.querySelector("ul.collection").appendChild(li);
// link.classList.add("delete-item", "secondary-content");
// ifr.classList.add("fa", "fa-remove");
// link.append(ifr);
// // const lo = document.createElement("li");
// // li.id = "test";
// // li.className = "collection-item";
// li.classList.add("collection-item");
// li.innerText = "hello world";
// li.append(link);

// console.log(link);
// document.querySelector(".clear-tasks").addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e.target.classList);
//   console.log("hello-world");
// });
// function multiplier(factor) {
//   return (number) => number * factor;
// }
// let twice = multiplier(2);
// console.log(twice(5));
// const delItem = (e) => {
//   if (e.target.parentElement.classList.contains("delete-item")) {
//     e.target.parentElement.parentElement.remove();
//   }
// };
// document.body.addEventListener("click", delItem);

// set local storage item
// localStorage.setItem("name", "John");
// localStorage.setItem("school", "UofC");

// const mySchool = localStorage.getItem("school");
// console.log(mySchool);

// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const task = document.querySelector("#task").value;
//   let tasks;
//   if (localStorage.getItem("tasks") === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem("tasks"));
//   }
//   tasks.push(task);
//   localStorage.setItem("tasks", JSON.stringify(tasks));

//   e.preventDefault();
// });
//UI VARIABLES
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//to load all event listeners
loadEventListeners();

//to load all event listeners
function loadEventListeners() {
  //   Dom Load event
  document.addEventListener("DOMContentLoaded", getTasks);
  //Add tasks event
  form.addEventListener("submit", addTask);
  //Remove tasks event
  taskList.addEventListener("click", removeTask);
  taskList.addEventListener("click", updateTask);

  //Clear tasks event
  clearBtn.addEventListener("click", clearTask);

  //filter tasks event
  filter.addEventListener("keyup", filterTask);
}
// Get Tasks form Local storage

function getTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  // if (localStorage.getItem("tasks") === null) {
  //   tasks = [];
  // } else {
  //   tasks = JSON.parse(localStorage.getItem("tasks"));
  // }

  tasks.forEach(function (task) {
    //create li element

    const li = document.createElement("li");

    //add class
    li.className = "collection-item";
    //append task value to li
    li.append(task);
    // creating task node and appending to li (another method to test)
    // li.appendChild(document.createTextNode(taskInput.value))

    // create a new link for the delete icon
    const link = document.createElement("a");

    //add class
    link.className = "delete-item secondary-content";

    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append to li
    li.append(link);

    const edit = document.createElement("a");

    //add class
    edit.className = "update-item secondary-content";

    //add icon html
    edit.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>';

    // append to li
    li.append(edit);

    // append li to ul
    taskList.append(li);
  });
}

// Add task Function
function addTask(e) {
  e.preventDefault();
  if (taskInput.value === "" || taskInput.value.trim().length === 0) {
    alert("add a task");
  } else {
    if (taskList.children.length === 0) {
      creatLiAppendToUl();
    } else {
      let presentTasks = JSON.parse(localStorage.getItem("tasks"));
      if (presentTasks.includes(taskInput.value.trim().toLowerCase())) {
        alert("tasks already exists");
      } else {
        creatLiAppendToUl();
      }

      // }
    }
  }
  // clearing out taskInput
  taskInput.value = "";
  //prevent default form action
  e.preventDefault();
}
function creatLiAppendToUl() {
  const li = document.createElement("li");

  //add class
  li.className = "collection-item";
  let taskInputL = taskInput.value.trim().toLowerCase();
  //append task value to li
  li.append(taskInputL);

  // li.appendChild(document.createTextNode(taskInput.value))

  // create a new link for the delete icon
  const link = document.createElement("a");

  //add class
  link.className = "delete-item secondary-content";

  //add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';

  // append to li
  li.append(link);

  const edit = document.createElement("a");
  edit.className = "update-item secondary-content";
  edit.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>';
  li.append(edit);
  taskList.append(li);
  // append li to ul

  taskList.append(li);

  // Store Task in Local Storage
  storeTaskInLocalStorage(taskInputL);
}
// Store Task
function storeTaskInLocalStorage(task) {
  let tasks;
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // if (localStorage.getItem("tasks") === null) {
  //   tasks = [];
  // } else {
  //   tasks = JSON.parse(localStorage.getItem("tasks"));
  // }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
//Remove Task Function
function removeTask(e) {
  if (e.target.classList.contains("fa-remove")) {
    if (confirm("are you sure?")) {
      e.target.parentElement.parentElement.remove();

      // remove from local Storage
    }
    removeFromLocalStorage(e.target.parentElement.parentElement);
  }
}

function updateTask(e) {
  if (e.target.classList.contains("fa-pencil")) {
    let updatedTask = prompt("kindly update your task item:");
    let tasksInLs = JSON.parse(localStorage.getItem("tasks"));
    let listItem = e.target.parentElement.parentElement;
    if (updatedTask === "" || updatedTask.trim().length === 0) {
      updatedTask = listItem.innerText;
    } else if (tasksInLs.includes(updatedTask.trim().toLowerCase())) {
      alert("Task already exists");
      updatedTask = prompt("kindly update to a task item that does not exist:");
    }
    // let listItem = e.target.parentElement.parentElement;

    let taskIndex = tasksInLs.indexOf(listItem.innerText);

    tasksInLs[taskIndex] = updatedTask;

    localStorage.setItem("tasks", JSON.stringify(tasksInLs));

    listItem.innerText = "";
    //add class

    let taskInputU = updatedTask.trim().toLowerCase();
    //append task value to li
    listItem.append(taskInputU);

    const link = document.createElement("a");

    //add class
    link.className = "delete-item secondary-content";

    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // append to li
    listItem.append(link);

    const edit = document.createElement("a");
    edit.className = "update-item secondary-content";
    edit.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>';
    listItem.append(edit);
  }
}
//Remove from LS
function removeFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}
//Clear Task Function
function clearTask() {
  //   taskList.innerHTML = "";

  //faster method

  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  //clear Tasks from Local storage

  clearTasksFromLocalStorage();
}
//Clear Task Function from local storage
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

//Filter Tasks Function
function filterTask(e) {
  //   console.log(e.target.value);
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach((task) => {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
