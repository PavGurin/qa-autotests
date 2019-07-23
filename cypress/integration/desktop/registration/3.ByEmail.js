import {navReg} from '@support/desktop/NavReg';
import {auth} from '@support/desktop/Authorization';

describe.skip('Registration by email', () => {
    afterEach(function () {
        // check that user logged in with requested username
        navReg.check_sign_up('test_' + randomStr);
        auth.logout();
    });
    const randomNum = Math.floor(Math.random() * 9999999) + 1;
    const randomStr = Math.random()
                          .toString(36)
                          .slice(-5);

    it('C16297 - without promocode', () => {
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
    });

    it.skip('C16298 - with promocode', () => {
        navReg.click_register();
        navReg.registration_form('По e-mail');
        navReg.set_name('test_' + randomStr);
        navReg.set_email(`${randomStr}test@zyx.com`);
        navReg.set_pwd('111111');
        navReg.repeat_pwd('111111');
        navReg.set_date_of_birth('07011919');
        navReg.set_phone_numb(`911${randomNum}`);
        navReg.add_promocode('test001');
        navReg.accept_agreement();
        navReg.sign_up();
    });
});
