import { browser, by, element } from 'protractor';

export class FormPage {
    navigateTo() {
        return browser.get('/add-sublease-form');
    }

    postAccommodees() {
        return element(by.id('accomodates1'));
    }

    postZipcode () {
        return element(by.id('zipcode1'));
    }

    postDescription () {
        return element(by.id('description1'));
    }

    stepperNext1() {
        return element(by.id('stepper1'));
    }

    flipStudio() {
        return element(by.id('studio_toggle'));
    }
}
