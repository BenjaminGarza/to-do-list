import DOMController from './modules/DOMController';
import Project from './modules/project';
import Todo from './modules/todo';

//projects is an array containing project names
//could nest todos inside
// [projectName[[todo1],[todo2],[todo3], project2[todoA], [todoB]]]
let projects = [];

//projectName as new Project('params')
//projects.push(projectName);


let testDiv = document.querySelector('.test');

testDiv.innerHTML = DOMController.todoHTML;

DOMController.test(DOMController.todoInput());
// const newProject = new Project('init parameters')

// document.querySelector('addProjectBtn').addEventListener('onClick');
//document.querySelector('addTodoBtn').addEventListener('onClick');



