import { navReg } from "@support/desktop/NavReg";
import { auth } from "@support/desktop/Authorization";

describe("favourites", () => {
  before(() => {
    cy.visit("");
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
      .click();
    cy.wait(2000);
  });
  beforeEach(function () {
    Cypress.Cookies.preserveOnce("session_id");
  });
  it("add  matches in favourites", function () {
    navReg.click_register();
    navReg.sign_up();
    cy.wait(2000);
    navReg.close_new_user_info();
    cy.wait(1000);
    //добавить матч из раздела "Популярное" в избранное
    cy.get(".tabular-section:nth-child(2) .match-table-match-row .favourite-icon").first()
        .click();
    //перейти в линию
    cy.get("[href=\"/bets/new/prematch\"]")
        .click();
    //проверить, что в избранном есть матч
    cy.get(".bets-navigation .icon-star").click();
    cy.get(".favourites-list .match-info")
      .should("exist");
  });
  //Линия -> добавить турнир в избранное -> перейти в линию -> проверить, что в избранном есть турнир
  it("add  tournament in favourites", function () {
    cy.get(".icon-angle-left")
      .click();
    //найти первый турнир
    cy.get(".sport-list .list-item").first()
        .click();
    cy.get(".category-list-title + .list-item").first()
      .click();
    //добавить в избранное
    cy.get("div.tournament-list .list-item svg.icon-star").first()
        .click();
    cy.wait(2000);
    cy.get(".bets-navigation .icon-star").first()
        .click();
    //проверить, что в избранном есть турнир
    cy.get(".favourites-list .favorite-tournament")
        .should("exist");
  });
});
