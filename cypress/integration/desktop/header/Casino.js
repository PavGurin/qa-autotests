import { basicCom } from "@support/desktop/BasicCommands";
import { auth } from "@support/desktop/Authorization";
import { favor } from "@support/desktop/favourites";
let money;
let money2;

describe("Casino", () => {
  beforeEach(() => {
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
      .click();
    auth.loginNew();
    cy.wait(2000);

  });
  it("Result", function () {
    basicCom.more_button("Казино");
    basicCom.casino_search("Ice Wolf");
    cy.wait(1000);
    basicCom.assert_casino();
  });
  it("assert category", function () {
    basicCom.more_button("Казино");
    basicCom.assert_casino_category();
  });

  it("C636545 - assert favorites casino games", function () {
    basicCom.more_button("Казино");
    cy.wait(4000);
    cy.get(".game-card-favorite-button")
      .first()
      .click({ force: true });
    cy.wait(2000);
    favor.casinoFavoritesAdd();
    cy.wait(1000);
    favor.casinoFavoritesAssert();

  });
  it("C2150746 - remove favorites casino games", function () {
    basicCom.more_button("Казино");
    cy.wait(4000);
    cy.get(".game-card-favorite-button")
      .first()
      .click({ force: true });
    favor.casinoFavoritesRemove();
  });
  it("C1678732 - Jackpot", function () {
    basicCom.more_button("Казино");
    cy.wait(2000);
    cy.get(".num-holder-fade > :nth-child(3)")
      .invoke("text").then((price) => {
        money = price;
      }).then(() => {
        cy.wait(10000);
      }).then(() => {
        cy.get(".num-holder-fade > :nth-child(3)")
        .invoke("text").then((price2) => {
          money2 = price2;
        }).then(() => {
          expect(Number(money)).to.be.lessThan(Number(money2));
        });
      });
  });
});

