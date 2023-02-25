import Task from './task';

export default class Storage {
  constructor() {
    this.tasks;
  }

  // Push newly created task objects into empty array,
  // then localStore the array for later uses
  static storeTaskObject() {
    const modalInputForm = document.getElementById('form');

    modalInputForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.tasks = this.getTaskArray();
      this.tasks.push(Task.createTaskObject());
      localStorage.setItem('taskArray', JSON.stringify(this.tasks));
    });
  }

  // Get local storage if it's null, then return empty array instead
  static getTaskArray = () =>
    JSON.parse(localStorage.getItem('taskArray')) || [];
}
