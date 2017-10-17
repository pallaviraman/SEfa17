import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/home');
  }

  getParagraphText() {
    return element(by.id('title')).getText();
  }
  getIsDisplayed() {
      return element(by.id('gator_logo')).getAttribute('svgIcon');
  }
  carouselElement(){
      return element(by.id('listClick'));
  }
}