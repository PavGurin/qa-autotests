it('C16283', () => {
    cy.visit('/');

    cy
        .get('header .level-right button.green')
        .click();

    cy
        .get('.modal-container .form')
        .last()
        .as('register-form');

    cy
        .get('@register-form')
        .find('.country-select input')
        .should('have.value', 'Russia (Россия)');

    cy
        .get('@register-form')
        .find('input[type="checkbox"]')
        .check();

    cy
        .get('@register-form')
        .find('.button-container button')
        .click()
        .wait(1000);

    cy
        .get('.modal-container .user-info .user-info__content__item')
        .then(($el) => {
            const login = $el[0].lastChild.outerText;
            const password = $el[1].lastChild.outerText;

            expect(login).not.to.be.empty;
            expect(password).not.to.be.empty;

            cy.log(`Логин - ${login}, Пароль - ${password}`);
        });
});
