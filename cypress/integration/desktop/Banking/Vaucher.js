import { prof } from "@support/desktop/Profile";
import { navReg } from "@support/desktop/NavReg";

// из-за капчи невозможно реализовать данный тест ни на фронте, ни на бэке
describe("Vaucher", () => {
  it.skip("vaucher", function () {
    navReg.click_register();
    navReg.sign_up();
    cy.wait(2000);
    navReg.close_new_user_info();
    prof.withdrawal("Ваучер");
    cy.get("#app-overlay-wrapper > div > div > div > div.modal-container__container > div > div.promocode-form > div > div > input")
      .type("PAVELGURINBESTTESTER");
    cy.wait(2000);
    cy.get(".recaptcha")
      .click("left");
  });
});
