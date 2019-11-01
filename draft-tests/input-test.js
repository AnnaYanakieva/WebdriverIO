describe("Test contact us logic via webdriveruni", () => {
    beforeEach(function () {
        browser.setWindowSize(1800,1200);
        browser.url("./");
    });
    it("Test the contact us page", () => {
        const contactUsButton = $("//h1[text()='CONTACT US']");
        contactUsButton.click();
        browser.switchWindow("WebDriver | Contact Us");

        const firstName = $("[name='first_name']");
        firstName.waitForDisplayed();
        firstName.addValue("Add your text here");
        browser.pause(2000);

        firstName.clearValue();
        browser.pause(2000);

        firstName.setValue("Hello how are you?");
        browser.pause(2000);

    });
});