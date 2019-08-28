const available_for_broadcast_element = () => cy
    .get('.matches-block-content')
    .find('tbody > tr > td.match-details > div.match-translation > svg')
    .not('.disabled')
    .first();

const match_with_translation = () => cy
    .get('div.main-content', {timeout:5000})
    //.find('.match-translation > .icon > path')
    //.find('td.match-details')
    .find('td.match-details > div.match-translation')
    .prev('td.match-details > div.match-teams')
    .first();


export const broadcast = {
//нажать на  кнопку "нажать на кейс новичок"
    search() {
        available_for_broadcast_element()
            .click();
    },
    open() {
        cy.get('.translation-iframe', {timeout:6000})
            .should('exist');
    },
    play() {
        cy.get('#videoplayer > div > div.container > div.player-poster.clickable > div > svg > path')
            .click();


    },
    open_match() {
        match_with_translation()
            .click();
    },
    close_match() {
        cy.get('#main-container > div.translation-container > div.translation-container-close')
            .click();
    },
    should_close() {
        cy.get('.translation-iframe')
            .should('not.exist');
    },
    should_exist() {
        cy.get('.translation-iframe')
            .should('exist');
    },
    moving_container() {
        cy.get('#main-container > div.translation-container > div.translation-container-drag')
            .trigger('mousedown');
    },
    moving_container2() {
        cy.get('#main-container > div.translation-container > div.translation-container-drag',
          {timeout:5000})
            .trigger('mouseleave');
    },
    button_moving_exist() {
        cy.get('#main-container > div.translation-container > div.translation-container-drag')
            .should('exist');
    },
    };
