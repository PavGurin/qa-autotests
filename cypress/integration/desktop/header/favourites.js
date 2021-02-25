import { prof } from "@support/desktop/Profile";
import { navReg } from "@support/desktop/NavReg";

describe("favourites", () => {
  it("add  matches in favourites", function () {
    navReg.click_register();
    navReg.sign_up();
    cy.wait(2000);
    navReg.close_new_user_info();
    cy.get(":nth-child(1) > .match-body > .match-row > .match-details > .match-favourite > .favourite-icon > .loading-item > .loading-item__wrapper > .icon-star > path")
      .click();
    cy.get(".sport-conten > .sport-title")
      .click();
    cy.get(".match-info")
      .should("exist");
    cy.reload();
    cy.get(".sport-conten > .sport-title", { timeout: 10000 })
      .click();
    cy.get(".match-info")
      .should("exist");
  });
  it("add  tournament in favourites", function () {
    navReg.click_register();
    navReg.sign_up();
    cy.wait(2000);
    navReg.close_new_user_info();
    cy.get(":nth-child(1) > .match-body > .match-row > .match-details > .match-favourite > .favourite-icon > .loading-item > .loading-item__wrapper > .icon-star > path")
      .click();
    cy.get(".sport-conten > .sport-title")
      .click();
    cy.get(".match-info")
      .should("exist");
    cy.reload();
    cy.get(".sport-conten > .sport-title", { timeout: 10000 })
      .click();
    cy.get(".match-info")
      .should("exist");
  });
});
