import { basicCom } from "@support/desktop/BasicCommands";
import { auth } from "@support/desktop/Authorization";
import { navReg } from "@support/desktop/NavReg";
import {prof} from "../../../support/desktop/Profile";
let NameTeams;
let NameTeams2;

describe("Favourites", () => {
  before(() => {
    cy.visit("");
    cy.wait(1000);
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);
    cy.get(".bonus-modal-button-close", { timeout: 50000 }).click();
    auth.login_for_mobile2();
    cy.wait(1000);
  });
  beforeEach(function () {
    Cypress.Cookies.preserveOnce("session_id");
  });
  it("Add match to favourites", () => {
    basicCom.favorites_for_mobile();
    cy.get(".match-card .match-teams").first()
      .invoke("text").then((name) => {
        NameTeams = name;
        cy.log(NameTeams);
      }).then(() => {
        navReg.click_settings_main_page_for_mobile();
      }).then(() => {
        prof.favorites_for_mobile();
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
            cy.get(".match-card .favourite-icon").first()
              .click();
          });
      });
  });
  it("Add tournament to favourites", () => {
    cy.get("button.burger-menu-button").click();
    cy.contains("Линия").click();
    cy.get(".bets-content .item-link-icon").first().
      click({ force: true });
    cy.get(".list.separator .collapse-trigger").first().
        click();
    cy.get(".list.separator .icon-star").first()
        .click({ force: true });
    cy.get(".tournament-name").first()
        .invoke("text").then((name) => {
          NameTeams = name;
          cy.log(NameTeams);
        }).then(() => {
          navReg.click_settings_main_page_for_mobile();
          cy.wait(1000);
          //cy.get(".tournament-name").should("have.text", NameTeams);
        }).then(() => {
          prof.favorites_for_mobile();
        }).then(() => {
          cy.get(".tournament-name")
          .first()
          .invoke("text").then((name2) => {
            NameTeams2 = name2;
            cy.log(NameTeams2);
          }).then(() => {
            expect(NameTeams).to.be.equal(NameTeams2);
          })
          .then(() => {
            cy.get(".tournament-card .favourite-icon").first()
                .click();
          });
        });
  });
});
