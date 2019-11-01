const config = require('../config/main-config');
//const contactUsPage = require('../pageObjects/contactUsPage');
const homePage = require('../pageObjects/HomePage');
//const { homePageTitle, homePageUrl, successfulSubmissionUrl, contactUsPageTitle, contactUsPageUrl } = require('../utils/constants');
const constants = require('../utils/constants');
const dataGenerators = require('../utils/dataGenerators');
import contactUsPage from '../pageObjects/ContactUsPage';

describe("Home Page Tests:", () => {
    beforeEach(function () {
        contactUsPage.open();      
    });

    it("should check that the title and the URL on the contact us are correct", () => {
        console.log(browser.getTitle());
        console.log(browser.getUrl());
        expect(browser.getTitle()).to.equal(constants.contactUsPageTitle);
        expect(browser.getUrl()).to.equal(constants.contactUsPageUrl);
    });

    it("should navigate to the contact us page and submit the form successfuly", () => {
        contactUsPage.enterAllDetailsInForm(config.firstName, config.lastName, dataGenerators.generateRandomEmailAddress(), dataGenerators.gererateRandomString());      
        contactUsPage.submitButton.click();
        console.log(browser.getUrl());
        expect(browser.getUrl()).to.equal(constants.successfulSubmissionUrl);       
    });
});