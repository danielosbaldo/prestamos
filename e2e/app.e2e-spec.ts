import { PrestamosPage } from './app.po';

describe('prestamos App', () => {
  let page: PrestamosPage;

  beforeEach(() => {
    page = new PrestamosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
