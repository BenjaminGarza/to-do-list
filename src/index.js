// eslint disable rule 'Unary operator'
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
const addTodo = () => {
  if (DOMController.todoInputValidation()) {
    const input = DOMController.todoInput();
    const newTask = new Todo(input.title, input.description, input.dueDate, input.urgency);
    // console.log(newTask);
    projects[0].push(newTask);
    // console.log(projects[0]);
    // console.log(document.querySelector('.selected').innerHTML);
  }
};

const addProject = () => {
  const input = DOMController.projectInput();
  const newProject = new Project(input.title);
  console.log(newProject.title);
  projects.push(newProject.title);
  console.log(projects);
  console.log(document.querySelector('.selected').innerHTML);
};

const renderAllTodos = (selectedIndex) => {
  DOMController.clearRenderedTodos();
  for (let i = 1; i < projects[selectedIndex].length; i++) {
    const newLi = DOMController.todoHTML(projects[selectedIndex][i]);
    document.querySelector('#todo-list').insertAdjacentHTML('beforeend', newLi);
  }
};

// Left off here
const renderAllProjects = () => {
  DOMController.clearRenderedProjects();
  for (let i = 0; i < projects.length; i++) {
    // console.log('Here my dude');
    // console.log(projects[i]);
    const newLi = DOMController.projectHTML(projects[i]);
    // console.log(i);
    document.querySelector('#project-list').insertAdjacentHTML('beforeend', newLi);
    if (i == projects.length - 1) {
      // console.log(i);
      // console.log(projects.length);
      document.querySelector('#project-list').lastElementChild.classList.add('selected');
      // console.log(typeof newLi);
    }
    // console.log(newLi);
  }
};

// Returns the index of projects that the selected project is located at
const findSelectedProject = () => {
  const selected = document.querySelector('.selected').innerHTML;

  for (let i = 0; i < projects.length; i++) {
    // console.log(projects[i][0], selected);
    if (projects[i][0] == selected) {
      return i;
    }
    // console.log('ERROR IN findSelctedProject');
  }
};

const addAndRenderTodo = () => {
  addTodo();
  const selectedIndex = findSelectedProject();
  // console.log(selectedIndex);
  renderAllTodos(selectedIndex);
  // DOMController.todoFieldReset(); commented for testing purposes
};

const addAndRenderProject = () => {
  addProject();
  const selectedIndex = findSelectedProject();
  // console.log(selectedIndex);
  renderAllProjects(selectedIndex);
};

document.querySelector('#addProjectBtn').addEventListener('click', () => {
  addAndRenderProject();
});

document.querySelector('#addTodoBtn').addEventListener('click', () => {
  addAndRenderTodo();
});
