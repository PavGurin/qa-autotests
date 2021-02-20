import { navReg } from "@support/desktop/NavReg";

const password = 111111;

describe("Registration by social network", () => {
  beforeEach(() => {
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
      .click();
    cy.wait(2000);
  });
  it("C16291 - Ok without promocode", () => {
    navReg.click_register();
    navReg.registration_form("Соц. сети");
    cy.get(".social-button-item")
      .should("have.length", "8");
  });
});
