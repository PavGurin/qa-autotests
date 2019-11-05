import {auth} from "@support/desktop/Authorization";
import {prof} from "@support/desktop/Profile";
import {navReg} from "@support/desktop/NavReg";

const randomStr = Math.random()
    .toString(36)
    .slice(-5);
const randomNum = Math.floor(Math.random() * 9999999) + 1;
//let password;
describe('Profile Settings', () => {
    it('C16311 - Modal window settings', function () {
        auth.login2();
        cy.wait(1000);
        prof.withdrawal('Настройки');
        prof.settings_form();
        prof.settings_mail_disabled();
        prof.click_save_settings();
        prof.check_change_settings();
    });

    it('C16312 - Change name', function () {
        auth.login2();
        prof.withdrawal('Настройки');
        prof.settings_form_name_2or16_symbols();
        prof.settings_form_name('testPass_' + randomStr);
        prof.settings_mail_disabled();
        prof.settings_form_pass('testerQA');
        prof.click_save_settings();
        prof.check_change_settings();
    });
    it('C16313 - Change date of birthday', function () {
        auth.login2();
        prof.withdrawal('Настройки');
        prof.settings_form_birthday();
        prof.settings_mail_disabled();
        prof.settings_form_pass('testerQA');
        prof.click_save_settings();
        prof.check_change_settings();
    });
    it('C16314 - Change number phone', function () {
        auth.login2();
        prof.withdrawal('Настройки');
        prof.set_country_number_phone('Andorra');
        prof.settings_form_numbPhone_Andorra();
        prof.set_country_number_phone('Russia');
        prof.settings_form_numbPhone('921996321');
        prof.settings_mail_disabled();
        prof.settings_form_pass('testerQA');
        prof.click_save_settings();
        prof.check_change_settings();
    });
    it('C16315 - Change password', function () {
        auth.login_with_new_pass_settings('qwerty');
        prof.withdrawal('Настройки');
        prof.settings_form_newpass();
        prof.click_save_settings();
        prof.new_pass_wrong();
        prof.correct_pass();
        prof.click_save_settings();
        prof.check_change_settings();
    });
    it('C16316 - Скрыть баланс', function () {
        auth.login();
        prof.withdrawal('Настройки');
        prof.settings_hidebalance();
    });
    it('C16317 - История ставок', function () {
        auth.login2();
        prof.withdrawal('История ставок');
        prof.bets_history_notBeEmpty();
    });
    it('C502621 - Рега в 1 клик - почту можно изменить 1 раз ', function () {
        navReg.click_register();
        navReg.accept_agreement();
        navReg.sign_up();
        cy.wait(1000);
         navReg.close_new_user_info();
         prof.withdrawal('Настройки');
         prof.assert_mail_visible();

    });
    it('C502622 - Рега по mail - почту изменить невозможно ', function () {
        navReg.click_register();
        navReg.registration_form('По e-mail');
        navReg.set_name('test_' + randomStr);
        navReg.set_date_of_birth('07011919');
        navReg.set_email(`${randomStr}test@xyz.com`);
        navReg.set_pwd('111111');
        navReg.repeat_pwd('111111');
        navReg.set_phone_numb(`921${randomNum}`);
        navReg.accept_agreement();
        navReg.sign_up();
        prof.withdrawal('Настройки');
        prof.assert_mail_disabled();
    });
    it('C636770 - Изменить номер телефона на уже существующий', function () {
        auth.login_mail();
        prof.withdrawal('Настройки');
        prof.set_country_number_phone('Russia');
        prof.settings_form_numbPhone('9213555555');
        prof.settings_mail_disabled();
        prof.settings_form_pass('qwerty');
        prof.click_save_settings();
        prof.check_change_numberphone();
    });
    it('C636771 - Изменить почту на уже существующую', function () {
        auth.login_for_change_email();
        prof.withdrawal('Настройки');
        navReg.set_email('where100@mail.ru');
        prof.settings_form_pass('744433');
        prof.click_save_settings();
        prof.check_error_mail();
    });
});