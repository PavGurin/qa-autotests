import { navReg } from '@support/desktop/NavReg';
import {auth} from "@support/desktop/Authorization";
var token;
describe('Sign up in One click', () => {
    it('C16287 - Copy login/password', () => {
        navReg.click_register();
        navReg.accept_agreement();
        navReg.sign_up();
        /* проверяет, что логин/пароль после регистрации не пустые и логирует их*/
        navReg.check_reg_result();
        navReg.copy_login_password();
        auth.check_notification();
        navReg.close_new_user_info();
    });
    it('C16289 - send by mail login/password ', () => {
        navReg.click_register();
        navReg.accept_agreement();
        navReg.sign_up();
        /* проверяет, что логин/пароль после регистрации не пустые и логирует их*/
        navReg.check_reg_result();
        navReg.send_login_password();
         token=cy.request({
            method: 'POST',
            url: 'https://www.ahem.email/api/auth/token',
            form: true,
            headers: {
             Accept: 'application/json',
                'Content-Type': 'application/json',
             }
         })
             .then((resp) => {
                 console.log(resp.body.token)
             })
         },
        //console.log(token);
        navReg.close_new_user_info();
    });
});