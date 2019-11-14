import BasePage from './BasePage';
const config = require('../config/main-config.js');

class PopupAlertsPage extends BasePage {

    get jsAlertButton() {
        return $('#button1');
    }

    get modalPopupButton() {
        return $('#button2');
    }

    get ajaxLoaderButton() {
        return $('#button3');
    }

    get PopupCloseButton() {
        return $("//button[contains(text(), 'Close')]");
    }

    get modalPopupText() {
        return $(".modal-body p");
    }

    get ajaxClickMeButton() {
        return $('#button1');
    }

    open() {
        super.open(config.popupAndAlertsUrl);
    }
}
export default new PopupAlertsPage();