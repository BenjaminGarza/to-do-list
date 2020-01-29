
import DOMController from './modules/DOMController';
import Project from './modules/project';
import Todo from './modules/todo';

// projects is an array containing project names
// could nest todos inside
// [projectName[[todo1],[todo2],[todo3], project2[todoA], [todoB]]]
const projects = [['Default']];


// projectName as new Project('params')
// projects.push(projectName);


// let testDiv = document.querySelector('.test');

// testDiv.innerHTML = DOMController.todoHTML;


// const newProject = new Project('init parameters')
const addTodo = (selectedIndex) => {
  if (DOMController.todoInputValidation()) {
    const input = DOMController.todoInput();
    const newTask = new Todo(input.title, input.description, input.dueDate, input.urgency);
    projects[selectedIndex].push(newTask);
   
  }
};

const addProject = () => {
  const input = DOMController.projectInput();
  if (projectValidation(input.title)){
    const newProject = new Project(input.title);
    length = projects.push([]) - 1;
    projects[length].push(newProject.title);

  }
  
};

const renderAllTodos = (selectedIndex) => {
  DOMController.clearRenderedTodos();
  if (projects[selectedIndex].length > 0){
  for (let i = 1; i < projects[selectedIndex].length; i++) {
    const newLi = DOMController.todoHTML(projects[selectedIndex][i]);

    document.querySelector('#todo-list').insertAdjacentHTML('beforeend', newLi);
  }
};
};

const renderAllProjects = () => {
  DOMController.clearRenderedProjects();
  for (let i = 0; i < projects.length; i++) {
   
    const newLi = DOMController.projectHTML(projects[i]);
    document.querySelector('#project-list').insertAdjacentHTML('beforeend', newLi);
    if (i == projects.length - 1) {
      document.querySelector('#project-list').lastElementChild.classList.add('selected');
    }
  }
};

// Returns the index of projects that the selected project is located at
const findSelectedProject = () => {
  if(document.querySelector('.selected') == null){
    return 
   };
  const selected = document.querySelector('.selected').id;
  for (let i = 0; i < projects.length; i++) {
    //console.log(projects[i][0], selected);
    if (projects[i][0] == selected) {
      return i;
    }
  }
};

const projectIndexByName = (name) => {
  const selected = name;
  for (let i = 0; i < projects.length; i++) {
    //console.log(projects[i][0], selected);
    if (projects[i][0] == selected) {
      return i;
    }
  }
};

const addAndRenderTodo = () => {
  let selectedIndex = findSelectedProject();
  addTodo(selectedIndex);
  renderAllTodos(selectedIndex);
  // DOMController.todoFieldReset(); commented for testing purposes
};

const addAndRenderProject = () => {
  let selectedIndex = findSelectedProject();
  addProject();
  renderAllProjects(selectedIndex);
  deleteBtnListener();
};

const deleteProject = (indexToDelete) => {
  projects.splice(indexToDelete,1);
  renderAllProjects();
};

const projectValidation = (input) => {
  let testArr = projects.map( element =>  input == element);
  if (input == ''){
    alert('Cannot create a blank project')
    return false;
  } else if(testArr.includes(true)) {
    alert('Cannot create a duplicate project')
    return false;
  } else return true;
};

document.querySelector('#addProjectBtn').addEventListener('click', () => {
  addAndRenderProject();
});

document.querySelector('#addTodoBtn').addEventListener('click', () => {
  addAndRenderTodo();
});

const deleteBtnListener = () => {
  let deleteBtnList = document.querySelectorAll('.delete-btn');
  console.log('before loop');
  for(let i=0; i < deleteBtnList.length; i++){
    deleteBtnList[i].addEventListener('click', (e) => {
      let name = e.target.dataset.name;
  
      deleteProject(projectIndexByName(name));
      console.log(projects);
      renderAllProjects();
    })
    console.log('after loop');
  }
};


document.querySelector('#project-list').addEventListener("click", (e) => {
  let target = e.target.classList;
  

  if (target.contains('selected') 
|| target.contains('delete-btn') 
|| target.contains('edit-btn')){
    return;
  }else {
    console.log(e)
    let tagList = document.getElementsByTagName("li")
    console.log(tagList, "taglist");
    let elementListSelected = document.getElementsByClassName("selected");
  elementListSelected[0].classList.remove('selected');
  target.add('selected');
  console.log(findSelectedProject());
  renderAllTodos(findSelectedProject());
  };
});

deleteBtnListener();