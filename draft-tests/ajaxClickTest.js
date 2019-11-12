describe('Test that the button is clickable once the Ajax loader compleates loading', function () {
    it('Attempt to click the button asap', () => {
        browser.url('/Ajax-Loader/index.html');
        browser.click('#button1555');
    });

    it('Attempt to click the button after 7 seconds', () => {
        browser.url('/Ajax-Loader/index.html');
        this.timeout(20000);
        //browser.setTimeout({ 'implicit': 30000 })
        browser.pause(10000);
        browser.click('#button1');
        browser.pause(7000);
    });

});