export const games = {
     //перейти в игры
    choose_games() {
        cy.get(':nth-child(1) > .case > .case-info > .case-info-wrapper > .case-info-contains')
            .click();
    },
    //нажать на кнопку "играть"
    play_games() {
        cy.get('#main-container > div.content-wrapper > div > div > div > div:nth-child(1) > div > div.preview > div > button.button.play-button')
            .click();
    },
    //проверить, что окно игры активно
    games_visible() {
        cy.get('#main-container > div.content-wrapper > div > section')
            .should('be.visible');
    },
    //проверить, что произошел релирект на вкладку "казино"
    casino_active() {
        cy.get('#header > div.container.level.header__line.header__line--bottom > div:nth-child(1) > nav > div.level > div > a.navigation-item.df-aic-jcc.active')
            .should('have.class', 'navigation-item df-aic-jcc active')
    },
};