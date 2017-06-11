import { AngularsStartPage } from './app.po';

describe('angulars-start App', () => {
  let page: AngularsStartPage;

  beforeEach(() => {
    page = new AngularsStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
