export default class Storage {
  constructor() {
    this.tasks = [];
  }

  // Push newly created task objects into empty array,
  // then localStore the array for later uses
  static storeTaskObject(object) {
    const arr = this.getTaskArray();
    this.tasks = arr;
    this.tasks.push(object);
    localStorage.setItem('taskArray', JSON.stringify(this.tasks));
  }

  // Get local storage if it's null, then return empty array instead
  static getTaskArray() {
    return JSON.parse(localStorage.getItem('taskArray')) || [];
  }
}
