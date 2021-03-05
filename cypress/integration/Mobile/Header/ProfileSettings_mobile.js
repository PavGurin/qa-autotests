import { auth } from "@support/desktop/Authorization";
import { prof } from "@support/desktop/Profile";
import { basicCom } from "@support/desktop/BasicCommands";
import { navReg } from "@support/desktop/NavReg";
const randomNum = Math.floor(Math.random() * 9999999) + 1;
const randomStr = Math.random()
    .toString(36)
    .slice(-5);

describe("Profile Settings", () => {
  beforeEach(function () {
    basicCom.switch_to_mobile();
    cy.viewport(375, 812);
  });
  it("Change name", function () {
    auth.login_for_mobile3("qwerty");
    navReg.click_settings_main_page_for_mobile();
    prof.settings_for_mobile();
    prof.settings_form_name_4_or_16_symbols();
    prof.settings_form_name_for_mobile(`test_${randomStr}`);
    prof.click_save_settings_for_mobile();
    navReg.check_sign_up_for_mobile_without_enter(`test_${randomStr}`);
  });
  it("Change phone number", function () {
    auth.login_for_mobile3("qwerty");
    navReg.click_settings_main_page_for_mobile();
    prof.settings_for_mobile();
    prof.settings_form_numbPhone_for_mobile(`921${randomNum}`);
    prof.click_save_settings_for_mobile();
  });
  it("Change Birthday", function () {
    auth.login_for_mobile3("qwerty");
    navReg.click_settings_main_page_for_mobile();
    prof.settings_for_mobile();
    prof.settings_birthday_for_mobile();
    prof.click_save_settings_for_mobile();
    prof.error_date_birthday_for_mobile();
    prof.settings_correct_birthday_for_mobile();
    prof.click_save_settings_for_mobile();
    prof.settings_for_mobile();
    prof.assert_date_birthday_for_mobile();
  });
  it("Change password", function () {
    auth.login_for_mobile3("qwerty");
    navReg.click_settings_main_page_for_mobile();
    prof.settings_for_mobile();
    prof.change_pass_for_mobile();
    prof.old_pass_for_mobile();
    prof.new_pass_for_mobile();
    prof.click_save_settings_for_mobile();
  });
  it("1Click registration - e-mail field is active", function () {
    navReg.click_register_for_mobile();
    navReg.sign_up_for_mobile();
    cy.wait(3000); //чтобы успела открыться модалка с новыми данными. иначе закрывается форма регистрации
    navReg.check_reg_result_for_mobile();
    navReg.close_new_user_info_for_mobile();
    navReg.click_settings_main_page_for_mobile();
    prof.settings_for_mobile();
    prof.assert_mail_visible_for_mobile();
  });
  it("Email registration - e-mail field is disabled", function () {
    navReg.click_register_for_mobile();
    navReg.registration_form("Email");
    navReg.sign_up_with_email();
    navReg.set_email_register_for_mobile(`${randomStr}test@xyz.com`);
    navReg.set_pwd_for_mobile("111111");
    navReg.repeat_pwd_for_mobile("111111");
    navReg.set_phone_numb_for_mobile(`911${randomNum}`);
    navReg.sign_up_email_continue();
    navReg.click_settings_main_page_for_mobile();
    prof.settings_for_mobile();
    prof.assert_mail_disabled_for_mobile();
  });
});
