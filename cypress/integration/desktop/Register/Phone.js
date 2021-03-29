import { navReg } from "@support/desktop/NavReg";

describe.skip("Phone", () => {
  beforeEach(function () {
    cy.wait(10000);
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
     .click();
  });
  const randomNum = Math.floor(Math.random() * 9999999) + 1;

  it("C? - phone without promo code", () => {
    navReg.click_register();
    navReg.phoneRega();
    navReg.NumberPhone(`981${randomNum}`);
    navReg.sign_up();
    cy.get(".header-profile")
      .should("exist");
  });
});
