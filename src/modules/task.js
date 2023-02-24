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

    // Check task.deadline is at least due today before creating a new task object
    // I know it is kinda hard to read, but date format is year-month-day
    //  and I split it into array,then use it with its index instead of creating 6 new variables
    const todayFullDate = Task.getFullDate().split('-');
    const inputFullDate = modalInputDate.split('-');

    if (
      todayFullDate[0] === inputFullDate[0] &&
      todayFullDate[1] === inputFullDate[1] &&
      todayFullDate[2] > inputFullDate[2]
    )
      return alert('Deadline must be at least due today.');

    return new Task(modalInputTitle, modalInputDescription, modalInputDate);
  }

  // Get today's fullDate in same format as 'task.deadline' (day-month-year)
  static getFullDate() {
    const date = new Date();
    const day = new Date().getDate();
    const todayFullDate = `${date.getFullYear()}-0${date.getMonth() + 1}-${
      day < 10 ? '0' + day : day
    }`;
    return todayFullDate;
  }
}
