import {auth} from "@support/desktop/Authorization";

describe('Авторизация', () => {

    it('C16300 - Авторизация по email', () => {
        auth.login();
        auth.logout();
    });

    it('C18784 - Авторизация с пустым полем email/телефон или пароль', () => {
        auth.login_empty_mandatory_fields();
    });

    it('C18786 - Авторизация с несуществующим пользователем', () => {
        auth.login_nonexistent_user();

    });

    it('C18769 - Авторизация по email с неверным паролем', () => {
        auth.login_invalid_password();
    });
});
