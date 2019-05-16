import { navReg } from '../../../support/desktop/NavReg';

describe('Registration by email', () => {
    const randomNub = Math.floor(Math.random() * 9999999) + 1;

    const randomSyb = Math.random().toString(36).slice(-5);

    it('C16297 - without promocode', () => {
        cy.visit('/');
        navReg.click_register();
        navReg.registration_form('По e-mail');
        navReg.name_field('test_C16299');
        navReg.email_field(`${randomSyb}qqqqqqq@coc.com`);
        navReg.password_field('111111');
        navReg.password2_field('111111');
        navReg.day_field('7');
        navReg.month_field('Февраль');
        navReg.year_field('1919');
        navReg.phone_field(`921${randomNub}`);
        navReg.agreement();
        navReg.sign_up();
    });

    it('C16298 - with promocode', () => {
        cy.visit('/');
        navReg.click_register();
        navReg.registration_form('По e-mail');
        navReg.name_field('test_C16299');
        navReg.email_field(`${randomSyb}qqqqqqq@coc.com`);
        navReg.password_field('111111');
        navReg.password2_field('111111');
        navReg.day_field('7');
        navReg.month_field('Февраль');
        navReg.year_field('1919');
        navReg.phone_field(`921${randomNub}`);
        navReg.add_promocode('autotest1');
        navReg.agreement();
        navReg.sign_up();
    });
});
