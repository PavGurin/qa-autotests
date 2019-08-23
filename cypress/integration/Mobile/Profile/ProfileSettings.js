import {auth} from "@support/desktop/Authorization";
import {prof} from "@support/desktop/Profile";
import {basicCom} from "@support/desktop/BasicCommands";
import {navReg} from "@support/desktop/NavReg";
const randomNum = Math.floor(Math.random() * 9999999) + 1;
const randomStr = Math.random()
    .toString(36)
    .slice(-5);

describe('Profile Settings', () => {
    beforeEach(function () {
        basicCom.switch_to_mobile();
        cy.viewport(375, 812);
    });
    it.skip('C476378 - Изменение имени', function() {
        auth.login_for_mobile3('qwerty');
        navReg.click_settings_main_page_for_mobile();
        prof.settings_for_mobile();
        prof.settings_form_name_4_or_16_symbols();
        prof.settings_form_name_for_mobile('test_' + randomStr);
        prof.settings_form_pass_for_mobile('qwerty');
        prof.click_save_settings_for_mobile();
        navReg.check_sign_up_for_mobile_without_enter('test_' + randomStr);
    });
    it.skip('C476379 - Изменение номера телефона', function() {
        auth.login_for_mobile3('qwerty');
        navReg.click_settings_main_page_for_mobile();
        prof.settings_for_mobile();
        prof.settings_form_numbPhone_for_mobile(`921${randomNum}`);
        prof.settings_form_pass_for_mobile('qwerty');
        prof.click_save_settings_for_mobile();
    });
    it.skip('C476380 - Изменение поля "дата рождения" ', function() {
        auth.login_for_mobile3('qwerty');
        navReg.click_settings_main_page_for_mobile();
        prof.settings_for_mobile();
        prof.settings_birthday_for_mobile();
        prof.click_save_settings_for_mobile();
        prof.error_date_birthday_for_mobile();
        prof.settings_correct_birthday_for_mobile();
        prof.settings_form_pass_for_mobile('qwerty');
        prof.click_save_settings_for_mobile();
        prof.settings_for_mobile();
        prof.assert_date_birthday_for_mobile();
    });
    it.skip('C476381 - Изменение пароля', function() {
        auth.login_for_mobile3('qwerty');
        navReg.click_settings_main_page_for_mobile();
        prof.settings_for_mobile();
        prof.change_pass_for_mobile();
        prof.old_pass_for_mobile();
        prof.new_pass_for_mobile();
        prof.click_save_settings_for_mobile();
    });
    it.skip('C476382 - Рега в 1 клик - активно поле e-mail ', function() {
        navReg.click_register_for_mobile();
        navReg.check_country_default_for_mobile('Russia (Россия)');
        navReg.accept_agreement_for_mobile();
        navReg.sign_up_for_mobile();
        navReg.check_reg_result_for_mobile();
        cy.wait(1000);
        navReg.close_new_user_info_for_mobile();
        navReg.click_settings_main_page_for_mobile();
        prof.settings_for_mobile();
        prof.assert_mail_visible_for_mobile();
    });
    it('C476383 - Рега по e-mail - невозможно изменить почту ', function() {
        navReg.click_register_for_mobile();
        navReg.registration_form('По email');
        navReg.set_name_for_mobile('test_' + randomStr);
        navReg.set_date_of_birth_for_mobile('2000-12-31');
        navReg.set_email_register_for_mobile(`${randomStr}test@xyz.com`);
        navReg.set_pwd_for_mobile('111111');
        navReg.repeat_pwd_for_mobile('111111');
        navReg.set_phone_numb_for_mobile(`921${randomNum}`);
        navReg.accept_agreement_by_email_for_mobile();
        navReg.sign_up_for_mobile();
        navReg.click_settings_main_page_for_mobile();
        prof.settings_for_mobile();
        prof.assert_mail_disabled_for_mobile();
    });
});