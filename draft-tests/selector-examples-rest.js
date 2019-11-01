const assert = require('assert');

describe('Selectors Test', () => {
    beforeEach(function () {
        browser.setWindowSize(1800, 1200);
        browser.url('/');
        
    })
    it('By ID', () => {
        const clickByID = $('#contact-us');
        clickByID.click();
        browser.pause(2000);
    });
    it('By Xpath', () => {
        const clickByXpath = $("//h1[text()='CONTACT US']/../..");
        clickByXpath.click();
        browser.pause(2000);
    });
    it('By Css', () => {
        const clickByCss = $('#contact-us h1');
        clickByCss.click();
        browser.pause(2000);
    });
});