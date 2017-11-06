import { ProjectProUiPage } from './app.po';

describe('project-pro-ui App', () => {
  let page: ProjectProUiPage;

  beforeEach(() => {
    page = new ProjectProUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
