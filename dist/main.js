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
let projects = [['default']];

//projectName as new Project('params')
//projects.push(projectName);


//let testDiv = document.querySelector('.test');

//testDiv.innerHTML = DOMController.todoHTML;


// const newProject = new Project('init parameters')
const addTodo = () => {
  if (_modules_DOMController__WEBPACK_IMPORTED_MODULE_0__["default"].todoInputValidation()) {
    let newTask = new _modules_todo__WEBPACK_IMPORTED_MODULE_2__["default"](_modules_DOMController__WEBPACK_IMPORTED_MODULE_0__["default"].todoInput());
    console.log(newTask.title);
    projects[0].push(newTask);
    console.log(projects[0]);
    
  } else {}
};

 //document.querySelector('#addProjectBtn').addEventListener('click');
 document.querySelector('#addTodoBtn').addEventListener('click', addTodo());





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

  const todoInputValidation = () => {
    if (document.querySelector('#newTaskTitle').value == ''){
      alert('You forgot the title!')
    } else if (document.querySelector('#newTaskDueDate').value == '') {
      alert('You forgot the due date!')
    } else {return true};
  };

  const todoFieldReset = () => (
    document.querySelector('#newTaskTitle').value = '',
    document.querySelector('newTaskDescription').value = '',
    document.querySelector('newTaslDueDate').value = '',
    document.querySelector('newTaskUrgency').value = ''
  );

  const todoHTML = `
    <li>
      <div>${todoInput().title}</div>
      <div>${todoInput().description}</div>
      <div>${todoInput().dueDate}</div>
      <div>${todoInput().urgency}</div>
      <input type = 'checkbox'></input>
      <button class = 'edit-btn'>Edit</button>
      <button class = 'delete-btn'>X</button>
    </li>
  `;
  
  //const test = (thing = "default") => ( console.log(thing));

  return{
    todoInput,
    todoInputValidation,
    todoHTML,
    todoFieldReset
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0RPTUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy90b2RvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBb0Q7QUFDWjtBQUNOOztBQUVsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLE1BQU0sOERBQWE7QUFDbkIsc0JBQXNCLHFEQUFJLENBQUMsOERBQWE7QUFDeEM7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUssT0FBTztBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0IsYUFBYSx3QkFBd0I7QUFDckMsYUFBYSxvQkFBb0I7QUFDakMsYUFBYSxvQkFBb0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFaUM7Ozs7Ozs7Ozs7Ozs7QUN6RGxDO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDbERBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUksRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgRE9NQ29udHJvbGxlciBmcm9tICcuL21vZHVsZXMvRE9NQ29udHJvbGxlcic7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL21vZHVsZXMvcHJvamVjdCc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL21vZHVsZXMvdG9kbyc7XG5cbi8vcHJvamVjdHMgaXMgYW4gYXJyYXkgY29udGFpbmluZyBwcm9qZWN0IG5hbWVzXG4vL2NvdWxkIG5lc3QgdG9kb3MgaW5zaWRlXG4vLyBbcHJvamVjdE5hbWVbW3RvZG8xXSxbdG9kbzJdLFt0b2RvM10sIHByb2plY3QyW3RvZG9BXSwgW3RvZG9CXV1dXG5sZXQgcHJvamVjdHMgPSBbWydkZWZhdWx0J11dO1xuXG4vL3Byb2plY3ROYW1lIGFzIG5ldyBQcm9qZWN0KCdwYXJhbXMnKVxuLy9wcm9qZWN0cy5wdXNoKHByb2plY3ROYW1lKTtcblxuXG4vL2xldCB0ZXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlc3QnKTtcblxuLy90ZXN0RGl2LmlubmVySFRNTCA9IERPTUNvbnRyb2xsZXIudG9kb0hUTUw7XG5cblxuLy8gY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdpbml0IHBhcmFtZXRlcnMnKVxuY29uc3QgYWRkVG9kbyA9ICgpID0+IHtcbiAgaWYgKERPTUNvbnRyb2xsZXIudG9kb0lucHV0VmFsaWRhdGlvbigpKSB7XG4gICAgbGV0IG5ld1Rhc2sgPSBuZXcgVG9kbyhET01Db250cm9sbGVyLnRvZG9JbnB1dCgpKTtcbiAgICBjb25zb2xlLmxvZyhuZXdUYXNrLnRpdGxlKTtcbiAgICBwcm9qZWN0c1swXS5wdXNoKG5ld1Rhc2spO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzWzBdKTtcbiAgICBcbiAgfSBlbHNlIHt9XG59O1xuXG4gLy9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdEJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyk7XG4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRvZG9CdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRvZG8oKSk7XG5cblxuXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuY29uc3QgRE9NQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpO1xuXG4gIC8vQWRkIHJldHVybiBmb3IgdG9kb0lucHV0LiBUYWtlIHJldHVybiBhbmQgY3JlYXRlIG5ldyB0YXNrIHdpdGggaXRcbiAgLy8gY3JlYXRlZFRhc2sgYXMgbmV3IFRvZG8odG9kb0lucHV0KCkpXG4gIC8vRmluZCB3aGljaCBwcm9qZWN0IHRoZSB0YXNrIGJlbG9uZ3MgdG9cbiAgLy8gcHJvamVjdHNbcHJvamVjdEluZGV4XS5wdXNoKGNyZWF0ZWRUYXNrKVxuICAvL3Byb2plY3RzWzBdLnB1c2goY3JlYXRlZFRhc2spXG5cblxuICBjb25zdCB0b2RvSW5wdXQgPSAoKSA9PiAoe1xuICAgIHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGFza1RpdGxlJykudmFsdWUsXG4gICAgZGVzY3JpcHRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrRGVzY3JpcHRpb24nKS52YWx1ZSxcbiAgICBkdWVEYXRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGFza0R1ZURhdGUnKS52YWx1ZSxcbiAgICB1cmdlbmN5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGFza1VyZ2VuY3knKS52YWx1ZSxcblxuICB9KTtcblxuICBjb25zdCB0b2RvSW5wdXRWYWxpZGF0aW9uID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGFza1RpdGxlJykudmFsdWUgPT0gJycpe1xuICAgICAgYWxlcnQoJ1lvdSBmb3Jnb3QgdGhlIHRpdGxlIScpXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGFza0R1ZURhdGUnKS52YWx1ZSA9PSAnJykge1xuICAgICAgYWxlcnQoJ1lvdSBmb3Jnb3QgdGhlIGR1ZSBkYXRlIScpXG4gICAgfSBlbHNlIHtyZXR1cm4gdHJ1ZX07XG4gIH07XG5cbiAgY29uc3QgdG9kb0ZpZWxkUmVzZXQgPSAoKSA9PiAoXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Rhc2tUaXRsZScpLnZhbHVlID0gJycsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmV3VGFza0Rlc2NyaXB0aW9uJykudmFsdWUgPSAnJyxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduZXdUYXNsRHVlRGF0ZScpLnZhbHVlID0gJycsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmV3VGFza1VyZ2VuY3knKS52YWx1ZSA9ICcnXG4gICk7XG5cbiAgY29uc3QgdG9kb0hUTUwgPSBgXG4gICAgPGxpPlxuICAgICAgPGRpdj4ke3RvZG9JbnB1dCgpLnRpdGxlfTwvZGl2PlxuICAgICAgPGRpdj4ke3RvZG9JbnB1dCgpLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgPGRpdj4ke3RvZG9JbnB1dCgpLmR1ZURhdGV9PC9kaXY+XG4gICAgICA8ZGl2PiR7dG9kb0lucHV0KCkudXJnZW5jeX08L2Rpdj5cbiAgICAgIDxpbnB1dCB0eXBlID0gJ2NoZWNrYm94Jz48L2lucHV0PlxuICAgICAgPGJ1dHRvbiBjbGFzcyA9ICdlZGl0LWJ0bic+RWRpdDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcyA9ICdkZWxldGUtYnRuJz5YPC9idXR0b24+XG4gICAgPC9saT5cbiAgYDtcbiAgXG4gIC8vY29uc3QgdGVzdCA9ICh0aGluZyA9IFwiZGVmYXVsdFwiKSA9PiAoIGNvbnNvbGUubG9nKHRoaW5nKSk7XG5cbiAgcmV0dXJue1xuICAgIHRvZG9JbnB1dCxcbiAgICB0b2RvSW5wdXRWYWxpZGF0aW9uLFxuICAgIHRvZG9IVE1MLFxuICAgIHRvZG9GaWVsZFJlc2V0XG4gIH07XG4gIFxufSkoKTtcblxuZXhwb3J0IHtET01Db250cm9sbGVyIGFzIGRlZmF1bHR9O1xuIiwiY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBjYXRlZ29yeSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHN0YXR1cyA9IGZhbHNlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLnRvZG9zID0gW107XG4gIH1cblxuICBnZXQgZ2V0VGl0bGUoKXtcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxuXG4gIGdldCBnZXRDYXRlZ29yeSgpe1xuICAgIHJldHVybiB0aGlzLmNhdGVnb3J5O1xuICB9XG5cbiAgc2V0IHNldENhdGVnb3J5KG5ld0NhdGVnb3J5KSB7XG4gICAgdGhpcy5jYXRlZ29yeSA9IG5ld0NhdGVnb3J5O1xuICB9XG5cbiAgZ2V0IGdldERlc2NyaXB0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXQgZ2V0RHVlRGF0ZSgpe1xuICAgIHJldHVybiB0aGlzLkR1ZURhdGU7XG4gIH1cblxuICBzZXQgc2V0RHVlRGF0ZSh1cGRhdGVEYXRlKXtcbiAgICB0aGlzLmRhdGUgPSB1cGRhdGVEYXRlO1xuICB9XG5cbiAgZ2V0IGdldFRvZG8oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9kb3M7XG4gIH1cblxuICBzZXQgc2V0VG9kbyhuZXdUb2RvKSB7XG4gICAgdGhpcy50b2RvID0gbmV3VG9kbztcbiAgfVxuXG4gIGFkZFRvZG8odG9kbykge1xuICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgfVxuXG4gIGRlbFRvZG8oaW5kZXgpIHtcbiAgICB0aGlzLnRvZG9zLnNwbGljZShpbmRleCwxKVxuICB9XG4gIFxufVxuZXhwb3J0IHtQcm9qZWN0IGFzIGRlZmF1bHR9OyIsImNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUgPSBuZXcgRGF0ZSgpLCB1cmdlbmN5LCBzdGF0dXMgPSBmYWxzZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnVyZ2VuY3kgPSB1cmdlbmN5O1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICB9XG5cbiAgZ2V0IGdldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICB9XG5cbiAgc2V0IHNldFRpdGxlKHVwZGF0ZVRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHVwZGF0ZVRpdGxlO1xuICB9XG5cbiAgZ2V0IGdldERlc2NyaXB0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gIH1cblxuICBzZXQgc2V0RGVzY3JpcHRpb24odXBkYXRlRGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdXBkYXRlRGVzY3JpcHRpb247XG4gIH1cbiAgZ2V0IGdldER1ZURhdGUoKXtcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICB9XG5cbiAgc2V0IHNldER1ZURhdGUodXBkYXRlRGF0ZSkge1xuICAgIHRoaXMuZHVlRGF0ZSA9IHVwZGF0ZURhdGU7XG4gIH1cblxuICBnZXQgZ2V0VXJnZW5jeSgpe1xuICAgIHJldHVybiB0aGlzLnVyZ2VuY3k7XG4gIH1cblxuICBzZXQgc2V0VXJnZW5jeSh1cGRhdGVVcmdlbmN5KSB7XG4gICAgdGhpcy51cmdlbmN5ID0gdXBkYXRlVXJnZW5jeTtcbiAgfVxuICBnZXQgZ2V0U3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cztcbiAgfVxuICBzZXQgc2V0U3RhdHVzKHVwZGF0ZVN0YXR1cykge1xuICAgIHRoaXMuc3RhdHVzID0gdXBkYXRlU3RhdHVzO1xuICB9XG5cbiAgc3dpdGNoU3RhdHVzKCkge1xuICAgIHRoaXMuc3RhdHVzID0gIXRoaXMuc3RhdHVzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87Il0sInNvdXJjZVJvb3QiOiIifQ==