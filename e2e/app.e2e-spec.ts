import { GHsearchappPage } from './app.po';

describe('ghsearchapp App', function() {
  let page: GHsearchappPage;

  beforeEach(() => {
    page = new GHsearchappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
