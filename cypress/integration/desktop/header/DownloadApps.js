import { navReg } from "@support/desktop/NavReg";
import { auth } from "@support/desktop/Authorization";

describe("Download apps", () => {
  before(() => {
    cy.visit("");
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
      .click();
    auth.login2();
    cy.wait(2000);
  });
  beforeEach(function () {
    Cypress.Cookies.preserveOnce("session_id");
  });

  it("Link Telegram", () => {
    navReg.check_telegram();
  });
  it("Link VK", () => {
    navReg.check_vk();
  });
  it("check android", () => {
    navReg.check_android();
  });
  it("check ios", () => {
    navReg.check_ios();
  });
});
