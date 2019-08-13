const available_for_broadcast_element = () => cy
    .get('.matches-block-content')
    .find('.match-translation > .icon > path')
    .not('.disabled')
    .first();
export const broadcast = {
//нажать на  кнопку "нажать на кейс новичок"
    search() {
        available_for_broadcast_element()
            .click();
    },
    open() {
        cy.get('.translation-iframe')
            .should('exist');
    },
    };