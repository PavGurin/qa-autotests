import { auth } from "@support/desktop/Authorization";
import { broadcast } from "@support/desktop/Broadcast";
import { basicCom } from "@support/desktop/BasicCommands";

describe("Broadcast", () => {
  before(() => {
    cy.visit("");
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
      .click();
    auth.login();
    cy.wait(2000);
  });
  beforeEach(function () {
    Cypress.Cookies.preserveOnce("session_id");
  });
  it("Open broadcast", function () {
    basicCom.live_button();
    cy.wait(1000);
    broadcast.search();
    broadcast.open();
  });
  it("Open broadcast on page", function () {
    broadcast.close_match();
    broadcast.open_match();
    broadcast.should_exist();
  });
});
