import DOMController from './modules/DOMController';
import Project from './modules/project';
import Todo from './modules/todo';

//projects is an array containing project names
//could nest todos inside
// [projectName[[todo1],[todo2],[todo3], project2[todoA], [todoB]]]
let projects = [['default']];

//projectName as new Project('params')
//projects.push(projectName);


//let testDiv = document.querySelector('.test');

//testDiv.innerHTML = DOMController.todoHTML;


// const newProject = new Project('init parameters')
const addTodo = () => {
  if (DOMController.todoInputValidation()) {
    let newTask = new Todo(DOMController.todoInput());
    console.log(newTask.title);
    projects[0].push(newTask);
    console.log(projects[0]);
    
  } else {}
};

 //document.querySelector('#addProjectBtn').addEventListener('click');
 document.querySelector('#addTodoBtn').addEventListener('click', addTodo());



