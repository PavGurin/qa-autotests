import { navReg } from '@support/desktop/NavReg';
let token;
const randomStr = Math.random()
    .toString(36)
    .slice(-5);
let mail = randomStr;
let mailId;
describe('Sign up in One click', () => {
    it('C16289 - send by mail login/password ', () => {
        navReg.click_register();
        navReg.accept_agreement();
        navReg.sign_up();
        /* проверяет, что логин/пароль после регистрации не пустые и логирует их*/
        navReg.check_reg_result();
        navReg.button_set_email();
        navReg.set_email(`${mail}@ahem.email`);
        cy.request({
            method: 'POST',
            url: 'https://www.ahem.email/api/auth/token',
            form: true,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }

        })
            .then((resp) => {
                token=(resp.body.token);
                console.log(token);
                cy.wait(4000);
                cy.request({
                    method: 'GET',
                    url: `https://www.ahem.email/api/mailbox/${mail}/email`,
                    form: true,
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: 'application/json',
                    }

                })
                    .then((resp) => {
                        mailId=(resp.body[0].emailId);
                        console.log(mailId);
                        cy.request({
                            method: 'GET',
                            url: `https://www.ahem.email/api/mailbox/${mail}/email/${mailId}`,
                            form: true,
                            headers: {
                                Authorization: `Bearer ${token}`,
                                Accept: 'application/json',

                    }})
                                .then((resp) => {
                                    const text = resp.body.html;
                                    console.log(text);
                                    //text.match(/Login: .*<br>Password: .*$/)[0]
                                //cy.contains(text,/Login: .*<br>Password: .*$/)

                                })

                    });
        });

    });
});