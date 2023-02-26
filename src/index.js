import UI from './modules/UI';
import Storage from './modules/storage';
Storage.storeTaskObject();
Storage.deleteTaskObject();
UI.createToDoCard();
UI.toggleModal();
UI.resetModalForm();
