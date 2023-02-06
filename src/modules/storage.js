let arr = [];
export default class Storage {
  constructor() {
    this.tasks = [];
  }

  // Push newly created task objects into empty array,
  // then localStore the array for later uses
  static storeTaskObject(object) {
    arr.push(object);
    this.tasks = arr;
    localStorage.setItem('taskArray', JSON.stringify(this.tasks));
  }

  // Get the task array
  static getTaskArray() {
    return JSON.parse(localStorage.getItem('taskArray'));
  }
}
