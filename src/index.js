import DOMController from './modules/DOMController';

let projects = ['hello', 'world'];


let testDiv = document.querySelector('.test');
//testDiv.insertAdjacentHTML(DOMController.todoHTML);
testDiv.innerHTML = DOMController.todoHTML;
//projects.map(index => {testDiv.innerHTML =`${DOMController.todoHTML}`});
