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
      <div>title</div>
      <div>description</div>
      <div>dueDate</div>
      <div>urgency</div>
      <input type = 'checkbox'></input>
      <button class = 'edit-btn'>Edit</button>
      <button class = 'delete-btn'>X</button>
    </li>
  `;
  
  let test = () => ( 'its working');

  return{
    todoInput,
    todoHTML,
    todoFieldReset,
    test
  };
  
})();

export {DOMController as default};
