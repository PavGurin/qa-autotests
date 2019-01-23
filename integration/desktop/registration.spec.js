describe('Registration tests', () => {
    it('Fast registration', () => {
        cy.visit('/');
        
        // Click on the "Registration" button
        cy.get('.level-right > :nth-child(2) > .button').click();

        cy.get('.modal-container').as('modal');
        cy.get('@modal')
            .find('form').find('.row_checkbox').find('.checkmark')
            .click();

        cy.get('@modal').find('button').click();
        cy.get('@modal').get('.user-info').get('.user-info__content__item__value');
        cy.screenshot();
    });
});
