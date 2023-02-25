import UI from './modules/UI';
import Storage from './modules/storage';
Storage.storeTaskObject();
UI.toggleModalOn();
UI.resetModalForm();
UI.createToDoCard();
