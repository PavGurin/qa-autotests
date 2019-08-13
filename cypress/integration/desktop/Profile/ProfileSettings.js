import {auth} from "@support/desktop/Authorization";
import {prof} from "@support/desktop/Profile";
const randomStr = Math.random()
    .toString(36)
    .slice(-5);

describe.skip('Profile Settings', () => {
    it('C16311 - Modal window settings', function() {
        auth.login();
        cy.wait(1000);
        prof.withdrawal('Настройки');
        prof.settings_form();
        prof.settings_mail_disabled();
        prof.click_save_settings();
        prof.check_change_settings();
    });

    it('C16312 - Change name', function() {
        auth.login();
        prof.withdrawal('Настройки');
        prof.settings_form_name_2or16_symbols();
        prof.settings_form_name('test_' + randomStr);
        prof.settings_mail_disabled();
        prof.settings_form_pass();
        prof.click_save_settings();
        prof.check_change_settings();
    });
    it('C16313 - Change date of birthday', function() {
        auth.login();
        prof.withdrawal('Настройки');
        prof.settings_form_birthday();
        prof.settings_mail_disabled();
        prof.settings_form_pass();
        prof.click_save_settings();
        prof.check_change_settings();
    });
    it('C16314 - Change number phone', function() {
        auth.login();
        prof.withdrawal('Настройки');
        prof.set_country_number_phone('Andorra');
        prof.settings_form_numbPhone_Andorra();
        prof.set_country_number_phone('Russia');
        prof.settings_form_numbPhone();
        prof.settings_mail_disabled();
        prof.settings_form_pass();
        prof.click_save_settings();
        prof.check_change_settings();
    });
    it('C16315 - Change password', function() {
        auth.login_with_new_pass_settings('qwerty');
        prof.withdrawal('Настройки');
        prof.settings_form_newpass();
        prof.click_save_settings();
        prof.new_pass_wrong();
        prof.correct_pass();
        prof.click_save_settings();
        prof.check_change_settings();
    });
    it('C16316 - hide balance', function() {
        auth.login();
        prof.withdrawal('Настройки');
        prof.settings_hidebalance();
    });
    it('C16317 - Bets history', function() {
        auth.login2();
        prof.withdrawal('История ставок');
        prof.bets_history();
        prof.bets_history_notBeEmpty();
    });
});