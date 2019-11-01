const assert = require('assert');

describe('Selectors Test', () => {
    beforeEach(function () {
        browser.setWindowSize(1800, 1200);
        browser.url('/');
        
    })
    it('By ID', () => {
        const clickByID = $('#contact-us');
        clickByID.click();
        console.log(`Home Page Header: ${browser.getTitle()}`);
        browser.pause(2000);

        browser.switchWindow('WebDriver | Contact Us');
        console.log(`Contact Us Page Header: ${browser.getTitle()}`);
        
    });
});