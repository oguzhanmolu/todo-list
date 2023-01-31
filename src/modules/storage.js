import Task from './task';
export default class Storage {
  saveTask() {
    localStorage.setItem('taskObject', JSON.stringify(new Task()));
  }
  getItem() {
    let taskObject = localStorage.getItem(JSON.parse('taskObject'));
    console.log(taskObject);
  }
}
