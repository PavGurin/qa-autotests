import { navReg } from "@support/desktop/NavReg";
import { auth } from "@support/desktop/Authorization";

describe("LiveGames", () => {

  it("Open live game", () => {
    auth.login();
    navReg.button_LiveGames();
    cy.wait(1000);
    //открываем первую игру в live games
    cy.get(".casino-game-item").first()
      .click();
    cy.wait(2000);
    //iframe на месте и имеет какое-то содержимое
    cy.get(".game > iframe", { timeout: 15000 })
     .should("be.visible");
    cy.get(".game > iframe")
      .its("0.contentDocument").should("exist");
  });
});
