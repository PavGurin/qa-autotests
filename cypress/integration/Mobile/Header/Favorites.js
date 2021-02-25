import { basicCom } from "@support/desktop/BasicCommands";
import { auth } from "@support/desktop/Authorization";
let NameTeams;
let NameTeams2;

describe("Избранное", () => {
  beforeEach(function () {
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);
    auth.login_for_mobile2();
  });
  it("C636550 - Добавление матча в избранное", () => {
    basicCom.favorites_for_mobile();
    cy.get("div[class*=\"match-teams\"]")
      .first()
      .invoke("text").then((name) => {
        NameTeams = name;
        cy.log(NameTeams);
      }).then(() => {
        cy.get("#navigation > section > a:nth-child(2)")
        .click();
      }).then(() => {
        cy.get(".favourite > .sport-icon-container")
        .click();
      }).then(() => {
        cy.get("#bets > div > div > ul > li > div > div.collapse-content > div > div > div > div")
          .last()
        .click();
      }).then(() => {
        cy.get("div[class*=\"match-teams\"]")
          .first()
        .invoke("text").then((name2) => {
          NameTeams2 = name2;
          cy.log(NameTeams2);
        }).then(() => {
          expect(NameTeams).to.be.equal(NameTeams2);
        })
          .then(() => {
            cy.get(".icon-star")
              .click();
          });
      });
  });
});
