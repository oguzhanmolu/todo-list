import Task from './task';
import Storage from './storage';
import ToDoCard from './toDoCard';

export default class UI {
  // Toggle modal on/off when add button is clicked
  static toggleModalOn() {
    const modal = document.getElementById('modal');
    const btnAddTask = document.getElementById('add-new-task-group');
    const modalInputForm = document.getElementById('form');
    const header = document.getElementById('header');
    const main = document.querySelector('main');

    // On
    btnAddTask.addEventListener('click', () => {
      modal.style.display = 'block';
      header.style.filter = 'blur(1px)';
      main.style.filter = 'blur(1px)';
    });

    // Modal off scenarios
    modalInputForm.addEventListener('submit', (e) => {
      e.preventDefault();
      modal.style.display = 'none';
      header.style.filter = 'blur(0px)';
      main.style.filter = 'blur(0px)';
    });

    // When keydown===esc key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') modal.style.display = 'none';
      header.style.filter = 'blur(0px)';
      main.style.filter = 'blur(0px)';
    });
  }

  // Reset modal input
  static resetModalForm() {
    const modalInputForm = document.getElementById('form');
    const btnAddTask = document.getElementById('add-new-task-group');

    btnAddTask.addEventListener('click', () => {
      modalInputForm.reset();
    });
  }

  // Create toDoCards from task objects
  static createToDoCard() {
    ToDoCard.createCardOnSubmit();
    ToDoCard.createAllTaskCards();
    ToDoCard.createTodayTaskCards();
    ToDoCard.createUpcomingTaskCards();
    ToDoCard.createCardOnPageLoad();
  }
}
