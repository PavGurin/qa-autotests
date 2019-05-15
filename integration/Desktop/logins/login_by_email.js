import { login } from '../../../support/desktop/login';
import { navReg } from '../../../support/desktop/NavReg';


describe('Stavka', () => {
    it('C16300 - Авторизация по email', () => {
        login.log_ins();

        navReg.logout();
    });

    it('C16300 - Авторизация по email, Невалидные данные', () => {
        login.log_ins_nevalid();

        navReg.logout();
    });
});
