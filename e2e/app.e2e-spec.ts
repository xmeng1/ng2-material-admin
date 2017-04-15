import { Ng2MaterialAdminPage } from './app.po';

describe('ng2-material-admin App', () => {
  let page: Ng2MaterialAdminPage;

  beforeEach(() => {
    page = new Ng2MaterialAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
