const { modalPopupText, ajaxPopupText } = require('../utils/constants');
import popupAlertsPage from '../pageObjects/PopupAlertsPage';

describe('Popup and alerts page tests', () => {
    beforeEach(() => {
        popupAlertsPage.open();
    });

    it('should click on the JavaScript alert button and verify the message', () => {
        popupAlertsPage.jsAlertButton.click();

        const text = browser.getAlertText();

        browser.acceptAlert();
    })

    it('should click on the Modal alert popup button and verify the message', () => {
        popupAlertsPage.modalPopupButton.click();

        popupAlertsPage.modalPopupText.waitForExist(5000);
        popupAlertsPage.waitUsingFixedTimeout(3000);

        const text = popupAlertsPage.modalPopupText.getText();
        console.log("ALERT TEXT:" + text);

        expect(text).to.equal(modalPopupText);

        popupAlertsPage.PopupCloseButton.click();
    })

    it('should click on the Ajax loader button and verify the message', () => {
        popupAlertsPage.ajaxLoaderButton.click();

        browser.setTimeout({ 'implicit': 20000 });

        popupAlertsPage.ajaxClickMeButton.click();

        popupAlertsPage.modalPopupText.waitForExist(5000);
        popupAlertsPage.waitUsingFixedTimeout(3000);

        const text = popupAlertsPage.modalPopupText.getText();

        expect(text).to.equal(ajaxPopupText);

        popupAlertsPage.PopupCloseButton.click();
    })
});
