import { HotelInsightPage } from './app.po';

describe('hotel-insight App', function() {
  let page: HotelInsightPage;

  beforeEach(() => {
    page = new HotelInsightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
