export const baseCom = {

    // switch language
    switch_language() {
        cy.get('.button > .image')
            .trigger('mouseover');
        cy.get('.dropdown-item > .image')
            .click();
    },
};
