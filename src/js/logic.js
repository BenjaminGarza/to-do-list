

const addCloseButton = () => {
  // Create a "close" button and append it to each list item
  let myNodeList = document.getElementsByTagName("li");

  for (let i = 0; i < myNodeList.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
  };

  // Click on a close button to hide the current list item
  let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  };
};
};

const addChecked = () => {
// Add a "checked" symbol when clicking on a list item
let list = document.querySelector("ul");
list.addEventListener("click", function(e) {
  if (e.target.tagName == "li") {
    e.target.classList.toggle("checked");
  }
}, false);
};

const taskFactory = (project,title, description, dueDate, urgency) => {

  return { project,title, description, dueDate, urgency}
}

const projectFactory = (project) => {

  return { project}
}
// Create a new list item when clicking on the "Add" button
const newTask = () => {
  let li = document.createElement("li");
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let div4 = document.createElement("div");
  let checkBox = createElement('checkbox', { className: 'check-box' });
  let deleteBtn = createElement('button', { className: 'delete-btn' });
  let editBtn = createElement('button', { className: 'edit-btn' });
  
  const task = taskFactory(
    'default', 
    document.getElementById("newTaskTitle").value,
    document.getElementById("newTaskDescription").value, 
    document.getElementById("newTaskDueDate").value, 
    document.getElementById("newTaskUrgency").value
  );

  div1.appendChild(document.createTextNode(task.title));
  div2.appendChild(document.createTextNode(task.description));
  div3.appendChild(document.createTextNode(task.urgency));
  div4.appendChild(document.createTextNode(task.description));

  li.appendChild(div1);
  li.appendChild(div2);
  li.appendChild(div3);
  li.appendChild(div4);

   if (task.title === "") {
     alert("Please enter a task!");
    } else {
      document.getElementById("taskList").appendChild(li);
      addCloseButton();
   };
  document.getElementById("newTask").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close"
  span.appendChild(txt);
  li.appendChild(span);
  
   for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
   }
  }

  const newProject = () => {
    let li = document.createElement("li");
    let projectName = document.createTextNode(document.getElementById("new-project").value);

    li.appendChild(projectName);

    if (projectName.value === "") {
      alert("Please enter a project!");
     } else {
       document.getElementById("project-list").appendChild(li);
    }
  }

 

