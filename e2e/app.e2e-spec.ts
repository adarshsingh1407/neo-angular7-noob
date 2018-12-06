import { AppPage } from './app.po';

describe('neo-angular7-noob App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display app title correctly', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('NEO Angular7 Noob');
  });
});
