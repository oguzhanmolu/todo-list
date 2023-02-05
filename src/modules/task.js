export default class Task {
  constructor(title, description, deadline) {
    this.title = title;
    this.description = description;
    this.deadline = deadline;
  }

  // Create a new object with input values
  static createTaskObject() {
    // Modal input values
    const modalInputTitle = document.getElementById('input-title').value;
    const modalInputDescription =
      document.getElementById('input-description').value;
    const modalInputDate = document.getElementById('input-date').value;

    return new Task(modalInputTitle, modalInputDescription, modalInputDate);
  }
}
