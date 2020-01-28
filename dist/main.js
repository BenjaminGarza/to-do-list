/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_DOMController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DOMController */ "./src/modules/DOMController.js");
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project */ "./src/modules/project.js");
/* harmony import */ var _modules_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/todo */ "./src/modules/todo.js");




//projects is an array containing project names
//could nest todos inside
// [projectName[[todo1],[todo2],[todo3], project2[todoA], [todoB]]]
let projects = [['Default']];

//projectName as new Project('params')
//projects.push(projectName);


//let testDiv = document.querySelector('.test');

//testDiv.innerHTML = DOMController.todoHTML;


// const newProject = new Project('init parameters')
const addTodo = () => {
  if (_modules_DOMController__WEBPACK_IMPORTED_MODULE_0__["default"].todoInputValidation()) {
    let input = _modules_DOMController__WEBPACK_IMPORTED_MODULE_0__["default"].todoInput();
    let newTask = new _modules_todo__WEBPACK_IMPORTED_MODULE_2__["default"](input.title,input.description,input.dueDate,input.urgency);
    console.log(newTask);
    projects[0].push(newTask);
    console.log(projects[0]);
    console.log(document.querySelector('.selected').innerHTML);
  }
};

const addProject = () => {
  let input = _modules_DOMController__WEBPACK_IMPORTED_MODULE_0__["default"].projectInput();
  let newProject = new _modules_project__WEBPACK_IMPORTED_MODULE_1__["default"](input.title);
  console.log(newProject.title);
  projects.push(newProject.title);
  console.log(projects);
  console.log(document.querySelector('.selected').innerHTML);
};

const renderAllTodos = (selectedIndex) => {
  _modules_DOMController__WEBPACK_IMPORTED_MODULE_0__["default"].clearRenderedTodos();
  for (let i = 1; i < projects[selectedIndex].length; i++){
    let newLi = _modules_DOMController__WEBPACK_IMPORTED_MODULE_0__["default"].todoHTML(projects[selectedIndex][i]);
    document.querySelector('#todo-list').insertAdjacentHTML("beforeend",newLi);
  };
};

//Left off here
const renderAllProjects = () => {
  _modules_DOMController__WEBPACK_IMPORTED_MODULE_0__["default"].clearRenderedProjects();
  for(let i = 0; i < projects.length; i++){
    //console.log('Here my dude');
    console.log(projects[i]);
    let newLi = _modules_DOMController__WEBPACK_IMPORTED_MODULE_0__["default"].projectHTML(projects[i]);
    console.log(i);
    document.querySelector('#project-list').insertAdjacentHTML("beforeend",newLi);
    if(i == projects.length - 1) {
      console.log(i);
      console.log(projects.length);
      document.querySelector('#project-list').lastElementChild.classList.add('selected');
      console.log(typeof newLi);
    }
    console.log(newLi);
    
    
  };
};

//Returns the index of projects that the selected project is located at
const findSelectedProject = () => {
  let selected = document.querySelector('.selected').innerHTML;

  for (let i = 0;i < projects.length; i++){
    console.log(projects[i][0],selected);
    if(projects[i][0] == selected){
      return i;
    };
    console.log('ERROR IN findSelctedProject');
  };
};

const addAndRenderTodo = () => {
  addTodo();
  let selectedIndex = findSelectedProject();
  console.log(selectedIndex);
  renderAllTodos(selectedIndex);
  //DOMController.todoFieldReset(); commented for testing purposes

};

const addAndRenderProject = () => {
  addProject();
  let selectedIndex = findSelectedProject();
  console.log(selectedIndex);
  renderAllProjects(selectedIndex);

};

document.querySelector('#addProjectBtn').addEventListener('click', () =>{
  addAndRenderProject();
});

 document.querySelector('#addTodoBtn').addEventListener('click', () =>{
   addAndRenderTodo();
 });





/***/ }),

/***/ "./src/modules/DOMController.js":
/*!**************************************!*\
  !*** ./src/modules/DOMController.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DOMController; });
/* eslint-disable no-unused-vars */
const DOMController = (() => {
  const selectedProject = () => document.querySelector('.selected');

  //Add return for todoInput. Take return and create new task with it
  // createdTask as new Todo(todoInput())
  //Find which project the task belongs to
  // projects[projectIndex].push(createdTask)
  //projects[0].push(createdTask)


  const todoInput = () => ({
    title: document.querySelector('#newTaskTitle').value,
    description: document.querySelector('#newTaskDescription').value,
    dueDate: document.querySelector('#newTaskDueDate').value,
    urgency: document.querySelector('#newTaskUrgency').value,

  });

  const projectInput = () => ({
    title: document.querySelector('#new-project').value
  });

  const todoInputValidation = () => {
    if (document.querySelector('#newTaskTitle').value == ''){
      alert('You forgot the title!')
    } else if (document.querySelector('#newTaskDueDate').value == '') {
      alert('You forgot the due date!')
    } else {return true};
  };

  //Reset input field
  const todoFieldReset = () => (
    document.querySelector('#newTaskTitle').value = '',
    document.querySelector('#newTaskDescription').value = '',
    document.querySelector('#newTaskDueDate').value = '',
    document.querySelector('#newTaskUrgency').value = ''
  );

  //clears all li from todo list
  const clearRenderedTodos = () => {
    const ul = document.querySelector('#todo-list');
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    };
  };

  //clears all projects from project list
  const clearRenderedProjects = () => {
    const ul = document.querySelector('#project-list');
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    };
  };


  const todoHTML = (todo) => {
    let li = `
    <li>
      <div>${todo.title}</div>
      <div>${todo.description}</div>
      <div>${todo.dueDate}</div>
      <div>${todo.urgency}</div>
      <input type = 'checkbox'></input>
      <button class = 'edit-btn'>Edit</button>
      <button class = 'delete-btn'>X</button>
    </li>
  `
  return li;
};

//left off here, not finished
const projectHTML = (project) => {
  let li = `
  <li class = '' id = '${project}'>
    <div>${project}</div>
    <input type = 'checkbox'></input>
    <button class = 'edit-btn'>Edit</button>
    <button class = 'delete-btn'>X</button>
  </li>
`
return li;
};
  
  //const test = (thing = "default") => ( console.log(thing));

  return{
    todoInput,
    projectInput,
    todoInputValidation,
    todoHTML,
    projectHTML,
    todoFieldReset,
    clearRenderedTodos,
    clearRenderedProjects
  };
  
})();




/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Project; });
class Project {
  constructor(title, category, description, dueDate, status = false) {
    this.title = title;
    this.category = category;
    this.description = description;
    this.dueDate = dueDate;
    this.status = status;
    this.todos = [];
  }

  get getTitle(){
    return this.title;
  }

  get getCategory(){
    return this.category;
  }

  set setCategory(newCategory) {
    this.category = newCategory;
  }

  get getDescription(){
    return this.description;
  }

  get getDueDate(){
    return this.DueDate;
  }

  set setDueDate(updateDate){
    this.date = updateDate;
  }

  get getTodo() {
    return this.todos;
  }

  set setTodo(newTodo) {
    this.todo = newTodo;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  delTodo(index) {
    this.todos.splice(index,1)
  }
  
}


/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Todo {
  constructor(title, description, dueDate = new Date(), urgency, status = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.urgency = urgency;
    this.status = status;
  }

  get getTitle() {
    return this.title;
  }

  set setTitle(updateTitle) {
    this.title = updateTitle;
  }

  get getDescription(){
    return this.description;
  }

  set setDescription(updateDescription) {
    this.description = updateDescription;
  }
  get getDueDate(){
    return this.dueDate;
  }

  set setDueDate(updateDate) {
    this.dueDate = updateDate;
  }

  get getUrgency(){
    return this.urgency;
  }

  set setUrgency(updateUrgency) {
    this.urgency = updateUrgency;
  }
  get getStatus() {
    return this.status;
  }
  set setStatus(updateStatus) {
    this.status = updateStatus;
  }

  switchStatus() {
    this.status = !this.status;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Todo);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0RPTUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy90b2RvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBb0Q7QUFDWjtBQUNOOztBQUVsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLE1BQU0sOERBQWE7QUFDbkIsZ0JBQWdCLDhEQUFhO0FBQzdCLHNCQUFzQixxREFBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLDhEQUFhO0FBQzNCLHVCQUF1Qix3REFBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSw4REFBYTtBQUNmLGlCQUFpQixvQ0FBb0M7QUFDckQsZ0JBQWdCLDhEQUFhO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSw4REFBYTtBQUNmLGdCQUFnQixxQkFBcUI7QUFDckM7QUFDQTtBQUNBLGdCQUFnQiw4REFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQzs7QUFFbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hHRjtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLLE9BQU87QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCLGFBQWEsaUJBQWlCO0FBQzlCLGFBQWEsYUFBYTtBQUMxQixhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFFBQVE7QUFDakMsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRWlDOzs7Ozs7Ozs7Ozs7O0FDbkdsQztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG1FQUFJLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IERPTUNvbnRyb2xsZXIgZnJvbSAnLi9tb2R1bGVzL0RPTUNvbnRyb2xsZXInO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9tb2R1bGVzL3Byb2plY3QnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi9tb2R1bGVzL3RvZG8nO1xuXG4vL3Byb2plY3RzIGlzIGFuIGFycmF5IGNvbnRhaW5pbmcgcHJvamVjdCBuYW1lc1xuLy9jb3VsZCBuZXN0IHRvZG9zIGluc2lkZVxuLy8gW3Byb2plY3ROYW1lW1t0b2RvMV0sW3RvZG8yXSxbdG9kbzNdLCBwcm9qZWN0Mlt0b2RvQV0sIFt0b2RvQl1dXVxubGV0IHByb2plY3RzID0gW1snRGVmYXVsdCddXTtcblxuLy9wcm9qZWN0TmFtZSBhcyBuZXcgUHJvamVjdCgncGFyYW1zJylcbi8vcHJvamVjdHMucHVzaChwcm9qZWN0TmFtZSk7XG5cblxuLy9sZXQgdGVzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXN0Jyk7XG5cbi8vdGVzdERpdi5pbm5lckhUTUwgPSBET01Db250cm9sbGVyLnRvZG9IVE1MO1xuXG5cbi8vIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCgnaW5pdCBwYXJhbWV0ZXJzJylcbmNvbnN0IGFkZFRvZG8gPSAoKSA9PiB7XG4gIGlmIChET01Db250cm9sbGVyLnRvZG9JbnB1dFZhbGlkYXRpb24oKSkge1xuICAgIGxldCBpbnB1dCA9IERPTUNvbnRyb2xsZXIudG9kb0lucHV0KCk7XG4gICAgbGV0IG5ld1Rhc2sgPSBuZXcgVG9kbyhpbnB1dC50aXRsZSxpbnB1dC5kZXNjcmlwdGlvbixpbnB1dC5kdWVEYXRlLGlucHV0LnVyZ2VuY3kpO1xuICAgIGNvbnNvbGUubG9nKG5ld1Rhc2spO1xuICAgIHByb2plY3RzWzBdLnB1c2gobmV3VGFzayk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHNbMF0pO1xuICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpLmlubmVySFRNTCk7XG4gIH1cbn07XG5cbmNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XG4gIGxldCBpbnB1dCA9IERPTUNvbnRyb2xsZXIucHJvamVjdElucHV0KCk7XG4gIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoaW5wdXQudGl0bGUpO1xuICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0LnRpdGxlKTtcbiAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0LnRpdGxlKTtcbiAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKS5pbm5lckhUTUwpO1xufTtcblxuY29uc3QgcmVuZGVyQWxsVG9kb3MgPSAoc2VsZWN0ZWRJbmRleCkgPT4ge1xuICBET01Db250cm9sbGVyLmNsZWFyUmVuZGVyZWRUb2RvcygpO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHByb2plY3RzW3NlbGVjdGVkSW5kZXhdLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgbmV3TGkgPSBET01Db250cm9sbGVyLnRvZG9IVE1MKHByb2plY3RzW3NlbGVjdGVkSW5kZXhdW2ldKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1saXN0JykuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsbmV3TGkpO1xuICB9O1xufTtcblxuLy9MZWZ0IG9mZiBoZXJlXG5jb25zdCByZW5kZXJBbGxQcm9qZWN0cyA9ICgpID0+IHtcbiAgRE9NQ29udHJvbGxlci5jbGVhclJlbmRlcmVkUHJvamVjdHMoKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKXtcbiAgICAvL2NvbnNvbGUubG9nKCdIZXJlIG15IGR1ZGUnKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1tpXSk7XG4gICAgbGV0IG5ld0xpID0gRE9NQ29udHJvbGxlci5wcm9qZWN0SFRNTChwcm9qZWN0c1tpXSk7XG4gICAgY29uc29sZS5sb2coaSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLG5ld0xpKTtcbiAgICBpZihpID09IHByb2plY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgIGNvbnNvbGUubG9nKGkpO1xuICAgICAgY29uc29sZS5sb2cocHJvamVjdHMubGVuZ3RoKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKS5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICBjb25zb2xlLmxvZyh0eXBlb2YgbmV3TGkpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhuZXdMaSk7XG4gICAgXG4gICAgXG4gIH07XG59O1xuXG4vL1JldHVybnMgdGhlIGluZGV4IG9mIHByb2plY3RzIHRoYXQgdGhlIHNlbGVjdGVkIHByb2plY3QgaXMgbG9jYXRlZCBhdFxuY29uc3QgZmluZFNlbGVjdGVkUHJvamVjdCA9ICgpID0+IHtcbiAgbGV0IHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJykuaW5uZXJIVE1MO1xuXG4gIGZvciAobGV0IGkgPSAwO2kgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHNbaV1bMF0sc2VsZWN0ZWQpO1xuICAgIGlmKHByb2plY3RzW2ldWzBdID09IHNlbGVjdGVkKXtcbiAgICAgIHJldHVybiBpO1xuICAgIH07XG4gICAgY29uc29sZS5sb2coJ0VSUk9SIElOIGZpbmRTZWxjdGVkUHJvamVjdCcpO1xuICB9O1xufTtcblxuY29uc3QgYWRkQW5kUmVuZGVyVG9kbyA9ICgpID0+IHtcbiAgYWRkVG9kbygpO1xuICBsZXQgc2VsZWN0ZWRJbmRleCA9IGZpbmRTZWxlY3RlZFByb2plY3QoKTtcbiAgY29uc29sZS5sb2coc2VsZWN0ZWRJbmRleCk7XG4gIHJlbmRlckFsbFRvZG9zKHNlbGVjdGVkSW5kZXgpO1xuICAvL0RPTUNvbnRyb2xsZXIudG9kb0ZpZWxkUmVzZXQoKTsgY29tbWVudGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzXG5cbn07XG5cbmNvbnN0IGFkZEFuZFJlbmRlclByb2plY3QgPSAoKSA9PiB7XG4gIGFkZFByb2plY3QoKTtcbiAgbGV0IHNlbGVjdGVkSW5kZXggPSBmaW5kU2VsZWN0ZWRQcm9qZWN0KCk7XG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkSW5kZXgpO1xuICByZW5kZXJBbGxQcm9qZWN0cyhzZWxlY3RlZEluZGV4KTtcblxufTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFByb2plY3RCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICBhZGRBbmRSZW5kZXJQcm9qZWN0KCk7XG59KTtcblxuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUb2RvQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgIGFkZEFuZFJlbmRlclRvZG8oKTtcbiB9KTtcblxuXG5cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5jb25zdCBET01Db250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJyk7XG5cbiAgLy9BZGQgcmV0dXJuIGZvciB0b2RvSW5wdXQuIFRha2UgcmV0dXJuIGFuZCBjcmVhdGUgbmV3IHRhc2sgd2l0aCBpdFxuICAvLyBjcmVhdGVkVGFzayBhcyBuZXcgVG9kbyh0b2RvSW5wdXQoKSlcbiAgLy9GaW5kIHdoaWNoIHByb2plY3QgdGhlIHRhc2sgYmVsb25ncyB0b1xuICAvLyBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnB1c2goY3JlYXRlZFRhc2spXG4gIC8vcHJvamVjdHNbMF0ucHVzaChjcmVhdGVkVGFzaylcblxuXG4gIGNvbnN0IHRvZG9JbnB1dCA9ICgpID0+ICh7XG4gICAgdGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrVGl0bGUnKS52YWx1ZSxcbiAgICBkZXNjcmlwdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Rhc2tEZXNjcmlwdGlvbicpLnZhbHVlLFxuICAgIGR1ZURhdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrRHVlRGF0ZScpLnZhbHVlLFxuICAgIHVyZ2VuY3k6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrVXJnZW5jeScpLnZhbHVlLFxuXG4gIH0pO1xuXG4gIGNvbnN0IHByb2plY3RJbnB1dCA9ICgpID0+ICh7XG4gICAgdGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdCcpLnZhbHVlXG4gIH0pO1xuXG4gIGNvbnN0IHRvZG9JbnB1dFZhbGlkYXRpb24gPSAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrVGl0bGUnKS52YWx1ZSA9PSAnJyl7XG4gICAgICBhbGVydCgnWW91IGZvcmdvdCB0aGUgdGl0bGUhJylcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrRHVlRGF0ZScpLnZhbHVlID09ICcnKSB7XG4gICAgICBhbGVydCgnWW91IGZvcmdvdCB0aGUgZHVlIGRhdGUhJylcbiAgICB9IGVsc2Uge3JldHVybiB0cnVlfTtcbiAgfTtcblxuICAvL1Jlc2V0IGlucHV0IGZpZWxkXG4gIGNvbnN0IHRvZG9GaWVsZFJlc2V0ID0gKCkgPT4gKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrVGl0bGUnKS52YWx1ZSA9ICcnLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrRGVzY3JpcHRpb24nKS52YWx1ZSA9ICcnLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrRHVlRGF0ZScpLnZhbHVlID0gJycsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Rhc2tVcmdlbmN5JykudmFsdWUgPSAnJ1xuICApO1xuXG4gIC8vY2xlYXJzIGFsbCBsaSBmcm9tIHRvZG8gbGlzdFxuICBjb25zdCBjbGVhclJlbmRlcmVkVG9kb3MgPSAoKSA9PiB7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1saXN0Jyk7XG4gICAgd2hpbGUgKHVsLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHVsLnJlbW92ZUNoaWxkKHVsLmZpcnN0Q2hpbGQpO1xuICAgIH07XG4gIH07XG5cbiAgLy9jbGVhcnMgYWxsIHByb2plY3RzIGZyb20gcHJvamVjdCBsaXN0XG4gIGNvbnN0IGNsZWFyUmVuZGVyZWRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKTtcbiAgICB3aGlsZSAodWwuZmlyc3RDaGlsZCkge1xuICAgICAgdWwucmVtb3ZlQ2hpbGQodWwuZmlyc3RDaGlsZCk7XG4gICAgfTtcbiAgfTtcblxuXG4gIGNvbnN0IHRvZG9IVE1MID0gKHRvZG8pID0+IHtcbiAgICBsZXQgbGkgPSBgXG4gICAgPGxpPlxuICAgICAgPGRpdj4ke3RvZG8udGl0bGV9PC9kaXY+XG4gICAgICA8ZGl2PiR7dG9kby5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgIDxkaXY+JHt0b2RvLmR1ZURhdGV9PC9kaXY+XG4gICAgICA8ZGl2PiR7dG9kby51cmdlbmN5fTwvZGl2PlxuICAgICAgPGlucHV0IHR5cGUgPSAnY2hlY2tib3gnPjwvaW5wdXQ+XG4gICAgICA8YnV0dG9uIGNsYXNzID0gJ2VkaXQtYnRuJz5FZGl0PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzID0gJ2RlbGV0ZS1idG4nPlg8L2J1dHRvbj5cbiAgICA8L2xpPlxuICBgXG4gIHJldHVybiBsaTtcbn07XG5cbi8vbGVmdCBvZmYgaGVyZSwgbm90IGZpbmlzaGVkXG5jb25zdCBwcm9qZWN0SFRNTCA9IChwcm9qZWN0KSA9PiB7XG4gIGxldCBsaSA9IGBcbiAgPGxpIGNsYXNzID0gJycgaWQgPSAnJHtwcm9qZWN0fSc+XG4gICAgPGRpdj4ke3Byb2plY3R9PC9kaXY+XG4gICAgPGlucHV0IHR5cGUgPSAnY2hlY2tib3gnPjwvaW5wdXQ+XG4gICAgPGJ1dHRvbiBjbGFzcyA9ICdlZGl0LWJ0bic+RWRpdDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3MgPSAnZGVsZXRlLWJ0bic+WDwvYnV0dG9uPlxuICA8L2xpPlxuYFxucmV0dXJuIGxpO1xufTtcbiAgXG4gIC8vY29uc3QgdGVzdCA9ICh0aGluZyA9IFwiZGVmYXVsdFwiKSA9PiAoIGNvbnNvbGUubG9nKHRoaW5nKSk7XG5cbiAgcmV0dXJue1xuICAgIHRvZG9JbnB1dCxcbiAgICBwcm9qZWN0SW5wdXQsXG4gICAgdG9kb0lucHV0VmFsaWRhdGlvbixcbiAgICB0b2RvSFRNTCxcbiAgICBwcm9qZWN0SFRNTCxcbiAgICB0b2RvRmllbGRSZXNldCxcbiAgICBjbGVhclJlbmRlcmVkVG9kb3MsXG4gICAgY2xlYXJSZW5kZXJlZFByb2plY3RzXG4gIH07XG4gIFxufSkoKTtcblxuZXhwb3J0IHtET01Db250cm9sbGVyIGFzIGRlZmF1bHR9O1xuIiwiY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBjYXRlZ29yeSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHN0YXR1cyA9IGZhbHNlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLnRvZG9zID0gW107XG4gIH1cblxuICBnZXQgZ2V0VGl0bGUoKXtcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxuXG4gIGdldCBnZXRDYXRlZ29yeSgpe1xuICAgIHJldHVybiB0aGlzLmNhdGVnb3J5O1xuICB9XG5cbiAgc2V0IHNldENhdGVnb3J5KG5ld0NhdGVnb3J5KSB7XG4gICAgdGhpcy5jYXRlZ29yeSA9IG5ld0NhdGVnb3J5O1xuICB9XG5cbiAgZ2V0IGdldERlc2NyaXB0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXQgZ2V0RHVlRGF0ZSgpe1xuICAgIHJldHVybiB0aGlzLkR1ZURhdGU7XG4gIH1cblxuICBzZXQgc2V0RHVlRGF0ZSh1cGRhdGVEYXRlKXtcbiAgICB0aGlzLmRhdGUgPSB1cGRhdGVEYXRlO1xuICB9XG5cbiAgZ2V0IGdldFRvZG8oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9kb3M7XG4gIH1cblxuICBzZXQgc2V0VG9kbyhuZXdUb2RvKSB7XG4gICAgdGhpcy50b2RvID0gbmV3VG9kbztcbiAgfVxuXG4gIGFkZFRvZG8odG9kbykge1xuICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgfVxuXG4gIGRlbFRvZG8oaW5kZXgpIHtcbiAgICB0aGlzLnRvZG9zLnNwbGljZShpbmRleCwxKVxuICB9XG4gIFxufVxuZXhwb3J0IHtQcm9qZWN0IGFzIGRlZmF1bHR9OyIsImNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUgPSBuZXcgRGF0ZSgpLCB1cmdlbmN5LCBzdGF0dXMgPSBmYWxzZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnVyZ2VuY3kgPSB1cmdlbmN5O1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICB9XG5cbiAgZ2V0IGdldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICB9XG5cbiAgc2V0IHNldFRpdGxlKHVwZGF0ZVRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHVwZGF0ZVRpdGxlO1xuICB9XG5cbiAgZ2V0IGdldERlc2NyaXB0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gIH1cblxuICBzZXQgc2V0RGVzY3JpcHRpb24odXBkYXRlRGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdXBkYXRlRGVzY3JpcHRpb247XG4gIH1cbiAgZ2V0IGdldER1ZURhdGUoKXtcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICB9XG5cbiAgc2V0IHNldER1ZURhdGUodXBkYXRlRGF0ZSkge1xuICAgIHRoaXMuZHVlRGF0ZSA9IHVwZGF0ZURhdGU7XG4gIH1cblxuICBnZXQgZ2V0VXJnZW5jeSgpe1xuICAgIHJldHVybiB0aGlzLnVyZ2VuY3k7XG4gIH1cblxuICBzZXQgc2V0VXJnZW5jeSh1cGRhdGVVcmdlbmN5KSB7XG4gICAgdGhpcy51cmdlbmN5ID0gdXBkYXRlVXJnZW5jeTtcbiAgfVxuICBnZXQgZ2V0U3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cztcbiAgfVxuICBzZXQgc2V0U3RhdHVzKHVwZGF0ZVN0YXR1cykge1xuICAgIHRoaXMuc3RhdHVzID0gdXBkYXRlU3RhdHVzO1xuICB9XG5cbiAgc3dpdGNoU3RhdHVzKCkge1xuICAgIHRoaXMuc3RhdHVzID0gIXRoaXMuc3RhdHVzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87Il0sInNvdXJjZVJvb3QiOiIifQ==