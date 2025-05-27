describe('Eesti.ee popular services tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });
 
  it('Отображаются популярные услуги', () => {
    cy.contains('Populaarsemad teenused').should('be.visible');
    cy.get('[data-testid="popular-services"] a') // приблизительный селектор
      .should('have.length.greaterThan', 1);
  });
 
  it('Переход по первой популярной услуге', () => {
    cy.get('[data-testid="popular-services"] a').first().click();
    cy.url().should('include', '/et/'); // URL может быть разным
  });
});