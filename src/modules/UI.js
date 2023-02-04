import Task from './task';
import Storage from './storage';
import ToDoCard from './toDoCard';

export default class UI {
  // Toggle modal on/off when add button is clicked
  static toggleModal() {
    const modal = document.getElementById('modal');
    const btnAddTask = document.getElementById('add-new-task-group');
    const btnModalSubmit = document.querySelector('#submit-button');

    // On
    btnAddTask.addEventListener('click', () => {
      modal.style.display = 'block';
    });
    // Off
    btnModalSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'none';
    });
  }

  // Reset modal input
  static resetModal() {
    const btnAddTask = document.getElementById('add-new-task-group');
    const modalInputForm = document.getElementById('form');
    btnAddTask.addEventListener('click', () => {
      modalInputForm.reset();
      Storage.getTaskArray();
    });
  }

  // Create new task object, then store it in array
  static createTaskObject() {
    const btnModalSubmit = document.querySelector('#submit-button');

    btnModalSubmit.addEventListener('click', () =>
      Storage.storeTaskObject(Task.createTaskObject())
    );
  }
  // Create toDoCards from task objects
  static createToDoCard() {
    ToDoCard.createTaskCards();
  }
}

UI.toggleModal();
UI.resetModal();
UI.createTaskObject();
UI.createToDoCard();
