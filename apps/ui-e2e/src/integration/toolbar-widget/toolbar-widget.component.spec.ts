describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=toolbarwidgetcomponent--primary'));
  it('should render the component', () => {
    cy.get('charts-demo-toolbar-widget').should('exist');
  });
});