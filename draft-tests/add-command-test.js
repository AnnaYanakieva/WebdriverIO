const assert = require('assert');

describe('Add command', () => {
    beforeEach(function () {
        browser.setWindowSize(1800, 1200);
        browser.url('/');
    });

    it('Test webdriveruni login portal', () => {
        const clickByID = $('#login-portal');
        clickByID.click();

        browser.switchWindow('WebDriver | Login Portal');

        const loginPageData = browser.getUrlAndTitle();

        expect(loginPageData.title).to.contains('WebDriver | Login Portal');
        expect(loginPageData.url).to.contains('Login-Portal');
    });
});