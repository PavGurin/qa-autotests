import {navReg} from "@support/desktop/NavReg";

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
        navReg.set_email(`${mail}@ahem.email`);
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
})}};