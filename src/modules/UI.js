import ToDoCard from './toDoCard';
export default class UI {
  // Toggle modal on/off
  static toggleModal() {
    const header = document.getElementById('header');
    const mainTitle = document.getElementById('main-title');
    const taskDisplayArea = document.getElementById('task-display-area');
    const modal = document.getElementById('modal');
    const modalInputForm = document.getElementById('form');
    const btnAddTask = document.getElementById('add-new-task-group');

    function showModal() {
      modal.style.display = 'block';
      header.style.filter = 'blur(1px)';
      taskDisplayArea.style.filter = 'blur(1px)';
      mainTitle.style.filter = 'blur(1px)';
      btnAddTask.style.filter = 'blur(1px)';
    }
    function hideModal() {
      modal.style.display = 'none';
      header.style.filter = 'blur(0px)';
      taskDisplayArea.style.filter = 'blur(0px)';
      mainTitle.style.filter = 'blur(0px)';
      btnAddTask.style.filter = 'blur(0px)';
    }

    // On
    btnAddTask.addEventListener('click', () => showModal());

    // Toggle off on submit
    modalInputForm.addEventListener('submit', (e) => {
      e.preventDefault();
      hideModal();
    });

    //  Toggle off when keydown==='Escape'
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        hideModal();
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
    ToDoCard.createCardOnPageLoad();
    ToDoCard.createCardOnSubmit();
    ToDoCard.createAllTaskCards();
    ToDoCard.createTodayTaskCards();
    ToDoCard.createUpcomingTaskCards();
  }
}
