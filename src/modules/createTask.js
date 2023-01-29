// Create task object
class Task {
  constructor(title, deadline, important, description) {
    this.title = title;
    this.deadline = deadline;
    this.important = important;
    this.description = description;
  }
}

export default function createTask() {
  // Variables from modal input
  const inputTitle = document.getElementById('input-title').value;
  const inputDate = document.getElementById('input-date').value;
  const inputImportant = document.getElementById('input-important').checked;
  const inputDescription = document.getElementById('input-description').value;
  const task = new Task(
    inputTitle,
    inputCategory,
    inputDate,
    inputImportant,
    inputDescription
  );
}
