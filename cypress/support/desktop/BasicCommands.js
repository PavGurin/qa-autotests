export const basicCom = {

    // switch language
    switch_language() {
        cy.get('img.country-icon')
            .first()
            .trigger('mouseover');
        cy.get('.dropdown-item > .country-icon')
            .click();
    },

    // switch to mobile version
    switch_to_mobile(){
        // click mobile version button
        cy.get('div:nth-child(2) > svg')
          .first()
          .click();
    },
    live_games_button_for_mobile(){
    cy.get('#navigation > section > a:nth-child(5)')
        .click();
    },
    games_button_for_mobile(){
        cy.get('#navigation > section > a:nth-child(3)')
            .click();
    },
};
