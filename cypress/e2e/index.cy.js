describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render a heading', () => {
    cy.get('h1').should('exist');
  });

  it('renders multiple component cards', () => {
    cy.get('[data-cy=component-card]').each((card) => {
      cy.wrap(card).should('have.attr', 'href').and('not.eq', 'undefined');
    });
  });
});
