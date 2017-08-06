import { WanPage } from './app.po';

describe('wan App', () => {
  let page: WanPage;

  beforeEach(() => {
    page = new WanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
