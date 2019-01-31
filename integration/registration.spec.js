describe('Registration tests', () => {
    it('Fast registration', () => {
        cy.visit(Cypress.config('baseUrl'));

        cy.get('.header-button').last().click();

        cy.get('.modal-container').as('modal');
        cy.get('@modal')
            .find('form').find('.row_checkbox').find('.checkmark')
            .click();

        cy.get('@modal').find('button').click();
        cy.get('@modal').get('.user-info').get('.user-info__content__item__value');
        cy.screenshot();
    });
});
