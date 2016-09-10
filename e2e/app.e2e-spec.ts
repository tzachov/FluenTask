import { FluenTaskPage } from './app.po';

describe('fluen-task App', function() {
  let page: FluenTaskPage;

  beforeEach(() => {
    page = new FluenTaskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
