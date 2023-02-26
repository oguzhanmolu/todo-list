import ToDoCard from './toDoCard';

export default class UI {
  // Toggle modal on/off
  static toggleModal() {
    const modal = document.getElementById('modal');
    const btnAddTask = document.getElementById('add-new-task-group');
    const modalInputForm = document.getElementById('form');
    const header = document.getElementById('header');
    const main = document.querySelector('main');

    // On
    btnAddTask.addEventListener('click', () => {
      modal.style.display = 'block';
      header.style.filter = 'blur(1px)';
      main.style.filter = 'blur(1px)';
    });

    // Toggle off on submit
    modalInputForm.addEventListener('submit', (e) => {
      e.preventDefault();
      modal.style.display = 'none';
      header.style.filter = 'blur(0px)';
      main.style.filter = 'blur(0px)';
    });

    //  Toggle off when keydown==='Escape'
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modal.style.display = 'none';
        header.style.filter = 'blur(0px)';
        main.style.filter = 'blur(0px)';
      }
    });
  }

  // Reset modal input
  static resetModalForm() {
    const modalInputForm = document.getElementById('form');

    // On submit
    modalInputForm.addEventListener('submit', () => {
      modalInputForm.reset();
    });

    // When esc is pressed
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') modalInputForm.reset();
    });
  }

  // Create toDoCards from task objects
  static createToDoCard() {
    ToDoCard.createCardOnSubmit();
    ToDoCard.createAllTaskCards();
    ToDoCard.createTodayTaskCards();
    ToDoCard.createUpcomingTaskCards();
    ToDoCard.createCardOnPageLoad();
  }
}
