import Task from './task';

export default class Storage {
  constructor() {
    this.tasks;
  }
  // Push new task objects in array,
  // then set a new localStorage.
  static storeTaskObject() {
    const modalInputForm = document.getElementById('form');

    modalInputForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.tasks = this.getTaskArray();
      this.tasks.push(Task.createTaskObject());
      localStorage.setItem('taskArray', JSON.stringify(this.tasks));
    });
  }

  // Delete task object whenever delete button is clicked. (kinda cheezy)
  static deleteTaskObject() {
    window.addEventListener('click', (e) => {
      if (e.target.textContent === 'DELETE') {
        const cardDescription =
          e.target.parentNode.children[1].innerHTML.split(' ')[1];
        localStorage.setItem(
          'taskArray',
          JSON.stringify(
            this.getTaskArray().filter(
              (object) => object.description !== cardDescription
            )
          )
        );
        window.location.reload();
      }
    });
  }

  // Get local storage. If it's null, then return an empty array instead.
  static getTaskArray = () =>
    JSON.parse(localStorage.getItem('taskArray')) || [];
}
