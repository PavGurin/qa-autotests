import { auth } from "@support/desktop/Authorization";
import { prof } from "@support/desktop/Profile";
import { navReg } from "@support/desktop/NavReg";

const randomStr = Math.random()
    .toString(36)
    .slice(-5);
const randomNum = Math.floor(Math.random() * 9999999) + 1;

//let password;
describe("Profile Settings", () => {
  before(() => {
    cy.visit("");
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
      .click();
    cy.wait(2000);
    auth.login_mail();
    cy.wait(1000);
  });
  beforeEach(function () {
    Cypress.Cookies.preserveOnce("session_id");
    cy.wait(4000);
    prof.withdrawal("Настройки");
  });
  it("Modal window settings", function () {
    prof.settings_form();
    prof.settings_mail_disabled();
    prof.click_save_settings();
    prof.check_change_settings();
  });

  it("Change name", function () {
    prof.settings_form_name_2or51_symbols();
    prof.settings_form_name(`testPass_${randomStr}`);
    prof.click_save_settings();
    prof.check_change_settings();
  });
  it("Change date of birthday", function () {
    prof.settings_form_birthday();
    prof.click_save_settings();
    prof.check_change_settings();
  });
  it("Change number phone", function () {
    prof.set_country_number_phone("Andorra");
    prof.settings_form_numbPhone_Andorra();
    prof.set_country_number_phone("Russia");
    prof.settings_form_numbPhone("921996321");
    prof.click_save_settings();
    prof.check_change_settings();
  });
  it("Change password", function () {
    prof.settings_form_newpass("qwerty12");
    prof.click_save_settings();
    prof.check_change_settings();
  });
  it("Hide balance", function () {
    prof.settings_hidebalance();
  });
  it("Bets history", function () {
    cy.clearCookies();
    cy.reload();
    cy.wait(3000);
    auth.login2();
    cy.wait(1000);
    prof.withdrawal("История ставок");
    prof.bets_history_notBeEmpty();
  });
  it("1 click registration - change email only once ", function () {
    cy.clearCookies();
    cy.reload();
    cy.wait(3000);
    navReg.click_register();
    navReg.sign_up();
    cy.wait(2000);
    navReg.close_new_user_info();
    prof.withdrawal("Настройки");
    prof.assert_mail_visible();

  });
  it("Email registration - can`t change email", function () {
    cy.clearCookies();
    cy.reload();
    cy.wait(3000);
    navReg.click_register();
    navReg.registration_form("По e-mail");
    navReg.set_email(`${randomStr}test@xyz.com`);
    navReg.set_pwd("111111");
    navReg.repeat_pwd("111111");
    navReg.set_phone_numb(`921${randomNum}`);
    navReg.sign_up();
    cy.wait(1000);
    prof.withdrawal("Настройки");
    prof.settings_mail_disabled();
  });
  it("Change the phone number to the existing one", function () {
    cy.clearCookies();
    cy.reload();
    cy.wait(3000);
    auth.login_mail();
    cy.wait(1000);
    prof.withdrawal("Настройки");
    prof.set_country_number_phone("Russia");
    prof.settings_form_numbPhone("9213555555");
    prof.settings_mail_disabled();
    prof.click_save_settings();
    prof.check_change_numberphone();
  });
});
