describe('Switch to mobile version', () => {
    it('switch to mobile view', () => {

        cy.visit(Cypress.config('baseUrl'));
        cy.get('.mobile__text').click();
    });
});
