/* eslint-disable no-unused-vars */
const DOMController = (() => {
  const selectedProject = () => document.querySelector('.selected');

  const todoInput = () => ({
    title: document.querySelector('#newTaskTitle').value,
    description: document.querySelector('newTaskDescription').value,
    dueDate: document.querySelector('newTaslDueDate').value,
    urgency: document.querySelector('newTaskUrgency').value
  });

  const todoFieldReset = () => (
    document.querySelector('#newTaskTitle').value = '',
    document.querySelector('newTaskDescription').value = '',
    document.querySelector('newTaslDueDate').value = '',
    document.querySelector('newTaskUrgency').value = ''
  );

  const todoHTML = `
    <li>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <input type = 'checkbox'></input>
      <button class = 'delete-btn'>X</button>
      <button class = 'edit-btn'>Edit</button>
    </li>
  `;

  return{
    todoInput
  };
  
})();

export {DOMController};
