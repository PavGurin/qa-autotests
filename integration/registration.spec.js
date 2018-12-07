describe('Registration tests', () => {
    it('Fast registration', () => {
        cy.visit('http://master.tests.1win-prodlike.tech/');

        cy.get('.header-button').last().click();

        cy.get('.modal-container').as('modal');
        cy.get('@modal')
            .find('form').find('.row_checkbox').find('.checkmark')
            .click();

        cy.get('@modal').find('button').click();
    });
});
