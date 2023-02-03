let taskArray = [];
export default class Storage {
  // Push newly created task objects into empty array,
  // then localStore the array for later uses
  static storeTaskObject(data) {
    taskArray.push(data);
    localStorage.setItem('arr', JSON.stringify(taskArray));
  }

  // Get the task array
  static getTaskArray() {
    console.log(JSON.parse(localStorage.getItem('arr')));
  }
}
