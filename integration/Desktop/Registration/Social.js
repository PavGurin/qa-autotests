import { navReg } from '../../../support/desktop/NavReg';

describe('Registration by social network', () => {
    it('C16293 - VK with promocode', () => {
        cy.visit('/');
        cy.wait(5000);
        navReg.click_register();
        navReg.registration_form('Соц. сети');
        navReg.vk();
        navReg.add_promocode('autotest1');
        navReg.agreement();
        navReg.next();
        navReg.password_social('111111');
        navReg.password2_social('111111');
    });

    it('C16294 - Ok with promocode', () => {
        cy.visit('/');
        cy.wait(5000);
        navReg.click_register();
        navReg.registration_form('Соц. сети');
        navReg.ok();
        navReg.add_promocode('autotest1');
        navReg.agreement();
        navReg.next();
        navReg.password_social('111111');
        navReg.password2_social('111111');
    });

    it('C16295 - Google with promocode', () => {
        cy.visit('/');
        cy.wait(5000);
        navReg.click_register();
        navReg.registration_form('Соц. сети');
        navReg.google();
        navReg.add_promocode('autotest1');
        navReg.agreement();
        navReg.next();
        navReg.password_social('111111');
        navReg.password2_social('111111');
    });

    it('C16290 - VK without promocode', () => {
        cy.visit('/');
        cy.wait(5000);
        navReg.click_register();
        navReg.registration_form('Соц. сети');
        navReg.vk();
        navReg.agreement();
        navReg.next();
        navReg.password_social('111111');
        navReg.password2_social('111111');
    });

    it('C16291 - Ok without promocode', () => {
        cy.visit('/');
        cy.wait(5000);
        navReg.click_register();
        navReg.registration_form('Соц. сети');
        navReg.ok();
        navReg.agreement();
        navReg.next();
        navReg.password_social('111111');
        navReg.password2_social('111111');
    });

    it('C16292 - Google without promocode', () => {
        cy.visit('/');
        cy.wait(5000);
        navReg.click_register();
        navReg.registration_form('Соц. сети');
        navReg.google();
        navReg.agreement();
        navReg.next();
        navReg.password_social('111111');
        navReg.password2_social('111111');
    });
});
