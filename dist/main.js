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
    if(i == projects.length - 1) {
      //.classList.add('selected');
      console.log(typeof newLi);
    }
    console.log(newLi);
    document.querySelector('#project-list').insertAdjacentHTML("beforeend",newLi);
    document.querySelector('#project-list').lastElementChild.classList.add('selected');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0RPTUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy90b2RvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBb0Q7QUFDWjtBQUNOOztBQUVsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLE1BQU0sOERBQWE7QUFDbkIsZ0JBQWdCLDhEQUFhO0FBQzdCLHNCQUFzQixxREFBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLDhEQUFhO0FBQzNCLHVCQUF1Qix3REFBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSw4REFBYTtBQUNmLGlCQUFpQixvQ0FBb0M7QUFDckQsZ0JBQWdCLDhEQUFhO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSw4REFBYTtBQUNmLGdCQUFnQixxQkFBcUI7QUFDckM7QUFDQTtBQUNBLGdCQUFnQiw4REFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLG9CQUFvQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DOztBQUVuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FDckdGO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUssT0FBTztBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsYUFBYSxpQkFBaUI7QUFDOUIsYUFBYSxhQUFhO0FBQzFCLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQyxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFaUM7Ozs7Ozs7Ozs7Ozs7QUNuR2xDO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDbERBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUksRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgRE9NQ29udHJvbGxlciBmcm9tICcuL21vZHVsZXMvRE9NQ29udHJvbGxlcic7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL21vZHVsZXMvcHJvamVjdCc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL21vZHVsZXMvdG9kbyc7XG5cbi8vcHJvamVjdHMgaXMgYW4gYXJyYXkgY29udGFpbmluZyBwcm9qZWN0IG5hbWVzXG4vL2NvdWxkIG5lc3QgdG9kb3MgaW5zaWRlXG4vLyBbcHJvamVjdE5hbWVbW3RvZG8xXSxbdG9kbzJdLFt0b2RvM10sIHByb2plY3QyW3RvZG9BXSwgW3RvZG9CXV1dXG5sZXQgcHJvamVjdHMgPSBbWydEZWZhdWx0J11dO1xuXG4vL3Byb2plY3ROYW1lIGFzIG5ldyBQcm9qZWN0KCdwYXJhbXMnKVxuLy9wcm9qZWN0cy5wdXNoKHByb2plY3ROYW1lKTtcblxuXG4vL2xldCB0ZXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlc3QnKTtcblxuLy90ZXN0RGl2LmlubmVySFRNTCA9IERPTUNvbnRyb2xsZXIudG9kb0hUTUw7XG5cblxuLy8gY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdpbml0IHBhcmFtZXRlcnMnKVxuY29uc3QgYWRkVG9kbyA9ICgpID0+IHtcbiAgaWYgKERPTUNvbnRyb2xsZXIudG9kb0lucHV0VmFsaWRhdGlvbigpKSB7XG4gICAgbGV0IGlucHV0ID0gRE9NQ29udHJvbGxlci50b2RvSW5wdXQoKTtcbiAgICBsZXQgbmV3VGFzayA9IG5ldyBUb2RvKGlucHV0LnRpdGxlLGlucHV0LmRlc2NyaXB0aW9uLGlucHV0LmR1ZURhdGUsaW5wdXQudXJnZW5jeSk7XG4gICAgY29uc29sZS5sb2cobmV3VGFzayk7XG4gICAgcHJvamVjdHNbMF0ucHVzaChuZXdUYXNrKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1swXSk7XG4gICAgY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJykuaW5uZXJIVE1MKTtcbiAgfVxufTtcblxuY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgbGV0IGlucHV0ID0gRE9NQ29udHJvbGxlci5wcm9qZWN0SW5wdXQoKTtcbiAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChpbnB1dC50aXRsZSk7XG4gIGNvbnNvbGUubG9nKG5ld1Byb2plY3QudGl0bGUpO1xuICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QudGl0bGUpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpLmlubmVySFRNTCk7XG59O1xuXG5jb25zdCByZW5kZXJBbGxUb2RvcyA9IChzZWxlY3RlZEluZGV4KSA9PiB7XG4gIERPTUNvbnRyb2xsZXIuY2xlYXJSZW5kZXJlZFRvZG9zKCk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHJvamVjdHNbc2VsZWN0ZWRJbmRleF0ubGVuZ3RoOyBpKyspe1xuICAgIGxldCBuZXdMaSA9IERPTUNvbnRyb2xsZXIudG9kb0hUTUwocHJvamVjdHNbc2VsZWN0ZWRJbmRleF1baV0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWxpc3QnKS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIixuZXdMaSk7XG4gIH07XG59O1xuXG4vL0xlZnQgb2ZmIGhlcmVcbmNvbnN0IHJlbmRlckFsbFByb2plY3RzID0gKCkgPT4ge1xuICBET01Db250cm9sbGVyLmNsZWFyUmVuZGVyZWRQcm9qZWN0cygpO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspe1xuICAgIC8vY29uc29sZS5sb2coJ0hlcmUgbXkgZHVkZScpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzW2ldKTtcbiAgICBsZXQgbmV3TGkgPSBET01Db250cm9sbGVyLnByb2plY3RIVE1MKHByb2plY3RzW2ldKTtcbiAgICBjb25zb2xlLmxvZyhpKTtcbiAgICBpZihpID09IHByb2plY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgIC8vLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICBjb25zb2xlLmxvZyh0eXBlb2YgbmV3TGkpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhuZXdMaSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLG5ld0xpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0JykubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICB9O1xufTtcblxuLy9SZXR1cm5zIHRoZSBpbmRleCBvZiBwcm9qZWN0cyB0aGF0IHRoZSBzZWxlY3RlZCBwcm9qZWN0IGlzIGxvY2F0ZWQgYXRcbmNvbnN0IGZpbmRTZWxlY3RlZFByb2plY3QgPSAoKSA9PiB7XG4gIGxldCBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpLmlubmVySFRNTDtcblxuICBmb3IgKGxldCBpID0gMDtpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspe1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzW2ldWzBdLHNlbGVjdGVkKTtcbiAgICBpZihwcm9qZWN0c1tpXVswXSA9PSBzZWxlY3RlZCl7XG4gICAgICByZXR1cm4gaTtcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBmaW5kU2VsY3RlZFByb2plY3QnKTtcbiAgfTtcbn07XG5cbmNvbnN0IGFkZEFuZFJlbmRlclRvZG8gPSAoKSA9PiB7XG4gIGFkZFRvZG8oKTtcbiAgbGV0IHNlbGVjdGVkSW5kZXggPSBmaW5kU2VsZWN0ZWRQcm9qZWN0KCk7XG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkSW5kZXgpO1xuICByZW5kZXJBbGxUb2RvcyhzZWxlY3RlZEluZGV4KTtcbiAgLy9ET01Db250cm9sbGVyLnRvZG9GaWVsZFJlc2V0KCk7IGNvbW1lbnRlZCBmb3IgdGVzdGluZyBwdXJwb3Nlc1xuXG59O1xuXG5jb25zdCBhZGRBbmRSZW5kZXJQcm9qZWN0ID0gKCkgPT4ge1xuICBhZGRQcm9qZWN0KCk7XG4gIGxldCBzZWxlY3RlZEluZGV4ID0gZmluZFNlbGVjdGVkUHJvamVjdCgpO1xuICBjb25zb2xlLmxvZyhzZWxlY3RlZEluZGV4KTtcbiAgcmVuZGVyQWxsUHJvamVjdHMoc2VsZWN0ZWRJbmRleCk7XG5cbn07XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0QnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgYWRkQW5kUmVuZGVyUHJvamVjdCgpO1xufSk7XG5cbiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVG9kb0J0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICBhZGRBbmRSZW5kZXJUb2RvKCk7XG4gfSk7XG5cblxuXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuY29uc3QgRE9NQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpO1xuXG4gIC8vQWRkIHJldHVybiBmb3IgdG9kb0lucHV0LiBUYWtlIHJldHVybiBhbmQgY3JlYXRlIG5ldyB0YXNrIHdpdGggaXRcbiAgLy8gY3JlYXRlZFRhc2sgYXMgbmV3IFRvZG8odG9kb0lucHV0KCkpXG4gIC8vRmluZCB3aGljaCBwcm9qZWN0IHRoZSB0YXNrIGJlbG9uZ3MgdG9cbiAgLy8gcHJvamVjdHNbcHJvamVjdEluZGV4XS5wdXNoKGNyZWF0ZWRUYXNrKVxuICAvL3Byb2plY3RzWzBdLnB1c2goY3JlYXRlZFRhc2spXG5cblxuICBjb25zdCB0b2RvSW5wdXQgPSAoKSA9PiAoe1xuICAgIHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGFza1RpdGxlJykudmFsdWUsXG4gICAgZGVzY3JpcHRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrRGVzY3JpcHRpb24nKS52YWx1ZSxcbiAgICBkdWVEYXRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGFza0R1ZURhdGUnKS52YWx1ZSxcbiAgICB1cmdlbmN5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGFza1VyZ2VuY3knKS52YWx1ZSxcblxuICB9KTtcblxuICBjb25zdCBwcm9qZWN0SW5wdXQgPSAoKSA9PiAoe1xuICAgIHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QnKS52YWx1ZVxuICB9KTtcblxuICBjb25zdCB0b2RvSW5wdXRWYWxpZGF0aW9uID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGFza1RpdGxlJykudmFsdWUgPT0gJycpe1xuICAgICAgYWxlcnQoJ1lvdSBmb3Jnb3QgdGhlIHRpdGxlIScpXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGFza0R1ZURhdGUnKS52YWx1ZSA9PSAnJykge1xuICAgICAgYWxlcnQoJ1lvdSBmb3Jnb3QgdGhlIGR1ZSBkYXRlIScpXG4gICAgfSBlbHNlIHtyZXR1cm4gdHJ1ZX07XG4gIH07XG5cbiAgLy9SZXNldCBpbnB1dCBmaWVsZFxuICBjb25zdCB0b2RvRmllbGRSZXNldCA9ICgpID0+IChcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGFza1RpdGxlJykudmFsdWUgPSAnJyxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGFza0Rlc2NyaXB0aW9uJykudmFsdWUgPSAnJyxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGFza0R1ZURhdGUnKS52YWx1ZSA9ICcnLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrVXJnZW5jeScpLnZhbHVlID0gJydcbiAgKTtcblxuICAvL2NsZWFycyBhbGwgbGkgZnJvbSB0b2RvIGxpc3RcbiAgY29uc3QgY2xlYXJSZW5kZXJlZFRvZG9zID0gKCkgPT4ge1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tbGlzdCcpO1xuICAgIHdoaWxlICh1bC5maXJzdENoaWxkKSB7XG4gICAgICB1bC5yZW1vdmVDaGlsZCh1bC5maXJzdENoaWxkKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vY2xlYXJzIGFsbCBwcm9qZWN0cyBmcm9tIHByb2plY3QgbGlzdFxuICBjb25zdCBjbGVhclJlbmRlcmVkUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0Jyk7XG4gICAgd2hpbGUgKHVsLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHVsLnJlbW92ZUNoaWxkKHVsLmZpcnN0Q2hpbGQpO1xuICAgIH07XG4gIH07XG5cblxuICBjb25zdCB0b2RvSFRNTCA9ICh0b2RvKSA9PiB7XG4gICAgbGV0IGxpID0gYFxuICAgIDxsaT5cbiAgICAgIDxkaXY+JHt0b2RvLnRpdGxlfTwvZGl2PlxuICAgICAgPGRpdj4ke3RvZG8uZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICA8ZGl2PiR7dG9kby5kdWVEYXRlfTwvZGl2PlxuICAgICAgPGRpdj4ke3RvZG8udXJnZW5jeX08L2Rpdj5cbiAgICAgIDxpbnB1dCB0eXBlID0gJ2NoZWNrYm94Jz48L2lucHV0PlxuICAgICAgPGJ1dHRvbiBjbGFzcyA9ICdlZGl0LWJ0bic+RWRpdDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcyA9ICdkZWxldGUtYnRuJz5YPC9idXR0b24+XG4gICAgPC9saT5cbiAgYFxuICByZXR1cm4gbGk7XG59O1xuXG4vL2xlZnQgb2ZmIGhlcmUsIG5vdCBmaW5pc2hlZFxuY29uc3QgcHJvamVjdEhUTUwgPSAocHJvamVjdCkgPT4ge1xuICBsZXQgbGkgPSBgXG4gIDxsaSBjbGFzcyA9ICcnIGlkID0gJyR7cHJvamVjdH0nPlxuICAgIDxkaXY+JHtwcm9qZWN0fTwvZGl2PlxuICAgIDxpbnB1dCB0eXBlID0gJ2NoZWNrYm94Jz48L2lucHV0PlxuICAgIDxidXR0b24gY2xhc3MgPSAnZWRpdC1idG4nPkVkaXQ8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzID0gJ2RlbGV0ZS1idG4nPlg8L2J1dHRvbj5cbiAgPC9saT5cbmBcbnJldHVybiBsaTtcbn07XG4gIFxuICAvL2NvbnN0IHRlc3QgPSAodGhpbmcgPSBcImRlZmF1bHRcIikgPT4gKCBjb25zb2xlLmxvZyh0aGluZykpO1xuXG4gIHJldHVybntcbiAgICB0b2RvSW5wdXQsXG4gICAgcHJvamVjdElucHV0LFxuICAgIHRvZG9JbnB1dFZhbGlkYXRpb24sXG4gICAgdG9kb0hUTUwsXG4gICAgcHJvamVjdEhUTUwsXG4gICAgdG9kb0ZpZWxkUmVzZXQsXG4gICAgY2xlYXJSZW5kZXJlZFRvZG9zLFxuICAgIGNsZWFyUmVuZGVyZWRQcm9qZWN0c1xuICB9O1xuICBcbn0pKCk7XG5cbmV4cG9ydCB7RE9NQ29udHJvbGxlciBhcyBkZWZhdWx0fTtcbiIsImNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgY2F0ZWdvcnksIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBzdGF0dXMgPSBmYWxzZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgdGhpcy50b2RvcyA9IFtdO1xuICB9XG5cbiAgZ2V0IGdldFRpdGxlKCl7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH1cblxuICBnZXQgZ2V0Q2F0ZWdvcnkoKXtcbiAgICByZXR1cm4gdGhpcy5jYXRlZ29yeTtcbiAgfVxuXG4gIHNldCBzZXRDYXRlZ29yeShuZXdDYXRlZ29yeSkge1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBuZXdDYXRlZ29yeTtcbiAgfVxuXG4gIGdldCBnZXREZXNjcmlwdGlvbigpe1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0IGdldER1ZURhdGUoKXtcbiAgICByZXR1cm4gdGhpcy5EdWVEYXRlO1xuICB9XG5cbiAgc2V0IHNldER1ZURhdGUodXBkYXRlRGF0ZSl7XG4gICAgdGhpcy5kYXRlID0gdXBkYXRlRGF0ZTtcbiAgfVxuXG4gIGdldCBnZXRUb2RvKCkge1xuICAgIHJldHVybiB0aGlzLnRvZG9zO1xuICB9XG5cbiAgc2V0IHNldFRvZG8obmV3VG9kbykge1xuICAgIHRoaXMudG9kbyA9IG5ld1RvZG87XG4gIH1cblxuICBhZGRUb2RvKHRvZG8pIHtcbiAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XG4gIH1cblxuICBkZWxUb2RvKGluZGV4KSB7XG4gICAgdGhpcy50b2Rvcy5zcGxpY2UoaW5kZXgsMSlcbiAgfVxuICBcbn1cbmV4cG9ydCB7UHJvamVjdCBhcyBkZWZhdWx0fTsiLCJjbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlID0gbmV3IERhdGUoKSwgdXJnZW5jeSwgc3RhdHVzID0gZmFsc2UpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy51cmdlbmN5ID0gdXJnZW5jeTtcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgfVxuXG4gIGdldCBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxuXG4gIHNldCBzZXRUaXRsZSh1cGRhdGVUaXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB1cGRhdGVUaXRsZTtcbiAgfVxuXG4gIGdldCBnZXREZXNjcmlwdGlvbigpe1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0IHNldERlc2NyaXB0aW9uKHVwZGF0ZURlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHVwZGF0ZURlc2NyaXB0aW9uO1xuICB9XG4gIGdldCBnZXREdWVEYXRlKCl7XG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgfVxuXG4gIHNldCBzZXREdWVEYXRlKHVwZGF0ZURhdGUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSB1cGRhdGVEYXRlO1xuICB9XG5cbiAgZ2V0IGdldFVyZ2VuY3koKXtcbiAgICByZXR1cm4gdGhpcy51cmdlbmN5O1xuICB9XG5cbiAgc2V0IHNldFVyZ2VuY3kodXBkYXRlVXJnZW5jeSkge1xuICAgIHRoaXMudXJnZW5jeSA9IHVwZGF0ZVVyZ2VuY3k7XG4gIH1cbiAgZ2V0IGdldFN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXM7XG4gIH1cbiAgc2V0IHNldFN0YXR1cyh1cGRhdGVTdGF0dXMpIHtcbiAgICB0aGlzLnN0YXR1cyA9IHVwZGF0ZVN0YXR1cztcbiAgfVxuXG4gIHN3aXRjaFN0YXR1cygpIHtcbiAgICB0aGlzLnN0YXR1cyA9ICF0aGlzLnN0YXR1cztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvOyJdLCJzb3VyY2VSb290IjoiIn0=