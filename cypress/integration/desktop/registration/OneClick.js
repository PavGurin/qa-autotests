import { navReg } from '@support/desktop/NavReg';
import { auth } from '@support/desktop/Authorization';

describe('Sign up in One click', () => {
    it('C16283 - One click sign up with default country without promo code', () => {
        navReg.click_register();
        navReg.check_country_default('Russia (Россия)');
        navReg.accept_agreement();
        navReg.sign_up();
        // проверяет, что логин/пароль после регистрации не пустые и логирует их
        navReg.check_reg_result();
        navReg.close_new_user_info();
        auth.logout();
    });
});
