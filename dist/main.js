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
  if (_modules_DOMController__WEBPACK_IMPORTED_MODULE_0__["default"].todoInputValidation()) {
    const input = _modules_DOMController__WEBPACK_IMPORTED_MODULE_0__["default"].todoInput();
    const newTask = new _modules_todo__WEBPACK_IMPORTED_MODULE_2__["default"](input.title, input.description, input.dueDate, input.urgency);
    projects[selectedIndex].push(newTask);
   
  }
};

const addProject = () => {
  const input = _modules_DOMController__WEBPACK_IMPORTED_MODULE_0__["default"].projectInput();
  if (projectValidation(input.title)){
    const newProject = new _modules_project__WEBPACK_IMPORTED_MODULE_1__["default"](input.title);
    length = projects.push([]) - 1;
    projects[length].push(newProject.title);

  }
  
};

const renderAllTodos = (selectedIndex) => {
  _modules_DOMController__WEBPACK_IMPORTED_MODULE_0__["default"].clearRenderedTodos();
  if (projects[selectedIndex].length > 0){
  for (let i = 1; i < projects[selectedIndex].length; i++) {
    const newLi = _modules_DOMController__WEBPACK_IMPORTED_MODULE_0__["default"].todoHTML(projects[selectedIndex][i]);

    document.querySelector('#todo-list').insertAdjacentHTML('beforeend', newLi);
  }
};
};

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

  const projectHTML = (project) => {
    const li = `
  <li class = "project" id = '${project}'>
    <div>${project}</div>
    <input type = 'checkbox'></input>
    <button class = 'edit-btn'>Edit</button>
    <button data-name = '${project}' class = 'delete-btn'>X</button>
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
  constructor(title) {
    this.title = title;
    this.todos = [];
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
}

/* harmony default export */ __webpack_exports__["default"] = (Todo);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0RPTUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy90b2RvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGb0Q7QUFDWjtBQUNOOztBQUVsQztBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxNQUFNLDhEQUFhO0FBQ25CLGtCQUFrQiw4REFBYTtBQUMvQix3QkFBd0IscURBQUk7QUFDNUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQiw4REFBYTtBQUM3QjtBQUNBLDJCQUEyQix3REFBTztBQUNsQztBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsRUFBRSw4REFBYTtBQUNmO0FBQ0EsaUJBQWlCLG9DQUFvQztBQUNyRCxrQkFBa0IsOERBQWE7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSw4REFBYTtBQUNmLGlCQUFpQixxQkFBcUI7O0FBRXRDLGtCQUFrQiw4REFBYTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsY0FBYywwQkFBMEI7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELG9COzs7Ozs7Ozs7Ozs7QUNsS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSyxPQUFPLGFBQWE7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCLGFBQWEsaUJBQWlCO0FBQzlCLGFBQWEsYUFBYTtBQUMxQixhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyxRQUFRO0FBQ3hDLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0EsMkJBQTJCLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFbUM7Ozs7Ozs7Ozs7Ozs7QUNqR3BDO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDOEI7Ozs7Ozs7Ozs7Ozs7QUNOOUI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUksRUFBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcbmltcG9ydCBET01Db250cm9sbGVyIGZyb20gJy4vbW9kdWxlcy9ET01Db250cm9sbGVyJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0JztcbmltcG9ydCBUb2RvIGZyb20gJy4vbW9kdWxlcy90b2RvJztcblxuLy8gcHJvamVjdHMgaXMgYW4gYXJyYXkgY29udGFpbmluZyBwcm9qZWN0IG5hbWVzXG4vLyBjb3VsZCBuZXN0IHRvZG9zIGluc2lkZVxuLy8gW3Byb2plY3ROYW1lW1t0b2RvMV0sW3RvZG8yXSxbdG9kbzNdLCBwcm9qZWN0Mlt0b2RvQV0sIFt0b2RvQl1dXVxuY29uc3QgcHJvamVjdHMgPSBbWydEZWZhdWx0J11dO1xuXG5cbi8vIHByb2plY3ROYW1lIGFzIG5ldyBQcm9qZWN0KCdwYXJhbXMnKVxuLy8gcHJvamVjdHMucHVzaChwcm9qZWN0TmFtZSk7XG5cblxuLy8gbGV0IHRlc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVzdCcpO1xuXG4vLyB0ZXN0RGl2LmlubmVySFRNTCA9IERPTUNvbnRyb2xsZXIudG9kb0hUTUw7XG5cblxuLy8gY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdpbml0IHBhcmFtZXRlcnMnKVxuY29uc3QgYWRkVG9kbyA9IChzZWxlY3RlZEluZGV4KSA9PiB7XG4gIGlmIChET01Db250cm9sbGVyLnRvZG9JbnB1dFZhbGlkYXRpb24oKSkge1xuICAgIGNvbnN0IGlucHV0ID0gRE9NQ29udHJvbGxlci50b2RvSW5wdXQoKTtcbiAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRvZG8oaW5wdXQudGl0bGUsIGlucHV0LmRlc2NyaXB0aW9uLCBpbnB1dC5kdWVEYXRlLCBpbnB1dC51cmdlbmN5KTtcbiAgICBwcm9qZWN0c1tzZWxlY3RlZEluZGV4XS5wdXNoKG5ld1Rhc2spO1xuICAgXG4gIH1cbn07XG5cbmNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGlucHV0ID0gRE9NQ29udHJvbGxlci5wcm9qZWN0SW5wdXQoKTtcbiAgaWYgKHByb2plY3RWYWxpZGF0aW9uKGlucHV0LnRpdGxlKSl7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGlucHV0LnRpdGxlKTtcbiAgICBsZW5ndGggPSBwcm9qZWN0cy5wdXNoKFtdKSAtIDE7XG4gICAgcHJvamVjdHNbbGVuZ3RoXS5wdXNoKG5ld1Byb2plY3QudGl0bGUpO1xuXG4gIH1cbiAgXG59O1xuXG5jb25zdCByZW5kZXJBbGxUb2RvcyA9IChzZWxlY3RlZEluZGV4KSA9PiB7XG4gIERPTUNvbnRyb2xsZXIuY2xlYXJSZW5kZXJlZFRvZG9zKCk7XG4gIGlmIChwcm9qZWN0c1tzZWxlY3RlZEluZGV4XS5sZW5ndGggPiAwKXtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwcm9qZWN0c1tzZWxlY3RlZEluZGV4XS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5ld0xpID0gRE9NQ29udHJvbGxlci50b2RvSFRNTChwcm9qZWN0c1tzZWxlY3RlZEluZGV4XVtpXSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1saXN0JykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBuZXdMaSk7XG4gIH1cbn07XG59O1xuXG5jb25zdCByZW5kZXJBbGxQcm9qZWN0cyA9ICgpID0+IHtcbiAgRE9NQ29udHJvbGxlci5jbGVhclJlbmRlcmVkUHJvamVjdHMoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgXG4gICAgY29uc3QgbmV3TGkgPSBET01Db250cm9sbGVyLnByb2plY3RIVE1MKHByb2plY3RzW2ldKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0JykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBuZXdMaSk7XG4gICAgaWYgKGkgPT0gcHJvamVjdHMubGVuZ3RoIC0gMSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIFJldHVybnMgdGhlIGluZGV4IG9mIHByb2plY3RzIHRoYXQgdGhlIHNlbGVjdGVkIHByb2plY3QgaXMgbG9jYXRlZCBhdFxuY29uc3QgZmluZFNlbGVjdGVkUHJvamVjdCA9ICgpID0+IHtcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJykgPT0gbnVsbCl7XG4gICAgcmV0dXJuIFxuICAgfTtcbiAgY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKS5pZDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIC8vY29uc29sZS5sb2cocHJvamVjdHNbaV1bMF0sIHNlbGVjdGVkKTtcbiAgICBpZiAocHJvamVjdHNbaV1bMF0gPT0gc2VsZWN0ZWQpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgcHJvamVjdEluZGV4QnlOYW1lID0gKG5hbWUpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWQgPSBuYW1lO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy9jb25zb2xlLmxvZyhwcm9qZWN0c1tpXVswXSwgc2VsZWN0ZWQpO1xuICAgIGlmIChwcm9qZWN0c1tpXVswXSA9PSBzZWxlY3RlZCkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBhZGRBbmRSZW5kZXJUb2RvID0gKCkgPT4ge1xuICBsZXQgc2VsZWN0ZWRJbmRleCA9IGZpbmRTZWxlY3RlZFByb2plY3QoKTtcbiAgYWRkVG9kbyhzZWxlY3RlZEluZGV4KTtcbiAgcmVuZGVyQWxsVG9kb3Moc2VsZWN0ZWRJbmRleCk7XG4gIC8vIERPTUNvbnRyb2xsZXIudG9kb0ZpZWxkUmVzZXQoKTsgY29tbWVudGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzXG59O1xuXG5jb25zdCBhZGRBbmRSZW5kZXJQcm9qZWN0ID0gKCkgPT4ge1xuICBsZXQgc2VsZWN0ZWRJbmRleCA9IGZpbmRTZWxlY3RlZFByb2plY3QoKTtcbiAgYWRkUHJvamVjdCgpO1xuICByZW5kZXJBbGxQcm9qZWN0cyhzZWxlY3RlZEluZGV4KTtcbiAgZGVsZXRlQnRuTGlzdGVuZXIoKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVByb2plY3QgPSAoaW5kZXhUb0RlbGV0ZSkgPT4ge1xuICBwcm9qZWN0cy5zcGxpY2UoaW5kZXhUb0RlbGV0ZSwxKTtcbiAgcmVuZGVyQWxsUHJvamVjdHMoKTtcbn07XG5cbmNvbnN0IHByb2plY3RWYWxpZGF0aW9uID0gKGlucHV0KSA9PiB7XG4gIGxldCB0ZXN0QXJyID0gcHJvamVjdHMubWFwKCBlbGVtZW50ID0+ICBpbnB1dCA9PSBlbGVtZW50KTtcbiAgaWYgKGlucHV0ID09ICcnKXtcbiAgICBhbGVydCgnQ2Fubm90IGNyZWF0ZSBhIGJsYW5rIHByb2plY3QnKVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIGlmKHRlc3RBcnIuaW5jbHVkZXModHJ1ZSkpIHtcbiAgICBhbGVydCgnQ2Fubm90IGNyZWF0ZSBhIGR1cGxpY2F0ZSBwcm9qZWN0JylcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSByZXR1cm4gdHJ1ZTtcbn07XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0QnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGFkZEFuZFJlbmRlclByb2plY3QoKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVG9kb0J0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBhZGRBbmRSZW5kZXJUb2RvKCk7XG59KTtcblxuY29uc3QgZGVsZXRlQnRuTGlzdGVuZXIgPSAoKSA9PiB7XG4gIGxldCBkZWxldGVCdG5MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1idG4nKTtcbiAgY29uc29sZS5sb2coJ2JlZm9yZSBsb29wJyk7XG4gIGZvcihsZXQgaT0wOyBpIDwgZGVsZXRlQnRuTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgZGVsZXRlQnRuTGlzdFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBsZXQgbmFtZSA9IGUudGFyZ2V0LmRhdGFzZXQubmFtZTtcbiAgXG4gICAgICBkZWxldGVQcm9qZWN0KHByb2plY3RJbmRleEJ5TmFtZShuYW1lKSk7XG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gICAgICByZW5kZXJBbGxQcm9qZWN0cygpO1xuICAgIH0pXG4gICAgY29uc29sZS5sb2coJ2FmdGVyIGxvb3AnKTtcbiAgfVxufTtcblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0JykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGxldCB0YXJnZXQgPSBlLnRhcmdldC5jbGFzc0xpc3Q7XG4gIFxuXG4gIGlmICh0YXJnZXQuY29udGFpbnMoJ3NlbGVjdGVkJykgXG58fCB0YXJnZXQuY29udGFpbnMoJ2RlbGV0ZS1idG4nKSBcbnx8IHRhcmdldC5jb250YWlucygnZWRpdC1idG4nKSl7XG4gICAgcmV0dXJuO1xuICB9ZWxzZSB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICBsZXQgdGFnTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlcIilcbiAgICBjb25zb2xlLmxvZyh0YWdMaXN0LCBcInRhZ2xpc3RcIik7XG4gICAgbGV0IGVsZW1lbnRMaXN0U2VsZWN0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2VsZWN0ZWRcIik7XG4gIGVsZW1lbnRMaXN0U2VsZWN0ZWRbMF0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgdGFyZ2V0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgY29uc29sZS5sb2coZmluZFNlbGVjdGVkUHJvamVjdCgpKTtcbiAgcmVuZGVyQWxsVG9kb3MoZmluZFNlbGVjdGVkUHJvamVjdCgpKTtcbiAgfTtcbn0pO1xuXG5kZWxldGVCdG5MaXN0ZW5lcigpOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5jb25zdCBET01Db250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJyk7XG5cbiAgLy8gQWRkIHJldHVybiBmb3IgdG9kb0lucHV0LiBUYWtlIHJldHVybiBhbmQgY3JlYXRlIG5ldyB0YXNrIHdpdGggaXRcbiAgLy8gY3JlYXRlZFRhc2sgYXMgbmV3IFRvZG8odG9kb0lucHV0KCkpXG4gIC8vIEZpbmQgd2hpY2ggcHJvamVjdCB0aGUgdGFzayBiZWxvbmdzIHRvXG4gIC8vIHByb2plY3RzW3Byb2plY3RJbmRleF0ucHVzaChjcmVhdGVkVGFzaylcbiAgLy8gcHJvamVjdHNbMF0ucHVzaChjcmVhdGVkVGFzaylcblxuXG4gIGNvbnN0IHRvZG9JbnB1dCA9ICgpID0+ICh7XG4gICAgdGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrVGl0bGUnKS52YWx1ZSxcbiAgICBkZXNjcmlwdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Rhc2tEZXNjcmlwdGlvbicpLnZhbHVlLFxuICAgIGR1ZURhdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrRHVlRGF0ZScpLnZhbHVlLFxuICAgIHVyZ2VuY3k6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrVXJnZW5jeScpLnZhbHVlLFxuXG4gIH0pO1xuXG4gIGNvbnN0IHByb2plY3RJbnB1dCA9ICgpID0+ICh7XG4gICAgdGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdCcpLnZhbHVlLFxuICB9KTtcblxuICBjb25zdCB0b2RvSW5wdXRWYWxpZGF0aW9uID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGFza1RpdGxlJykudmFsdWUgPT0gJycpIHtcbiAgICAgIGFsZXJ0KCdZb3UgZm9yZ290IHRoZSB0aXRsZSEnKTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrRHVlRGF0ZScpLnZhbHVlID09ICcnKSB7XG4gICAgICBhbGVydCgnWW91IGZvcmdvdCB0aGUgZHVlIGRhdGUhJyk7XG4gICAgfSBlbHNlIHsgcmV0dXJuIHRydWU7IH1cbiAgfTtcblxuICAvLyBSZXNldCBpbnB1dCBmaWVsZFxuICAvLyBjaGFuZ2UgZnJvbSBhcnJvdyBmdW5jdGlvbiwgc2hvdWxkIG5vdCBiZSB1c2VkIGZvciBhc3NpZ25tZW50XG4gIC8vIGNvbnN0IHRvZG9GaWVsZFJlc2V0ID0gKCkgPT4gKFxuICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGFza1RpdGxlJykudmFsdWUgPSAnJyxcbiAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Rhc2tEZXNjcmlwdGlvbicpLnZhbHVlID0gJycsXG4gIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrRHVlRGF0ZScpLnZhbHVlID0gJycsXG4gIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrVXJnZW5jeScpLnZhbHVlID0gJydcbiAgLy8gKTtcblxuICAvLyBjbGVhcnMgYWxsIGxpIGZyb20gdG9kbyBsaXN0XG4gIGNvbnN0IGNsZWFyUmVuZGVyZWRUb2RvcyA9ICgpID0+IHtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWxpc3QnKTtcbiAgICB3aGlsZSAodWwuZmlyc3RDaGlsZCkge1xuICAgICAgdWwucmVtb3ZlQ2hpbGQodWwuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIGNsZWFycyBhbGwgcHJvamVjdHMgZnJvbSBwcm9qZWN0IGxpc3RcbiAgY29uc3QgY2xlYXJSZW5kZXJlZFByb2plY3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpO1xuICAgIHdoaWxlICh1bC5maXJzdENoaWxkKSB7XG4gICAgICB1bC5yZW1vdmVDaGlsZCh1bC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH07XG5cblxuICBjb25zdCB0b2RvSFRNTCA9ICh0b2RvKSA9PiB7XG4gICAgY29uc3QgbGkgPSBgXG4gICAgPGxpPlxuICAgICAgPGRpdj4ke3RvZG8udGl0bGV9PC9kaXY+XG4gICAgICA8ZGl2PiR7dG9kby5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgIDxkaXY+JHt0b2RvLmR1ZURhdGV9PC9kaXY+XG4gICAgICA8ZGl2PiR7dG9kby51cmdlbmN5fTwvZGl2PlxuICAgICAgPGlucHV0IHR5cGUgPSAnY2hlY2tib3gnPjwvaW5wdXQ+XG4gICAgICA8YnV0dG9uIGNsYXNzID0gJ2VkaXQtYnRuJz5FZGl0PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzID0gJ2RlbGV0ZS1idG4nPlg8L2J1dHRvbj5cbiAgICA8L2xpPlxuICBgO1xuICAgIHJldHVybiBsaTtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0SFRNTCA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgbGkgPSBgXG4gIDxsaSBjbGFzcyA9IFwicHJvamVjdFwiIGlkID0gJyR7cHJvamVjdH0nPlxuICAgIDxkaXY+JHtwcm9qZWN0fTwvZGl2PlxuICAgIDxpbnB1dCB0eXBlID0gJ2NoZWNrYm94Jz48L2lucHV0PlxuICAgIDxidXR0b24gY2xhc3MgPSAnZWRpdC1idG4nPkVkaXQ8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGRhdGEtbmFtZSA9ICcke3Byb2plY3R9JyBjbGFzcyA9ICdkZWxldGUtYnRuJz5YPC9idXR0b24+XG4gIDwvbGk+XG5gO1xuICAgIHJldHVybiBsaTtcbiAgfTtcblxuICAvLyBjb25zdCB0ZXN0ID0gKHRoaW5nID0gXCJkZWZhdWx0XCIpID0+ICggY29uc29sZS5sb2codGhpbmcpKTtcblxuICByZXR1cm4ge1xuICAgIHRvZG9JbnB1dCxcbiAgICBwcm9qZWN0SW5wdXQsXG4gICAgdG9kb0lucHV0VmFsaWRhdGlvbixcbiAgICB0b2RvSFRNTCxcbiAgICBwcm9qZWN0SFRNTCxcbiAgICBjbGVhclJlbmRlcmVkVG9kb3MsXG4gICAgY2xlYXJSZW5kZXJlZFByb2plY3RzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgRE9NQ29udHJvbGxlciBhcyBkZWZhdWx0IH07XG4iLCJjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy50b2RvcyA9IFtdO1xuICB9XG59XG5leHBvcnQgeyBQcm9qZWN0IGFzIGRlZmF1bHQgfTtcbiIsImNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUgPSBuZXcgRGF0ZSgpLCB1cmdlbmN5LCBzdGF0dXMgPSBmYWxzZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnVyZ2VuY3kgPSB1cmdlbmN5O1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iXSwic291cmNlUm9vdCI6IiJ9