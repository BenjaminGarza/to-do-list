/* eslint-disable no-unused-vars */
const DOMController = (() => {
  const selectedProject = () => document.querySelector('.selected');

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

export { DOMController as default };
