const assert = require('assert');

describe('Chai assertions', () => {
    beforeEach(function () {
        browser.setWindowSize(1800, 1200);
        browser.url('/');

    })
    it('Test webdriveruni login portal', () => {
        const clickByID = $('#login-portal');
        clickByID.click();

        browser.switchWindow('WebDriver | Login Portal');

        const loginPageTitle = browser.getTitle();
        const loginPageUrl = browser.getUrl();

        expect(loginPageTitle).to.contains('WebDriver | Login Portal');
        expect(loginPageUrl).to.contains('Login-Portal');

    });
});