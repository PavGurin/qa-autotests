import { basicCom } from "@support/desktop/BasicCommands";
import { auth } from "@support/desktop/Authorization";
import { navReg } from "@support/desktop/NavReg";
let NameTeams;
let NameTeams2;

describe("Избранное", () => {
  beforeEach(function () {
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);
    auth.login_for_mobile2();
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
        cy.get(".icon-profile-favorite")
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
            cy.get(".match-card .favourite-icon").first()
              .click();
          });
      });
  });
  it("Add championship to favourites", () => {
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
          cy.get(".icon-profile-favorite")
          .click();
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
