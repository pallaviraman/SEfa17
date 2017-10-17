import { browser, by, element } from 'protractor';

export class ListPage {
  navigateTo() {
    return browser.get('/listing-detail');
  }
}