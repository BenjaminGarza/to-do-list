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

export default Todo;
