import { browser, by, element } from 'protractor';

export class FormPage {
    navigateTo() {
        return browser.get('/add-sublease-form');
    }
}
