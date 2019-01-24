describe('Authorization tests', () => {
    it('Login with created account', () => {

        cy.visit('/');

        assert.isNull(localStorage.getItem('token'), 'Token is empty');

        // Click on the "Login" button
        cy.get('.level-right > :nth-child(1) > .button').click();

        cy.fixture('example.json').then(userData => {
            cy.get('.modal-container').as('modal');
            cy.get('@modal').get('input[name=login]').type(userData.login);
            cy.get('@modal').get('input[name=password]').type(userData.password);
            cy.get('button.modal-button[type=submit]').click();
        });
        cy.get('.user-name.text-with-arrow').should(() => {
            assert.isString(localStorage.getItem('token'), 'Token had set');
        });
    });
});
