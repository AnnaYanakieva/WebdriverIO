describe("isExisting, isSelected, isDisplayed", () => {
    beforeEach(() => {
        browser.setWindowSize(1800, 1200);
        browser.url("./");
    });
    it("should validate state of checkbox", () => {
        const linkToDropdownPage = $('#dropdown-checkboxes-radiobuttons');
        //linkToDropdownPage.scrollIntoView();
        linkToDropdownPage.click();

        browser.pause(2000);
        browser.switchWindow('WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)');

        const checkbox = $("//input[@value='option-1']");
        expect(checkbox.isExisting()).to.be.true;    
        expect(checkbox.isSelected()).to.be.false;    
        expect(checkbox.isDisplayed()).to.be.true;    
        
        console.log(`Is existing: ${checkbox.isExisting()}`);
        console.log(`Is selected: ${checkbox.isSelected()}`);
        console.log(`Is displayed: ${checkbox.isDisplayed()}`);
    });
});