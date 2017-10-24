import { browser, by, element } from 'protractor';

export class HelpPage {
  navigateTo() {
    return browser.get('/help');
  }
}