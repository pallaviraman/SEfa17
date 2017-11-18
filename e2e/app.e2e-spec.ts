import { FormPage } from './form.po';
import { AppPage } from './app.po';
import {HelpPage} from './help.po'
import {HomePage} from './home.po';
import {ListPage} from './list.po';
import {browser, element, by, Key, ExpectedConditions} from 'protractor';

describe('course-project App', () => {
  let homepage: HomePage;
  let helppage: HelpPage;
  let apppage: AppPage;
  let listpage: ListPage;
  let formpage: FormPage;

  beforeEach(() => {
    homepage = new HomePage();
    helppage = new HelpPage();
    apppage = new AppPage();
    listpage = new ListPage();
    formpage =  new FormPage();
    browser.get('slide-toggle');
  });

  it('should display welcome message', () => {
    homepage.navigateTo();
    expect(homepage.getParagraphText()).toEqual('Gator Housing');
  });

  it('Logo displayed', () => {
    homepage.navigateTo();
    expect(homepage.getIsDisplayed()).toEqual('logo');
  });

  it('navigation to Help', () => {
    apppage.getNavigation().then(function(){
      expect(helppage.navigateTo);
    })
  });

  it('navigated to Listing from carousel', () => {
    homepage.navigateTo();
    homepage.carouselElement().click().then(function(){
        expect(listpage.navigateTo());
    })
  });

  it ('should show place in places', () => {
    homepage.navigateTo();
    const input1 = homepage.postPlace();
    input1.click();
    input1.sendKeys('Gainesville');
    const input2 = homepage.clickStartDate();
    input2.click();
    browser.sleep(1000);
  });

  it ('should go to form and write', () => {
    formpage.navigateTo();
    let input3 = formpage.postAccommodees();
    input3.sendKeys('I am working yay!!');
    input3 = formpage.postZipcode();
    input3.sendKeys('32608');
    input3 = formpage.postDescription();
    input3.sendKeys('Good morning class. I am Dilip Kunderu speaking and struggling with e2e testing :)');
    browser.sleep(2000);
  });


  it('should go to step 2 of stepper', () => {
    homepage.navigateTo();
    formpage.navigateTo();
    const input = formpage.stepperNext1();
    input.click();
    const input1 = formpage.flipStudio();
    input1.click();
    browser.sleep(5000);
  });

   
});

// describe('course-project App1', () => {
//   let homepage: HomePage;
//   let helppage: HelpPage;
//   let apppage: AppPage;
//   let listpage: ListPage;
//   let formpage: FormPage;

//   beforeEach(() => {
//     homepage = new HomePage();
//     helppage = new HelpPage();
//     apppage = new AppPage();
//     listpage = new ListPage();
//     formpage =  new FormPage();
//     browser.get('slide-toggle');
//   });
// it('should select an option', () => {
//   homepage.navigateTo();
//   formpage.navigateTo();
//   const input = formpage.stepperNext1();
//   input.click();
//   element(by.id('radiogrp1')).all(by.tagName('md-radio-button')).get(0).click();
//   browser.sleep(5000);
// });
// });
