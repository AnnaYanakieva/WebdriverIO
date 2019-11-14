import BasePage from './BasePage';

class ContactUsPage extends BasePage {
    get firstName() {
        return $("//input[@name='first_name']");
    }
    get lastName() {
        return $("//input[@name='last_name']");
    }

    get emailAddress() {
        return $("[name='email']");
    }

    get commentsField() {
        return $("[name='message']");
    }

    get submitButton() {
        return $("[value='SUBMIT']");
    }

    get resetButton() {
        return $("[value='RESET']");
    }

    open() {
        
        super.open('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
    }

    enterAllDetailsInForm(firstName, lastName, email, comments) {
        if (firstName) {
            this.firstName.setValue(firstName);
        }
        if (lastName) {
            this.lastName.setValue(lastName);
        }
        if (email) {
            this.emailAddress.setValue(email);
        }
        if (comments) {
            this.commentsField.setValue(comments);
        }
    }

};
//module.exports = new ContactUsPage();
export default new ContactUsPage();