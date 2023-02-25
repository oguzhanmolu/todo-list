export default class Task {
  constructor(title, description, deadline) {
    this.title = title;
    this.description = description;
    this.deadline = deadline;
  }

  // Create a new object with form input values
  static createTaskObject() {
    // Input values
    const modalInputTitle = document.getElementById('input-title').value;
    const modalInputDescription =
      document.getElementById('input-description').value;
    const modalInputDate = document.getElementById('input-date').value;

    return new Task(modalInputTitle, modalInputDescription, modalInputDate);
  }

  // Get today's fullDate in same format as 'task.deadline' (day-month-year)
  static getFullDate() {
    const fullDate = new Date();
    const today = new Date().getDate();
    return `${fullDate.getFullYear()}-0${fullDate.getMonth() + 1}-${
      today < 10 ? '0' + today : today
    }`;
  }
}
