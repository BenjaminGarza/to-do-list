
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
  console.log(selectedIndex);
  console.log(projects);
  console.log(projects[selectedIndex]);
  if (DOMController.todoInputValidation()) {
    const input = DOMController.todoInput();
    const newTask = new Todo(input.title, input.description, input.dueDate, input.urgency);
    projects[selectedIndex].push(newTask);
   
  }
};

const addProject = () => {
  //
  const input = DOMController.projectInput();
  const newProject = new Project(input.title);
  length = projects.push([]) - 1;
  projects[length].push(newProject.title);
  console.log(projects);
  console.log(document.querySelector('.selected').innerHTML);
};

const renderAllTodos = (selectedIndex) => {
  DOMController.clearRenderedTodos();
  console.log(projects[selectedIndex], 'renderTodos');
  if (projects[selectedIndex].length > 0){
  for (let i = 1; i < projects[selectedIndex].length; i++) {
    const newLi = DOMController.todoHTML(projects[selectedIndex][i]);

    document.querySelector('#todo-list').insertAdjacentHTML('beforeend', newLi);
  }
};
};

// Left off here
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
  const selected = document.querySelector('.selected').id;
  for (let i = 0; i < projects.length; i++) {
    console.log(selected,'selected value');
    //console.log(projects[i][0], selected);
    if (projects[i][0] == selected) {
      return i;
    }
  }
};

const addAndRenderTodo = () => {
  let selectedIndex = findSelectedProject();
  console.log(selectedIndex,'addAndRenderTodo');
  addTodo(selectedIndex);
  //console.log(selectedIndex);
  renderAllTodos(selectedIndex);
  // DOMController.todoFieldReset(); commented for testing purposes
};

const addAndRenderProject = () => {
  let selectedIndex = findSelectedProject();
  addProject();
  //console.log(selectedIndex);
  renderAllProjects(selectedIndex);
};

document.querySelector('#addProjectBtn').addEventListener('click', () => {
  addAndRenderProject();
});

document.querySelector('#addTodoBtn').addEventListener('click', () => {
  addAndRenderTodo();
});

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
  console.log(findSelectedProject());
  renderAllTodos(findSelectedProject());
  };
});
