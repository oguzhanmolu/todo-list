import Storage from './storage';
import Task from './task';

export default class ToDoCard {
  // Create innerHTML from task object values
  static createCardInnerHTML(title, description, deadline) {
    const taskDisplayArea = document.getElementById('task-display-area');
    const card = document.createElement('div');

    card.innerHTML = `
    <div id="card">
      <i class="card-icon fa-sharp fa-solid fa-check-double"></i>
      <span class="card-item card-title">Title: ${title}</span>
      <span class="card-item card-description">Description: ${description}</span>
      <span class="card-item card-deadline">Deadline:
       ${deadline.split('-').reverse().join('/')}</span>
      </div>`;

    taskDisplayArea.appendChild(card);
  }

  // Create ToDoCards when navbar is clicked,
  // then add those cards into task display area
  static createAllTaskCards() {
    const mainTitle = document.getElementById('main-title');
    const taskDisplayArea = document.getElementById('task-display-area');
    const selectionAllTasks = document.getElementById('all-tasks');

    // Events when all tasks button is clicked
    selectionAllTasks.addEventListener('click', () => {
      taskDisplayArea.textContent = '';
      mainTitle.textContent = 'All Tasks';
      if (!Storage.tasks) return;

      // Creating task cards, then appending it on main display area
      Storage.tasks.forEach((task) =>
        this.createCardInnerHTML(task.title, task.description, task.deadline)
      );
    });
  }

  // Compare today's date and the deadline from the tasks,
  //  then create & append new cards which is due today
  static createTodayTaskCards() {
    const mainTitle = document.getElementById('main-title');
    const taskDisplayArea = document.getElementById('task-display-area');
    const selectionTodayTasks = document.getElementById('today-tasks');

    // Events when today's tasks button is clicked
    selectionTodayTasks.addEventListener('click', () => {
      taskDisplayArea.textContent = '';
      mainTitle.textContent = `Today's Tasks`;
      if (!Storage.tasks) return;

      // Compare today's date and task.deadline,
      // If there is a match, create a To-Do card
      Storage.tasks.forEach((task) => {
        if (task.deadline === Task.getFullDate())
          this.createCardInnerHTML(task.title, task.description, task.deadline);
      });
    });
  }

  // Tasks from upcoming 7 days
  static createUpcomingTaskCards() {
    const mainTitle = document.getElementById('main-title');
    const taskDisplayArea = document.getElementById('task-display-area');
    const selectionUpcomingTasks = document.getElementById('upcoming-tasks');

    // Events when upcoming tasks button is clicked
    selectionUpcomingTasks.addEventListener('click', () => {
      taskDisplayArea.textContent = '';
      mainTitle.textContent = 'Upcoming Tasks';
      if (!Storage.tasks) return;

      Storage.tasks.forEach((task) => {
        // If task is in this month and, task's deadline minus today's date is smaller or equals than 7
        // We create a new card from that task
        if (
          task.deadline.split('-')[1] === Task.getFullDate().split('-')[1] &&
          task.deadline.split('-')[2] - Task.getFullDate().split('-')[2] <= 7
        )
          this.createCardInnerHTML(task.title, task.description, task.deadline);
      });
    });
  }
}
