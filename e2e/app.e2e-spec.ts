import { HomelyPage } from './app.po';

describe('homely App', () => {
  let page: HomelyPage;

  beforeEach(() => {
    page = new HomelyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
