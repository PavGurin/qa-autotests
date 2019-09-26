export const games = {
     //перейти в игры
    choose_games() {
        cy.get('a:nth-child(4) > div > div.item-text')
            .click();
    },
    //нажать на кнопку "играть"
    play_games() {
        cy.get('#main-container > main > div > div > div:nth-child(1) > div > div.preview > div > button.button.play-button')
            .click();
    },
    //проверить, что окно игры активно
    games_visible() {
        cy.get('#main-container > main > article > div > div', {timeout: 10000})
            .should('not.be.empty');
    },
    //проверить, что произошел релирект на вкладку "казино"
    casino_active() {
        cy.get('#header > div.level.header__line.header__line--bottom > div:nth-child(1) > nav > div.level > div > a.navigation-item.df-aic-jcc.active')
            .should('exist')
    },
};