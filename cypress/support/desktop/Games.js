export const games = {
  //перейти в игры
  choose_games () {
    cy.get("[href=\"/games\"]")
        .click();
  },
  //выбрать первую игру
  play_games () {
    cy.get(":nth-child(1) > .game > .preview > .buttons-container")
            .click();
  },
  //проверить, что окно игры активно
  games_visible () {
    cy.get("main .game-container", { timeout: 10000 })
            .should("not.be.empty");
  },
  //проверить, что произошел релирект на вкладку "казино"
  casino_active () {
    cy.get("#header > div.level.header__line--bottom > div:nth-child(1) > nav > div.level > div > a.navigation-item.df-aic-jcc.router-link-exact-active.active")
            .should("exist");
  },
};
