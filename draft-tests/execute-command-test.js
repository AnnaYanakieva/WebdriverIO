describe("Inject javascript into the target website", () => {
    beforeEach(function () {
        browser.url("./");
    });
    it("Change webdriveruni background color", () => {
        browser.execute(() => {
            return (document.body.style.backgroundColor = 'blue');
        });
        browser.pause(5000);
    });
});