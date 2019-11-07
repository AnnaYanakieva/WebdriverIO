const assert = require('assert');

describe('Test webdriveruni homepage', () => {
    it('should validate wheteher the homepage title is correct', () => {
        browser.url('/');
        const title = browser.getTitle();
        assert.strictEqual(title, 'WebDriverUniversity.com');
    });
});