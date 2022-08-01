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
const delItem = (e) => {
  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();
  }
};
document.body.addEventListener("click", delItem);
