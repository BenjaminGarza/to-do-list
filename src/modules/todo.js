class Todo {
  constructor(title, description, dueDate = new Date(), status = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
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

export default Todo;