import {navReg} from "@support/desktop/NavReg";
import {auth} from "@support/desktop/Authorization";
const randomStr = Math.random()
    .toString(36)
    .slice(-5);
let mail = randomStr;
let mailId;
let token;
let login;
let password;
export const req = {
    // отправка на почту логина/пароля
    login_pass_for_mail() {
        navReg.set_email2(`${mail}@ahem.email`);
        navReg.click_send_login_pass();
        cy.get(':nth-child(1) > .user-info__content__item__value').should(($div) => {
            login = $div.text();
        });
        cy.get(':nth-child(2) > .user-info__content__item__value').should(($div) => {
            password = $div.text();
        });
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
        token = (resp.body.token);
        console.log(token);
        cy.wait(6000);
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
                mailId = (resp.body[0].emailId);
                console.log(mailId);
                cy.request({
                    method: 'GET',
                    url: `https://www.ahem.email/api/mailbox/${mail}/email/${mailId}`,
                    form: true,
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: 'application/json',
            }
        })
            .then((resp) => {
               const text = resp.body.html;
               console.log(text);
               expect(text).equal(`Login: ${login}<br>Password: ${password}\n`)
        })
    });
})},
     // отправка на почту логина/пароля моб.версия
    login_pass_for_mail_for_mobile() {
        navReg.set_email_for_mobile(`${mail}@ahem.email`);
        auth.check_notification_set_login_email_for_mobile();
        cy.get('.success-reg-modal-columns > :nth-child(1)').should(($div) => {
            login = $div.text();
        });
        cy.get('.success-reg-modal-columns > :nth-child(2)').should(($div) => {
            password = $div.text();
        });
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
                token = (resp.body.token);
                console.log(token);
                cy.wait(5000);
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
                        mailId = (resp.body[0].emailId);
                        console.log(mailId);
                        cy.request({
                            method: 'GET',
                            url: `https://www.ahem.email/api/mailbox/${mail}/email/${mailId}`,
                            form: true,
                            headers: {
                                Authorization: `Bearer ${token}`,
                                Accept: 'application/json',
                            }
                        })
                            .then((resp) => {
                                const text = resp.body.html;
                                console.log(text);
                                const login = text.match(/Login: (.*@1win.xyz).*/)[1];
                                const password = text.match(/Password: (.*).*/)[1];
                                expect(text).equal(`Login: ${login}<br>Password: ${password}\n`)
                            })
                    });
            })},
   // Восстановление пароля - получение кода операции
    code_operation() {
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
                token = (resp.body.token);
                console.log(token);
                cy.wait(4000);
                cy.request({
                    method: 'GET',
                    url: `https://www.ahem.email/api/mailbox/1wintest/email`,
                    form: true,
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: 'application/json',
                    }
                })
                    .then((resp) => {
                        mailId = (resp.body[0].emailId);
                        console.log(mailId);
                        cy.request({
                            method: 'GET',
                            url: `https://www.ahem.email/api/mailbox/1wintest/email/${mailId}`,
                            form: true,
                            headers: {
                                Authorization: `Bearer ${token}`,
                                Accept: 'application/json',
                            }
                        })
                            .then((resp) => {
                                const code = resp.body.html.match(/\d\d\d\d\d\d\d(?!\.|\$|₽|€|@)/)[0];
                                cy.get('div:nth-child(2) > div > div > input')
                                    .type(code);
                        })
                    });
            })},
};


