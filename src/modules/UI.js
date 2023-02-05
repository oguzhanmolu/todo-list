import Task from './task';
import Storage from './storage';
import ToDoCard from './toDoCard';

export default class UI {
  // Toggle modal on/off when add button is clicked
  static toggleModal() {
    const modal = document.getElementById('modal');
    const btnAddTask = document.getElementById('add-new-task-group');
    const form = document.getElementById('form');

    // On
    btnAddTask.addEventListener('click', () => {
      modal.style.display = 'block';
    });
    // Off
    form.addEventListener('submit', (e) => {
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
    form.addEventListener('submit', () =>
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
