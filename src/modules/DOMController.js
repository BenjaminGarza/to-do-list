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

export {DOMController as default};
