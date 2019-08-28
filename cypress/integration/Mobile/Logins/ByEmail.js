import {auth} from "@support/desktop/Authorization";
import {basicCom} from "@support/desktop/BasicCommands";
import {navReg} from "@support/desktop/NavReg";
describe('Авторизация', () => {
    beforeEach(function () {
        basicCom.switch_to_mobile();
        cy.viewport(375, 812);
    });
    it('C471380 - Авторизация по email', () => {
        auth.login_for_mobile();
        navReg.check_sign_up_for_mobile('765644');
        auth.logout_ByEmail_for_mobile();
    });

    it('C471381 - Авторизация с пустым полем email/телефон или пароль', () => {
        auth.login_empty_pass_for_mobile('where100@mail.ru');
        auth.check_notification_invalid_pass_for_mobile();
        auth.login_empty_mail_for_mobile();
        auth.check_notification_invalid_login_for_mobile();
    });

    it('C471382 - Авторизация несуществующим пользователем', () => {
        auth.login_nonexistent_user_for_mobile();
    });

    it('C471383 - Авторизация по email с неверным паролем', () => {
        auth.login_invalid_password_for_mobile();
    });
});