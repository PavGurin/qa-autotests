import { navReg } from "@support/desktop/NavReg";
import { auth } from "@support/desktop/Authorization";

function Random (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

describe("Sign up in One click", () => {
  beforeEach(() => {
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
      .click();
    cy.wait(2000);
  });
  it("One click sign up with default country without promo code", () => {
    navReg.click_register();
    // navReg.check_country_default('Russia (Россия)')
    navReg.sign_up();

    /* проверяет, что логин/пароль после регистрации не пустые и логирует их*/
    navReg.check_reg_result();
    navReg.close_new_user_info();
    auth.logout();
  });
  it("C1460941- One click sign up with Russia country with promo code", () => {
    navReg.click_register();
    navReg.add_promocode("test001");
    navReg.sign_up();
    // проверяет, что логин/пароль после регистрации не пустые и логирует их
    navReg.check_reg_result();
    navReg.close_new_user_info();
    auth.logout();
  });

  it("C1460942 - One click sign up with @country without promo code", () => {
    navReg.click_register();
    navReg.set_country("Andorra");
    navReg.sign_up();
    // проверяет, что логин/пароль после регистрации не пустые и логирует их
    navReg.check_reg_result();
    navReg.close_new_user_info();
    auth.logout();
  });

  it("C1460943 - One click sign up with @country with promo code", () => {
    navReg.click_register();
    navReg.set_country("Angola");
    navReg.add_promocode("test001");
    navReg.sign_up();
    // проверяет, что логин/пароль после регистрации не пустые и логирует их
    navReg.check_reg_result();
    navReg.close_new_user_info();
    auth.logout();
  });
  it("C1460943 - One click with random currency", () => {
    navReg.click_register();
    cy.wait(500);
    navReg.change_currency(Random(1, 11));
    navReg.sign_up();
    navReg.check_reg_result();
    navReg.close_new_user_info();
  });
});
