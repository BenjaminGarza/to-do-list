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
  if (_modules_DOMController__WEBPACK_IMPORTED_MODULE_0__["default"].todoInputValidation()) {
    const input = _modules_DOMController__WEBPACK_IMPORTED_MODULE_0__["default"].todoInput();
    const newTask = new _modules_todo__WEBPACK_IMPORTED_MODULE_2__["default"](input.title, input.description, input.dueDate, input.urgency);
    projects[selectedIndex].push(newTask);
   
  }
};

const addProject = () => {
  const input = _modules_DOMController__WEBPACK_IMPORTED_MODULE_0__["default"].projectInput();
  console.log(projectValidation(input.title));
  if (projectValidation(input.title)){
    const newProject = new _modules_project__WEBPACK_IMPORTED_MODULE_1__["default"](input.title);
    length = projects.push([]) - 1;
    projects[length].push(newProject.title);
    console.log(projects);
    console.log(document.querySelector('.selected').innerHTML);
  }
  
};

const renderAllTodos = (selectedIndex) => {
  _modules_DOMController__WEBPACK_IMPORTED_MODULE_0__["default"].clearRenderedTodos();
  console.log(projects[selectedIndex], 'renderTodos');
  if (projects[selectedIndex].length > 0){
  for (let i = 1; i < projects[selectedIndex].length; i++) {
    const newLi = _modules_DOMController__WEBPACK_IMPORTED_MODULE_0__["default"].todoHTML(projects[selectedIndex][i]);

    document.querySelector('#todo-list').insertAdjacentHTML('beforeend', newLi);
  }
};
};

// Left off here
const renderAllProjects = () => {
  _modules_DOMController__WEBPACK_IMPORTED_MODULE_0__["default"].clearRenderedProjects();
  for (let i = 0; i < projects.length; i++) {
   
    const newLi = _modules_DOMController__WEBPACK_IMPORTED_MODULE_0__["default"].projectHTML(projects[i]);
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

const projectValidation = (input) => {
  console.log(input, 'validation');
  console.log(projects);
  let testArr = projects.map( element =>  input == element);
  console.log(testArr, 'TEST ARRAY');
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

  // Add return for todoInput. Take return and create new task with it
  // createdTask as new Todo(todoInput())
  // Find which project the task belongs to
  // projects[projectIndex].push(createdTask)
  // projects[0].push(createdTask)


  const todoInput = () => ({
    title: document.querySelector('#newTaskTitle').value,
    description: document.querySelector('#newTaskDescription').value,
    dueDate: document.querySelector('#newTaskDueDate').value,
    urgency: document.querySelector('#newTaskUrgency').value,

  });

  const projectInput = () => ({
    title: document.querySelector('#new-project').value,
  });

  const todoInputValidation = () => {
    if (document.querySelector('#newTaskTitle').value == '') {
      alert('You forgot the title!');
    } else if (document.querySelector('#newTaskDueDate').value == '') {
      alert('You forgot the due date!');
    } else { return true; }
  };

  // Reset input field
  // change from arrow function, should not be used for assignment
  // const todoFieldReset = () => (
  // document.querySelector('#newTaskTitle').value = '',
  // document.querySelector('#newTaskDescription').value = '',
  // document.querySelector('#newTaskDueDate').value = '',
  // document.querySelector('#newTaskUrgency').value = ''
  // );

  // clears all li from todo list
  const clearRenderedTodos = () => {
    const ul = document.querySelector('#todo-list');
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  };

  // clears all projects from project list
  const clearRenderedProjects = () => {
    const ul = document.querySelector('#project-list');
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  };


  const todoHTML = (todo) => {
    const li = `
    <li>
      <div>${todo.title}</div>
      <div>${todo.description}</div>
      <div>${todo.dueDate}</div>
      <div>${todo.urgency}</div>
      <input type = 'checkbox'></input>
      <button class = 'edit-btn'>Edit</button>
      <button class = 'delete-btn'>X</button>
    </li>
  `;
    return li;
  };

  // left off here, not finished
  const projectHTML = (project) => {
    const li = `
  <li class = '' id = '${project}'>
    <div>${project}</div>
    <input type = 'checkbox'></input>
    <button class = 'edit-btn'>Edit</button>
    <button class = 'delete-btn'>X</button>
  </li>
`;
    return li;
  };

  // const test = (thing = "default") => ( console.log(thing));

  return {
    todoInput,
    projectInput,
    todoInputValidation,
    todoHTML,
    projectHTML,
    clearRenderedTodos,
    clearRenderedProjects,
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

  get getTitle() {
    return this.title;
  }

  get getCategory() {
    return this.category;
  }

  set setCategory(newCategory) {
    this.category = newCategory;
  }

  get getDescription() {
    return this.description;
  }

  get getDueDate() {
    return this.DueDate;
  }

  set setDueDate(updateDate) {
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
    this.todos.splice(index, 1);
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

  get getDescription() {
    return this.description;
  }

  set setDescription(updateDescription) {
    this.description = updateDescription;
  }

  get getDueDate() {
    return this.dueDate;
  }

  set setDueDate(updateDate) {
    this.dueDate = updateDate;
  }

  get getUrgency() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0RPTUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy90b2RvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGb0Q7QUFDWjtBQUNOOztBQUVsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sOERBQWE7QUFDbkIsa0JBQWtCLDhEQUFhO0FBQy9CLHdCQUF3QixxREFBSTtBQUM1Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLDhEQUFhO0FBQzdCO0FBQ0E7QUFDQSwyQkFBMkIsd0RBQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEVBQUUsOERBQWE7QUFDZjtBQUNBO0FBQ0EsaUJBQWlCLG9DQUFvQztBQUNyRCxrQkFBa0IsOERBQWE7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLDhEQUFhO0FBQ2YsaUJBQWlCLHFCQUFxQjs7QUFFdEMsa0JBQWtCLDhEQUFhO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscUJBQXFCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN2SUQ7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSyxPQUFPLGFBQWE7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCLGFBQWEsaUJBQWlCO0FBQzlCLGFBQWEsYUFBYTtBQUMxQixhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFFBQVE7QUFDakMsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRW1DOzs7Ozs7Ozs7Ozs7O0FDbEdwQztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQzhCOzs7Ozs7Ozs7Ozs7O0FDbEQ5QjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG1FQUFJLEVBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5pbXBvcnQgRE9NQ29udHJvbGxlciBmcm9tICcuL21vZHVsZXMvRE9NQ29udHJvbGxlcic7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL21vZHVsZXMvcHJvamVjdCc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL21vZHVsZXMvdG9kbyc7XG5cbi8vIHByb2plY3RzIGlzIGFuIGFycmF5IGNvbnRhaW5pbmcgcHJvamVjdCBuYW1lc1xuLy8gY291bGQgbmVzdCB0b2RvcyBpbnNpZGVcbi8vIFtwcm9qZWN0TmFtZVtbdG9kbzFdLFt0b2RvMl0sW3RvZG8zXSwgcHJvamVjdDJbdG9kb0FdLCBbdG9kb0JdXV1cbmNvbnN0IHByb2plY3RzID0gW1snRGVmYXVsdCddXTtcblxuLy8gcHJvamVjdE5hbWUgYXMgbmV3IFByb2plY3QoJ3BhcmFtcycpXG4vLyBwcm9qZWN0cy5wdXNoKHByb2plY3ROYW1lKTtcblxuXG4vLyBsZXQgdGVzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXN0Jyk7XG5cbi8vIHRlc3REaXYuaW5uZXJIVE1MID0gRE9NQ29udHJvbGxlci50b2RvSFRNTDtcblxuXG4vLyBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoJ2luaXQgcGFyYW1ldGVycycpXG5jb25zdCBhZGRUb2RvID0gKHNlbGVjdGVkSW5kZXgpID0+IHtcbiAgY29uc29sZS5sb2coc2VsZWN0ZWRJbmRleCk7XG4gIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgY29uc29sZS5sb2cocHJvamVjdHNbc2VsZWN0ZWRJbmRleF0pO1xuICBpZiAoRE9NQ29udHJvbGxlci50b2RvSW5wdXRWYWxpZGF0aW9uKCkpIHtcbiAgICBjb25zdCBpbnB1dCA9IERPTUNvbnRyb2xsZXIudG9kb0lucHV0KCk7XG4gICAgY29uc3QgbmV3VGFzayA9IG5ldyBUb2RvKGlucHV0LnRpdGxlLCBpbnB1dC5kZXNjcmlwdGlvbiwgaW5wdXQuZHVlRGF0ZSwgaW5wdXQudXJnZW5jeSk7XG4gICAgcHJvamVjdHNbc2VsZWN0ZWRJbmRleF0ucHVzaChuZXdUYXNrKTtcbiAgIFxuICB9XG59O1xuXG5jb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuICBjb25zdCBpbnB1dCA9IERPTUNvbnRyb2xsZXIucHJvamVjdElucHV0KCk7XG4gIGNvbnNvbGUubG9nKHByb2plY3RWYWxpZGF0aW9uKGlucHV0LnRpdGxlKSk7XG4gIGlmIChwcm9qZWN0VmFsaWRhdGlvbihpbnB1dC50aXRsZSkpe1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChpbnB1dC50aXRsZSk7XG4gICAgbGVuZ3RoID0gcHJvamVjdHMucHVzaChbXSkgLSAxO1xuICAgIHByb2plY3RzW2xlbmd0aF0ucHVzaChuZXdQcm9qZWN0LnRpdGxlKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gICAgY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJykuaW5uZXJIVE1MKTtcbiAgfVxuICBcbn07XG5cbmNvbnN0IHJlbmRlckFsbFRvZG9zID0gKHNlbGVjdGVkSW5kZXgpID0+IHtcbiAgRE9NQ29udHJvbGxlci5jbGVhclJlbmRlcmVkVG9kb3MoKTtcbiAgY29uc29sZS5sb2cocHJvamVjdHNbc2VsZWN0ZWRJbmRleF0sICdyZW5kZXJUb2RvcycpO1xuICBpZiAocHJvamVjdHNbc2VsZWN0ZWRJbmRleF0ubGVuZ3RoID4gMCl7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHJvamVjdHNbc2VsZWN0ZWRJbmRleF0ubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBuZXdMaSA9IERPTUNvbnRyb2xsZXIudG9kb0hUTUwocHJvamVjdHNbc2VsZWN0ZWRJbmRleF1baV0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tbGlzdCcpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgbmV3TGkpO1xuICB9XG59O1xufTtcblxuLy8gTGVmdCBvZmYgaGVyZVxuY29uc3QgcmVuZGVyQWxsUHJvamVjdHMgPSAoKSA9PiB7XG4gIERPTUNvbnRyb2xsZXIuY2xlYXJSZW5kZXJlZFByb2plY3RzKCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgIFxuICAgIGNvbnN0IG5ld0xpID0gRE9NQ29udHJvbGxlci5wcm9qZWN0SFRNTChwcm9qZWN0c1tpXSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgbmV3TGkpO1xuICAgIGlmIChpID09IHByb2plY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKS5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgfVxuICB9XG59O1xuXG4vLyBSZXR1cm5zIHRoZSBpbmRleCBvZiBwcm9qZWN0cyB0aGF0IHRoZSBzZWxlY3RlZCBwcm9qZWN0IGlzIGxvY2F0ZWQgYXRcbmNvbnN0IGZpbmRTZWxlY3RlZFByb2plY3QgPSAoKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJykuaWQ7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZCwnc2VsZWN0ZWQgdmFsdWUnKTtcbiAgICAvL2NvbnNvbGUubG9nKHByb2plY3RzW2ldWzBdLCBzZWxlY3RlZCk7XG4gICAgaWYgKHByb2plY3RzW2ldWzBdID09IHNlbGVjdGVkKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGFkZEFuZFJlbmRlclRvZG8gPSAoKSA9PiB7XG4gIGxldCBzZWxlY3RlZEluZGV4ID0gZmluZFNlbGVjdGVkUHJvamVjdCgpO1xuICBjb25zb2xlLmxvZyhzZWxlY3RlZEluZGV4LCdhZGRBbmRSZW5kZXJUb2RvJyk7XG4gIGFkZFRvZG8oc2VsZWN0ZWRJbmRleCk7XG4gIC8vY29uc29sZS5sb2coc2VsZWN0ZWRJbmRleCk7XG4gIHJlbmRlckFsbFRvZG9zKHNlbGVjdGVkSW5kZXgpO1xuICAvLyBET01Db250cm9sbGVyLnRvZG9GaWVsZFJlc2V0KCk7IGNvbW1lbnRlZCBmb3IgdGVzdGluZyBwdXJwb3Nlc1xufTtcblxuY29uc3QgYWRkQW5kUmVuZGVyUHJvamVjdCA9ICgpID0+IHtcbiAgbGV0IHNlbGVjdGVkSW5kZXggPSBmaW5kU2VsZWN0ZWRQcm9qZWN0KCk7XG4gIGFkZFByb2plY3QoKTtcbiAgLy9jb25zb2xlLmxvZyhzZWxlY3RlZEluZGV4KTtcbiAgcmVuZGVyQWxsUHJvamVjdHMoc2VsZWN0ZWRJbmRleCk7XG59O1xuXG5jb25zdCBwcm9qZWN0VmFsaWRhdGlvbiA9IChpbnB1dCkgPT4ge1xuICBjb25zb2xlLmxvZyhpbnB1dCwgJ3ZhbGlkYXRpb24nKTtcbiAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICBsZXQgdGVzdEFyciA9IHByb2plY3RzLm1hcCggZWxlbWVudCA9PiAgaW5wdXQgPT0gZWxlbWVudCk7XG4gIGNvbnNvbGUubG9nKHRlc3RBcnIsICdURVNUIEFSUkFZJyk7XG4gIGlmIChpbnB1dCA9PSAnJyl7XG4gICAgYWxlcnQoJ0Nhbm5vdCBjcmVhdGUgYSBibGFuayBwcm9qZWN0JylcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSBpZih0ZXN0QXJyLmluY2x1ZGVzKHRydWUpKSB7XG4gICAgYWxlcnQoJ0Nhbm5vdCBjcmVhdGUgYSBkdXBsaWNhdGUgcHJvamVjdCcpXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2UgcmV0dXJuIHRydWU7XG59O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdEJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBhZGRBbmRSZW5kZXJQcm9qZWN0KCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRvZG9CdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgYWRkQW5kUmVuZGVyVG9kbygpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1saXN0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhlKTtcbiAgbGV0IHRhcmdldCA9IGUudGFyZ2V0LmNsYXNzTGlzdDtcbiAgXG4gIC8vY29uc29sZS5sb2codGFyZ2V0KTtcblxuICBpZiAodGFyZ2V0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIGxldCBlbGVtZW50TGlzdFNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNlbGVjdGVkXCIpO1xuICBlbGVtZW50TGlzdFNlbGVjdGVkWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gIHRhcmdldC5hZGQoJ3NlbGVjdGVkJyk7XG4gIGNvbnNvbGUubG9nKGZpbmRTZWxlY3RlZFByb2plY3QoKSk7XG4gIHJlbmRlckFsbFRvZG9zKGZpbmRTZWxlY3RlZFByb2plY3QoKSk7XG4gIH07XG59KTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5jb25zdCBET01Db250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJyk7XG5cbiAgLy8gQWRkIHJldHVybiBmb3IgdG9kb0lucHV0LiBUYWtlIHJldHVybiBhbmQgY3JlYXRlIG5ldyB0YXNrIHdpdGggaXRcbiAgLy8gY3JlYXRlZFRhc2sgYXMgbmV3IFRvZG8odG9kb0lucHV0KCkpXG4gIC8vIEZpbmQgd2hpY2ggcHJvamVjdCB0aGUgdGFzayBiZWxvbmdzIHRvXG4gIC8vIHByb2plY3RzW3Byb2plY3RJbmRleF0ucHVzaChjcmVhdGVkVGFzaylcbiAgLy8gcHJvamVjdHNbMF0ucHVzaChjcmVhdGVkVGFzaylcblxuXG4gIGNvbnN0IHRvZG9JbnB1dCA9ICgpID0+ICh7XG4gICAgdGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrVGl0bGUnKS52YWx1ZSxcbiAgICBkZXNjcmlwdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Rhc2tEZXNjcmlwdGlvbicpLnZhbHVlLFxuICAgIGR1ZURhdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrRHVlRGF0ZScpLnZhbHVlLFxuICAgIHVyZ2VuY3k6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrVXJnZW5jeScpLnZhbHVlLFxuXG4gIH0pO1xuXG4gIGNvbnN0IHByb2plY3RJbnB1dCA9ICgpID0+ICh7XG4gICAgdGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdCcpLnZhbHVlLFxuICB9KTtcblxuICBjb25zdCB0b2RvSW5wdXRWYWxpZGF0aW9uID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGFza1RpdGxlJykudmFsdWUgPT0gJycpIHtcbiAgICAgIGFsZXJ0KCdZb3UgZm9yZ290IHRoZSB0aXRsZSEnKTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrRHVlRGF0ZScpLnZhbHVlID09ICcnKSB7XG4gICAgICBhbGVydCgnWW91IGZvcmdvdCB0aGUgZHVlIGRhdGUhJyk7XG4gICAgfSBlbHNlIHsgcmV0dXJuIHRydWU7IH1cbiAgfTtcblxuICAvLyBSZXNldCBpbnB1dCBmaWVsZFxuICAvLyBjaGFuZ2UgZnJvbSBhcnJvdyBmdW5jdGlvbiwgc2hvdWxkIG5vdCBiZSB1c2VkIGZvciBhc3NpZ25tZW50XG4gIC8vIGNvbnN0IHRvZG9GaWVsZFJlc2V0ID0gKCkgPT4gKFxuICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGFza1RpdGxlJykudmFsdWUgPSAnJyxcbiAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Rhc2tEZXNjcmlwdGlvbicpLnZhbHVlID0gJycsXG4gIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrRHVlRGF0ZScpLnZhbHVlID0gJycsXG4gIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrVXJnZW5jeScpLnZhbHVlID0gJydcbiAgLy8gKTtcblxuICAvLyBjbGVhcnMgYWxsIGxpIGZyb20gdG9kbyBsaXN0XG4gIGNvbnN0IGNsZWFyUmVuZGVyZWRUb2RvcyA9ICgpID0+IHtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWxpc3QnKTtcbiAgICB3aGlsZSAodWwuZmlyc3RDaGlsZCkge1xuICAgICAgdWwucmVtb3ZlQ2hpbGQodWwuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIGNsZWFycyBhbGwgcHJvamVjdHMgZnJvbSBwcm9qZWN0IGxpc3RcbiAgY29uc3QgY2xlYXJSZW5kZXJlZFByb2plY3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpO1xuICAgIHdoaWxlICh1bC5maXJzdENoaWxkKSB7XG4gICAgICB1bC5yZW1vdmVDaGlsZCh1bC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH07XG5cblxuICBjb25zdCB0b2RvSFRNTCA9ICh0b2RvKSA9PiB7XG4gICAgY29uc3QgbGkgPSBgXG4gICAgPGxpPlxuICAgICAgPGRpdj4ke3RvZG8udGl0bGV9PC9kaXY+XG4gICAgICA8ZGl2PiR7dG9kby5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgIDxkaXY+JHt0b2RvLmR1ZURhdGV9PC9kaXY+XG4gICAgICA8ZGl2PiR7dG9kby51cmdlbmN5fTwvZGl2PlxuICAgICAgPGlucHV0IHR5cGUgPSAnY2hlY2tib3gnPjwvaW5wdXQ+XG4gICAgICA8YnV0dG9uIGNsYXNzID0gJ2VkaXQtYnRuJz5FZGl0PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzID0gJ2RlbGV0ZS1idG4nPlg8L2J1dHRvbj5cbiAgICA8L2xpPlxuICBgO1xuICAgIHJldHVybiBsaTtcbiAgfTtcblxuICAvLyBsZWZ0IG9mZiBoZXJlLCBub3QgZmluaXNoZWRcbiAgY29uc3QgcHJvamVjdEhUTUwgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGxpID0gYFxuICA8bGkgY2xhc3MgPSAnJyBpZCA9ICcke3Byb2plY3R9Jz5cbiAgICA8ZGl2PiR7cHJvamVjdH08L2Rpdj5cbiAgICA8aW5wdXQgdHlwZSA9ICdjaGVja2JveCc+PC9pbnB1dD5cbiAgICA8YnV0dG9uIGNsYXNzID0gJ2VkaXQtYnRuJz5FZGl0PC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcyA9ICdkZWxldGUtYnRuJz5YPC9idXR0b24+XG4gIDwvbGk+XG5gO1xuICAgIHJldHVybiBsaTtcbiAgfTtcblxuICAvLyBjb25zdCB0ZXN0ID0gKHRoaW5nID0gXCJkZWZhdWx0XCIpID0+ICggY29uc29sZS5sb2codGhpbmcpKTtcblxuICByZXR1cm4ge1xuICAgIHRvZG9JbnB1dCxcbiAgICBwcm9qZWN0SW5wdXQsXG4gICAgdG9kb0lucHV0VmFsaWRhdGlvbixcbiAgICB0b2RvSFRNTCxcbiAgICBwcm9qZWN0SFRNTCxcbiAgICBjbGVhclJlbmRlcmVkVG9kb3MsXG4gICAgY2xlYXJSZW5kZXJlZFByb2plY3RzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgRE9NQ29udHJvbGxlciBhcyBkZWZhdWx0IH07XG4iLCJjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGNhdGVnb3J5LCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgc3RhdHVzID0gZmFsc2UpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgfVxuXG4gIGdldCBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxuXG4gIGdldCBnZXRDYXRlZ29yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYXRlZ29yeTtcbiAgfVxuXG4gIHNldCBzZXRDYXRlZ29yeShuZXdDYXRlZ29yeSkge1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBuZXdDYXRlZ29yeTtcbiAgfVxuXG4gIGdldCBnZXREZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBnZXREdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLkR1ZURhdGU7XG4gIH1cblxuICBzZXQgc2V0RHVlRGF0ZSh1cGRhdGVEYXRlKSB7XG4gICAgdGhpcy5kYXRlID0gdXBkYXRlRGF0ZTtcbiAgfVxuXG4gIGdldCBnZXRUb2RvKCkge1xuICAgIHJldHVybiB0aGlzLnRvZG9zO1xuICB9XG5cbiAgc2V0IHNldFRvZG8obmV3VG9kbykge1xuICAgIHRoaXMudG9kbyA9IG5ld1RvZG87XG4gIH1cblxuICBhZGRUb2RvKHRvZG8pIHtcbiAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XG4gIH1cblxuICBkZWxUb2RvKGluZGV4KSB7XG4gICAgdGhpcy50b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG5leHBvcnQgeyBQcm9qZWN0IGFzIGRlZmF1bHQgfTtcbiIsImNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUgPSBuZXcgRGF0ZSgpLCB1cmdlbmN5LCBzdGF0dXMgPSBmYWxzZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnVyZ2VuY3kgPSB1cmdlbmN5O1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICB9XG5cbiAgZ2V0IGdldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICB9XG5cbiAgc2V0IHNldFRpdGxlKHVwZGF0ZVRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHVwZGF0ZVRpdGxlO1xuICB9XG5cbiAgZ2V0IGdldERlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0IHNldERlc2NyaXB0aW9uKHVwZGF0ZURlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHVwZGF0ZURlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0IGdldER1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgfVxuXG4gIHNldCBzZXREdWVEYXRlKHVwZGF0ZURhdGUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSB1cGRhdGVEYXRlO1xuICB9XG5cbiAgZ2V0IGdldFVyZ2VuY3koKSB7XG4gICAgcmV0dXJuIHRoaXMudXJnZW5jeTtcbiAgfVxuXG4gIHNldCBzZXRVcmdlbmN5KHVwZGF0ZVVyZ2VuY3kpIHtcbiAgICB0aGlzLnVyZ2VuY3kgPSB1cGRhdGVVcmdlbmN5O1xuICB9XG5cbiAgZ2V0IGdldFN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXM7XG4gIH1cblxuICBzZXQgc2V0U3RhdHVzKHVwZGF0ZVN0YXR1cykge1xuICAgIHRoaXMuc3RhdHVzID0gdXBkYXRlU3RhdHVzO1xuICB9XG5cbiAgc3dpdGNoU3RhdHVzKCkge1xuICAgIHRoaXMuc3RhdHVzID0gIXRoaXMuc3RhdHVzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iXSwic291cmNlUm9vdCI6IiJ9