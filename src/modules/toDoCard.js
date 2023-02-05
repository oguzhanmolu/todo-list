import Storage from './storage';
export default class ToDoCard {
  // Create ToDoCards when navbar is clicked,
  // then add those cards into task display area
  static createTaskCards() {
    const taskDisplayArea = document.getElementById('task-display-area');
    const selectionAllTasks = document.getElementById('all-tasks');
    const selectionTodayTasks = document.getElementById('today-tasks');
    const selectionUpcomingTasks = document.getElementById('upcoming-tasks');
    const mainTitle = document.getElementById('main-title');

    selectionAllTasks.addEventListener('click', () => {
      mainTitle.textContent = 'All Tasks';
      if (!Storage.tasks) return;

      Storage.tasks.forEach((task) => {
        const card = document.createElement('div');
        card.innerHTML = `
        <span>${task.title}</span>
        <span>${task.description}</span>
        <span>${task.deadline}</span>`;
        taskDisplayArea.appendChild(card);
      });
    });
  }
}
