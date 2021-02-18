export const favor = {

  casinoFavoritesAdd () {
    cy.get(".favorites")
      .should("exist")
      .click();
  },
  casinoFavoritesAssert () {
    cy.get(".casino-game-item")
      .should("exist");
  },
  casinoFavoritesRemove () {
    cy.get(".favorites")
      .should("not.exist");
  },
};
