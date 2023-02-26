export default class Task {
  constructor(title, description, deadline) {
    this.title = title;
    this.description = description;
    this.deadline = deadline;
  }

  // Create a new task object from input values.
  static createTaskObject() {
    const modalInputTitle = document.getElementById('input-title').value;
    const modalInputDescription =
      document.getElementById('input-description').value;
    const modalInputDate = document.getElementById('input-date').value;

    return new Task(modalInputTitle, modalInputDescription, modalInputDate);
  }

  // Get today's fullDate in same format as 'task.deadline' (day-month-year).
  static getFullDate() {
    const fullDate = new Date();
    const today = new Date().getDate();
    return `${fullDate.getFullYear()}-0${fullDate.getMonth() + 1}-${
      today < 10 ? '0' + today : today
    }`;
  }

  // Return true if task deadline is expired. ([index]is year-month-day values)
  static isExpired(deadline) {
    const taskDeadline = deadline.split('-');
    const todayFullDate = this.getFullDate().split('-');
    return (
      taskDeadline[1] <= todayFullDate[1] && taskDeadline[2] < todayFullDate[2]
    );
  }
}
