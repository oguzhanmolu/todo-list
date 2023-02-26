import UI from './modules/UI';
import Storage from './modules/storage';
Storage.storeTaskObject();
UI.toggleModal();
UI.resetModalForm();
UI.createToDoCard();
