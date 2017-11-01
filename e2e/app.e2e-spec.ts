import { AppPage } from './app.po';
import {HelpPage} from './help.po'
import {HomePage} from './home.po';
import {ListPage} from './list.po';

describe('course-project App', () => {
  let homepage: HomePage;
  let helppage: HelpPage;
  let apppage: AppPage;
  let listpage: ListPage;

  beforeEach(() => {
    homepage = new HomePage();
    helppage = new HelpPage();
    apppage = new AppPage();
    listpage = new ListPage();
  });

  // it('should display welcome message', () => {
  //   homepage.navigateTo();
  //   expect(homepage.getParagraphText()).toEqual('Gator Housing');
  // });

  it('Logo displayed', () => {
    homepage.navigateTo();
    expect(homepage.getIsDisplayed()).toEqual('logo');
  });

  it('navigation to Help', () => {
    apppage.getNavigation().then(function(){
      expect(helppage.navigateTo);
    })
  })

  it('navigated to Listing from carousel', () => {
    homepage.navigateTo();
    homepage.carouselElement().click().then(function(){
        expect(listpage.navigateTo);
    })
  })
});
