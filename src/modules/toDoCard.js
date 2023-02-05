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
        <div id="card">
          <i class="card-icon fa-sharp fa-solid fa-check-double"></i>
          <span class="card-item card-title">Title: ${task.title}</span>
          <span class="card-item card-description">Description: ${task.description}</span>
          <span class="card-item card-deadline">Deadline: ${task.deadline}</span>
          </div>`;
        taskDisplayArea.appendChild(card);
      });
    });
  }
}
