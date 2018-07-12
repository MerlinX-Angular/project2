import { SavoPage } from './app.po';

describe('savo App', () => {
  let page: SavoPage;

  beforeEach(() => {
    page = new SavoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
