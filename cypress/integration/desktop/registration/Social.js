import {navReg} from '../../../support/desktop/NavReg';

const password = 111111;

describe('Registration by social network', () => {
    it('C16293 - VK with promocode', () => {
        navReg.click_register();
        navReg.registration_form('Соц. сети');
        navReg.set_social_network('ВКонтакте');
        navReg.add_promocode('test001');
        navReg.accept_agreement();
        navReg.click_next();
        navReg.password_input(password);
        navReg.password_input_repeat(password);
        navReg.sign_up();
        // navReg.check_vk_reg();
    });

    // it('C16294 - Ok with promocode', () => {
    //     cy.visit('/');
    //     //cy.wait(5000);
    //     navReg.click_register();
    //     navReg.registration_form('Соц. сети');
    //     navReg.ok();
    //     navReg.add_promocode('test001');
    //     navReg.accept_agreement();
    //     navReg.click_next();
    //     navReg.password_input('111111');
    //     navReg.password_input_repeat('111111');
    // });

    // it('C16295 - Google with promocode', () => {
    //     cy.visit('/');
    //     //cy.wait(5000);
    //     navReg.click_register();
    //     navReg.registration_form('Соц. сети');
    //     navReg.google();
    //     navReg.add_promocode('autotest1');
    //     navReg.accept_agreement();
    //     navReg.click_next();
    //     navReg.password_input('111111');
    //     navReg.password_input_repeat('111111');
    // });
    //
    // it('C16290 - VK without promocode', () => {
    //     cy.visit('/');
    //     //cy.wait(5000);
    //     navReg.click_register();
    //     navReg.registration_form('Соц. сети');
    //     navReg.vk();
    //     navReg.accept_agreement();
    //     navReg.click_next();
    //     navReg.password_input('111111');
    //     navReg.password_input_repeat('111111');
    // });

    // it('C16291 - Ok without promocode', () => {
    //     cy.visit('/');
    //     //cy.wait(5000);
    //     navReg.click_register();
    //     navReg.registration_form('Соц. сети');
    //     navReg.ok();
    //     navReg.accept_agreement();
    //     navReg.click_next();
    //     navReg.password_input('111111');
    //     navReg.password_input_repeat('111111');
    // });
    //
    // it('C16292 - Google without promocode', () => {
    //     cy.visit('/');
    //     //cy.wait(5000);
    //     navReg.click_register();
    //     navReg.registration_form('Соц. сети');
    //     navReg.google();
    //     navReg.accept_agreement();
    //     navReg.click_next();
    //     navReg.password_input('111111');
    //     navReg.password_input_repeat('111111');
    // });
});
