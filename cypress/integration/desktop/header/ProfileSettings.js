import { auth } from "@support/desktop/Authorization";
import { prof } from "@support/desktop/Profile";
import { navReg } from "@support/desktop/NavReg";

const randomStr = Math.random()
    .toString(36)
    .slice(-5);
const randomNum = Math.floor(Math.random() * 9999999) + 1;

//let password;
describe("Profile Settings", () => {
  beforeEach(() => {
    cy.get(".bonus-modal-button-close", { timeout: 50000 })
        .click();
  });
  it("Modal window settings", function () {
    auth.login_mail();
    cy.wait(1000);
    prof.withdrawal("Настройки");
    prof.settings_form();
    prof.settings_mail_disabled();
    prof.click_save_settings();
    prof.check_change_settings();
  });

  it("Change name", function () {
    auth.login_mail();
    cy.wait(1000);
    prof.withdrawal("Настройки");
    prof.settings_form_name_2or51_symbols();
    prof.settings_form_name(`testPass_${randomStr}`);
    prof.click_save_settings();
    prof.check_change_settings();
  });
  it("Change date of birthday", function () {
    auth.login_mail();
    cy.wait(1000);
    prof.withdrawal("Настройки");
    prof.settings_form_birthday();
    prof.click_save_settings();
    prof.check_change_settings();
  });
  it("Change number phone", function () {
    auth.login_mail();
    cy.wait(1000);
    prof.withdrawal("Настройки");
    prof.set_country_number_phone("Andorra");
    prof.settings_form_numbPhone_Andorra();
    prof.set_country_number_phone("Russia");
    prof.settings_form_numbPhone("921996321");
    prof.click_save_settings();
    prof.check_change_settings();
  });
  it("Change password", function () {
    auth.login_mail();
    cy.wait(1000);
    prof.withdrawal("Настройки");
    prof.settings_form_newpass("qwerty12");
    prof.click_save_settings();
    prof.check_change_settings();
  });
  it("Hide balance", function () {
    auth.login();
    cy.wait(1000);
    prof.withdrawal("Настройки");
    prof.settings_hidebalance();
  });
  it("Bets history", function () {
    auth.login2();
    cy.wait(1000);
    prof.withdrawal("История ставок");
    prof.bets_history_notBeEmpty();
  });
  it("1 click registration - change email only once ", function () {
    navReg.click_register();
    navReg.sign_up();
    cy.wait(2000);
    navReg.close_new_user_info();
    prof.withdrawal("Настройки");
    prof.assert_mail_visible();

  });
  it("Email registration - can`t change email", function () {
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
