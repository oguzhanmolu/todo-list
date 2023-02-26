import Storage from './storage';
import Task from './task';

export default class ToDoCard {
  // Create innerHTML from task object values,
  // then append it on taskDisplayArea
  static createCardInnerHTML(title, description, deadline) {
    const taskDisplayArea = document.getElementById('task-display-area');
    const card = document.createElement('div');

    card.innerHTML = `
    <div id="card">
      <i class="card-icon fa-sharp fa-solid fa-check-double"></i>
      <span class="card-item card-title">Title: ${title}</span>
      <span class="card-item card-description">Description: ${description}</span>
      <span class="card-item card-deadline">Deadline:
       ${deadline.split('-').reverse().join('/')}${
      Task.isExpired(deadline) ? ' (Expired)' : ''
    }</span>
    <button class='card-button'>DELETE</button>
      </div>`;

    taskDisplayArea.appendChild(card);
  }

  // Create task objects with 'createCardInnerHTML' function.
  static createTaskCard() {
    this.clearTaskDisplayArea();

    if (!Storage.getTaskArray()) return;

    Storage.getTaskArray().forEach((task) =>
      this.createCardInnerHTML(task.title, task.description, task.deadline)
    );
  }

  // Clear task display area(where we append cards)
  static clearTaskDisplayArea() {
    const taskDisplayArea = document.getElementById('task-display-area');
    taskDisplayArea.textContent = '';
  }

  // Set main title from parameter
  static setMainTitle(title) {
    const mainTitle = document.getElementById('main-title');
    mainTitle.textContent = title;
  }

  //Create task card on first load/refresh.
  static createCardOnPageLoad = () => this.createTaskCard();

  // Create task card on form submit
  static createCardOnSubmit() {
    const modalInputForm = document.getElementById('form');

    modalInputForm.addEventListener('submit', (e) => {
      this.setMainTitle('All Tasks');
      e.preventDefault();
      this.createTaskCard();
    });
  }

  // Create all ToDoCards when 'createAllTaskCards' from navbar is clicked.
  static createAllTaskCards() {
    const navButtonAllTasks = document.getElementById('all-tasks');

    navButtonAllTasks.addEventListener('click', () => {
      this.setMainTitle('All Tasks');
      this.createTaskCard();
    });
  }

  // Create today's ToDoCards when 'Today' from navbar is clicked.
  static createTodayTaskCards() {
    const navButtonTodaysTasks = document.getElementById('today-tasks');

    navButtonTodaysTasks.addEventListener('click', () => {
      this.clearTaskDisplayArea();
      this.setMainTitle(`Today's Tasks`);

      // Compare today's date and task.deadline,
      // then create To-Do cards with matching deadline.
      Storage.getTaskArray().forEach((task) => {
        if (task.deadline === Task.getFullDate())
          this.createCardInnerHTML(task.title, task.description, task.deadline);
      });
    });
  }

  // Create next 7 days(roughly) ToDoCards when 'Upcoming' from navbar is clicked.
  static createUpcomingTaskCards() {
    const selectionUpcomingTasks = document.getElementById('upcoming-tasks');

    // Events when upcoming tasks button is clicked.
    selectionUpcomingTasks.addEventListener('click', () => {
      this.clearTaskDisplayArea();
      this.setMainTitle('Upcoming Tasks');

      Storage.getTaskArray().forEach((task) => {
        //  Create new task if task deadline is this month and, deadline minus today's date is smaller  than 7
        // or task is next month and its day index is smaller than 5,
        // ([1] index is month,[2] is day )
        const taskDeadline = task.deadline.split('-');
        const todayFullDate = Task.getFullDate().split('-');
        const taskMonth = taskDeadline[1];
        const thisMonth = todayFullDate[1];
        const taskDay = taskDeadline[2];
        const today = todayFullDate[2];

        if (
          (taskMonth - thisMonth === 0 &&
            taskDay > today &&
            taskDay - today <= 7) ||
          (taskMonth - thisMonth === 1 && taskDay < 5)
        )
          this.createCardInnerHTML(task.title, task.description, task.deadline);
      });
    });
  }
}
