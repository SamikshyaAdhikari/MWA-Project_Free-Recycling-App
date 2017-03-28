import { EShareAppClientPage } from './app.po';

describe('e-share-app-client App', function() {
  let page: EShareAppClientPage;

  beforeEach(() => {
    page = new EShareAppClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
