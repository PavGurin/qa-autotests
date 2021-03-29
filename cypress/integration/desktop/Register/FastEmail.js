import { navReg } from "@support/desktop/NavReg";
import { auth } from "@support/desktop/Authorization";
let randomNum = Math.floor(Math.random() * 9999999) + 1;
let randomStr = Math.random()
  .toString(36)
  .slice(-5);

function Random (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
describe("Registration by email", () => {
  before(() => {
    cy.visit("");
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
      .click();
  });
  beforeEach(function () {
    Cypress.Cookies.preserveOnce("session_id");


  });
  afterEach(function () {
    // check that user logged in with requested username
    navReg.check_buttonDeposit();
    cy.wait(1000);
    auth.logout();
    cy.wait(1000);
    navReg.click_register();
  });

  it("with promocode", () => {
    navReg.click_register();
    cy.get(".bonus-text")
      .should("have.text", "500% на ставки500% на казиноКэшбэк до 30%");
    navReg.set_phone_numb(`981${randomNum}`);
    navReg.set_email(`${randomStr}test@xyz.com`);
    navReg.set_pwd("111111");
    navReg.add_promocode("test001");
    navReg.sign_up();
  });

  it("with random currency", () => {
    navReg.set_phone_numb(`931${randomNum}`);
    navReg.set_email(`${randomStr}test@xyz.ru`);
    navReg.set_pwd("111111");
    navReg.changeCurrencyFastMail(Random(1, 10));
    navReg.sign_up();
  });

  it("with random country", () => {
    navReg.set_country(Random(1, 10));
    navReg.set_phone_numb(`911${randomNum}`);
    navReg.set_email(`${randomStr}test@mail.ru`);
    navReg.set_pwd("111111");
    navReg.sign_up();
  });
});
