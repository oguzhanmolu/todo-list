import Task from './task';
import Storage from './storage';

// Variables
const modal = document.getElementById('modal');
const modalInputForm = document.getElementById('form');
const btnAddTask = document.getElementById('add-new-task-group');
const btnModalSubmit = document.querySelector('#submit-button');

// Toggle modal on/off when add button is clicked
function toggleModal() {
  // On
  btnAddTask.addEventListener('click', () => {
    modal.style.display = 'block';
  });
  // Off
  btnModalSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'none';
    Storage.storeTaskObject(Task.createTaskObject());
  });
}

// Reset modal input
function resetModal() {
  btnAddTask.addEventListener('click', () => {
    modalInputForm.reset();
    Storage.getTaskArray();
  });
}

export default function controlDisplay() {
  toggleModal();
  resetModal();
}
