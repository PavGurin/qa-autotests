export const basicCom = {

    // switch language
    switch_language() {
        cy.get('.button > .image')
            .trigger('mouseover');
        cy.get('.dropdown-item > .image')
            .click();
    },

    // switch to mobile version
    switch_to_mobile(){
        // click mobile version button
        cy.get('div.mobile > div > svg')
          .click();
    }
};
