describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=chartwidgetcomponent--primary'));
  it('should render the component', () => {
    cy.get('charts-demo-chart-widget').should('exist');
  });
});