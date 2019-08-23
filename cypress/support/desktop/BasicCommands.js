export const basicCom = {

    // switch language
    switch_language() {
        cy.get('img.country-icon')
            .first()
            .trigger('mouseover');
        cy.get('.dropdown-item > .country-icon')
            .click();
    },
    // switch language
    switch_language_for_mobile() {
        cy.get('#footer > section.license > label > select')
            //.trigger('mouseover')
        //cy.get('#footer > section.license > label > select > option:nth-child(2)')
            .select('English / ENG');
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
    first_button_main_page_for_mobile(){
        cy.get('#navigation > section > a.menu-bar-item.router-link-exact-active.router-link-active.active')
            .should('have.text', 'Главная');
    },
    first_button_main_page_English_version_for_mobile(){
        cy.get('#navigation > section > a.menu-bar-item.router-link-exact-active.router-link-active.active')
            .should('have.text', 'Main');
    },
};
