import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }


  getNavigation() {
    var helpTab = element(by.id('help'));
    return helpTab.click();
  }
}
