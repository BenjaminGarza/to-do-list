
const deleteBtn = () => {


  // Click on a close button to hide the current list item
  let close = document.getElementsByClassName("delete-btn");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  };
};
};


const taskFactory = (projectVal,titleVal, descriptionVal, dueDateVal, urgencyVal) => {
  this.project = projectVal;
  this.title = titleVal;
  this.description = descriptionVal;
  this.dueDate = dueDateVal;
  this.urgency = urgencyVal;
  //left off here
  console.log(document.getElementsByClassName("selected")[0].firstChild.textContent);
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
  let checkBox = document.createElement('input');
  checkBox.type = "checkbox";
  checkBox.classList.add("check-box");
  let deleteBtn = document.createElement('button');
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerHTML = "X";
  let editBtn = document.createElement('button', { className: 'edit-btn' });
  editBtn.classList.add("edit-btn");
  editBtn.innerHTML = "Edit";
  
  const task = taskFactory(
    document.getElementsByClassName("selected"), 
    document.getElementById("newTaskTitle").value,
    document.getElementById("newTaskDescription").value, 
    document.getElementById("newTaskDueDate").value, 
    document.getElementById("newTaskUrgency").value
  );

  document.getElementById("newTaskTitle").value = "";
  document.getElementById("newTaskDescription").value = ""; 
  document.getElementById("newTaskDueDate").value = ""; 
  document.getElementById("newTaskUrgency").value = "";

  div1.appendChild(document.createTextNode(task.title));
  div2.appendChild(document.createTextNode(task.dueDate));
  div3.appendChild(document.createTextNode(task.urgency));
  div4.appendChild(document.createTextNode(task.description));

  
  li.appendChild(div1);
  li.appendChild(div2);
  li.appendChild(div3);
  li.appendChild(div4);
  li.appendChild(checkBox);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);


   if (task.title === "") {
     alert("Please enter a task!");
    } else {
      document.getElementById("taskList").appendChild(li);
   };
  
  }

  const projectRender = (projectName) => {
    let li = document.createElement("li");
    li.classList.add("selected");

    let projectNameNode = document.createTextNode(projectName);

    li.appendChild(projectNameNode);

    
    let elementListSelected = document.getElementsByClassName("selected");
    elementListSelected[0].classList.remove('selected');

      
    //Should call task render
    if (projectName.value === "") {
      alert("Please enter a project!");
     } else {
       document.getElementById("project-list").appendChild(li);
    }
  }

  const Project = () => {
    let tasks = [];
    
    console.log(document.getElementById("new-project").value);
    projectName = document.getElementById("new-project").value;

      projectRender(projectName);
    return (projectName, tasks);
  };
  
  document.querySelector("#project-list").addEventListener("click", (e) => {
    console.log(e);
    let target = e.target.classList;
    
    //console.log(target);

    if (target.contains('selected')) {
      return;
    } else {
      let elementListSelected = document.getElementsByClassName("selected");
    elementListSelected[0].classList.remove('selected');
    target.add('selected');
    }
  });

  

 