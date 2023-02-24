import Task from './task';
import Storage from './storage';
import ToDoCard from './toDoCard';

export default class UI {
  // Toggle modal on/off when add button is clicked
  static toggleModal() {
    const modal = document.getElementById('modal');
    const btnAddTask = document.getElementById('add-new-task-group');
    const modalInputForm = document.getElementById('form');
    const header = document.getElementById('header');

    // On
    btnAddTask.addEventListener('click', () => {
      modal.style.display = 'block';
      header.style.filter = 'blur(1px)';
    });
    // Off
    modalInputForm.addEventListener('submit', (e) => {
      e.preventDefault();
      modal.style.display = 'none';
      header.style.filter = 'blur(0px)';
      ToDoCard.createAllTaskCards();
    });
  }

  // Reset modal input
  static resetModal() {
    const modalInputForm = document.getElementById('form');
    const btnAddTask = document.getElementById('add-new-task-group');

    btnAddTask.addEventListener('click', () => {
      modalInputForm.reset();
    });
  }

  // Create new task object, then store it in array
  static createTaskObject() {
    const modalInputForm = document.getElementById('form');

    modalInputForm.addEventListener('submit', () =>
      Storage.storeTaskObject(Task.createTaskObject())
    );
  }
  // Create toDoCards from task objects
  static createToDoCard() {
    ToDoCard.createAllTaskCards();
    ToDoCard.createTodayTaskCards();
    ToDoCard.createUpcomingTaskCards();
  }
}

UI.toggleModal();
UI.resetModal();
UI.createTaskObject();
UI.createToDoCard();
