describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=chatlinewidgetcomponent--primary'));
  it('should render the component', () => {
    cy.get('charts-demo-chat-line-widget').should('exist');
  });
});