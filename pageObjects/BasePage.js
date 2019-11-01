export default class BasePage {
    open(path) {
        browser.url(path);
    }

    waitUsingFixedTimeout(time) {
        console.log(`Pausing for: ${time} seconds.`);
        browser.pause(time);

    }
}