module.exports = {
    generateRandomEmailAddress: () => {
        let email = "AutoFramework_" + Math.random().toString().replace('0.', '') + "@webdriveruni.com";
        return email;
    },

    gererateRandomString: () => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
}