export const basicCom = {

    // switch language
    switch_language() {
        cy.get('img.country-icon')
            .trigger('mouseover');
        cy.get('.dropdown-item > .country-icon')
            .click();
    },

    // switch to mobile version
    switch_to_mobile(){
        // click mobile version button
        cy.get('.mobile > .svg-icon-container > .svg-icon')
          .click();
    }
};
