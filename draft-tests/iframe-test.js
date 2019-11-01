describe("IFRAME TEST", () => {
    beforeEach(() => {
        browser.setWindowSize(1800, 1200);
        browser.url("./");
    });
    it("should test the clicking of a given button housed within an iframe", () => {
        const linkToIFramePage = $('#iframe');
        //linkToDropdownPage.scrollIntoView();
        linkToIFramePage.click();

        browser.pause(2000);
        browser.switchWindow("WebDriver | IFrame");

        const iframe = $("#frame");
        browser.switchToFrame(iframe);

        const findOutMoreButton = $("//*[text()='Our Products']");
        findOutMoreButton.waitForDisplayed();
        findOutMoreButton.click();
        browser.pause(5000);
 
    });
});