import { basicCom } from "@support/desktop/BasicCommands";
import { auth } from "@support/desktop/Authorization";
let money;
let money2;

describe("Casino", () => {
  it("C636575 - Result", function () {
    auth.login2();
    basicCom.casino_button();
    basicCom.casino_search("Ice Wolf");
    cy.wait(1000);
    basicCom.assert_casino_for_mobile();
  });
  it("C636543- assert category", function () {
    auth.login2();
    basicCom.casino_button();
    basicCom.assert_casino_category();
  });
  it("C2153441- assert providers", function () {
    auth.login2();
    basicCom.casino_button();
    basicCom.assert_casino_providers();
  });
  it("C636544 - open casino games", function () {
    cy.get(".level-right > :nth-child(1) > .button")
      .click();
    auth.login();
    basicCom.casino_button();
    cy.wait(2000);
    //cy.get('#casino > main > div > div')
    cy.get("#casino > main > div > div > div > div > div.vue-recycle-scroller__item-wrapper > div:nth-child(1) > div > div:nth-child(1) > section > div.game-card-overview > button")
      .click({ force: true });
    basicCom.assert_casino_for_mobile();
  });
  it("C636545 - add favorites casino games", function () {
    auth.login();
    basicCom.casino_button();
    cy.wait(2000);
    //cy.get('#casino > main > div > div')
    cy.get("#casino > main > div > div > div > div > div.vue-recycle-scroller__item-wrapper > div:nth-child(1) > div > div:nth-child(1) > section > div.game-card-overview > div > button")
      .click({ force: true });
    cy.get(".favorites")
      .click();
    basicCom.assert_casino_for_mobile();
  });
  it("C2150746 - remove favorites casino games", function () {
    auth.login();
    basicCom.casino_button();
    cy.wait(2000);
    //cy.get('#casino > main > div > div')
    cy.get("#casino > main > div > div > div > div > div.vue-recycle-scroller__item-wrapper > div:nth-child(1) > div > div:nth-child(1) > section > div.game-card-overview > div > button")
      .click({ force: true });
    cy.get(".favorites")
      .should("not.exist");
  });
  it("C1678732 - Jackpot", function () {
    basicCom.casino_button();
    cy.wait(2000);
    cy.get(".jackpot-panel-value-container > :nth-child(3)")
      .invoke("text").then((price) => {
        money = price;
      }).then(() => {
        cy.wait(10000);
      }).then(() => {
        cy.get(".jackpot-panel-value-container > :nth-child(3)")
        .invoke("text").then((price2) => {
          money2 = price2;
        }).then(() => {
          expect(Number(money)).to.be.lessThan(Number(money2));
        });
      });
  });
});

